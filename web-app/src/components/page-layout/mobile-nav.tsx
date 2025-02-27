import React, { useState } from 'react';
import Link from 'next/link';
import { 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box,
  Typography,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const MobileNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigationLinks = [
    { text: 'Shop', href: '/shop' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' }
  ];

  const profileLinks = [
    // { text: 'Profile', href: '/profile' },
    { text: 'Cart', href: '/cart' },
    { text: 'Logout', href: '/logout' }
  ];

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <Box 
          sx={{ 
            width: 250, 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column' 
          }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          {/* Brand Header */}
          <Box sx={{ 
            padding: 2, 
            textAlign: 'center', 
            backgroundColor: '#f0f0f0' 
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Cozy Threads
            </Typography>
          </Box>

          {/* Navigation Links */}
          <List>
            {navigationLinks.map((link) => (
              <ListItem 
                key={link.text} 
                component={Link} 
                href={link.href}
                sx={{ 
                  textDecoration: 'none', 
                  color: 'inherit' 
                }}
              >
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>

          <Divider />

          {/* Profile Links */}
          <List>
            {profileLinks.map((link) => (
              <ListItem 
                key={link.text} 
                component={Link} 
                href={link.href}
                sx={{ 
                  textDecoration: 'none', 
                  color: 'inherit' 
                }}
              >
                <ListItemText primary={link.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
