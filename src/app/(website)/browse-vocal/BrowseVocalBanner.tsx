import Image from 'next/image'
import React from 'react'

const BrowseVocalBanner = () => {
  return (
    <div className=' ' >
      <div className=' lg:mt-14 mt-6 flex flex-col lg:flex-row justify-between ' >
        {/* left side  */}
        <div className=' max-w-2xl text-white ' >
          <div className=' max-w-[668px] lg:text-[80px] text-5xl lg:leading-20 ' >
            Get Studio Quality Acapellas
          </div>
          <div className=' max-w-[561px] mt-3 lg:mt-6 text-lg leading-6 font-bold ' >
            <p>Spark new ideas today with our royalty free acapellas made by professional vocalists.Used by trusted artists and labels.</p>
          </div>
          <div className=' lg:mt-10 my-3 ' >
            <p>Vocals featured with:</p>
          </div>
          <div className=' flex gap-3.5 lg:gap-12 items-center mb-6 lg:mt-10 ' >
            {/* 1st circle */}
            <div className='  lg:w-[90px] w-[50px] h-[50px] lg:h-[90px] rounded-full bg-[#D9D9D9] ' ></div>
            <div className='  lg:w-[90px] w-[50px] h-[50px] lg:h-[90px] rounded-full bg-[#D9D9D9] ' ></div>
            <div className='  lg:w-[90px] w-[50px] h-[50px] lg:h-[90px] rounded-full bg-[#D9D9D9] ' ></div>
            <div className='  lg:w-[90px] w-[50px] h-[50px] lg:h-[90px] rounded-full bg-[#D9D9D9] ' ></div>
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
  )
}

export default BrowseVocalBanner
