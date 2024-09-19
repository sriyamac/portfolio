// src/components/Resume.js

import React from 'react';
import { Container, Typography, Button, useMediaQuery } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useTheme } from '@mui/material/styles';

const Resume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navbarHeight = isMobile ? 56 : 64;

  return (
    <div
      id="Resume"
      style={{
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        paddingTop: `${navbarHeight}px`,
        backgroundColor: '#EFE5DC', // Nude color for Resume section
      }}
    >
      <Container
        maxWidth="sm"
        data-aos="fade-right"
        style={{ textAlign: 'center', paddingTop: isMobile ? '30px' : '50px' }}
      >
        <Typography variant={isMobile ? 'h4' : 'h3'} gutterBottom>
          Resume
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PictureAsPdfIcon />}
          href="resume.pdf"
          target="_blank"
          size={isMobile ? 'small' : 'medium'}
        >
          View Resume
        </Button>
      </Container>
    </div>
  );
};

export default Resume;
