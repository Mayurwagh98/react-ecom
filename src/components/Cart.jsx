import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

let Cart = () => {
  let [data, setData] = useState([]);

  let [count, setCount] = useState(0);

  let localData = JSON.parse(localStorage.getItem("CartItem")) || [];

  let deleteItem = (i) => {
    localData.splice(i, 1);

    // localData.push(item)

    localStorage.setItem("CartItem", JSON.stringify(localData));

    data = localData;

    setData(data);
  };

  return (
    <>
      <h1 style={{ marginTop: "100px" }}>Cart:-{(count = localData.length)}</h1>
      <div className="products_div">
        {localData.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="image" />
              <div className="price_div">
                <h2>{item.price}</h2>
                <h4>{item.title}</h4>
              </div>
              <Tooltip title="Delete">
                <DeleteIcon onClick={() => deleteItem(item)}>Delete</DeleteIcon>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { Cart };
