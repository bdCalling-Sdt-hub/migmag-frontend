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
        id: 2,
        image: "/images/home-page/artist/singer-1.png",
        name: "Jane Smith",
        title: "Songwriter",
        description: "“TuneM gives me the opportunity to express myself. I'm involved in awesome projects and sing on music made by incredible producers. I love their concept of keeping everything so simple.”.",
    },
    {
        id: 3,
        image: "/images/home-page/artist/singer-2.png",
        name: "Samuel Green",
        title: "Guitarist",
        description: "Expert in blending melodic riffs with powerful solos on stage.",
    },
    {
        id: 4,
        image: "/images/home-page/artist/singer-3.png",
        name: "Ava Martinez",
        title: "Music Producer",
        description: "“TuneM gives me the opportunity to express myself. I'm involved in awesome projects and sing on music made by incredible producers. I love their concept of keeping everything so simple.”",
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handlePrev = () => sliderRef.current?.slickPrev();
    const handleNext = () => sliderRef.current?.slickNext();

    return (
        <div className="max-w-[1588px] mt-24 mb-28 mx-auto relative">
            {/* Custom Arrows */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-[#D9D9D9] text-black w-[54px] h-[54px] cursor-pointer  rounded-full shadow-lg  z-10"
            >
                <ChevronLeft size={24} className=' ml-4 font-bold text-3xl ' />
            </button>

            <button
                onClick={handleNext}
                className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-[#D9D9D9] text-black w-[54px] h-[54px]  cursor-pointer rounded-full shadow-lg  z-10"
            >
                <ChevronRight size={24} className=' ml-4 font-bold text-3xl ' />
            </button>

            <div className=' max-w-6xl mx-auto ' >
                {/* Slider */}
                <Slider ref={sliderRef} {...settings}>
                    {artistsData.map((item, i) => (
                        <div key={i} className="  ">
                            <div className="bg-white  flex flex-row items-center gap-32 rounded-lg overflow-hidden">
                                <Image
                                    src={item.image}
                                    width={288}
                                    height={320}
                                    alt={item.name}
                                    className=" object-cover rounded-md "
                                />
                                <div className=" max-w-[785px] ">
                                    <div className=' h-52 ' >
                                        <p className="mt-2 text-[#000000] leading-10 text-3xl mb-20 ">{item.description}</p>
                                    </div>
                                    <h3 className=" leading-9 text-[35px] font-bold ">{item.name}</h3>
                                    <p className=" text-[#504E4E] leading-9 text-2xl ">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ArtistSlider;
