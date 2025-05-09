"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const OtpVerifyPage: React.FC = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const router = useRouter()
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        if (element.value !== "" && element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Entered OTP is: ${otp.join("")}`);
        router.push("/set-new-password")
    };
    return (
        <div className=' max-w-[1539px] mx-auto px-4 h-screen ' >
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mt-[10%] space-y-6 md:space-y-0 md:space-x-6 lg:space-x-6 px-4 md:px-0">
                <div className="w-full md:w-auto lg:w-[484px] p-6 rounded-3xl bg-white shadow-md border border-black">
                    <div>
                        <h1 className="text-[#121212] font-semibold lg:text-[40px] text-center text-2xl md:text-3xl">
                            Verify OTP
                        </h1>
                        <p className="text-center mt-2 text-[#3A3A3A] font-thin text-sm md:text-base">
                            We have sent 6 digit code in mark***@gmail.com
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-between items-center mt-[10%] space-x-1 md:space-x-2">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className=" md:w-12 md:h-12 lg:w-12 lg:h-12 w-8 h-8 text-center border border-[#E7F056] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7F056]"
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={(e) => e.target.select()}
                                />
                            ))}
                        </div>
                        <div className="flex justify-end mt-2">
                            <button className="text-[#000000] text-sm font-semibold">
                                Send again
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#E7F056] text-[#3A3A3A] text-lg font-semibold py-2 hover:bg-[#BEC645] rounded-lg mt-[10%] transition-all"
                        >
                            Verify OTP
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-auto lg:w-[717px] lg:h-[478px] flex justify-center items-center">
                    <Image
                        src="/images/home-page/otpVerifyImg.png"
                        width={717}
                        height={478}
                        alt="..."
                        className="max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default OtpVerifyPage
