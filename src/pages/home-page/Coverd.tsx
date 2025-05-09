import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Coverd : React.FC = () => {

    return (
        <div className=' max-w-[1539px] mx-auto px-4 mt-10 lg:mt-[91px]  ' >
            <div className=' flex lg:flex-row flex-col items-start justify-between relative gap-5 ' >
                {/* left side  */}
                <div>
                    <div className=' max-w-[411px] ' >
                        <h1 className=' text-2xl lg:text-[35px] font-bold text-[#000000] leading-9 ' >
                            We’ve got you <br /> covered
                        </h1>
                    </div>

                    <div className=' max-w-[478px] lg:mt-8 mt-3 ' >
                        <h1 className=' lg:text-lg text-[#000000] leading-6 font-thin ' >Browse and purchase acapellas created by top singers from around the world. Use them to create original music that you can release and profit from.</h1>
                    </div>



                    <div className="max-w-[691px] mx-auto lg:mt-[61px] mt-7 lg:space-y-14 space-y-3 ml-[10%] ">
                        <div className=" transition duration-300">
                            <p className="text-[#000000] font-bold lg:text-xl mb-4">Premium-Quality Vocals</p>
                            <p className="text-[#000000] font-light mt-4 lg:text-lg leading-7">
                                Perfectly edited by our industry-leading vocal editors to make your music the best it can be. 3 Vocal Takes and edited vocals are always included.
                            </p>
                        </div>

                        <div className=" transition duration-300">
                            <p className="text-[#000000] font-bold lg:text-xl mb-4">Premium-Quality Vocals</p>
                            <p className="text-[#000000] font-light mt-4 lg:text-lg leading-7">
                                Perfectly edited by our industry-leading vocal editors to make your music the best it can be. 3 Vocal Takes and edited vocals are always included.
                            </p>
                        </div>

                        <div className=" transition duration-300">
                            <p className="text-[#000000] font-bold lg:text-xl mb-4">Premium-Quality Vocals</p>
                            <p className="text-[#000000] font-light lg:text-lg mt-4  leading-7">
                                Perfectly edited by our industry-leading vocal editors to make your music the best it can be. 3 Vocal Takes and edited vocals are always included.
                            </p>
                        </div>
                    </div>






                </div>
                {/* right side  */}
                <div>
                    <Image src={"/images/home-page/coveredImg.png"} className=' object-cover rounded-lg block mx-auto ' width={652} height={654} alt='....' />
                </div>
            </div>


            <div
                className="bg-[url('/images/home-page/tunemImg.png')] bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 rounded-lg mt-16 lg:mt-[107px] relative overflow-hidden"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div>

                <div className="relative z-10">
                    <h1 className="text-center text-[#E7F056] font-bold lg:text-lg">
                        TUNEM FOR ARTISTS
                    </h1>
                    <div className="mx-auto mt-5 lg:mt-16">
                        <h1 className="text-center lg:text-7xl text-3xl text-white font-thin">
                            GROW YOUR <br />
                            REACH & AUDIENCE
                        </h1>
                    </div>
                    <div className="max-w-[482px] mx-auto mt-3 lg:mt-9">
                        <p className="text-center text-white leading-6 lg:text-xl font-thin ">
                            Whether you want to promote your own song, increase revenue or reach a
                            wider audience, artists always benefit from our artists-first approach.
                        </p>
                    </div>
                    <div>
                        <button className="text-[#E7F056] lg:text-lg w-[194px] py-2 border border-white rounded-2xl block mx-auto mt-4 lg:mt-13">
                            <Link href={""}>GET STARTED</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Coverd
