import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AllCertifications from './pages/AllCertifications';
import AllProjects from './pages/AllProjects';

export default function App() {
  return (
    <Router basename="/Dg-s">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<AllCertifications />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}