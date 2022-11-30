import { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Product } from "./components/Product";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}  />
        <Route exact path="/product" element={<Product />}  />
      </Routes>
    </div>
  );
}

export default App;
