// src/components/AboutMe.js

import React from 'react';
import { Container, Typography, Avatar, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navbarHeight = isMobile ? 56 : 64; 

  return (
    <div
      id="AboutMe"
      style={{
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        paddingTop: `${navbarHeight}px`,
        backgroundColor: '#F5E8E4', 
      }}
    >
      <Container
        maxWidth="sm"
        data-aos="fade-up"
        style={{ textAlign: 'center', marginTop: isMobile ? '20px' : '50px' }}
      >
        <Avatar
          alt="Profile Picture"
          src="profile.jpg"
          sx={{
            width: isMobile ? 100 : 150,
            height: isMobile ? 100 : 150,
            margin: '0 auto 20px',
          }}
        />
        <Typography variant={isMobile ? 'h4' : 'h3'} gutterBottom>
          Hi I'm <strong>Sriya</strong>
        </Typography>
        <Typography
          variant="body1"
          style={{ padding: isMobile ? '0 10px' : '0 20px', textAlign: 'center' }}
        >
          a passionate developer who enjoys building fun things.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutMe;
