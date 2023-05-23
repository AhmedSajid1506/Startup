import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FourOFour from "./pages/FourOFour";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState, useEffect } from "react";
import InBuildPopup from "./components/InBuildPopup";
import Footer from "./components/Footer";
import Packages from "./pages/Packages";

function App() {
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    
  })
  
  return (
    <BrowserRouter>
        {showNav && <Navbar />}
        <InBuildPopup />
      <Routes>
        <Route path="/" element={<Home setShowNav={setShowNav} />} />
        <Route path="/about" element={<About setShowNav={setShowNav} />} />
        <Route path="/contact" element={<Contact setShowNav={setShowNav} />} />
        <Route path="/login" element={<Login setShowNav={setShowNav} />} />
        <Route path="/signup" element={<Signup setShowNav={setShowNav} />} />

        <Route path="/packages/:ctg" element={<Packages setShowNav={setShowNav} />} />

        <Route path="/admin" element={<Admin setShowNav={setShowNav} />} />
        <Route path="/addproduct" element={<AddProduct setShowNav={setShowNav} />} />
        <Route path="*" element={<FourOFour setShowNav={setShowNav} />} />
      </Routes>
      {showNav && <Footer />}
    </BrowserRouter>
  );
}

export default App;
