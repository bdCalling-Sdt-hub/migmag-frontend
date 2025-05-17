import Link from 'next/link'
import React from 'react'

const CoreValue: React.FC = () => {
    return (
        <>
            <div className=' max-w-[1426px] mx-auto px-4 lg:py-20 py-4  ' >
                <h1 className=' text-[#000000] text-lg lg:text-[35px] font-bold leading-9 text-center ' >Our core values</h1>
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-8 mt-5 lg:mt-20 ' >
                    <div className=' max-w-[390px] ' >
                        <div className=' flex items-center gap-x-5 ' >
                            <div className=' w-[54px] h-[54px] rounded-full bg-[#D9D9D9] ' ></div>
                            <div><h1 className=' text-[#000000] font-bold lg:text-lg lg:leading-6  ' >We’ve got each other’s back</h1></div>
                        </div>
                        <div className=' mt-2 lg:mt-5 ' >
                            <p className=' text-[#000000] leading-6 text-sm lg:text-lg ' >
                                In order for our people to be happy in their work, it’s essential that we support each other, listen actively and show gratitude
                            </p>
                        </div>
                    </div>
                    <div className=' max-w-[390px] ' >
                        <div className=' flex items-center gap-x-5 ' >
                            <div className=' w-[54px] h-[54px] rounded-full bg-[#D9D9D9] ' ></div>
                            <div><h1 className=' text-[#000000] font-bold lg:text-lg leading-6  ' >We are actively responsible</h1></div>
                        </div>
                        <div>
                            <p className=' text-[#000000] leading-6 text-sm lg:text-lg mt-2 lg:mt-5 ' >
                                We are actively responsibleWe ask ‘how can I help to solve this?’ rather than ‘why did they get it wrong?’, and we empower each another to find solutions
                            </p>
                        </div>
                    </div>
                    <div className=' max-w-[390px] ' >
                        <div className=' flex items-center gap-x-5 ' >
                            <div className=' w-[54px] h-[54px] rounded-full bg-[#D9D9D9] ' ></div>
                            <div><h1 className=' text-[#000000] font-bold lg:text-lg lg:leading-6  ' > If we say it, we do it</h1></div>
                        </div>
                        <div className='lg:mt-5 mt-2 ' >
                            <p className=' text-[#000000] leading-6 text-sm lg:text-lg ' >
                                Changing an entire industry isn’t easy – but whatever we commit to, we stick to it and never let our teammates down
                            </p>
                        </div>
                    </div>
                </div>
            </div>













            <div className=' max-w-[1547px] mx-auto ' >
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
                                <Link href={""}>APPLY NOW</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoreValue
