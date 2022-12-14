import React from "react";
import { Link } from "react-router-dom";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";


let Details_Navbar = () => {

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

        <Link to="/product" className="home_link">
          {/* Products Link*/}
          <Tooltip title="Products">
            <InventoryIcon />
          </Tooltip>
          <p style={{ lineHeight: "-10px" }}>Products</p>
        </Link>

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
        </Link>
      </div>
    </>
  );
};

export { Details_Navbar };
