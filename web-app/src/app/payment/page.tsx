'use client';
import { colors } from "@/mockData/site-colors";
import { Box, Button, Typography } from "@mui/material";

export default function PaymentResolution() {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: colors.background,
        backgroundImage: "linear-gradient(45deg, #f0e5db 0%, #fff2d1 100%)",
        minHeight: "calc(100vh - 64px)",
        py: 8,
      }}
    >
      <Typography variant="h2">Payment Canceled</Typography>
      <Typography variant="h5" my={4}>
        continue to shop around and checkout when you’re ready.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: colors.primary,
          color: "white",
          "&:hover": {
            backgroundColor: colors.secondary,
          },
        }}
        onClick={() => (window.location.href = "/shop")}
      >
        Continue Shopping
      </Button>
    </Box>
  );
}
