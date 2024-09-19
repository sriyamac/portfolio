import React from 'react';
import { Container, Typography, Button, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

const LinkedInSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      id="LinkedIn"
      style={{
        minHeight: '100vh',
        backgroundColor: '#F3EDE7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <Container maxWidth="sm" data-aos="fade-left" style={{ textAlign: 'center', margin: 0 }}>
        <Typography variant={isMobile ? 'h3' : 'h2'} gutterBottom style={{ fontWeight: 'bold' }}>
          LinkedIn
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/sriya-machunuri-21b321195/"
          target="_blank"
          size={isMobile ? 'medium' : 'large'}
          style={{ marginTop: '20px' }}
        >
          Visit my LinkedIn
        </Button>
      </Container>
    </div>
  );
};

export default LinkedInSection;
