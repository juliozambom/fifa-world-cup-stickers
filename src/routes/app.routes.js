import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "../pages/Admin";

function AdminRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default AdminRoutes;
