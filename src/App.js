import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import LinkedInSection from './components/LinkedIn';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navbarHeight = isMobile ? 56 : 64;

  useEffect(() => {
    AOS.init({
      duration: isMobile ? 600 : 800,
      once: true,
    });
  }, [isMobile]);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <div style={{ marginTop: `${navbarHeight}px`, margin: 0, padding: 0 }}>
        <AboutMe />
        <Resume />
        <LinkedInSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
