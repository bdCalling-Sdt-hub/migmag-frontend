import Image from 'next/image'
import React from 'react'

const ApplayTune: React.FC = () => {
    return (
        <div className=' px-4 max-w-[1466px] mx-auto mb-[83px] ' >
            <div className=' flex lg:flex-row-reverse flex-col items-center justify-between relative lg:gap-5 lg:mt-40 ' >

                {/* left side  */}
                <div>
                    <Image src={"/images/home-page/coveredImg.png"} className=' object-cover rounded-lg block mx-auto my-1 ' width={652} height={654} alt='....' />
                </div>
                {/* right side  */}
                <div>
                    <div className=' max-w-[411px] ' >
                        <h1 className=' text-2xl lg:text-[35px] font-bold text-[#000000] leading-9 ' >
                            Apply to become a vocalist at TUNEM.
                        </h1>
                    </div>

                    <div className=' max-w-[698px] lg:mt-8 mt-3 ' >
                        <h1 className=' lg:text-lg text-[#000000] leading-6 font-thin ' >
                            What’s required? Browse and purchase acapellas created by top singers from around the world. Use them to create original music that you can release and profit from.
                        </h1>
                    </div>



                    <div className="max-w-[700px] mx-auto lg:mt-[50px] mt-7 lg:space-y-[72px] space-y-3 ">
                        <div className=' flex flex-row gap-5  items-start  ' >
                            <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                            </div>
                            <div className=" transition duration-300 w-full ">
                                <p className="text-[#000000] font-bold lg:text-xl mb-4">Singing</p>
                                <p className="text-[#000000] font-light mt-4 lg:text-lg leading-7">
                                    Perfectly edited by our industry-leading vocal editors to make your music the best it can be. 3 Vocal Takes and edited vocals are always included.
                                </p>
                            </div>
                        </div>

                        <div className=' flex flex-row gap-5  items-start  ' >
                            <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                            </div>
                            <div className=" transition duration-300 w-full ">
                                <p className="text-[#000000] font-bold lg:text-xl mb-4">Studio/Recording Experience (exporting stems)</p>
                                <p className="text-[#000000] font-light mt-4 lg:text-lg leading-7">
                                    All singers are fully verified and must meet our high quality standards regarding skill, lyrics and recording quality. Message and hire our artists for your projects.                                </p>
                            </div>
                        </div>

                        <div className=' flex flex-row gap-5  items-start  ' >
                            <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                            </div>
                            <div className=" transition duration-300 w-full ">
                                <p className="text-[#000000] font-bold lg:text-xl mb-4">Good grasp on English language</p>
                                <p className="text-[#000000] font-light mt-4 lg:text-lg leading-7">
                                    All singers are fully verified and must meet our high quality standards regarding skill, lyrics and recording quality. Message and hire.
                                </p>
                            </div>
                        </div>
                    </div>





                </div>

            </div>
        </div>
    )
}

export default ApplayTune
