'use client';

import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function CheckoutForm({ clientSecret }: { clientSecret: string }) {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(null);

        if (!stripe || !elements || !clientSecret) {
            setLoading(false);
            return;
        }

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement)!,
                billing_details: {
                    name,
                    email
                },
            },
        });

        if (result.error) {
            setErrorMessage(result.error.message ?? 'Payment failed');
        } else if (result.paymentIntent?.status === 'succeeded') {
            router.push('/');
            toast.success("Payment successfull")
        }

        setLoading(false);
    };

    const inputStyle = {
        style: {
            base: {
                fontSize: '16px',
                color: '#32325d',
                '::placeholder': {
                    color: '#a0aec0',
                },
            },
            invalid: {
                color: '#e53e3e',
            },
        },
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center mb-6">Secure Payment</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Card Number */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Card Number</label>
                        <div className="px-4 py-2 border border-gray-300 rounded-md">
                            <CardNumberElement options={inputStyle} />
                        </div>
                    </div>

                    {/* Expiry Date */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Expiry Date</label>
                        <div className="px-4 py-2 border border-gray-300 rounded-md">
                            <CardExpiryElement options={inputStyle} />
                        </div>
                    </div>

                    {/* CVC */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">CVC</label>
                        <div className="px-4 py-2 border border-gray-300 rounded-md">
                            <CardCvcElement options={inputStyle} />
                        </div>
                    </div>

                    {/* Error */}
                    {errorMessage && (
                        <p className="text-sm text-red-600 text-center">{errorMessage}</p>
                    )}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={!stripe || loading}
                        className="bg-black  cursor-pointer  text-white font-semibold py-2 rounded-md"
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>
                </form>
            </div>
            {
                <Toaster position='top-center' /> 
            }
        </div>
    );
}
