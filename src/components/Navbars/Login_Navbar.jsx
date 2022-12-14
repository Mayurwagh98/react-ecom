import React from "react";
import { Link } from "react-router-dom";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";


let Login_Navbar = () => {
  let user = JSON.parse(localStorage.getItem("LoginDetails"));
  let [loading, setLoading] = useState(true);

  return (
    <>
      <div className="navbar conMain">
      <Link to="/" className="home_link">
          {/* Home Link*/}
          <Tooltip title="Home">
            <HomeIcon />
          </Tooltip>
          <p>Home</p>
        </Link>

        
        <Link to="/signup" className="home_link">
          {/* Signup Link*/}
          <Tooltip title="Signup">
            <SubscriptionsIcon />
          </Tooltip>
          <p style={{ lineHeight: "-10px" }}>Signup</p>
        </Link>
      </div>
    </>
  );
};

export { Login_Navbar };
