import React, { useState } from "react";
// import { products } from "./ToppicksData";
import axios from "axios";
import { useEffect } from "react";
// import UndoIcon from "@mui/icons-material/Undo";

let Product_Custom_pagination = () => {
  let [data, setData] = useState([]); //getting whole data
  let [page, setPage] = useState(0);
  let [displayData, setdisplayData] = useState([]); //data which we want to dislay after splitting it
  let perpageData = 5;
  let offset = page * perpageData; // 0 * 5, 1 * 5, 2 * 5
  let slidceDataFun = () => {
    let sliceData = data.slice(offset, perpageData + offset); //slicing the data, so when the data the loaded for
    // 1st time it should show the sliced data
    setdisplayData(sliceData);
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        data = res.data;
        setData(data);
        slidceDataFun();
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    
  }, []);

  useEffect(() => {
    slidceDataFun();
  }, [page]);

  let addtoCart = (item) => {
    // console.log(item)
    let localData = JSON.parse(localStorage.getItem("CartItem")) || [];

    localData.push(item);

    localStorage.setItem("CartItem", JSON.stringify(localData));

    console.log(localData);
  };

  let handleNext = () => {
    // if (page < 5) {
    //   //data ends after page 4, not to render after that this is the condition given
    //   setPage((page += 1));
    // }
    // slidceDataFun()
   
    setPage((page) => ++page);

    // setData(data)
    // getData()

    console.log(page);
  };

  let handlePrev = () => {
   
      setPage((page) => --page);

    // getData()
  };

  //   let pageCount = Math.ceil(data.length / perpageData)

  return (
    <>
      <h1>Product</h1>

      <button
        onClick={handlePrev}
        disabled={page == 0}
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
      </div>
    </>
  );
};

export { Product_Custom_pagination };
