import Image from 'next/image';
import React from 'react'

const DiscoverVocal: React.FC = () => {
    return (
        <div className=' max-w-[1550px] mx-auto ' >
            <div className=' flex lg:flex-row flex-col items-start justify-between relative lg:gap-5 lg:mt-24 ' >
                <div>
                    <p className=' lg:rotate-90 text-[#000000] lg:text-lg lg:absolute lg:top-14 lg:-ml-20   ' >JUST FOR YOU</p>
                </div>
                {/* left side  */}
                <div>
                    <Image src={"/images/hire/bannerImg/hireBannerImg.png"} className=' object-cover rounded-lg block mx-auto my-1 ' width={652} height={654} alt='....' />
                </div>
                {/* right side  */}
                <div>
                    <div className=' max-w-[411px] ' >
                        <h1 className=' text-2xl lg:text-[35px] font-bold text-[#000000] leading-9 ' >
                            Discover vocal that match your tastes
                        </h1>
                    </div>

                    <div className=' max-w-[478px] lg:mt-8 mt-3 ' >
                        <h1 className=' lg:text-lg text-[#000000] leading-6 font-thin ' >
                            We will do advertising for you while you can fully focus on your work – without the need to actively search for clients. Beautifully simple for you – we handle everything around your talent.
                            We distribute your skill throughout our network of companies, individual artists, marketplaces and record labels.                        </h1>
                    </div>



                    <div className="max-w-[700px] mx-auto lg:mt-[50px] mt-7 lg:space-y-7 space-y-3 ">
                        <div className=' flex flex-row gap-5  items-start  ' >
                            <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                            </div>
                            <div className=" transition duration-300 w-full ">
                                <p className="text-[#000000] font-bold lg:text-xl mb-4">We connect your talent</p>
                                <p className="text-[#000000] font-light mt-4 lg:text-lg leading-7">
                                    We make sure that you get only the best premium quality vocals by only working with the industry’s finest artists. This makes us the #1 vocal provider.                                </p>
                            </div>
                        </div>

                        <div className=' flex flex-row gap-5  items-start  ' >
                            <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                            </div>
                            <div className=" transition duration-300 w-full ">
                                <p className="text-[#818080] font-bold lg:text-xl mb-4">Leave the advertising to us</p>
                                <p className="text-[#818080] font-light mt-4 lg:text-lg leading-7">
                                    You find our vocals only on Vocalfy and nowhere else. We delete our Non-Exclusive vocals regularly to make sure you’ll get a rare vocal.                                </p>
                            </div>
                        </div>

                        <div className=' flex flex-row gap-5  items-start  ' >
                            <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                            </div>
                            <div className=" transition duration-300 w-full ">
                                <p className="text-[#818080] font-bold lg:text-xl mb-4">Distributed through our network</p>
                                <p className="text-[#818080] font-light mt-4 lg:text-lg leading-7">
                                    Our contracts are easy to understand without any sketchy clauses. Download your license for each of your vocals. Pick a vocal and start without obstacles.                                </p>
                            </div>
                        </div>
                    </div>





                </div>

            </div>
        </div>
    )
}

export default DiscoverVocal;
