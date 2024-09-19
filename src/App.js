// src/App.js

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import LinkedInSection from './components/LinkedIn';
import Contacts from './components/Contacts';
import Footer from './components/Footer'; // Import the Footer component
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    AOS.init({
      duration: isMobile ? 600 : 800,
      once: true,
    });
  }, [isMobile]);

  return (
    <div>
      <Navbar />
      <AboutMe />
      <Resume />
      <LinkedInSection />
      <Contacts />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
