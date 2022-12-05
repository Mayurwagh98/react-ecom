import React, { useState } from "react";
// import { products } from "./ToppicksData";
import axios from "axios";
import { useEffect } from "react";

let Product = () => {
  let [data, setData] = useState([]);

  let getData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // let data = res.data;
        // console.log(data);
        data = res.data;
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
  }, []);

  let addtoCart = (item) => {
    let localData = JSON.parse(localStorage.getItem("CartItem")) || [];

    localData.push(item);

    localStorage.setItem("CartItem", JSON.stringify(localData));

    console.log(localData);
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
