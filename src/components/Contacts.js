import React from 'react';
import { Container, Typography, IconButton, useMediaQuery } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Contacts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const iconSize = isMobile ? 'large' : 'inherit';

  return (
    <div
      id="Contacts"
      style={{
        minHeight: '100vh',
        backgroundColor: '#F8F1EC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <Container maxWidth="sm" data-aos="fade-up" style={{ textAlign: 'center', margin: 0 }}>
        <Typography variant={isMobile ? 'h3' : 'h2'} gutterBottom style={{ fontWeight: 'bold' }}>
          Contacts
        </Typography>
        <div style={{ marginTop: '30px' }}>
          <IconButton
            href="https://github.com/sriyamac"
            target="_blank"
            color="inherit"
            size="large"
          >
            <GitHub fontSize={iconSize} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/sriya-machunuri-21b321195/"
            target="_blank"
            color="inherit"
            size="large"
          >
            <LinkedIn fontSize={iconSize} />
          </IconButton>
          <IconButton href="mailto:sriyamac@gmail.com" color="inherit" size="large">
            <Email fontSize={iconSize} />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
