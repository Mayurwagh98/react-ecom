import React from "react";
import { products } from "./ToppicksData";

let Product = () => {
  return (
    <>
      <h1>Product</h1>
      <div className="products_div">
        {products.map((ele, index) => {
          return (
            <div key={index}>
              <img src={ele.img} alt="products_image" />
              <div className="price_div">
                <h2>{ele.title}</h2>
                <h4>{`Price:- ${ele.price}`}</h4>
              </div>
              <button style={{margin: "5px"}}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Product };
