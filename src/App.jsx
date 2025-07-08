import Navbar from './components/Navbar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Project from './sections/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <main>
        <Home />
        <AboutMe />
        <Project />
      </main>
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
      <Footer />
    </>
  );
}

export default App;
