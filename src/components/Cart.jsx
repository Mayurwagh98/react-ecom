import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
// import { linkClasses } from "@mui/material";
import { Product_Navbar } from "./Navbars/Product_Navbars";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

let Cart = () => {
  let localData = JSON.parse(localStorage.getItem("CartItem")) || [];
  let [displayCart, setDisplayCart] = useState([...localData]);
  let navigate = useNavigate()
  let deleteItem = (i) => {
    localData.splice(i, 1);

    localStorage.setItem("CartItem", JSON.stringify(localData));

    setDisplayCart([...localData]); //to display the updated data after deleting the items
  };

  //------------------ Quantity Logic-------------------------------
  let handleQty = (inre_decre, item) => {
    console.log(item);

    if (inre_decre === "Add") {
      // when user clicks on '+' then increase the quantity
      item.qty++;
    } else if (inre_decre === "Sub") {
      // when user clicks on '-' then decrease the quantity
      item.qty--;
    }

    console.log(item);
    console.log(localData);
    localStorage.setItem("CartItem", JSON.stringify([...localData])); // sending the updated data to LS
    setDisplayCart([...localData]); // to render/display the updated data
  };

  let sum = 0;
  for (let x of localData) {
    sum += x.price * x.qty;
  }
  // console.log(total);
 let handleCheckout = () =>{

    navigate("/checkout")
 }
  return (
    <>
      <Product_Navbar />
      <div
        style={{
          display: "flex",
          marginTop: "80px",
          justifyContent: "space-evenly",
        }}
      >
        {/* <h1>Cart:-{localData.length}</h1> */}
        

        <h1>Total:- {sum}</h1>
      </div>
      <div className="products_div">
        {localData.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="image" />
              <div className="price_div">
                <h2>{`₹${item.price}`}</h2>
                <h4>{item.title}</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  margin: "auto",
                  padding: "5px",
                }}
              >
                <button onClick={() => handleQty("Add", item)}>+</button>
                <h3>{item.qty}</h3>
                <button
                  onClick={() => handleQty("Sub", item)}
                  disabled={item.qty === 1}
                >
                  -
                </button>
              </div>

              <Tooltip title="Delete">
                <DeleteIcon
                  onClick={() => deleteItem(index)}
                  style={{ paddig: "5px", margin: "5px" }}
                >
                  Delete
                </DeleteIcon>
              </Tooltip>
            </div>
          );
        })}
      </div>
      <button onClick={handleCheckout}>Checkout</button>
    </>
  );
};

export { Cart };
