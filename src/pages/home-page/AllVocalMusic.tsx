"use client";
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { CiPause1 } from 'react-icons/ci';

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
        id: 15,
        title: 'Rock Anthem',
        name: 'Bujhina Toh Tai',
        price: '$8',
        img: '/images/home-page/trending-img/slide-3.png',
        audio: '/images/home-page/audio-1.mp3',
    },
    {
        id: 16,
        title: 'Classic Tune',
        name: 'Tomar Jonno',
        price: '$11',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-2.mp3',
    },
    {
        id: 17,
        title: 'Pop Hit',
        name: 'Ei Mon Tomake',
        price: '$9',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/trending-img/audio-3.mp3',
    },
    {
        id: 18,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 19,
        title: 'Pop Hit',
        name: 'Ei Mon Tomake',
        price: '$9',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/trending-img/audio-3.mp3',
    },
    {
        id: 20,
        title: 'Jazz Flow',
        name: 'Hridoyer Kotha',
        price: '$13',
        img: '/images/home-page/trending-img/slide-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
];

const AllVocalMusic: React.FC = () => {
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

            // Cleanup when audio ends
            audio.addEventListener('ended', () => {
                setIsPlaying(false);
                setPlayingUrl(null);
            });
        }
    };

    return (
        <div className="relative lg:mt-9 mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {audioData.map((item) => (
                <div
                    key={item.id}
                    className="bg-white p-4 w-full rounded-xl shadow-md relative"
                >
                    <Image
                        src={item.img}
                        width={265}
                        height={260}
                        alt={item.title}
                        className="object-cover w-full  rounded-xl"
                    />
                    <h3 className="lg:text-lg font-bold lg:mt-5 mt-3">{item.title}</h3>
                    <p className="text-[#504E4E] lg:text-lg font-bold">{item.name}</p>
                    <p className="text-[#504E4E] lg:text-lg font-bold">{item.price}</p>
                    <button
                        onClick={() => handleTogglePlay(item.audio)}
                        className=" cursor-pointer w-[50px] h-[50px] rounded-full bg-[#000000] flex justify-center items-center absolute lg:top-[40%] md:top-[30%]  top-[37%] right-[40%]"
                    >
                        {playingUrl === item.audio && isPlaying ? (
                            <CiPause1 className="text-[#E7F056]" />
                        ) : (
                            <svg
                                width="22"
                                height="26"
                                viewBox="0 0 22 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 2.03275V23.9672C-0.00178 24.3306 0.09397 24.6878 0.277166 25.0013C0.460359 25.3148 0.724237 25.573 1.04112 25.7489C1.35801 25.9247 1.71624 26.0117 2.07818 26.0008C2.44013 25.9898 2.79247 25.8813 3.09824 25.6866L21.0553 13.4339C21.3448 13.2517 21.5834 12.9988 21.7488 12.6987C21.9142 12.3987 22.001 12.0614 22.001 11.7185C22.001 11.3756 21.9142 11.0383 21.7488 10.7383C21.5834 10.4382 21.3448 10.1852 21.0553 10.0031L3.09824 0.321376C2.79305 0.127058 2.44144 0.0186091 2.08019 0.00732771C1.71893 -0.00395366 1.3613 0.0823329 1.04467 0.257232C0.728031 0.432132 0.46402 0.689215 0.280244 1.00155C0.0964691 1.31389 0.00034 1.67002 0 2.03275Z"
                                    fill="#E7F056"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AllVocalMusic;
