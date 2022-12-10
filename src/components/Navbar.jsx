import React from "react";
import { Link } from "react-router-dom";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import InventoryIcon from "@mui/icons-material/Inventory";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";

let Navbar = () => {
  let user = JSON.parse(localStorage.getItem("LoginDetails"));

  return (
    <>
      <div className="navbar conMain">
        <Link to="/" className="home_link">
          {/* Home Link*/}
          <Tooltip title="Home">
            <HomeIcon />
          </Tooltip>
        </Link>

        {/* <Link to="/about" className="home_link"> */}
        {/* About Link*/}
        {/* <Tooltip title="About">
            <InfoIcon />
          </Tooltip> */}
        {/* </Link> */}

        <Link to="/product" className="home_link">
          {/* Products Link*/}
          <Tooltip title="Products">
            <InventoryIcon />
          </Tooltip>
        </Link>

        <Link to="/login" className="home_link">
          {/* Login Link*/}
         
          {user ? (
            // "Logout"
            `Hi, ${user.loginFname}` // displaying user's name once he logged in
          ) : (
            // user.loginFname
            <Tooltip title="Login"> 
            <LoginIcon />
          </Tooltip>
          )}
        </Link>

        <Link to="/signup" className="home_link">
          {/* Signup Link*/}
          <Tooltip title="Signup">
            <SubscriptionsIcon />
          </Tooltip>
        </Link>

        <Link to="/cart" className="home_link">
          {/* Cart Link*/}
          <Tooltip title="Cart">
            <ShoppingCartIcon />
          </Tooltip>
        </Link>
      </div>
    </>
  );
};

export { Navbar };
