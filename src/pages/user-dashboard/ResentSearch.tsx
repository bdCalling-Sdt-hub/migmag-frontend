"use client"; // only if using App Router


import { useEffect, useRef, useState, Fragment } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaShoppingCart } from 'react-icons/fa';
import WaveSurfer from 'wavesurfer.js';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';


type Song = {
    id: number
    image: string;
    artist: string;
    title: string;
    audioUrl: ""
};

const songs: Song[] = [
    {
        id: 1,
        image: "/images/home-page/artist/singer-1.png",
        artist: "Barbie Mack",
        title: "Lost In The Night",
        audioUrl: ""
    },
    {
        id: 2,
        image: "/images/home-page/artist/singer-2.png",
        artist: "Mike Tyson",
        title: "Heavy Hitters",
        audioUrl: ""
    },
    {
        id: 3,
        image: "/images/home-page/artist/singer-3.png",
        artist: "Lana Rose",
        title: "Ocean Whisper",
        audioUrl: ""
    },
    {
        id: 4,
        image: "/images/home-page/artist/singer-4.png",
        artist: "Rick Nova",
        title: "Starlight Drive",
        audioUrl: ""
    },
    {
        id: 5,
        image: "/images/home-page/artist/singer-5.png",
        artist: "Amy Night",
        title: "Silent Moon",
        audioUrl: ""
    },
    {
        id: 6,
        image: "/images/home-page/artist/singer-6.png",
        artist: "Tomy Blaze",
        title: "Burn the Sky",
        audioUrl: ""
    },
    {
        id: 7,
        image: "/images/home-page/artist/singer-7.png",
        artist: "Queen Ivy",
        title: "Wild Bloom",
        audioUrl: ""
    },
    {
        id: 8,
        image: "/images/home-page/artist/singer-8.png",
        artist: "Chris Vibes",
        title: "Sunset Jam",
        audioUrl: ""
    },
    {
        id: 9,
        image: "/images/home-page/artist/singer-9.png",
        artist: "Zara Wolf",
        title: "Shadow Dance",
        audioUrl: ""
    },
    {
        id: 10,
        image: "/images/home-page/artist/singer-10.png",
        artist: "Neo Soul",
        title: "Heartbeats",
        audioUrl: ""
    },
];







const ResentSearch: React.FC = () => {

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(songs.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const currentTracks = songs.slice(start, start + itemsPerPage);

    const [selectedTrack, setSelectedTrack] = useState<Song | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const waveformRef = useRef<HTMLDivElement>(null);
    const wavesurfer = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    console.log(`selectedTrack is ${selectedTrack}`)

    const openModal = (track: Song) => {
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
        const prevIndex = songs.findIndex((t) => t.id === selectedTrack?.id) - 1;
        if (prevIndex >= 0) openModal(songs[prevIndex]);
    };

    const playNext = () => {
        const nextIndex = songs.findIndex((t) => t.id === selectedTrack?.id) + 1;
        if (nextIndex < songs.length) openModal(songs[nextIndex]);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };



    return (
        // <main className=" grid grid-cols-3 gap-6">

        // </main>
        <main>
            <div>
                <div className=' text-2xl text-[#818080] font-bold leading-6 ' >Your recent searches</div>
                <div className=' my-7 border-2 border-[#333333] ' ></div>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {songs.map((song, index) => (
                    <div
                        key={index}
                        className="bg-[#333333] w-[100%]  p-4 rounded-md"
                    >
                        <div className="flex items-center  gap-x-5">
                            <div>
                                <img
                                    src={song.image}
                                    alt={song.title}
                                    className="object-cover w-[93px] h-[95px] rounded-md"
                                />
                            </div>
                            <div>
                                <p className="text-[#818080] text-sm leading-6">{song.artist}</p>
                                <h1 className="text-[#FFFFFF] font-bold">{song.title}</h1>
                                <div className="flex items-center gap-x-3.5 mt-2">
                                    <button onClick={() => { openModal(song) }} className="cursor-pointer w-9 h-9 rounded-full bg-[#E7F056] flex justify-center items-center">
                                        <svg
                                            width="15"
                                            height="18"
                                            viewBox="0 0 15 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1_515)">
                                                <path
                                                    d="M0.519546 1.98098V16.019C0.51843 16.2516 0.579713 16.4802 0.696956 16.6809C0.8142 16.8815 0.983082 17.0468 1.18589 17.1593C1.3887 17.2719 1.61796 17.3275 1.84961 17.3205C2.08125 17.3135 2.30675 17.2441 2.50244 17.1195L13.995 9.27769C14.1802 9.16111 14.3329 8.99922 14.4388 8.8072C14.5447 8.61517 14.6002 8.3993 14.6002 8.17984C14.6002 7.96038 14.5447 7.74454 14.4388 7.55251C14.3329 7.36049 14.1802 7.19857 13.995 7.08198L2.50244 0.8857C2.30712 0.761336 2.08209 0.691929 1.85089 0.684709C1.61969 0.677489 1.3908 0.732713 1.18816 0.844648C0.98551 0.956584 0.816543 1.12112 0.698927 1.32101C0.58131 1.52091 0.519352 1.74884 0.519546 1.98098Z"
                                                    fill="#222222"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_515">
                                                    <rect
                                                        width="14.08"
                                                        height="16.64"
                                                        fill="white"
                                                        transform="translate(0.519531 0.679932)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <h1 className="text-[#FFFFFF] text-sm leading-6">
                                        Listen Again
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* player  */}



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




        </main>
    );
}
export default ResentSearch