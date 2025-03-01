import React, { useContext, useState } from "react";
import Link from "next/link";
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from ".";
import { Person } from "@mui/icons-material";

export const MonitorNav = () => {
  const [cartItems] = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigationLinks = [
    { text: "Shop", href: "/shop" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  const profileMenuItems = [
    // Would call stripe API to find all all orders for user to display a list 
    { text: "My Orders", href: "/" },
    // actual signout url would be applied here or use NextAuth Signout function
    { text: "Logout", href: "/" }, 
  ];

  const cartTotal = Object.values(cartItems).reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
      {/* Navigation Links */}
      {navigationLinks.map((link) => (
        <Link
          key={link.text}
          href={link.href}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography sx={{ fontWeight: 500 }}>{link.text}</Typography>
        </Link>
      ))}

      {/* Profile Icon with Dropdown */}
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32, backgroundColor: "#333333" }}>
          <Person />
        </Avatar>
      </IconButton>
      <IconButton
        component={Link}
        href="/cart"
        sx={{
          color: "#4A3A2C",
          ml: 2,
          "&:hover": {
            backgroundColor: "rgba(139, 69, 19, 0.1)",
          },
        }}
      >
        <Badge
          badgeContent={cartTotal}
          color="error"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#D2691E",
              color: "white",
            },
          }}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      {/* Profile Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {profileMenuItems.map((item) => (
          <MenuItem key={item.text} onClick={handleClose}>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
