
// app/api/stripe-checkout.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import type { Metadata } from "next";
import config from "@/env-config";

const stripe = new Stripe(config.STRIPE_SECRET_KEY!)
// const stripe = new Stripe(config.STRIPE_SECRET_KEY_TEST!)
// console.log(config.NEXT_PUBLIC_STRIPE_SECRET_KEY)

// console.log('stripe-checkout.ts')

export const metadata: Metadata = {
  robots: "noindex, nofollow",
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  // console.log(productID)
  
  // console.log(req.headers.origin)
  
  
  if (req.method === 'POST') {
    // console.log(req.body)
    // console.log('stripeCheckout', req.body)
    try {
        const id = req.body.id;
        // console.log(req.body)
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card', 'affirm', 'afterpay_clearpay'],
        // payment_method_types: ['card', 'affirm'],
        // line_items: [{
        // 	price_data: {
        // 		currency: 'usd',
        // 		product: productID, // Replace with your product ID
        // 		unit_amount: 249900, // Replace with your product price in cents
        // 	},
        // 	quantity: 1,
        // }
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: id,
                quantity: 1,
            },
        ],
        allow_promotion_codes: true,
        mode: 'payment',
        shipping_address_collection: {
          // Shipping address is optional but recommended to pass in
          // Specify which shipping countries Checkout should provide as options for shipping locations
          allowed_countries: ['US'],
        },

        metadata: {
          product_name: req.body.productName,
        },
        
        // success_url: `${req.headers.origin}/confirmation?success=true`,
        // cancel_url: `${req.headers.origin}/confirmation?canceled=true`,

        success_url: `${req.headers.origin}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/confirmation?cancelled=true`,
      });
      // console.log(session)
      res.redirect(303, session.url as any);
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
