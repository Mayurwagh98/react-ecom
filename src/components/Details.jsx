import React from "react";
import { Details_Navbar } from "./Navbars/Details_Navbar";

let Details = () => {
  let item = JSON.parse(localStorage.getItem("details"));
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
  return (
    <>
    <Details_Navbar />
      <div style={{marginTop:"100px"}}>
        <img src={item.image} alt="image" />
        <h2>{`Brand:- ${item.brand}`}</h2>
        <h3>{`Title:- ${item.title}`}</h3>
        <h4>{`Price:- ${item.price}`}</h4>
        <button onClick={() => addtoCart(item)}>Add to Cart</button>
      </div>
    </>
  );
};

export { Details };
