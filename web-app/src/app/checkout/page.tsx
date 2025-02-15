'use client'

import { Button } from "@mui/material";

type SearchParams = {
  canceled?: boolean;
}

export default function IndexPage({ searchParams }: { searchParams: SearchParams }) {
    // const { canceled } = await searchParams
  
    // if (canceled) {
    //   console.log(
    //     'Order canceled -- continue to shop around and checkout when you’re ready.'
    //   )
    // }

    const handleCheckout = async () => {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '123',
          quantity: 1,
        }),
      })
  
      const session = await response.json()
  
      if (!session || !session.url) {
        console.error('Failed to create session')
        return
      }
  
      window.location.href = session.url
    }
    return (
      <form action="/api/checkout" method="POST">
        <section>
            Checkout
          <Button onClick={handleCheckout}>
            Checkout
          </Button>
        </section>
      </form>
    )
  }