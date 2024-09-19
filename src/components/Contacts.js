// src/components/Contacts.js

import React from 'react';
import {
  Container,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Contacts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navbarHeight = isMobile ? 56 : 64;
  const iconSize = isMobile ? 'medium' : 'large';

  return (
    <div
      id="Contacts"
      style={{
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        paddingTop: `${navbarHeight}px`,
        backgroundColor: '#F8F1EC', // Nude color for Contacts section
      }}
    >
      <Container
        maxWidth="sm"
        data-aos="fade-up"
        style={{ textAlign: 'center', paddingTop: isMobile ? '30px' : '50px' }}
      >
        <Typography variant={isMobile ? 'h4' : 'h3'} gutterBottom>
          Contacts
        </Typography>
        <div>
          <IconButton
            href="https://github.com/yourusername"
            target="_blank"
            color="inherit"
            size={isMobile ? 'small' : 'medium'}
          >
            <GitHub fontSize={iconSize} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            color="inherit"
            size={isMobile ? 'small' : 'medium'}
          >
            <LinkedIn fontSize={iconSize} />
          </IconButton>
          <IconButton
            href="mailto:youremail@example.com"
            color="inherit"
            size={isMobile ? 'small' : 'medium'}
          >
            <Email fontSize={iconSize} />
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
