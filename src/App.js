import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import AboutMe from './Component/AboutMe';
import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import './App.css';

function App() {
  return (
    <Router basename='/my-portfolio'>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;