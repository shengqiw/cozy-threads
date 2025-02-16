"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { MonitorNav } from "./monitor-nav";
import { MobileNav } from "./mobile-nav";
import { ReactChild } from "@/types/generic-props";
import { CartItem } from "@/types/cart";

export const CartContext = React.createContext<
  [
    { [key: string]: CartItem },
    React.Dispatch<React.SetStateAction<{ [key: string]: CartItem }>>
  ]
>([{}, () => {}]);

export const PageLayout = ({ children }: ReactChild) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [cartItems, setCartItems] = React.useState<{ [key: string]: CartItem }>(
    {}
  );

  //<SessionProvider> {children} <SessionProvider> would wrap this entire component
  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#ffffff",
            color: "#333333",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
              {/* Mobile Menu Icon */}
              {isMobile && <MobileNav />}

              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    fontWeight: 700,
                    letterSpacing: ".2rem",
                  }}
                >
                  Cozy Threads
                </Typography>
              </Link>

              {/* Desktop Navigation */}
              {!isMobile && <MonitorNav />}
            </Toolbar>
          </Container>
        </AppBar>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Container maxWidth="xl">
            <Typography variant="body2" color="text.secondary" align="center">
              © 2025 Cozy Threads LLC. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </CartContext.Provider>

  );
};