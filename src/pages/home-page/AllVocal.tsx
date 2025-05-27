"use client";

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { CiPause1 } from 'react-icons/ci';
import { FaPlay } from 'react-icons/fa';

const AllVocal: React.FC = () => {
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
      img: '/images/home-page/trending-img/slide-3.png',
      audio: '/images/home-page/audio-1.mp3',
    },
    {
      id: 4,
      title: 'Classic Tune',
      name: 'Tomar Jonno',
      price: '€11',
      img: '/images/home-page/trending-img/slide-4.png',
      audio: '/images/home-page/audio-2.mp3',
    },
    {
      id: 5,
      title: 'Pop Hit',
      name: 'Ei Mon Tomake',
      price: '€9',
      img: '/images/home-page/trending-img/slide-4.png',
      audio: '/images/home-page/audio-3.mp3',
    },
    {
      id: 6,
      title: 'Jazz Flow',
      name: 'Hridoyer Kotha',
      price: '€13',
      img: '/images/home-page/trending-img/slide-4.png',
      audio: '/images/home-page/audio-4.mp3',
    },
    {
      id: 6,
      title: 'Jazz Flow',
      name: 'Hridoyer Kotha',
      price: '€13',
      img: '/images/home-page/trending-img/slide-4.png',
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

      // Cleanup when audio ends
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setPlayingUrl(null);
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-7 gap-x-3 lg:mt-10 mt-4  ">
      {audioData.map((item, i) => {
        const isActive = playingUrl === item.audio && isPlaying;
        return (
          <div
            key={item.id}
            className={`lg:h-32 flex flex-col lg:flex-row items-center px-10 justify-between border my-2 py-4  lg:py-0 space-y-3 lg:space-y-0 rounded-lg max-w-[713px] transition-all duration-300 ${isActive ? 'bg-black' : i % 2 === 0 ? 'bg-[#F1F1F1]' : 'bg-[#FFFFFF]'
              }`}
          >
            <h1 className={`text-3xl ${isActive ? 'text-white' : 'text-black'}`}>{i + 1}</h1>
            <Image
              src={item.img}
              width={93}
              height={91}
              alt={item.title}
              className="object-cover rounded-xl"
            />
            <div className="flex flex-col gap-x-1">
              <h3 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-black'}`}>
                {item.title}
              </h3>
              <p className={`text-lg font-bold flex gap-x-2.5 ${isActive ? 'text-white' : 'text-black'}`}>
                {item.name}
                <span className={`text-[#E7F056] ${isActive ? 'text-white' : ''}`}>
                  Exclusive
                </span>
              </p>
            </div>
            <button
              onClick={() => handleTogglePlay(item.audio)}
              className={` cursor-pointer w-[50px] h-[50px] rounded-full flex justify-center items-center border ${isActive ? 'border-[#E7F056]' : 'border-black'
                }`}
            >
              {isActive ? (
                <CiPause1 className="text-[#E7F056] text-2xl" />
              ) : (
                <FaPlay className="text-black text-xl" />
              )}
            </button>
            <button
              className={`w-[112px] rounded-2xl text-lg py-1 ${isActive ? 'text-black bg-[#E7F056]' : 'bg-black text-white'
                }`}
            >
              {item.price}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllVocal;
