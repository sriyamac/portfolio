// src/components/LinkedIn.js

import React from 'react';
import { Container, Typography, Button, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

const LinkedInSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navbarHeight = isMobile ? 56 : 64;

  return (
    <div
      id="LinkedIn"
      style={{
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        paddingTop: `${navbarHeight}px`,
        backgroundColor: '#F3EDE7', // Nude color for LinkedIn section
      }}
    >
      <Container
        maxWidth="sm"
        data-aos="fade-left"
        style={{ textAlign: 'center', paddingTop: isMobile ? '30px' : '50px' }}
      >
        <Typography variant={isMobile ? 'h4' : 'h3'} gutterBottom>
          LinkedIn
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          size={isMobile ? 'small' : 'medium'}
        >
          Visit my LinkedIn
        </Button>
      </Container>
    </div>
  );
};

export default LinkedInSection;
