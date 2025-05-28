import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Artist = {
    id: number;
    image: string;
    name: string;
    title: string;
    description: string;
};

const artistsData: Artist[] = [
   
    {
        id: 3,
        image: "/images/home-page/artist/singer-2.png",
        name: "Samuel Green",
        title: "Guitarist",
        description: "Expert in blending melodic riffs with powerful solos on stage.",
    },
    
    {
        id: 5,
        image: "/images/home-page/artist/singer-3.png",
        name: "Liam Johnson",
        title: "Drummer",
        description: "Creates rhythmic energy with dynamic precision and style.",
    },
];

const ArtistSlider: React.FC = () => {
    const sliderRef = React.useRef<Slider | null>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const handlePrev = () => sliderRef.current?.slickPrev();
    const handleNext = () => sliderRef.current?.slickNext();

    return (
        <>
            <div style={{ fontFamily: 'Favorit' }} className="max-w-[1588px] lg:block hidden mt-24 mb-28 mx-auto relative px-4">
                {/* Custom Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-[-1px] transform -translate-y-1/2 bg-[#D9D9D9] text-black w-8 h-8 md:w-[54px] md:h-[54px] cursor-pointer rounded-full shadow-lg z-10 flex items-center justify-center"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={20} className="md:ml-0" />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute top-1/2  right-1 transform -translate-y-1/2 bg-[#D9D9D9] text-black w-8 h-8 md:w-[54px] md:h-[54px] cursor-pointer rounded-full shadow-lg z-10 flex items-center justify-center"
                    aria-label="Next Slide"
                >
                    <ChevronRight size={20} className="md:ml-0" />
                </button>

                <div className="lg:max-w-6xl mx-auto">
                    <Slider ref={sliderRef} {...settings}>
                        {artistsData.map((item) => (
                            <div key={item.id}>
                                <div className="bg-white flex flex-col md:flex-row items-center gap-6 md:gap-20 p-6 md:p-12 rounded-lg overflow-hidden">
                                    <Image
                                        src={item.image}
                                        width={300}
                                        height={320}
                                        alt={item.name}
                                        className="object-cover rounded-md w-full max-w-xs md:max-w-none"
                                    />
                                    <div className="max-w-full md:max-w-[785px] text-center md:text-left">
                                        <p className=" text-3xl leading-9 mb-4  text-justify text-black">
                                            {item.description}
                                        </p>
                                        <h3 className="text-2xl md:text-[35px] font-bold leading-tight md:leading-snug">
                                            {item.name}
                                        </h3>
                                        <p className="text-lg md:text-2xl text-[#504E4E] leading-snug md:leading-relaxed">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div>

                {/* small device */}


                <div className="max-w-[1588px] lg:hidden  mx-auto relative px-4 my-6 ">
                    

                    <div className="lg:max-w-6xl mx-auto flex flex-col ">
                        {artistsData.map((item) => (
                            <div key={item.id}>
                                <div className="bg-white flex flex-col  rounded-lg overflow-hidden">
                                    <Image
                                        src={item.image}
                                        width={288}
                                        height={320}
                                        alt={item.name}
                                        className="object-cover rounded-md w-full max-w-xs md:max-w-none"
                                    />
                                    <div className="max-w-full md:max-w-[785px]  text-justify my-3 ">
                                        <p className="  text-black text-[15px] font-medium ">
                                            {item.description}
                                        </p>
                                        <h3 className=" mt-2">
                                            {item.name}
                                        </h3>
                                        <p className=" text-[#504E4E] ">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtistSlider;
