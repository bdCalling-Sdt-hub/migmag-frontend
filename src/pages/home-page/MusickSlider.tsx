'use client';

import React, { useState, } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { FiPause, FiPlay } from 'react-icons/fi';
import MusickPlayer from '@/components/musick-player/MusickPlayer';

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
        id: 1,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-1.png',
        audio: '/images/home-page/audio-1.mp3',
    },
    {
        id: 2,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-2.png',
        audio: '/images/home-page/audio-2.mp3',
    },
    {
        id: 3,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-3.png',
        audio: '/images/home-page/trending-img/audio-3.mp3',
    },
    {
        id: 4,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-4.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 5,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-5.png',
        audio: '/images/home-page/audio-4.mp3',
    },
    {
        id: 6,
        title: 'Lost In The Night',
        name: 'Luna',
        price: '€120',
        img: '/images/home-page/latest/latest-3.png',
        audio: '/images/home-page/audio-4.mp3',
    },
];

export default function MusicSlider() {
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

    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const handleOpenModal = (index: number) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    const nextTrack = () => {
        if (currentIndex !== null) {
            const nextIndex = (currentIndex + 1) % audioData.length;
            setCurrentIndex(nextIndex);
        }
    };

    const prevTrack = () => {
        if (currentIndex !== null) {
            const prevIndex = (currentIndex - 1 + audioData.length) % audioData.length;
            setCurrentIndex(prevIndex);
        }
    };

    return (
        <main className="lg:mt-32 mt-8">
            <h1 className="text-[#000000] lg:text-lg max-w-[1519px] mx-auto px-4">
                LATEST TRENDING
            </h1>

            <div ref={sliderRef} className="keen-slider relative w-full lg:mt-9 mt-4">
                {audioData.map((item, index) => (
                    <div key={item.id} className="keen-slider__slide w-full px-4 lg:px-0">
                        <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                            <Image src={item.img} fill alt={item.title} className="object-cover" />
                            <button
                                onClick={() => handleOpenModal(index)}
                                className="w-[50px] h-[50px] rounded-full bg-[#000000] flex justify-center items-center absolute inset-0 m-auto z-10"
                            >
                                {
                                    showModal ? <><FiPause className="text-[#E7F056]" size={24} /></> : <><FiPlay className="text-[#E7F056]" size={24} /></>
                                }
                            </button>
                        </div>

                        <h3 style={{ fontFamily: 'Favorit' }} className="lg:text-lg font-bold mt-3">{item.title}</h3>
                        <p style={{ fontFamily: 'Favorit' }} className="text-[#504E4E] lg:text-lg font-bold">{item.name}</p>
                        <p style={{ fontFamily: 'Favorit' }} className="text-[#504E4E] lg:text-lg font-bold">{item.price}</p>
                    </div>
                ))}
            </div>

            <div style={{ fontFamily: 'Favorit' }} className="max-w-[1539px] mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="max-w-[600px] lg:mt-[68px] mt-5">
                    <h1 className="text-[#000000] text-lg leading-6 px-4">
                        Check out some of the most latest trending vocals coming up in network, great for club nights and gigs to
                        artist signings.
                    </h1>
                </div>
                <div className="mt-4 md:mt-12">
                    <Link href="/all-vocal">
                        <button className="bg-[#000000] w-[194px] text-white py-2 rounded-2xl lg:text-lg">
                            BROWSE VOCALS
                        </button>
                    </Link>
                </div>
            </div>

            {showModal && currentIndex !== null && (
                <MusickPlayer
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    currentTrack={audioData[currentIndex]}
                    nextTrack={nextTrack}
                    prevTrack={prevTrack}
                />
            )}
        </main>
    );
}





