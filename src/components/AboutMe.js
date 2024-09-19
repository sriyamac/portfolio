import React from 'react';
import { Container, Typography, Avatar, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      id="AboutMe"
      style={{
        minHeight: '100vh',
        backgroundColor: '#F5E8E4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <Container maxWidth="sm" data-aos="fade-up" style={{ textAlign: 'center', margin: 0 }}>
        <Avatar
          alt="Profile Picture"
          src="profile.jpg"
          sx={{
            width: isMobile ? 120 : 180,
            height: isMobile ? 120 : 180,
            margin: '0 auto 20px',
          }}
        />
        <Typography
          variant={isMobile ? 'h3' : 'h2'}
          gutterBottom
          style={{ fontWeight: 'bold' }}
        >
          Hi I'm{' '}
          <Box
            component="span"
            sx={{
              backgroundColor: '#f5ccbf', 
              padding: '0 4px',        
            }}
          >
            Sriya
          </Box>
        </Typography>
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          style={{ padding: isMobile ? '0 10px' : '0 20px', lineHeight: 1.5 }}
        >
          a passionate{' '}
          <Box
            component="span"
            sx={{
              textDecoration: 'underline',
            }}
          >
            software developer
          </Box>{' '}
          who enjoys creating cool things.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutMe;
