import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6fff0] to-[#d7f7e6] text-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        <nav className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-[#064e3b]">Charu Sood</h1>
          <div className="flex gap-4">
            <Link to="/" className="text-[#065f46] hover:underline">Home</Link>
            <Link to="/projects" className="text-[#065f46] hover:underline">Projects</Link>
            <Link to="/about" className="text-[#065f46] hover:underline">About</Link>
            <Link to="/contact" className="text-[#065f46] hover:underline">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}
