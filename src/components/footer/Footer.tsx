import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <div className="mt-16 px-4 md:px-8">
            <div className="max-w-[1539px] mx-auto">
                {/* Logo */}
                <div className="mx-auto flex justify-center">
                    <span>
                        <svg width="96" height="41" viewBox="0 0 96 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_2391)">
                                <path d="M95.9945 9.38879V40.906H69.7846V15.941C69.7846 15.941 61.1104 16.3613 61.1104 31.2684V41.0055H34.84V30.4334C34.2893 16.3613 26.1658 15.941 26.1658 15.941V40.9005H0V9.38326H26.1658C26.1658 9.38326 32.0422 9.38325 34.84 17.0082V0H61.0829V17.0856C63.8091 9.38879 69.7571 9.38879 69.7571 9.38879H95.9945Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_2391">
                                    <rect width="96" height="41" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </div>

                {/* Divider */}
                <div className="text-black border border-[#000000] "></div>

                {/* Newsletter and Description */}
                <div className="mt-12 flex flex-col lg:flex-row justify-between gap-10">
                    <div>
                        <h1 className="font-bold text-3xl lg:text-[35px] leading-9 text-[#000000]">Sign-up to our newsletter</h1>
                        <div className="max-w-[478px] mt-4">
                            <p className="text-lg leading-6 text-[#000000]">
                                Our newsletter is published every month and contains lots of inspiration and updates from music life at TUNEM.
                            </p>
                        </div>
                        <div className="mt-6">
                            <Link href="/register">
                                <button className="w-[194px] rounded-2xl border border-[#000000] text-[#000000] text-lg py-1.5">
                                    REGISTER
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="max-w-[478px]">
                            <p className="text-[#000000] text-lg leading-6">
                                Vocalfy boosts your career with the best vocals. We have unique and special singers, top song-writers, producers and professional recording studios to ensure you get the vocal you’ve been looking for.
                            </p>
                        </div>
                        <div className="mt-12 lg:mt-24 flex justify-end">
                            <h1 className="text-[#000000] text-lg font-bold leading-9">FOLLOW US</h1>
                        </div>
                        <div className="flex gap-x-5 justify-end mt-7">
                            <div className="w-[31px] h-[31px] bg-black rounded-full"></div>
                            <div className="w-[31px] h-[31px] bg-black rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border border-[#000000] mt-12"></div>

                {/* Payment Methods and Links */}
                <div className="mt-7 pb-20 flex flex-col md:flex-row justify-between gap-10">
                    <div>
                        <h1>Payment methods</h1>
                        <div className="flex mt-2 gap-4">
                            <div className="w-[31px] h-[31px] bg-[#818080] rounded-full"></div>
                            <div className="w-[31px] h-[31px] bg-[#818080] rounded-full"></div>
                            <div className="w-[31px] h-[31px] bg-[#818080] rounded-full"></div>
                            <div className="w-[31px] h-[31px] bg-[#818080] rounded-full"></div>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-wrap gap-10">
                        <div>
                            <ul className="flex flex-col gap-1">
                                <li className="text-lg text-[#000000] font-bold leading-9">TUNEM</li>
                                <li><Link className="text-lg text-[#000000] leading-9" href="">About</Link></li>
                                <li><Link className="text-lg text-[#000000] leading-9" href="">Hire a Singer</Link></li>
                                <li><Link className="text-lg text-[#000000] leading-9" href="">Production</Link></li>
                                <li><Link className="text-lg text-[#000000] leading-9" href="">Courses</Link></li>
                                <li><Link className="text-lg text-[#000000] leading-9" href="">Contact Us</Link></li>
                            </ul>
                        </div>

                        <div>
                            <ul className="flex flex-col gap-1">
                                <li className="text-lg text-[#000000] font-bold leading-9">SUPPORT</li>
                                <li><Link className="text-lg text-[#000000] leading-9" href="">Help Centre</Link></li>
                                <li><Link className="text-lg text-[#000000] leading-9" href="">Support</Link></li>
                                <li><Link className="text-lg text-[#000000] leading-9" href="">Refund Policy</Link></li>
                            </ul>
                        </div>

                        <div>
                            <ul className="flex flex-col gap-1">
                                <li className="text-lg text-[#000000] font-bold leading-9">WORK WITH US</li>
                                <li><Link className="text-lg text-[#000000] leading-9" href="">TUNEM for Artists</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
