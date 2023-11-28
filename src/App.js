import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Card from './components/Card';
import Contact from './components/Contact';
import './styles/app.css';
import { Button } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Services />
      <Projects />
      <Card />
      <Contact />
      <Footer />
      <Toaster />
      <a href="#home">
        <Button
          position={'fixed'}
          top={'50%'}
          right={'20px'}
          zIndex={'overlay'}
          colorScheme="purple"
          rounded={'full'}
        >
          <FaArrowUp />
        </Button>
      </a>
    </>
  );
}

export default App;
