import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { scrollToId } from '../utils/scroll';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = location.state && location.state.scrollTo;
    if (scrollTo) {
      requestAnimationFrame(() => scrollToId(scrollTo));
      navigate('.', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
