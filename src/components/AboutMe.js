import React from 'react';
import { Container, Typography, Avatar, Box, Button, useMediaQuery } from '@mui/material';
import { useTheme, keyframes } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';

// Define the fade-in keyframe animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div
      id="AboutMe"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #fff1e6 0%, #f5d7c5 50%, #f8e7dc 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm" data-aos="fade-up" style={{ margin: 0 }}>
        <Box
          sx={{
            animation: `${fadeIn} 1s ease-in`,
            animationDelay: '0s',
            animationFillMode: 'both',
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="profile.jpg"
            sx={{
              width: isMobile ? 120 : 180,
              height: isMobile ? 120 : 180,
              margin: '0 auto 20px',
            }}
          />
        </Box>

        <Box
          sx={{
            animation: `${fadeIn} 1s ease-in`,
            animationDelay: '1s',
            animationFillMode: 'both',
          }}
        >
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
            style={{
              padding: isMobile ? '0 10px' : '0 20px',
              lineHeight: 1.5,
              marginBottom: '20px',
            }}
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
            who enjoys creating cool stuff
          </Typography>
        </Box>

        <Box
          sx={{
            animation: `${fadeIn} 1s ease-in`,
            animationDelay: '2s',
            animationFillMode: 'both',
          }}
        >
          <ScrollLink
            to="Links"
            smooth={true}
            duration={5}
            offset={-70}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                marginTop: '20px',
                textTransform: 'none',
                borderColor: '#333', 
                color: '#333', 
                backgroundColor: 'transparent', 
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f5ccbf',
                  color: '#333', 
                  borderColor: '#333',
                },
              }}
            >
              Know More
            </Button>
          </ScrollLink>
        </Box>
      </Container>
    </div>
  );
};

export default AboutMe;
