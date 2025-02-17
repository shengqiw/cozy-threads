import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "@/lib/stripe";
import { CartItem } from "@/types/cart";

// Visa	4242424242424242	Any 3 digits	Any future date

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.cartItems || !Object.keys(body.cartItems).length)
    throw new Error("No items in cart");
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    if (!stripe)
      throw new Error("Stripe is not configured properly. Check missing key");
    // Create Checkout Sessions from body params.

    console.log('creating new session')
    const session = await stripe.checkout.sessions.create({
      line_items: (Object.values(body.cartItems) as CartItem[]).map(
        (item: CartItem) => ({
          price: item.id,
          quantity: item.count
        })
      ),
      mode: "payment",
      success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/payment?canceled=true`,
    });

    if (!session || !session.url) throw new Error("Failed to create session");
    return Response.json(session);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Unknown error" }, { status: 500 });
    }
  }
}
