import React, { useState } from "react";
// import { products } from "./ToppicksData";
import axios from "axios";
import { useEffect } from "react";
// import NextPlanIcon from '@mui/icons-material/NextPlan';
// import RedoIcon from "@mui/icons-material/Redo";
// import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
// import UndoIcon from "@mui/icons-material/Undo";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Tooltip from "@mui/material/Tooltip";

let Product = () => {
  let [data, setData] = useState([]); //getting whole data
  let [page, setPage] = useState(1);
  let [sorthtol, setSorthtol] = useState([]);
  let [sortltoh, setSortltoh] = useState([]);

  // https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1
  let getData = async () => {
    await axios
      // .get("https://fakestoreapi.com/products/")
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${page}`
      )
      .then((res) => {
        data = res.data.data;

        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, [page]); // passing the array dependncy because it should render everytimg user change the page

  useEffect(() => {
    getData();
  }, [sorthtol]); // passing the array dependncy because it should render everytimg user clicks on sort H to L

  let addtoCart = (item) => {
    // console.log(item)
    let localData = JSON.parse(localStorage.getItem("CartItem")) || [];
    // sending the qty = 1 as default, cause by default qty should be 1 because user already added 1 item in the cart
    let qty = 1;
    item = { ...item, qty }; // adding the qty in the LS with the privious item
    localData.push(item);

    localStorage.setItem("CartItem", JSON.stringify(localData));

    alert(`Product added to the cart`);
    // console.log(localData);
  };

  let handleNext = () => {
    if (page < 5) {
      //data ends after page 4, not to render after that this is the condition given
      setPage((page += 1));
    }
    // console.log(data);
  };

  let handlePrev = () => {
    if (page == 1) {
      page = 1;
      // setPage(page)
    } else {
      setPage((page -= 1));
    }

    // getData()
  };

  // ------------------Sorting-----------------

  let handleSort2 = () => {
    sortltoh = data.sort((a, b) => {
      return b.price - a.price;
    });

    setSortltoh(sortltoh);
    console.log(sortltoh);
  };

  let handleSort1 = () => {
    sorthtol = data.sort((a, b) => {
      return a.price - b.price;
    });

    setSorthtol(sorthtol);
    console.log(sorthtol);
  };

  return (
    <>
      <h1>Product</h1>
      {/* <div className="products_div">
        {products.map((ele, index) => {
          return (
            <div key={index}>
              <img src={ele.img} alt="products_image" />
              <div className="price_div">
                <h2>{ele.title}</h2>
                <h4>{`Price:- ${ele.price}`}</h4>
              </div>
              <button style={{ margin: "5px" }}>Add to Cart</button>
            </div>
          );
        })}
      </div> */}
      {/* ----------------Pagination-------------------- */}
      <button
        onClick={handlePrev}
        disabled={page == 1}
        style={{ padding: "10px", fontSize: "40px" }}
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        disabled={page === 4}
        style={{ padding: "10px", fontSize: "40px" }}
      >
        Next
      </button>
      {/* ----------------Sorting----------------------- */}
      <button onClick={handleSort2}>Sort H to L</button>
      <button onClick={handleSort1}>Sort L to H</button>

      <div className="products_div">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="images" />
              <div className="price_div">
                <h2>{item.price}</h2>
                <h4>{item.title}</h4>
              </div>
              <Tooltip title="Add to Cart">
                <AddShoppingCartIcon
                  onClick={() => addtoCart(item)}
                  style={{ margin: "5px" }}
                >
                  Add to Cart
                </AddShoppingCartIcon>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Product };
