// src/components/Footer.js

import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#333', 
        color: '#fff',            
        padding: '10px 0',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2">
           <strong>sriyamac</strong> {new Date().getFullYear()}
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
