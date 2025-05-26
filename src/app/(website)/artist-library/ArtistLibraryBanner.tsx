import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArtistLibraryBanner = () => {
    return (
        <div className=' max-w-[1539px] mx-auto px-4  ' >
            <div className=' ' >
                <div className=' lg:mt-14 mt-10 flex flex-col lg:flex-row justify-between ' >
                    {/* left side  */}
                    <div className=' max-w-2xl text-white ' >
                        <div className=' max-w-[633px] lg:text-[60px] text-4xl lg:leading-20 ' >
                            TALENTED ARTISTS AVAILABLE FOR  <span className=' text-[#E7F056] ' > YOUR TRACKS</span>
                        </div>
                        <div className=' max-w-[436px] mt-3 lg:mt-16 text-lg leading-6 font-bold ' >
                            <p>
                                Looking for someone with that something special? Contact us and leet us know what you’re after, and we’ll search the world for you!
                            </p>
                        </div>
                        
                        <div className=' flex gap-3.5 lg:gap-12 items-center mb-6 lg:mt-20 mt-8 ' >
                            <Link className=' cursor-pointer ' href={"/contact"}><button className=' cursor-pointer text-[#E7F056] text-lg border border-[#E7F056] rounded-2xl px-7 py-2  ' >CONTACT US</button></Link>
                        </div>
                    </div>
                    {/* right side  */}
                    <div>
                        <Image
                            src="/images/browse-vocal/banner/browse-vocal-banner.jpg"
                            width={772}
                            height={478}
                            alt="Browse Vocal Banner"
                            className=' object-cover rounded  '
                        />

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ArtistLibraryBanner
