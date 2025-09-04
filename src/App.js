import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogPost from "./pages/Blogpost";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Footer always visible */}
    </Router>
  );
}

export default App;
