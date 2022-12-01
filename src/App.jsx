
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Product } from "./components/Product";
import {Routes, Route} from "react-router-dom"
import { Footer } from "./components/Footer";
import {Error} from "./components/Error"
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}  />
        <Route exact path="/product" element={<Product />}  />
        <Route exact path="/login" element={<Login />}  />
        <Route path="*" element={<Error />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
