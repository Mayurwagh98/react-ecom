import React, { useState } from "react";
// import { products } from "./ToppicksData";
import axios from "axios";
import { useEffect } from "react";

let Product = () => {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);

  // https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1
  let getData = async () => {
    await axios
      // .get("https://fakestoreapi.com/products")
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${page}`
      )
      .then((res) => {
        // let data = res.data;
        // console.log(data);
        // res = res.json()
        data = res.data.data;
        setData(data);
        console.log(data);
        // console.log(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
    // setData(res.data)
    // console.log(res)
  };

  useEffect(() => {
    getData();
  }, [page]);

  let addtoCart = (item) => {
    let localData = JSON.parse(localStorage.getItem("CartItem")) || [];

    localData.push(item);

    localStorage.setItem("CartItem", JSON.stringify(localData));

    console.log(localData);
  };

  let handleNext = () => {
    setPage((page += 1));
    // setData(data)
    // getData()
    
    console.log(data);
  };

  let handlePrev = () => {
    if (page == 0) {
      page = 1;
      // setPage(page)
    }
    else{
      setPage(page -= 1)
    }
    
    // getData()
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
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
      <div className="products_div">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="images" />
              <div className="price_div">
                <h2>{item.price}</h2>
                <h4>{item.title}</h4>
              </div>
              <button onClick={addtoCart}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Product };
