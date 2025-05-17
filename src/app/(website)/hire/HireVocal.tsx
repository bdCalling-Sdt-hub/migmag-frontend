import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HireVocal: React.FC = () => {
    interface VocalInt {
        image: string;
    };

    const vocalData: VocalInt[] = [
        {
            image: "/images/home-page/vocal-publish/p-1.png"
        },

        {
            image: "/images/home-page/vocal-publish/p-1.png"
        },

        {
            image: "/images/home-page/vocal-publish/p-1.png"
        },

        {
            image: "/images/home-page/vocal-publish/p-1.png"
        },
        {
            image: "/images/home-page/vocal-publish/p-1.png"
        },

    ]
    return (
        <div className=' px-4' >
            <h1 className=' text-center lg:mt-14 md:mt-7 mt-4 text-[#000000] md:text-lg  ' >HERE OUR VOCALS ON</h1>
            <div className=' flex justify-between max-w-[1315px] mx-auto lg:mt-14 md:mt-7 mt-2 ' >
                {
                    vocalData.map((item, i) => {
                        return (
                            <div key={i} >
                                <Image src={item.image} width={175} height={85} className=' object-cover block mx-auto ' alt="..." />
                            </div>
                        )
                    })
                }
            </div>
            <div className=' max-w-[1449px] mx-auto my-1 ' >
                <div className=' flex lg:flex-row flex-col items-start justify-between relative lg:gap-5 lg:mt-40 ' >
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
                                How it works?
                            </h1>
                        </div>

                        <div className=' max-w-[478px] lg:mt-8 mt-3 ' >
                            <h1 className=' lg:text-lg text-[#000000] leading-6 font-thin ' >
                                We will do advertising for you while you can fully focus on your work – without the need to actively search for clients. Beautifully simple for you – we handle everything around your talent. We distribute your skill throughout our network of companies, individual artists, marketplaces and record labels.
                            </h1>
                        </div>



                        <div className="max-w-[700px] mx-auto lg:mt-[50px] mt-7 lg:space-y-12 space-y-3 ">
                            <div className=' flex flex-row gap-5  items-start  ' >
                                <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                                </div>
                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#000000] font-bold lg:text-xl mb-4">Select a singer</p>
                                    <p className="text-[#000000] font-light mt-4 lg:text-lg leading-7">
                                        We make sure that you get only the best premium quality vocals by only working with the industry’s finest artists. This makes us the #1 vocal provider.
                                    </p>
                                </div>
                            </div>

                            <div className=' flex flex-row gap-5  items-start  ' >
                                <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                                </div>
                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#818080] font-bold lg:text-xl mb-4">Describe your project</p>
                                    <p className="text-[#818080] font-light mt-4 lg:text-lg leading-7">
                                        You find our vocals only on Vocalfy and nowhere else. We delete our Non-Exclusive vocals regularly to make sure you’ll get a rare vocal.
                                    </p>
                                </div>
                            </div>

                            <div className=' flex flex-row gap-5  items-start  ' >
                                <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                                </div>
                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#818080] font-bold lg:text-xl mb-4">A few days later: Done</p>
                                    <p className="text-[#818080] font-light mt-4 lg:text-lg leading-7">
                                        Our contracts are easy to understand without any sketchy clauses. Download your license for each of your vocals. Pick a vocal and start without obstacles..
                                    </p>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>
                <div className=' lg:mt-14 md:mt-8 mt-5 ' >
                    <Link href={"/hire"}><button className=' cursor-pointer  block mx-auto lg:text-lg text-[#000000] border border-[#000000] rounded-2xl px-3 md:px-6 py-1.5 md:py-2.5  ' >GET STARTED</button></Link>
                </div>







                

                <div className="">
                    

                    {/* Card Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-8 lg:mt-[59px] mb-6 md:mb-10 lg:mb-20 ">
                        <div className=" p-5 lg:pt-44 pb-14 rounded-md text-[#000000] border border-black shadow ">
                            <h1 className="text-xl lg:text-3xl leading-9 font-bold">
                                Vetted by us
                            </h1>
                            <div className="mt-6 lg:text-lg leading-6">
                                <p>Work with singers - vetted by us for skill and quality.</p>
                            </div>
                        </div>
                        <div className=" p-5 lg:pt-44 pb-14 rounded-md text-[#000000] border border-black shadow ">
                            <h1 className="text-xl lg:text-3xl leading-9 font-bold">
                                Bulletproof contracts
                            </h1>
                            <div className="mt-6 lg:text-lg leading-6">
                                <p>
                                    Our downloadable contracts are signed electronically at the time of purchase and give you full flexibility with your new vocals.
                                </p>
                            </div>
                        </div>
                        <div className=" p-5 lg:pt-44 pb-14 rounded-md text-[#000000] border border-black shadow ">
                            <h1 className="text-xl lg:text-3xl leading-9 font-bold">
                                Delivered in 3 - 10 days
                            </h1>
                            <div className="mt-6 lg:text-lg leading-6">
                                <p>Our vocalists will deliver the recording within 10 days.</p>
                            </div>
                        </div>
                    </div>






                </div>
            </div>
        </div>
    )
}

export default HireVocal
