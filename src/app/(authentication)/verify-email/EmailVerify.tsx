"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
const EmailVerify: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/otp-verify")


        console.log("Form Data Submitted:", formData);
    };
    return (
        <div>
            <div className=' max-w-[1539px] mx-auto px-4 pb-10 lg:pb-[200px] md:mt-[100] mt-10 lg:mt-[283px] ' >
                <div className=' flex lg:flex-row flex-col justify-between items-center ' >
                    <div className=' max-w-[584px] bg-white p-6 rounded-3xl shadow-md  ' >
                        <div>
                            <h1 className=' text-center text-[#121212] text-2xl lg:text-[40px] font-semibold ' >Forgot password</h1>
                            <p className=' mt-2 text-[#3A3A3A] text-sm text-center ' >Give your email which was used to create this account..</p>
                        </div>
                        <div className='lg:mt-16 mt-4 ' >
                            <form onSubmit={handleSubmit} className='space-y-4 ' >

                                {/* email  */}
                                <div className="relative">
                                    <label htmlFor='email' className="mb-2 text-[#121212] font-semibold text-[16px] block ">Email</label>

                                    <span className="absolute left-3 top-[44px] " >
                                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5 7.5L10.5 11.875L3.5 7.5V5.75L10.5 10.125L17.5 5.75M17.5 4H3.5C2.52875 4 1.75 4.77875 1.75 5.75V16.25C1.75 16.7141 1.93437 17.1592 2.26256 17.4874C2.59075 17.8156 3.03587 18 3.5 18H17.5C17.9641 18 18.4092 17.8156 18.7374 17.4874C19.0656 17.1592 19.25 16.7141 19.25 16.25V5.75C19.25 5.28587 19.0656 4.84075 18.7374 4.51256C18.4092 4.18437 17.9641 4 17.5 4Z" fill="#3A3A3A" />
                                        </svg>

                                    </span>

                                    <input
                                        type="email"
                                        name="email"
                                        id='email'
                                        placeholder="Enter your email..."
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full py-3 placeholder:text-[#3A3A3A] placeholder:text-[16px] px-10 rounded-lg border-none bg-[#F5F5F5] focus:outline-none "
                                    />
                                </div>




                                <button
                                    type="submit"
                                    className="w-full font-bold cursor-pointer text-[#3A3A3A] bg-[#E7F056] text-xl py-3 px-9 rounded-2xl transition mt-4 lg:mt-16 "
                                >
                                    Send
                                </button>
                            </form>

                        </div>
                    </div>
                    <div>
                        <Image src={"/images/home-page/emilVerify.png"} width={717} height={478} alt='...' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailVerify
