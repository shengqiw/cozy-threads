"use client";
import { Button, CircularProgress } from "@mui/material";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

type Colors = {
  [key: string]: string;
};

type StripePaymentProps = { clientSecret: string; colors: Colors };

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

const StripePayment = ({ colors }: { colors: Colors }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: `${window.location.protocol}//${window.location.host}/payment/success`,
        },
      });
      setIsLoading(false);
  
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message || 'An unexpected error occurred.');
      } else {
        setMessage("An unexpected error occurred.");
      }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement
        id={"payment-element"}
        options={{
          layout: "accordion",
        }}
      />
      <Button
        variant="contained"
        fullWidth
        disabled={false}
        type="submit"
        style={{ marginTop: "10px", backgroundColor: colors.primary }}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? <CircularProgress size={'30px'} /> : "Pay now"}
        </span>
      </Button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export const StripeElement = ({ clientSecret, colors }: StripePaymentProps) => {
  if (!stripePromise) return <h1>No Stripe Publishable key</h1>;
  return (
    <Elements
      stripe={stripePromise}
      options={{ appearance: { theme: "stripe" }, clientSecret }}
    >
      <StripePayment colors={colors} />
    </Elements>
  );
};
