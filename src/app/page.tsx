import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="max-w-[1549px] mx-auto lg:px-0 px-4 md:px-8">
      <Navbar />
      <div className="lg:mt-[75px] mt-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-0">
        {/* Left Side */}
        <div className="max-w-[658px] mt-[40px] lg:mt-[187px] text-center lg:text-left">
          <h1 className="text-[36px] md:text-[46px] lg:text-[56px] text-[#000000] leading-[1.2] uppercase font-bold">
            Royalty-free vocals with the pitch love
          </h1>
          <p className="text-[#000000] text-base md:text-lg mt-4 md:mt-8 leading-6">
            A modern library for musicians and producers.
          </p>
          <div className="max-w-[478px] mx-auto lg:mx-0">
            <span className="text-[#504E4E] text-sm md:text-base leading-6 mt-1 block">
              Discover our vocal library where you may find everything you need to use for your music and videos.
            </span>
          </div>
          <div className="mt-8 md:mt-12">
            <Link href="/" passHref>
              <button className="bg-[#000000] w-[194px] text-white py-2 rounded-2xl text-lg">
                BROWSE VOCALS
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/home-page/home-banner-img.png"
            alt="banner-image"
            width={500}
            height={700}
            className="w-[90%] md:w-[70%] lg:w-auto h-auto object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
