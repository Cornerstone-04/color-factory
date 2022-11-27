import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddColor, DisplayColor, Home } from "./screens";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-color" element={<AddColor />} />
        <Route path=":colorName/:colorCode" element={<DisplayColor />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
