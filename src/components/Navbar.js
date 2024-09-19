import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Menu items
  const menuItems = ['About Me', 'Links'];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    marginLeft: 15,
    transition: 'color 0.3s',
    fontSize: '1rem',
  };

  return (
    <AppBar
      position="fixed"
      style={{
        background: 'rgba(0, 0, 0, 0.7)',
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1, 
      }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#fff' }}>
          sriya
          <span style={{ color: '#000000' }}><strong>mac</strong></span> 
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              aria-label="menu"
            >
              <MenuIcon style={{ color: '#fff' }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              PaperProps={{
                style: {
                  marginTop: isMobile ? 56 : 64, 
                  background: 'linear-gradient(to bottom, #fff1e6, #f8e7dc)',
                },
              }}
            >
              <List>
                {menuItems.map((text) => (
                  <ListItem
                    button
                    key={text}
                    onClick={handleDrawerToggle}
                    style={{ width: 200 }}
                  >
                    <ScrollLink
                      to={text.replace(/ /g, '')}
                      smooth={true}
                      duration={5}
                      offset={-70}
                      style={{
                        textDecoration: 'none',
                        color: '#000',
                        width: '100%',
                      }}
                    >
                      <Typography variant="button">{text}</Typography>
                    </ScrollLink>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          menuItems.map((section) => (
            <Button key={section}>
              <ScrollLink
                to={section.replace(/ /g, '')}
                smooth={true}
                duration={5}
                offset={-70}
                style={linkStyle}
                activeClass="active"
                spy={true}
                onMouseEnter={(e) => {
                  e.target.style.color = '#f5ccbf';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#fff';
                }}
              >
                {section}
              </ScrollLink>
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
