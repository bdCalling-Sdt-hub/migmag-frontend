'use client';

import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { FaUser, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const AccountFromPage: React.FC = () => {
    const [imageData, setImage] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="bg-[#FFFFFF] p-6 rounded-2xl">
                <h1 className="text-[#121212] text-xl font-semibold">My Profile</h1>
                <p className="text-[#454545] text-sm mt-1">You can update your profile information.</p>
            </div>

            <form className="border border-[#E7E7E7] bg-[#FFFFFF] rounded-3xl p-8 mt-4 lg:mt-6">
                <div className="flex flex-col items-center">
                    <label htmlFor="photo-upload" className="cursor-pointer">
                        <div className="w-28 h-28 border border-dashed border-gray-400 rounded-xl flex items-center justify-center bg-gray-100 overflow-hidden">
                            {imageData ? (
                                <Image
                                    src={imageData}
                                    width={93}
                                    height={91}
                                    alt="Uploaded preview"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            ) : (
                                <svg
                                    className="w-8 h-8 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16l4-4a4 4 0 015.66 0l4.34 4.34M3 8h.01M21 21H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2z"
                                    />
                                </svg>
                            )}
                        </div>
                    </label>
                    <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                    <p className="font-bold text-2xl text-center mt-4">Upload your photo</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
                    <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="First name"
                            className="w-full pl-8 pr-4 py-2 border border-[#E7E7E9] placeholder:text-[#60606A] rounded-[8px] focus:outline-none"
                        />
                    </div>
                    <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Last name"
                            className="w-full pl-8 pr-4 py-2 border border-[#E7E7E9] placeholder:text-[#60606A] rounded-[8px] focus:outline-none"
                        />
                    </div>
                </div>

                <div className="relative mt-4">
                    <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Contact number"
                        className="w-full pl-8 pr-4 py-2 border border-[#E7E7E9] placeholder:text-[#60606A] rounded-[8px] focus:outline-none"
                    />
                </div>

                <div className="relative mt-4">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Location"
                        className="w-full pl-8 pr-4 py-2 border border-[#E7E7E9] placeholder:text-[#60606A] rounded-[8px] focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#E7F056] text-black font-semibold py-3 mt-10 lg:mt-18 rounded-[40px] transition-all duration-300"
                >
                    Update
                </button>
            </form>
        </>
    );
};

export default AccountFromPage;
