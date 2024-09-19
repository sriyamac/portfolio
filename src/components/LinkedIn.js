import React from 'react';
import { Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LinkedInSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sriya-machunuri-21b321195/', '_blank');
  };

  const containerRef = React.useRef(null);

  const handleMouseEnter = () => {
    containerRef.current.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = () => {
    containerRef.current.style.transform = 'scale(1)';
  };

  return (
    <div
      id="Links"
      onClick={handleLinkedInClick}
      style={{
        backgroundColor: '#F3DDD2', 
        padding: isMobile ? '40px 20px' : '80px 40px',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s',
      }}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Container maxWidth="md">
        <LinkedInIcon
          style={{
            fontSize: isMobile ? 60 : 80,
            color: '#333',
          }}
        />
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          gutterBottom
          style={{ fontWeight: 'bold', marginTop: '20px' }}
        >
          LinkedIn
        </Typography>
      </Container>
    </div>
  );
};

export default LinkedInSection;
