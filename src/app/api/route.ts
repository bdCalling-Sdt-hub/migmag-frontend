// /app/api/create-payment-intent/route.ts (Next.js 13+)
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new  Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

   return NextResponse.json(
  paymentIntent,
  
);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Payment Intent creation failed' }, { status: 500 });
  }
}
