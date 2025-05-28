'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeFrom() {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const amount = 500;
    console.log(clientSecret)
    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const res = await axios.post('http://localhost:3000/api', { amount });
                console.log(res?.data?.client_secret)
                setClientSecret(res?.data?.client_secret);  // store client secret here if needed
            } catch (err) {
                console.error('Error creating payment intent:', err);
            }
        };

        createPaymentIntent();
    }, [amount]);

    const appearance = { theme: 'stripe' };
    const options = { clientSecret, appearance };

    return (
        <div style={{ fontFamily: 'Favorit' }} className="p-8">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm clientSecret={clientSecret} />
                </Elements>
            )}
        </div>
    );
}
