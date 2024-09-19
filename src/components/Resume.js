import React from 'react';
import { Container, Typography, Button, useMediaQuery } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useTheme } from '@mui/material/styles';

const Resume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      id="Resume"
      style={{
        minHeight: '100vh',
        backgroundColor: '#EFE5DC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <Container maxWidth="sm" data-aos="fade-right" style={{ textAlign: 'center', margin: 0 }}>
        <Typography variant={isMobile ? 'h3' : 'h2'} gutterBottom style={{ fontWeight: 'bold' }}>
          Resume
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PictureAsPdfIcon />}
          href="resume.pdf"
          target="_blank"
          size={isMobile ? 'medium' : 'large'}
          style={{ marginTop: '20px' }}
        >
          View Resume
        </Button>
      </Container>
    </div>
  );
};

export default Resume;
