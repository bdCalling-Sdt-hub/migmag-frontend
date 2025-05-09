"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { CiPause1 } from 'react-icons/ci';
import { FaPlay } from 'react-icons/fa';

const TopTenVocal : React.FC = () => {
    interface AudioItem {
        id: number;
        title: string;
        name: string;
        price: string;
        img: string;
        audio: string;

    }
    const audioData: AudioItem[] = [
        {
            id: 3,
            title: 'Rock Anthem',
            name: 'Bujhina Toh Tai',
            price: '€8',
            img: '/images/home-page/slide-3.png',
            audio: '/images/home-page/audio-1.mp3',

        },
        {
            id: 4,
            title: 'Classic Tune',
            name: 'Tomar Jonno',
            price: '€11',
            img: '/images/home-page/slide-4.png',
            audio: '/images/home-page/audio-2.mp3',
        },
        {
            id: 5,
            title: 'Pop Hit',
            name: 'Ei Mon Tomake',
            price: '€9',
            img: '/images/home-page/slide-4.png',
            audio: '/images/home-page/audio-3.mp3',
        },
        {
            id: 6,
            title: 'Jazz Flow',
            name: 'Hridoyer Kotha',
            price: '€13',
            img: '/images/home-page/slide-4.png',
            audio: '/images/home-page/audio-4.mp3',
        },

    ];
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playingUrl, setPlayingUrl] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);



    const handleTogglePlay = (url: string) => {
        if (playingUrl === url && isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            const audio = new Audio(url);
            audioRef.current = audio;
            audio.play();
            setPlayingUrl(url);
            setIsPlaying(true);
        }
    };
    return (
        <div className="max-w-[1539px] mx-auto">
            <div className="border border-black"></div>
            <div className="mt-7">
                {/* <div className="flex justify-center items-start h-screen">
                    <p className="text-center leading-loose">
                        OUR<br />
                        TOP<br />
                        10<br />
                        VOCALS
                    </p>
                </div> */}
            </div>
            <div>
                <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-x-7 gap-x-3 ">
                    {audioData.map((item, i) => (
                        <div
                            key={item.id}
                            className={`:h-32 flex flex-col gap-y-2 lg:py-2  py-3 lg:flex-row items-center px-10 justify-between border border-black my-2 rounded-lg max-w-[713px] transition-all duration-300
                          ${playingUrl === item.audio && isPlaying
                                    ? 'bg-black'
                                    : i % 2 === 0
                                        ? 'bg-[#F1F1F1]  '
                                        : 'bg-[#FFFFFF]'}
                        `}
                        >
                            <h1 className={`text-3xl ${playingUrl === item.audio && isPlaying ? ' text-white ' : 'text-black '} `}>{i + 1}</h1>
                            <Image
                                src={item.img}
                                width={93}
                                height={91}
                                alt={item.title}
                                className="object-cover rounded-xl"
                            />
                            <div className=" flex flex-col gap-x-1">
                                <h3 className={`text-lg font-bold  leading-6 ${playingUrl === item.audio && isPlaying ? ' text-white ' : 'text-black '}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-lg font-bold flex flex-row gap-x-2.5  leading-6 ${playingUrl === item.audio && isPlaying ? ' text-white ' : 'text-black '}`}>
                                    Luna <span className={`text-[#E7F056] text-lg font-bold leading-6 ${playingUrl === item.audio && isPlaying ? ' text-white ' : 'text-black '} `}>Exclusive</span>
                                </p>
                            </div>
                            <button
                                onClick={() => handleTogglePlay(item.audio)}
                                className={`w-[50px] h-[50px] rounded-full  flex  justify-center items-center self-center1 ${playingUrl === item.audio && isPlaying ? ' border border-[#E7F056] ' : ' border border-black '} `}
                            >
                                {playingUrl === item.audio && isPlaying ? (
                                    <CiPause1 className="text-[#E7F056] text-2xl" />
                                ) : (
                                    <FaPlay />
                                )}
                            </button>
                            <div>
                                <button className={`w-[112px]  rounded-2xl  text-lg py-1 ${playingUrl === item.audio && isPlaying ? ' text-black bg-[#E7F056] ' : 'bg-black text-white '} `}>
                                    {item.price}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


                <div className=' flex lg:flex-row flex-col mx-auto justify-between items-center mt-5 ' >
                    <div className=' max-w-[562px] ' >
                        <h1 className=' text-black font-thin text-lg leading-6 mb-6 lg:mb-[69px] mx-auto ' >Our bi-weekly top-10 list features the popular artists coming up in our network, great for club nights and gigs to artist signings.</h1>
                    </div>
                    <div>
                        <Link href="/all-vocal-musick" >
                            <button className=" bg-black border border-white font-thin w-[194px] text-white py-2 rounded-2xl lg:text-lg cursor-pointer mb-10 ">
                                SEE ALL
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopTenVocal;