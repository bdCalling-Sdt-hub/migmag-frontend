import Image from 'next/image'
import React from 'react'

const Coverd = () => {
    
    return (
        <div className=' max-w-[1539px] mx-auto px-4 mt-10 lg:mt-[91px] ' >
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
                    <Image src={"/images/home-page/coveredImg.png"} className=' object-cover rounded-lg ' width={652} height={654} alt='....' />
                </div>
            </div>
        </div>
    )
}

export default Coverd
