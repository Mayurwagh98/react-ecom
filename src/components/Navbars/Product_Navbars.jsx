import React from "react";
import { Link } from "react-router-dom";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import InventoryIcon from "@mui/icons-material/Inventory";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

let Product_Navbar = () => {
  let user = JSON.parse(localStorage.getItem("LoginDetails"));
  let localData = JSON.parse(localStorage.getItem("CartItem")) || [];
  let [loading, setLoading] = useState(true);

  let handleLogout = () => {
    localStorage.removeItem("LoginDetails");

    alert(`Logged out`);
    {
      <Navigate />;
    }
  };

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

        <Tooltip className="home_link">
          <Link onClick={handleLogout}>
            <LogoutIcon />
          <p style={{ lineHeight: "-10px" }}>Logout</p>

          </Link>
        </Tooltip>

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
          <p style={{ lineHeight: "-10px" }}>Cart</p>

        </Link>
      </div>
    </>
  );
};

export { Product_Navbar };
