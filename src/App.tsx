import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="px-24 bg-primary text-white w-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
