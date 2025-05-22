import Image from 'next/image';
import React from 'react';
import UserPurchases from './UserPurchases';
import ResentSearch from './ResentSearch';

const Hero: React.FC = () => {
    return (
        <div className="p-4">
            {/* Top Icon */}
            <div className="mb-4">
                <span>
                    <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 15.7676H5.72728C5.59497 15.7676 5.52881 15.7676 5.47135 15.7692C3.51875 15.8254 1.89228 17.2836 1.62415 19.2185C1.61626 19.2755 1.60906 19.3412 1.59467 19.4728L1.53547 20.014C1.26629 22.4746 3.41674 24.5143 5.8597 24.1155V24.1155C7.67037 23.82 9 22.2557 9 20.4211V5.93177C9 4.38709 9 3.61475 9.44265 3.06539C9.8853 2.51604 10.64 2.35178 12.1493 2.02328L14.7041 1.46724C14.8378 1.43814 14.9046 1.42359 14.9431 1.46115C14.9816 1.49871 14.9688 1.5659 14.9431 1.70027L14.0237 6.50238C14.0122 6.56265 14.0064 6.59279 13.9867 6.61391C13.9669 6.63503 13.9372 6.64278 13.8778 6.65829L9 7.93227"
                            stroke="white" strokeWidth="2"
                        />
                    </svg>
                </span>
            </div>

            {/* Main Flex Section */}
            <div className="flex flex-col gap-6 lg:flex-row justify-between">
                {/* Left Section: Stats Cards */}
                <>
                    <div className="flex flex-col md:flex-row gap-6  lg:max-w-[895px]">
                        {/* Card 1 */}
                        <div className="bg-[#E7F056] w-full md:w-[271px] rounded-md p-6">
                            <h1 className="text-[#222222] text-[23px] leading-6 font-bold">
                                All-time tracks downloaded by you.
                            </h1>
                            <h1 className="text-[#222222] text-8xl mt-6 mb-14">15</h1>
                            <div className="flex justify-end">
                                <div className="flex gap-x-3 items-center">
                                    <p className="text-[#222222] text-sm">View Services</p>
                                    <div className="bg-[#222222] w-6 h-6 md:w-7 md:h-7 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#333333] w-full md:w-[271px] rounded-md p-6 flex flex-col justify-between">
                            <h1 className="text-[#222222] text-[23px] leading-6 font-bold">
                                No on-going projects at the moment?
                            </h1>
                            <div className="flex justify-end mt-10 md:mt-[146px]">
                                <div className="flex gap-x-3 items-center">
                                    <p className="text-white text-sm">View Services</p>
                                    <div className="bg-[#E7F056] w-6 h-6 md:w-7 md:h-7 rounded-full"></div>
                                </div>
                            </div>
                        </div>


                        {/* Card 3 */}
                        <div className="bg-[#333333] w-full md:w-[271px] rounded-md p-6"></div>
                    </div>

                </>

                {/* Right Section: Followed Artist */}
                <div className="bg-[#333333] rounded-md p-6 md:p-8 w-full space-y-10 ">
                    <h1 className="text-white text-lg mb-4">Artists you're following <span className="text-[#E7F056]">(17)</span></h1>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <Image
                            src="/images/home-page/trending-img/slide-1.png"
                            width={71}
                            height={80}
                            alt="Artist"
                            className="object-cover rounded-md"
                        />
                        <div className="flex-1">
                            <h2 className="text-sm text-[#818080] leading-6">Barbie Mack</h2>
                            <h1 className="text-base font-bold underline text-white">Lost In The Night</h1>
                        </div>
                        <button className="w-10 h-10 rounded-full border border-[#E7F056] flex items-center justify-center">
                            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_470)">
                                    <path
                                        d="M0.399433 2.22635V19.7739C0.398038 20.0647 0.474641 20.3504 0.621196 20.6012C0.76775 20.852 0.978852 21.0586 1.23236 21.1992C1.48587 21.3399 1.77245 21.4095 2.06201 21.4008C2.35157 21.392 2.63344 21.3052 2.87805 21.1495L17.2437 11.3472C17.4753 11.2015 17.6662 10.9992 17.7985 10.7591C17.9308 10.5191 18.0003 10.2492 18.0003 9.97492C18.0003 9.7006 17.9308 9.43079 17.7985 9.19076C17.6662 8.95073 17.4753 8.74833 17.2437 8.6026L2.87805 0.857247C2.6339 0.701793 2.35261 0.615034 2.06361 0.606009C1.77461 0.596984 1.48851 0.666013 1.2352 0.805932C0.981888 0.945852 0.770679 1.15152 0.623658 1.40139C0.476638 1.65126 0.39919 1.93617 0.399433 2.22635Z"
                                        fill="#E7F056"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_470">
                                        <rect width="17.6" height="20.8" fill="white" transform="translate(0.399414 0.600098)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <Image
                            src="/images/home-page/trending-img/slide-1.png"
                            width={71}
                            height={80}
                            alt="Artist"
                            className="object-cover rounded-md"
                        />
                        <div className="flex-1">
                            <h2 className="text-sm text-[#818080] leading-6">Barbie Mack</h2>
                            <h1 className="text-base font-bold underline text-white">Lost In The Night</h1>
                        </div>
                        <button className="w-10 h-10 rounded-full border border-[#E7F056] flex items-center justify-center">
                            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_470)">
                                    <path
                                        d="M0.399433 2.22635V19.7739C0.398038 20.0647 0.474641 20.3504 0.621196 20.6012C0.76775 20.852 0.978852 21.0586 1.23236 21.1992C1.48587 21.3399 1.77245 21.4095 2.06201 21.4008C2.35157 21.392 2.63344 21.3052 2.87805 21.1495L17.2437 11.3472C17.4753 11.2015 17.6662 10.9992 17.7985 10.7591C17.9308 10.5191 18.0003 10.2492 18.0003 9.97492C18.0003 9.7006 17.9308 9.43079 17.7985 9.19076C17.6662 8.95073 17.4753 8.74833 17.2437 8.6026L2.87805 0.857247C2.6339 0.701793 2.35261 0.615034 2.06361 0.606009C1.77461 0.596984 1.48851 0.666013 1.2352 0.805932C0.981888 0.945852 0.770679 1.15152 0.623658 1.40139C0.476638 1.65126 0.39919 1.93617 0.399433 2.22635Z"
                                        fill="#E7F056"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_470">
                                        <rect width="17.6" height="20.8" fill="white" transform="translate(0.399414 0.600098)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:max-w-[860px]' >
                <UserPurchases></UserPurchases>
                <ResentSearch></ResentSearch>
            </div>
        </div>
    );
};

export default Hero;
