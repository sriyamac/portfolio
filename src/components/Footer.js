import React from 'react';
import { Typography, Container, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <div>
        <strong>@sriyamac</strong>
          <IconButton
            href="https://github.com/sriyamac"
            target="_blank"
            color="inherit"
            size="large"
          >
            <GitHub fontSize="inherit" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/sriya-machunuri-21b321195/"
            target="_blank"
            color="inherit"
            size="large"
          >
            <LinkedIn fontSize="inherit" />
          </IconButton>
          <IconButton
            href="mailto:sriyamac@gmail.com"
            color="inherit"
            size="large"
          >
            <Email fontSize="inherit" />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
