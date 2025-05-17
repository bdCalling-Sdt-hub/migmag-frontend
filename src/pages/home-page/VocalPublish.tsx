import Image from 'next/image';
import React from 'react'

const VocalPublish: React.FC = () => {
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
    <>
      <div className=' max-w-[1315px] mx-auto px-4 lg:mt-20 mt-8  ' >
        <h1 className=' text-center text-[#000000] lg:text-lg   ' >OUR VOCALS WHERE PUBLISHED BY</h1>
        <div className=' flex flex-col lg:flex-row md:flex-row justify-between mx-auto ' >
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

      </div>
      <div>

      </div>
      <div className=' max-w-[1539px] mx-auto flex flex-col  lg:flex-row  gap-x-14 lg:mt-[110px] md:mt-20 px-4 ' >

        {/* left section  */}
        <div className='  ' >
          <Image src={"/images/home-page/vocal-publish/p-2.png"} className=' object-cover rounded-lg mx-auto ' width={661} height={691} alt='....' />
        </div>
        {/* right section  */}
        <div className=' lg:-mt-1 mt-4   ' >
          <div className=' max-w-[441px] ' >
            <h1 className=' text-2xl lg:text-[35px] font-bold leading-9 ' >Discover vocal that match your tastes</h1>
          </div>
          <div className=' maw-w-[450px] lg:mt-8 mt-3 ' >
            <h1 className=' lg:text-lg leading-6 ' >Your DICE feed is as unique as your taste in music. Connect your Spotify or Apple Music, and we’ll show you relevant events based on your favourite artists.</h1>
          </div>
          <div>



            <div className=' flex flex-col lg:flex-row md:flex-row  items-center lg:gap-x-10 md:gap-10 ' >
              <span>
                <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.0237 19.4673L40.0315 15.949C39.4595 15.281 38.9974 14.034 38.9974 13.1433V9.35787C38.9974 6.99753 37.0833 5.06026 34.7512 5.06026H31.011C30.1529 5.06026 28.8988 4.59265 28.2388 4.0137L24.7626 0.985332C23.2445 -0.328444 20.7583 -0.328444 19.2182 0.985332L15.7639 4.03596C15.1039 4.59265 13.8498 5.06026 12.9918 5.06026H9.18555C6.85341 5.06026 4.9393 6.99753 4.9393 9.35787V13.1656C4.9393 14.034 4.47727 15.281 3.92724 15.949L0.957057 19.4896C-0.319019 21.026 -0.319019 23.5199 0.957057 25.0564L3.92724 28.5969C4.47727 29.2649 4.9393 30.5119 4.9393 31.3803V35.1881C4.9393 37.5484 6.85341 39.4857 9.18555 39.4857H12.9918C13.8498 39.4857 15.1039 39.9533 15.7639 40.5322L19.2402 43.5606C20.7583 44.8744 23.2445 44.8744 24.7846 43.5606L28.2608 40.5322C28.9208 39.9533 30.1529 39.4857 31.033 39.4857H34.7732C37.1053 39.4857 39.0194 37.5484 39.0194 35.1881V31.4026C39.0194 30.5342 39.4815 29.2649 40.0535 28.5969L43.0457 25.0787C44.3218 23.5422 44.3218 21.0037 43.0237 19.4673ZM31.143 18.0644L20.5163 28.8196C20.2083 29.1313 19.7903 29.3095 19.3503 29.3095C18.9102 29.3095 18.4922 29.1313 18.1842 28.8196L12.8598 23.4309C12.2217 22.7851 12.2217 21.7163 12.8598 21.0705C13.4978 20.4248 14.5539 20.4248 15.1919 21.0705L19.3503 25.2791L28.8108 15.7041C29.4489 15.0583 30.5049 15.0583 31.143 15.7041C31.781 16.3498 31.781 17.4187 31.143 18.0644Z" fill="black" />
                </svg>

              </span>
              <div className='  ' >
                <p className=' mt-3 lg:mt-7 text-[#000000] font-bold text-lg leading-6 ' >
                  Only the best Vocals
                </p>
                <div className=' max-w-[691px] ' >
                  <h1 className=' mt-3 lg:mt-5 font-thin text-lg text-[#000000] leading-6 text-justify lg:text-start ' >We make sure that you get only the best premium quality vocals by only working with the industry’s finest artists. This makes us the #1 vocal provider.</h1>
                </div>
              </div>
            </div>




            <div className=' flex flex-col lg:flex-row md:flex-row  items-center lg:gap-x-10 md:gap-10   ' >
              <span>
                <svg width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.1079 8.96064H25.9434C25.2488 8.96064 24.6728 8.35132 24.6728 7.61655C24.6728 6.88178 25.2488 6.27246 25.9434 6.27246H36.1079C36.8025 6.27246 37.3785 6.88178 37.3785 7.61655C37.3785 8.35132 36.8025 8.96064 36.1079 8.96064Z" fill="#818080" />
                  <path d="M9.00249 8.96064H2.22613C1.53156 8.96064 0.955566 8.35132 0.955566 7.61655C0.955566 6.88178 1.53156 6.27246 2.22613 6.27246H9.00249C9.69706 6.27246 10.2731 6.88178 10.2731 7.61655C10.2731 8.35132 9.69706 8.96064 9.00249 8.96064Z" fill="#818080" />
                  <path d="M15.7789 15.233C11.8147 15.233 8.57898 11.8101 8.57898 7.6165C8.57898 3.42295 11.8147 0 15.7789 0C19.743 0 22.9787 3.42295 22.9787 7.6165C22.9787 11.8101 19.743 15.233 15.7789 15.233ZM15.7789 2.68818C13.2038 2.68818 11.1201 4.89248 11.1201 7.6165C11.1201 10.3405 13.2038 12.5448 15.7789 12.5448C18.3539 12.5448 20.4376 10.3405 20.4376 7.6165C20.4376 4.89248 18.3539 2.68818 15.7789 2.68818Z" fill="#818080" />
                  <path d="M36.1079 28.674H29.3315C28.637 28.674 28.061 28.0647 28.061 27.3299C28.061 26.5952 28.637 25.9858 29.3315 25.9858H36.1079C36.8025 25.9858 37.3785 26.5952 37.3785 27.3299C37.3785 28.0647 36.8025 28.674 36.1079 28.674Z" fill="#818080" />
                  <path d="M12.3907 28.674H2.22613C1.53156 28.674 0.955566 28.0647 0.955566 27.3299C0.955566 26.5952 1.53156 25.9858 2.22613 25.9858H12.3907C13.0852 25.9858 13.6612 26.5952 13.6612 27.3299C13.6612 28.0647 13.0852 28.674 12.3907 28.674Z" fill="#818080" />
                  <path d="M22.5552 34.9469C18.5911 34.9469 15.3553 31.5239 15.3553 27.3304C15.3553 23.1368 18.5911 19.7139 22.5552 19.7139C26.5194 19.7139 29.7551 23.1368 29.7551 27.3304C29.7551 31.5239 26.5194 34.9469 22.5552 34.9469ZM22.5552 22.402C19.9802 22.402 17.8965 24.6064 17.8965 27.3304C17.8965 30.0544 19.9802 32.2587 22.5552 32.2587C25.1302 32.2587 27.214 30.0544 27.214 27.3304C27.214 24.6064 25.1302 22.402 22.5552 22.402Z" fill="#818080" />
                </svg>


              </span>
              <div className='  ' >
                <p className=' mt-3 lg:mt-7 text-[#818080] font-bold text-lg leading-6 ' >
                  Not Overused
                </p>
                <div className=' max-w-[691px] ' >
                  <h1 className=' lg:mt-5 font-thin mt-2 lg:text-lg text-[#818080] leading-6 text-justify lg:text-start ' >You find our vocals only on Vocalfy and nowhere else. We delete our Non-Exclusive vocals regularly to make sure you’ll get a rare vocal.</h1>
                </div>
              </div>
            </div>


            <div className=' flex flex-col lg:flex-row md:flex-row  items-center lg:gap-x-10 md:gap-10   ' >
              <span>
                <svg width="38" height="35" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.1079 8.96064H25.9434C25.2488 8.96064 24.6728 8.35132 24.6728 7.61655C24.6728 6.88178 25.2488 6.27246 25.9434 6.27246H36.1079C36.8025 6.27246 37.3785 6.88178 37.3785 7.61655C37.3785 8.35132 36.8025 8.96064 36.1079 8.96064Z" fill="#818080" />
                  <path d="M9.00249 8.96064H2.22613C1.53156 8.96064 0.955566 8.35132 0.955566 7.61655C0.955566 6.88178 1.53156 6.27246 2.22613 6.27246H9.00249C9.69706 6.27246 10.2731 6.88178 10.2731 7.61655C10.2731 8.35132 9.69706 8.96064 9.00249 8.96064Z" fill="#818080" />
                  <path d="M15.7789 15.233C11.8147 15.233 8.57898 11.8101 8.57898 7.6165C8.57898 3.42295 11.8147 0 15.7789 0C19.743 0 22.9787 3.42295 22.9787 7.6165C22.9787 11.8101 19.743 15.233 15.7789 15.233ZM15.7789 2.68818C13.2038 2.68818 11.1201 4.89248 11.1201 7.6165C11.1201 10.3405 13.2038 12.5448 15.7789 12.5448C18.3539 12.5448 20.4376 10.3405 20.4376 7.6165C20.4376 4.89248 18.3539 2.68818 15.7789 2.68818Z" fill="#818080" />
                  <path d="M36.1079 28.674H29.3315C28.637 28.674 28.061 28.0647 28.061 27.3299C28.061 26.5952 28.637 25.9858 29.3315 25.9858H36.1079C36.8025 25.9858 37.3785 26.5952 37.3785 27.3299C37.3785 28.0647 36.8025 28.674 36.1079 28.674Z" fill="#818080" />
                  <path d="M12.3907 28.674H2.22613C1.53156 28.674 0.955566 28.0647 0.955566 27.3299C0.955566 26.5952 1.53156 25.9858 2.22613 25.9858H12.3907C13.0852 25.9858 13.6612 26.5952 13.6612 27.3299C13.6612 28.0647 13.0852 28.674 12.3907 28.674Z" fill="#818080" />
                  <path d="M22.5552 34.9469C18.5911 34.9469 15.3553 31.5239 15.3553 27.3304C15.3553 23.1368 18.5911 19.7139 22.5552 19.7139C26.5194 19.7139 29.7551 23.1368 29.7551 27.3304C29.7551 31.5239 26.5194 34.9469 22.5552 34.9469ZM22.5552 22.402C19.9802 22.402 17.8965 24.6064 17.8965 27.3304C17.8965 30.0544 19.9802 32.2587 22.5552 32.2587C25.1302 32.2587 27.214 30.0544 27.214 27.3304C27.214 24.6064 25.1302 22.402 22.5552 22.402Z" fill="#818080" />
                </svg>


              </span>
              <div className='  ' >
                <p className=' lg:mt-8 mt-3 text-[#818080] font-bold text-lg leading-6 ' >
                  Not Overused
                </p>
                <div className=' max-w-[691px] ' >
                  <h1 className=' lg:mt-5 mt-2 font-thin text-lg text-[#818080] leading-6 text-justify lg:text-start ' >You find our vocals only on Vocalfy and nowhere else. We delete our Non-Exclusive vocals regularly to make sure you’ll get a rare vocal.</h1>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

      
      <div className='max-w-[1539px] mx-auto px-4 ' >
        <div className=' maw-w-[1116px]  ' >
          <h1 className=' lg:text-[90px] md:text-4xl text-2xl font-thin lg:mt-32 md:20 mt-7 ' >“LOVE TUNEM - GREAT CHOICE AND  EVEN BETTER SERVICE” </h1>
          <p className="mt-2 text-lg font-medium text-gray-600">Simon Godard, London</p>
        </div>
      </div>


      <div className="bg-[url('/images/home-page/vocal-publish/publishBg.png')] bg-no-repeat bg-cover bg-center  h-[65vh] lg:mt-[110px] md:mt-20 mt-8  w-full" >

      </div>



    </>
  )
}

export default VocalPublish


