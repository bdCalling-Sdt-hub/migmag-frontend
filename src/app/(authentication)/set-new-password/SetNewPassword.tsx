"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const SetNewPassword: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
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

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        console.log("Form Data Submitted:", formData);
    };
    return (
        <div className=' max-w-[1539px] mx-auto h-screen ' >
            <div className=' flex lg:flex-row md:flex-row flex-col justify-between items-center mt-[10%] ' >
                <div className=' max-w-[584px] bg-white p-6 rounded-3xl shadow-md  ' >
                    <div>
                        <h1 className=' text-center text-[#121212] text-2xl lg:text-[40px] font-semibold ' >Create new password</h1>
                        <p className=' mt-2 text-[#3A3A3A] text-sm text-center ' >You have to create new password to continue.</p>
                    </div>
                    <div className='' >
                        <form onSubmit={handleSubmit} className='space-y-4 mt-[11%] ' >


                            {/* password  */}

                            <div className="relative">
                                <label htmlFor='password' className="mb-2 text-[#121212] font-semibold text-[16px] block ">Password</label>
                                <span className="absolute left-3 top-[43px] " >
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 15.375C10.9641 15.375 11.4092 15.1906 11.7374 14.8624C12.0656 14.5342 12.25 14.0891 12.25 13.625C12.25 13.1609 12.0656 12.7158 11.7374 12.3876C11.4092 12.0594 10.9641 11.875 10.5 11.875C10.0359 11.875 9.59075 12.0594 9.26256 12.3876C8.93437 12.7158 8.75 13.1609 8.75 13.625C8.75 14.0891 8.93437 14.5342 9.26256 14.8624C9.59075 15.1906 10.0359 15.375 10.5 15.375ZM15.75 7.5C16.2141 7.5 16.6592 7.68437 16.9874 8.01256C17.3156 8.34075 17.5 8.78587 17.5 9.25V18C17.5 18.4641 17.3156 18.9092 16.9874 19.2374C16.6592 19.5656 16.2141 19.75 15.75 19.75H5.25C4.78587 19.75 4.34075 19.5656 4.01256 19.2374C3.68437 18.9092 3.5 18.4641 3.5 18V9.25C3.5 8.78587 3.68437 8.34075 4.01256 8.01256C4.34075 7.68437 4.78587 7.5 5.25 7.5H6.125V5.75C6.125 4.58968 6.58594 3.47688 7.40641 2.65641C8.22688 1.83594 9.33968 1.375 10.5 1.375C11.0745 1.375 11.6434 1.48816 12.1742 1.70803C12.705 1.92789 13.1873 2.25015 13.5936 2.65641C13.9998 3.06266 14.3221 3.54496 14.542 4.07576C14.7618 4.60656 14.875 5.17547 14.875 5.75V7.5H15.75ZM10.5 3.125C9.80381 3.125 9.13613 3.40156 8.64384 3.89384C8.15156 4.38613 7.875 5.05381 7.875 5.75V7.5H13.125V5.75C13.125 5.05381 12.8484 4.38613 12.3562 3.89384C11.8639 3.40156 11.1962 3.125 10.5 3.125Z" fill="#3A3A3A" />
                                    </svg>


                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full py-3 placeholder:text-[#3A3A3A] placeholder:text-[16px] px-10 rounded-lg border-none bg-[#F5F5F5] focus:outline-none"
                                />
                                <div
                                    className="absolute right-3 top-3 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <AiOutlineEyeInvisible className=' mt-9 text-lg ' /> : <AiOutlineEye className=' mt-9 text-lg ' />}
                                </div>
                            </div>

                            <div className="relative">
                                <label htmlFor='confirmPassword' className="mb-2 text-[#121212] font-semibold text-[16px] block ">Confirm Password</label>
                                <span className="absolute left-3 top-[43px] " >
                                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 15.375C10.9641 15.375 11.4092 15.1906 11.7374 14.8624C12.0656 14.5342 12.25 14.0891 12.25 13.625C12.25 13.1609 12.0656 12.7158 11.7374 12.3876C11.4092 12.0594 10.9641 11.875 10.5 11.875C10.0359 11.875 9.59075 12.0594 9.26256 12.3876C8.93437 12.7158 8.75 13.1609 8.75 13.625C8.75 14.0891 8.93437 14.5342 9.26256 14.8624C9.59075 15.1906 10.0359 15.375 10.5 15.375ZM15.75 7.5C16.2141 7.5 16.6592 7.68437 16.9874 8.01256C17.3156 8.34075 17.5 8.78587 17.5 9.25V18C17.5 18.4641 17.3156 18.9092 16.9874 19.2374C16.6592 19.5656 16.2141 19.75 15.75 19.75H5.25C4.78587 19.75 4.34075 19.5656 4.01256 19.2374C3.68437 18.9092 3.5 18.4641 3.5 18V9.25C3.5 8.78587 3.68437 8.34075 4.01256 8.01256C4.34075 7.68437 4.78587 7.5 5.25 7.5H6.125V5.75C6.125 4.58968 6.58594 3.47688 7.40641 2.65641C8.22688 1.83594 9.33968 1.375 10.5 1.375C11.0745 1.375 11.6434 1.48816 12.1742 1.70803C12.705 1.92789 13.1873 2.25015 13.5936 2.65641C13.9998 3.06266 14.3221 3.54496 14.542 4.07576C14.7618 4.60656 14.875 5.17547 14.875 5.75V7.5H15.75ZM10.5 3.125C9.80381 3.125 9.13613 3.40156 8.64384 3.89384C8.15156 4.38613 7.875 5.05381 7.875 5.75V7.5H13.125V5.75C13.125 5.05381 12.8484 4.38613 12.3562 3.89384C11.8639 3.40156 11.1962 3.125 10.5 3.125Z" fill="#3A3A3A" />
                                    </svg>


                                </span>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full py-3 placeholder:text-[#3A3A3A] placeholder:text-[16px] px-10 rounded-lg border-none bg-[#F5F5F5] focus:outline-none"
                                />
                                <div
                                    className="absolute right-3 top-3 cursor-pointer"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? <AiOutlineEyeInvisible className='mt-9 text-lg ' /> : <AiOutlineEye className=' mt-9 text-lg ' />}
                                </div>
                            </div>



                            <button
                                type="submit"
                                className="w-full font-bold text-[#3A3A3A] bg-[#E7F056] text-xl py-3 px-9 rounded-2xl mt-[10%] transition  "
                            >
                                Save
                            </button>
                        </form>

                    </div>
                </div>
                <div>
                    <Image src={"/images/home-page/regBgImg.png"} width={717} height={478} alt='...' />
                </div>
            </div>
        </div>
    )
}

export default SetNewPassword
