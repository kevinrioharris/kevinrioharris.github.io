import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;