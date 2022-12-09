import { Navbar } from "./components/Navbar";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Product } from "./components/Product";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Error } from "./components/Error";
import { Login } from "./components/Login";
// import {Product_Custom_pagination} from "./components/Coustom_pagination"
import { Signup } from "./components/SignUp";
import { Cart } from "./components/Cart";

function App() {
  
  let user = localStorage.getItem("LoginInfo") || false;
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/product"
          element={user ? <Product /> : <Navigate to="/login" />}
        />
        {/* <Route exact path="/product" element={<Product_Custom_pagination />}  /> */}
        <Route exact path="/login" element={user ? <Navigate to="/"/> : <Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
