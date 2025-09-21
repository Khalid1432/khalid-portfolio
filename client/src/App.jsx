import React from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';


export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Skills/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}