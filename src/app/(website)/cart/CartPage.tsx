'use client';

import { useEffect, useRef, useState, Fragment } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaShoppingCart } from 'react-icons/fa';
import WaveSurfer from 'wavesurfer.js';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

interface Track {
    id: number;
    title: string;
    artist: string;
    genre: string;
    bpm: string;
    key: string;
    gender: 'Male' | 'Female';
    license: 'PREMIUM' | 'EXCLUSIVE' | 'NON-EXCLUSIVE';
    price: number;
    image: string;
    audioUrl: string;
}

const licenseColors: Record<Track['license'], string> = {
    PREMIUM: 'bg-[#00C2CE] text-white',
    EXCLUSIVE: 'bg-[#80BC02] text-white',
    'NON-EXCLUSIVE': 'bg-[#818080] text-white',
};

const CartPage = () => {
    const tracks: Track[] = [
        {
            id: 1,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'Cover',
            bpm: '128BMP',
            key: 'G#major',
            gender: 'Male',
            license: 'PREMIUM',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: `${window.location.origin}/images/audio/audio-2.mp3`,
        },
        {
            id: 2,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'House',
            bpm: '128BMP',
            key: 'Cminor',
            gender: 'Female',
            license: 'EXCLUSIVE',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: `${window.location.origin}/images/audio/audio-2.mp3`,
        },
        {
            id: 3,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'Cover',
            bpm: '128BMP',
            key: 'G#major',
            gender: 'Male',
            license: 'EXCLUSIVE',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: '/images/audio/audio-2.mp3',
        },
        {
            id: 4,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'Slap House',
            bpm: '128BMP',
            key: 'Cminor',
            gender: 'Female',
            license: 'NON-EXCLUSIVE',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: '/images/audio/audio-2.mp3',
        },
        {
            id: 5,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'Cover',
            bpm: '128BMP',
            key: 'G#major',
            gender: 'Male',
            license: 'EXCLUSIVE',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: '/images/audio/audio-2.mp3',
        },
        {
            id: 6,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'House',
            bpm: '128BMP',
            key: 'Cminor',
            gender: 'Female',
            license: 'PREMIUM',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: '/images/audio/audio-2.mp3',
        },
        {
            id: 7,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'Cover',
            bpm: '128BMP',
            key: 'G#major',
            gender: 'Male',
            license: 'EXCLUSIVE',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: '/images/audio/audio-2.mp3',
        },
        {
            id: 8,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'Slap House',
            bpm: '128BMP',
            key: 'Cminor',
            gender: 'Female',
            license: 'NON-EXCLUSIVE',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: '/images/audio/audio-2.mp3',
        },
        {
            id: 9,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'Cover',
            bpm: '128BMP',
            key: 'G#major',
            gender: 'Male',
            license: 'EXCLUSIVE',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: '/images/audio/audio-2.mp3',
        },
        {
            id: 10,
            title: 'Lost In The Night',
            artist: 'Barbie Mack',
            genre: 'House',
            bpm: '128BMP',
            key: 'Cminor',
            gender: 'Female',
            license: 'EXCLUSIVE',
            price: 120,
            image: '/images/home-page/trending-img/slide-2.png',
            audioUrl: `${window.location.origin}/images/audio/audio-2.mp3`,
        },
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(tracks.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const currentTracks = tracks.slice(start, start + itemsPerPage);

    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const waveformRef = useRef<HTMLDivElement>(null);
    const wavesurfer = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    console.log(`selectedTrack is ${selectedTrack}`)

    const openModal = (track: Track) => {
        console.log(`track is ${track}`)
        setSelectedTrack(track);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedTrack(null);
        wavesurfer.current?.destroy();
        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
    };

    console.log(`selectedTrack is ${JSON.stringify(selectedTrack, null, 2)}`);

    useEffect(() => {
        if (selectedTrack && waveformRef.current) {
            wavesurfer.current?.destroy(); // destroy any existing instance

            wavesurfer.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: 'rgba(255, 255, 255, 0.1)',
                progressColor: '#facc15',
                height: 30,
                barWidth: 2,
                barRadius: 2,
                cursorColor: '#facc15',
                backgroundColor: 'transparent',
                responsive: true,
                normalize: true,
            });

            wavesurfer.current.load(selectedTrack.audioUrl);

            wavesurfer.current.on('ready', () => {
                setDuration(wavesurfer.current?.getDuration() || 0);
                wavesurfer.current?.play();
                setIsPlaying(true);
            });

            wavesurfer.current.on('audioprocess', () => {
                setCurrentTime(wavesurfer.current?.getCurrentTime() || 0);
            });

            wavesurfer.current.on('seek', () => {
                setCurrentTime(wavesurfer.current?.getCurrentTime() || 0);
            });

            wavesurfer.current.on('finish', () => setIsPlaying(false));
        }

        return () => {
            wavesurfer.current?.destroy();
        };
    }, [selectedTrack]);

    const togglePlay = () => {
        if (wavesurfer.current) {
            wavesurfer.current.playPause();
            const playing = wavesurfer.current.isPlaying();
            setIsPlaying(playing);
        }
    };

    const playPrev = () => {
        const prevIndex = tracks.findIndex((t) => t.id === selectedTrack?.id) - 1;
        if (prevIndex >= 0) openModal(tracks[prevIndex]);
    };

    const playNext = () => {
        const nextIndex = tracks.findIndex((t) => t.id === selectedTrack?.id) + 1;
        if (nextIndex < tracks.length) openModal(tracks[nextIndex]);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="bg-[#f5fff8] min-h-screen">
            <div className="max-w-[1539px] mx-auto px-4 pt-10">
                <h1 className="text-[#121212] text-3xl font-bold">My cart</h1>
                <p className="text-[#3A3A3A] font-medium mt-2 text-[16px]">
                    List of songs that you selected for the cart section.
                </p>

                <div className="mt-10">
                    {currentTracks.map((track) => (
                        <div
                            key={track.id}
                            onClick={() => openModal(track)}
                            className="cursor-pointer flex items-center justify-between bg-black text-white p-4 rounded-md mb-2 shadow hover:bg-[#1a1a1a]"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16">
                                    <img src={track.image} alt="cover" className="w-full h-full object-cover rounded-md" />
                                    <FaPlay className="absolute inset-0 m-auto text-yellow-400 w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <div className="font-bold">{track.title}</div>
                                    <div className="text-sm text-gray-300">{track.artist}</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-5 gap-4 text-sm text-gray-200 w-1/2 text-center">
                                <span>{track.genre}</span>
                                <span>{track.bpm}</span>
                                <span>{track.key}</span>
                                <span>{track.gender}</span>
                                <span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${licenseColors[track.license]}`}>
                                        {track.license}
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaShoppingCart className="text-yellow-300 cursor-pointer" />
                                <span className="bg-yellow-300 text-black font-bold px-4 py-1 rounded-full">€{track.price}</span>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-between items-center mt-6 text-sm text-[#344054]">
                        <span>
                            Page {currentPage} of {totalPages}
                        </span>
                        <div className="space-x-2">
                            <button
                                className="border border-[#B0B0B0] shadow px-3 py-1 rounded disabled:opacity-50 cursor-pointer text-[#272727] text-sm"
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <button
                                className="border border-[#B0B0B0] shadow px-3 py-1 rounded disabled:opacity-50 cursor-pointer text-[#272727] text-sm"
                                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                <div className='px-4' >
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-50" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-opacity-50  " />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-end justify-center p-2 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 translate-y-4"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-4"
                                    >
                                        <Dialog.Panel className="w-full max-w-[1539px] mx-auto transform overflow-hidden rounded-t-xl bg-[#1e1e1e] text-white px-4 py-3 text-left align-middle shadow-xl transition-all">
                                            {selectedTrack && (
                                                <div className="space-y-3 flex flex-row items-center  ">
                                                    <div className="flex items-center justify-between gap-x-6">
                                                        <Image width={93} height={91} src={selectedTrack.image} alt="cover" className="w-16 h-16 rounded-md object-cover" />
                                                        <div>
                                                            <h2 className="text-lg font-semibold">{selectedTrack.title}</h2>
                                                            <p className="text-sm text-gray-400">{selectedTrack.artist}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-center ml-16 gap-4 text-yellow-300 text-xl mt-2">
                                                        <FaStepBackward className="cursor-pointer" onClick={playPrev} />
                                                        {isPlaying ? (
                                                            <FaPlay className="cursor-pointer" onClick={togglePlay} />
                                                        ) : (

                                                            <FaPause className="cursor-pointer" onClick={togglePlay} />
                                                        )}
                                                        <FaStepForward className="cursor-pointer" onClick={playNext} />
                                                    </div>
                                                    <div className=' ml-11 ' >
                                                        <span>{formatTime(currentTime)}</span>
                                                    </div>

                                                    {/* Waveform container */}
                                                    <div className="w-full max-w-[800px] mx-auto">
                                                        {/* Waveform */}
                                                        <div ref={waveformRef} className="w-full" />

                                                        {/* Progress bar */}
                                                        <div className="w-maw-w-[800px] h-1 bg-gray-300 rounded overflow-hidden mt-2">
                                                            <div
                                                                className="h-full bg-yellow-400 transition-all duration-100"
                                                                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between text-xs text-gray-400 px-1">

                                                        <span>-{formatTime(duration - currentTime)}</span>
                                                    </div>

                                                    <div>
                                                        <span>
                                                            <svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M19.1105 31.2013C18.5307 31.4059 17.5757 31.4059 16.9959 31.2013C12.0505 29.513 1 22.47 1 10.5327C1 5.2633 5.24625 1 10.4816 1C13.5853 1 16.3308 2.50068 18.0532 4.81992C19.7756 2.50068 22.5382 1 25.6249 1C30.8602 1 35.1064 5.2633 35.1064 10.5327C35.1064 22.47 24.056 29.513 19.1105 31.2013Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </span>
                                                    </div>


                                                </div>
                                            )}
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
