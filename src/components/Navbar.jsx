import React from "react";
import {Link} from "react-router-dom"

let Navbar = () => {
  return (
    <>
      <div className="navbar">
      <Link to="/" className="home_link">Home</Link>
      <Link to="/about" className="about_link">About</Link>
      <Link to="/product" className="product_link">Product</Link>
      </div>
    </>
  );
};


export {Navbar}