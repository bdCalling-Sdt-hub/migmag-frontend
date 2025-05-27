"use client"


import { useEffect, useRef, useState, Fragment } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaDownload } from 'react-icons/fa';
import WaveSurfer from 'wavesurfer.js';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
// Track type definition
export type Track = {
    id: number;
    image?: string;
    title: string;
    artist: string;
    genre: string;
    bpm: string;
    key: string;
    gender: string;
    license: 'PREMIUM' | 'EXCLUSIVE' | 'NON-EXCLUSIVE';
    audio: string;
};

// JSON data for tracks
export const tracks: Track[] = [
    {
        id: 1,
        image: "/images/browse-vocal/browse/browse-1.png",
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        genre: 'Cover',
        bpm: '128BMP',
        key: 'G#major',
        gender: 'Male',
        license: 'PREMIUM',
        audio: '/audio/track1.mp3',
    },
    {
        id: 2,
        image: "/images/browse-vocal/browse/browse-2.png",
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        genre: 'Slap',
        bpm: '128BMP',
        key: 'Cminor',
        gender: 'Female',
        license: 'NON-EXCLUSIVE',
        audio: '/audio/track2.mp3',
    },
    {
        id: 3,
        image: "/images/browse-vocal/browse/browse-3.png",
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        genre: 'Cover',
        bpm: '128BMP',
        key: 'Cminor',
        gender: 'Female',
        license: 'NON-EXCLUSIVE',
        audio: 'audio/track3.mp3',
    },
    {
        id: 4,
        image: "/images/browse-vocal/browse/browse-4.png",
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        genre: 'House',
        bpm: '128BMP',
        key: 'Cminor',
        gender: 'Male',
        license: 'EXCLUSIVE',
        audio: '/audio/track4.mp3',
    },
    {
        id: 5,
        image: "/images/browse-vocal/browse/browse-5.png",
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        genre: 'Cover',
        bpm: '128BMP',
        key: 'Cminor',
        gender: 'Female',
        license: 'NON-EXCLUSIVE',
        audio: '/audio/track5.mp3',
    },
    {
        id: 6,
        image: "/images/browse-vocal/browse/browse-6.png",
        title: 'Lost In The Night',
        artist: 'Barbie Mack',
        genre: 'House',
        bpm: '128BMP',
        key: 'Cminor',
        gender: 'Male',
        license: 'EXCLUSIVE',
        audio: '/audio/track6.mp3',
    },
];

const LicenseBadge = ({ type }: { type: Track['license'] }) => {
    const colorMap = {
        PREMIUM: 'bg-cyan-500 text-white px-6 py-2 ',
        'NON-EXCLUSIVE': 'bg-gray-600 text-white px-6 py-2 ',
        EXCLUSIVE: 'bg-lime-500 text-black px-6 py-2 ',
    };
    return (
        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${colorMap[type]}`}>{type}</span>
    );
};

const downloadAudio = (url: string, title: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${title}.mp3`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const PurchasePage: React.FC = () => {




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

            wavesurfer.current.load(selectedTrack.audio);

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
        <div className='  w-full -z-0 ' >
            <div className="text-white">
                <div className="space-y-4  ">
                    <div className="hidden xl:block space-y-4">
                        {tracks.map((track, index) => (
                            <div
                                key={track.id}
                                className={`grid grid-cols-11 items-center gap-4 p-4 rounded-md shadow ${index % 2 === 0 ? "bg-black" : "bg-gray-800"
                                    }`}
                            >
                                {/* Image + Play */}
                                <div className="relative col-span-1 mt-6 w-[93px] h-[91px]">
                                    <Image
                                        src={track.image || "/images/default.jpg"}
                                        alt={track.title}
                                        className="object-cover rounded-md w-full -mt-5 h-full"
                                        width={93}
                                        height={91}
                                    />
                                    <button
                                        onClick={() => openModal(track)}
                                        className="absolute cursor-pointer top-0 left-0 w-12 h-12 mt-2 ml-6 rounded-full bg-opacity-40 border border-[#E7F056] hover:bg-opacity-60 flex items-center justify-center transition"
                                    >
                                        <FaPlay className="text-[#E7F056]" />
                                    </button>
                                </div>

                                {/* Track Info Columns */}
                                <div className="text-left col-span-2 w-full font-bold text-white text-base">{track.title}</div>
                                <div className="text-left col-span-1 text-white text-base">{track.artist}</div>
                                <div className="text-left col-span-1 text-white text-base">{track.genre}</div>
                                <div className="text-left col-span-1 text-white text-base">{track.bpm}</div>
                                <div className="text-left col-span-1 text-white text-base">{track.key}</div>
                                <div className="text-left col-span-1 text-white text-base">{track.gender}</div>

                                {/* License */}
                                <div className=" col-span-2  text-left">
                                    <h1 className='  ' ><LicenseBadge type={track.license} /></h1>
                                </div>

                                {/* Download */}
                                <div className="col-span-1 flex justify-start">
                                    <button
                                        onClick={() => downloadAudio(track.audio, track.title)}
                                        className="w-10 h-10 rounded-full bg-[#80BC02] flex justify-center items-center cursor-pointer"
                                    >
                                        <FaDownload />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>


                {/* small device  */}


                <div className="space-y-4  ">
                    <div className="block xl:hidden space-y-4">
                        {tracks.map((track, index) => (
                            <div
                                key={track.id}
                                className={`p-4 rounded-md shadow ${index % 2 === 0 ? "bg-black" : "bg-gray-800"
                                    }`}
                            >
                                <div className="flex flex-col items-start  gap-4">

                                    {/* Image + Centered Play Button */}
                                    <div className="relative w-full  aspect-square flex-shrink-0">
                                        <Image
                                            src={track.image || "/images/default.jpg"}
                                            alt={track.title}
                                            className="object-cover rounded-md w-full h-full"
                                            layout="fill"
                                        />
                                        <button
                                            onClick={() => openModal(track)}
                                            className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-md"
                                        >
                                            <FaPlay className="text-[#E7F056] w-10 h-10 p-2 border-2 border-amber-300 rounded-full" />
                                        </button>
                                    </div>

                                    <div className="font-bold text-left">{track.title}</div>
                                    <div className="text-left">{track.artist}</div>

                                    {/* Track Info Grid */}
                                    <div className=" text-white text-base flex flex-wrap items-center gap-x-8 gap-y-3 ">

                                        <div className="text-left">{track.genre}</div>
                                        <div className="text-left">{track.bpm}</div>
                                        <div className="text-left">{track.key}</div>
                                        <div className="text-left">{track.gender}</div>
                                        <h1><LicenseBadge type={track.license} /></h1>
                                        {/* Download Button */}
                                        <button
                                            onClick={() => downloadAudio(track.audio, track.title)}
                                            className="w-10 h-10 rounded-full bg-[#80BC02] flex justify-center items-center cursor-pointer"
                                        >
                                            <FaDownload />
                                        </button>
                                    </div>

                                    {/* License */}



                                </div>
                            </div>
                        ))}
                    </div>

                </div>




            </div>

            {/* player  */}




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
                                                            <path d="M19.1105 31.2013C18.5307 31.4059 17.5757 31.4059 16.9959 31.2013C12.0505 29.513 1 22.47 1 10.5327C1 5.2633 5.24625 1 10.4816 1C13.5853 1 16.3308 2.50068 18.0532 4.81992C19.7756 2.50068 22.5382 1 25.6249 1C30.8602 1 35.1064 5.2633 35.1064 10.5327C35.1064 22.47 24.056 29.513 19.1105 31.2013Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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




















            {/* <div className='mt-20' >
                <AuthFooter></AuthFooter>
            </div> */}
        </div>
    );
};

export default PurchasePage;
