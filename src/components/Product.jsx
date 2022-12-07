import React, { useState } from "react";
// import { products } from "./ToppicksData";
import axios from "axios";
import { useEffect } from "react";
// import NextPlanIcon from '@mui/icons-material/NextPlan';
// import RedoIcon from "@mui/icons-material/Redo";
// import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
// import UndoIcon from "@mui/icons-material/Undo";

let Product = () => {
  let [data, setData] = useState([]); //getting whole data
  let [page, setPage] = useState(1);
  // let [pageData, setpageData] = useState(0); //hook to from where pageData is starting
  // let [displayData, setdisplayData] = useState([]); //data which we want to dislay after splitting it
  // let perpageData = 5;
  // let offset = page * perpageData 
  // https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1
  let getData = async () => {
    await axios
      // .get("https://fakestoreapi.com/products/")
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${page}`
      )
      .then((res) => {
        // let data = res.data;
        // console.log(data);
        // res = res.json()
        data = res.data.data;
        // data = res.data;
        setData(data);
        // let sliceData = data.slice(offset, perpageData+offset);
        // setdisplayData(sliceData)
        console.log(data);

        // console.log(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
    // setData(res.data)
    // console.log(res)
  };

  // useEffect(() => {
  //   let initialloadData = data.split(0, perpageData);
  //   setdisplayData(initialloadData);
  //   console.log(displayData)
  // }, []);

  useEffect(() => {
    getData();
  }, [page]);



  let addtoCart = (item) => {
    // console.log(item)
    let localData = JSON.parse(localStorage.getItem("CartItem")) || [];

    localData.push(item);

    localStorage.setItem("CartItem", JSON.stringify(localData));

    console.log(localData);
  };

  let handleNext = () => {
    if (page < 5) {
      //data ends after page 4, not to render after that this is the condition given
      setPage((page += 1));
    }

    // let sliceData = data.slice(offset, perpageData+offset);
    // setdisplayData(sliceData);
    // setPage((page += 1));
    // setData(data)
    // getData()
    
    console.log(data);
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

  // let pageCount = Math.ceil(data.length / perpageData)
  
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
      <div className="products_div">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="images" />
              <div className="price_div">
                <h2>{item.price}</h2>
                <h4>{item.title}</h4>
              </div>
              <button onClick={() => addtoCart(item)} style={{ margin: "5px" }}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>


      {/* <div className="products_div">
        
        {displayData.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="images" />
              <div className="price_div">
                <h2>{item.price}</h2>
                <h4>{item.title}</h4>
              </div>
              <button onClick={() => addtoCart(item)} style={{ margin: "5px" }}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export { Product };
