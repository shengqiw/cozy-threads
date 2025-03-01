import { stripe } from "@/lib/stripe";
import { StripeElement } from "./StripePayment";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { CartItem } from "@/types/cart";

const colors = {
  primary: "#8B4513", // Saddle Brown
  secondary: "#D2691E", // Chocolate
  background: "#FFF5E6", // Light warm background
  text: "#4A3A2C", // Dark warm brown
  highlight: "#FF6B35", // Vibrant orange for accents
};
export default async function CheckoutPage({searchParams}: {searchParams: {
    total: string;
}}) {

  if (!stripe)
    throw new Error("Stripe is not configured properly. Check missing key");
  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: Math.round(Number(searchParams.total) * 100),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  if (!clientSecret) throw new Error("Failed to create payment intent");

  return (
    <Box
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        fontFamily: "Arial, sans-serif",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        id="checkout"
        style={{
          width: "50%",
          textAlign: "center",
          margin: "auto",
          paddingTop: "7%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: colors.primary,
            marginBottom: 4,
            fontWeight: 700,
          }}
        >
          Checkout With Stripe
        </Typography>
        <StripeElement colors={colors} clientSecret={clientSecret} />
      </div>
    </Box>
  );
}
