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
import { useState } from "react";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

let Navbar = () => {
  let user = JSON.parse(localStorage.getItem("LoginDetails"));
  let [loading, setLoading] = useState(true);
  let localData = JSON.parse(localStorage.getItem("CartItem")) || [];

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
          <p style={{ lineHeight: "-10px" }}>Products</p>
        </Link>

        <Link to="/login" className="home_link">
          {/* Login Link*/}
          {user ? (
            // "Logout"

            // `${user.loginFname}` // displaying user's name once he logged in

            <Stack spacing={1} direction="row">
              <Badge badgeContent={user.loginFname} color="primary">
                <AccountBoxIcon color="black" />
              </Badge>
            </Stack>
                
          ) : (
            // user.loginFname
            <Tooltip title="Login">
              <LoginIcon />
            </Tooltip>
          )}
          <p style={{ lineHeight: "-10px" }}>User</p>

        </Link>

        {/* <Link onClick={handleLogout}>Logout</Link> */}

        {/* {
          <select onChange={handleChanges} id="changes">
            <option value="Login">{user.loginFname}</option>
            <option value="Logout">
              <Link onClick={handleLogout}>Logout</Link>
            </option>
            <option value=""></option>
          </select>
        } */}

        <Link to="/signup" className="home_link">
          {/* Signup Link*/}
          <Tooltip title="Signup">
            <SubscriptionsIcon />
          </Tooltip>
          <p style={{ lineHeight: "-10px" }}>Signup</p>
        </Link>

        {/* <Link to="/itemDetails">Details</Link> */}
        <Link to="/cart" className="home_link">
          {/* Cart Link*/}
          <Tooltip title="Cart">
            {/* <ShoppingCartIcon /> */}
            <Stack spacing={2} direction="row">
              <Badge badgeContent={localData.length} color="secondary">
                <ShoppingCartIcon color="black" />
              </Badge>
            </Stack>
          </Tooltip>
          <p>Cart</p>
        </Link>
      </div>
    </>
  );
};

export { Navbar };
