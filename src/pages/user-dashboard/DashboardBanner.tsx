import Image from 'next/image';

export default function Banner() {
    return (
        <div className="flex flex-col 2xl:flex-row justify-between gap-6 2xl:gap-24">
            {/* Left Side - Banner */}
            <div className="relative w-full h-[280px] md:h-[350px] lg:max-w-[895px] lg:h-[278px]">
                {/* Banner Image */}
                <Image
                    src="/images/user-dashboard/home/banner/banner.jpg"
                    alt="Banner"
                    fill
                    className="object-cover rounded"
                    priority
                />

                {/* Overlay Content at Top-Left */}
                <div className="absolute inset-0 text-white flex flex-col items-start justify-start p-4 md:p-6 bg-gradient-to-b from-black/70 via-black/30 to-transparent">
                    <h1 className="text-lg md:text-xl lg:text-2xl text-[#E7F056] font-bold leading-snug">New artist entry</h1>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight uppercase mt-1">chemical solo</h2>

                    {/* Location */}
                    <div className="flex items-center gap-2 mt-3 md:mt-4">
                        <span>
                            <svg width="20" height="20" className="md:w-6 md:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 12C19.5 17.018 14.0117 20.4027 12.4249 21.2764C12.1568 21.424 11.8432 21.424 11.5751 21.2764C9.98831 20.4027 4.5 17.018 4.5 12C4.5 7.5 8.13401 4.5 12 4.5C16 4.5 19.5 7.5 19.5 12Z" stroke="white" />
                                <circle cx="12" cy="12" r="3.5" stroke="white" />
                            </svg>
                        </span>
                        <p className="text-sm md:text-base">ROME</p>
                    </div>

                    {/* Role */}
                    <div className="flex items-center gap-2 mt-2">
                        <span>
                            <svg width="20" height="20" className="md:w-6 md:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="16" y="12" width="4" height="7" rx="2" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                <rect x="4" y="12" width="4" height="7" rx="2" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                <path d="M4 13V16" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 13V16" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 13C20 10.6131 19.1571 8.32387 17.6569 6.63604C16.1566 4.94821 14.1217 4 12 4C9.87827 4 7.84344 4.94821 6.34315 6.63604C4.84286 8.32387 4 10.6131 4 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <p className="text-sm md:text-base leading-tight">Electronic Vocalist</p>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between w-full mt-3">
                        <p className="text-sm md:text-base ml-4">06 VOCAL</p>
                        <button className="border border-white text-sm md:text-lg rounded-2xl px-6 py-1">LISTEN</button>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full flex flex-col justify-between 2xl:space-y-6 space-y-6 ">
                {/* Top Card */}
                <div className="bg-[#333333] p-4 md:p-6 rounded-md max-h-[160px]">
                    <h1 className="text-white text-[18px] md:text-[22px] lg:text-[25px] leading-snug">
                        Looking for tailor-made <br className="hidden md:block" /> audio production?
                    </h1>
                    <p className="mt- text-[#818080] text-sm md:text-base lg:text-lg">
                        Collaborate with us
                    </p>
                    <div className="flex justify-end ">
                        <div className="flex gap-x-3 items-center">
                            <p className="text-white text-sm">View Services</p>
                            <div className="bg-[#E7F056] w-6 h-6 md:w-7 md:h-7 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Card */}
                <div className="bg-[#333333] p-4 rounded-md min-h-[70px]">
                    <div className="flex items-center justify-between">
                        <p className="text-white text-sm md:text-lg">Contact our team</p>
                        <div className="bg-[#E7F056] w-6 h-6 md:w-7 md:h-7 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
