import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import AppLayout from "./components/Layout/AppLayout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/country" element={<Country />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* 404 Route Error */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
