

// app/api/stripe-checkout.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import type { Metadata } from "next";
import config from '@/env-config';

const stripe = new Stripe(config.STRIPE_SECRET_KEY!)

// console.log(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

// console.log('stripe-retrieve-session')

export const metadata: Metadata = {
  robots: "noindex, nofollow",
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //  console.log(req.body)
//   console.log('stripeCheckout', req.body)
  // const [title, value, price] = ...req.body;
  // console.log(productID)

  // console.log(req.headers.origin)

    const sessionId = req.body.sessionId
//   console.log(sessionId)
    type DataTypes = {
        product_name: string;
        amount_subtotal: number | null;
        amount_total: number | null;
        discount: number | null;
    }

  if (req.method === 'POST') {
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        // @ts-ignore //
        // console.log(session.customer_details)
    
        const data: DataTypes = {
          // @ts-ignore //
          client: { name: session.customer_details.name, email: session.customer_details.email },
          // @ts-ignore //
          product_name: session?.metadata.product_name,
          // @ts-ignore //
          amount_subtotal: session?.amount_subtotal / 100,
          // @ts-ignore //
          amount_total:session?.amount_total / 100,
          // @ts-ignore //
          discount: (session?.amount_subtotal - session?.amount_total) / 100
        }
        // @ts-ignore //
        // console.log(data.client)
        // console.log(session)
        res.status(200).json(data); // Send the session data as JSON
        // res.redirect(303, session.url as any);
        // console.log('this worked')
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
