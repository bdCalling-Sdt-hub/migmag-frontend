'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { CiPause1 } from 'react-icons/ci';
import Link from 'next/link';

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
        id: 14,
        title: 'Rock Anthem',
        name: 'Bujhina Toh Tai',
        price: '$8',
        img: '/images/home-page/trending-img/slide-3.png',
        audio: '/images/home-page/audio-1.mp3',
    },
    {
        id: 13,
        title: 'Classic Tune',
        name: 'Tomar Jonno',
        price: '$11',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-2.mp3',
    },
    {
        id: 12,
        title: 'Pop Hit',
        name: 'Ei Mon Tomake',
        price: '$9',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/trending-img/audio-3.mp3',
    },
    {
        id: 11,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 1,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 2,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 3,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 4,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 5,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 6,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 7,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 8,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 9,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 10,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
];

export default function MusickSlider() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playingUrl, setPlayingUrl] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'free-snap',
        slides: {
            origin: 'auto',
            perView: 5,
            spacing: 15,
        },
        breakpoints: {
            '(max-width: 340px)': {
                slides: { perView: 1, spacing: 29 },
            },
            '(min-width: 340px)': {
                slides: { perView: 2, spacing: 0 },
            },
            '(min-width: 640px)': {
                slides: { perView: 3, spacing: 15 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 6, spacing: 20 },
            },
        },
    });

    const handleTogglePlay = (url: string) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        audioRef.current = new Audio(url);
        audioRef.current.play();
        setPlayingUrl(url);
        setIsPlaying(true);

        audioRef.current.onended = () => {
            setIsPlaying(false);
        };
    };

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <main className="lg:mt-32 mt-8">
            <h1 className="text-[#000000] lg:text-lg max-w-[1519px] mx-auto px-4">LATEST TRENDING</h1>

            <div ref={sliderRef} className="keen-slider relative w-full lg:mt-9 mt-4">
                {audioData.map((item) => (
                    <div
                        key={item.id}
                        className="keen-slider__slide w-full px-4 lg:px-0"
                    >
                        {/* Wrap image and button in a relative container */}
                        <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                            <Image
                                src={item.img}
                                fill
                                alt={item.title}
                                className="object-cover"
                            />

                            <button
                                onClick={() =>
                                    playingUrl === item.audio && isPlaying
                                        ? handlePause()
                                        : handleTogglePlay(item.audio)
                                }
                                className="w-[50px] h-[50px] cursor-pointer rounded-full bg-[#000000] flex justify-center items-center absolute inset-0 m-auto z-10"
                            >
                                {playingUrl === item.audio && isPlaying ? (
                                    <CiPause1 className="text-[#E7F056]" size={24} />
                                ) : (
                                    <svg
                                        width="22"
                                        height="26"
                                        viewBox="0 0 22 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_1_2105)">
                                            <path
                                                d="M-3.76487e-05 2.03275V23.9672C-0.00178099 24.3306 0.0939729 24.6878 0.277166 25.0013C0.460359 25.3148 0.724237 25.573 1.04112 25.7489C1.35801 25.9247 1.71624 26.0117 2.07818 26.0008C2.44013 25.9898 2.79247 25.8813 3.09824 25.6866L21.0553 13.4339C21.3448 13.2517 21.5834 12.9988 21.7488 12.6987C21.9142 12.3987 22.001 12.0614 22.001 11.7185C22.001 11.3756 21.9142 11.0383 21.7488 10.7383C21.5834 10.4382 21.3448 10.1852 21.0553 10.0031L3.09824 0.321376C2.79305 0.127058 2.44144 0.0186091 2.08019 0.00732771C1.71893 -0.00395366 1.3613 0.0823329 1.04467 0.257232C0.728031 0.432132 0.46402 0.689215 0.280244 1.00155C0.0964691 1.31389 -0.000340887 1.67002 -3.76487e-05 2.03275Z"
                                                fill="#E7F056"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_2105">
                                                <rect width="22" height="26" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                )}
                            </button>
                        </div>

                        <h3 className="lg:text-lg font-bold mt-3">{item.title}</h3>
                        <p className="text-[#504E4E] lg:text-lg font-bold">{item.name}</p>
                        <p className="text-[#504E4E] lg:text-lg font-bold">{item.price}</p>
                    </div>
                ))}
            </div>

            <div className="max-w-[1539px] mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="max-w-[600px] lg:mt-[68px] mt-5">
                    <h1 className="text-[#000000] text-lg leading-6 px-4">
                        Check out some of the most latest trending vocals coming up in network, great for club nights
                        and gigs to artist signings.
                    </h1>
                </div>
                <div className="mt-4 md:mt-12 cursor-pointer">
                    <Link href="/all-vocal">
                        <button className="bg-[#000000] w-[194px] text-white py-2 rounded-2xl lg:text-lg cursor-pointer">
                            BROWSE VOCALS
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
