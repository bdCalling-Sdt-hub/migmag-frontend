"use client"


import { useEffect, useRef, useState, Fragment } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import WaveSurfer from 'wavesurfer.js';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';




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
const licenseColorsText: Record<Track['license'], string> = {
    PREMIUM: 'text-[#00C2CE] ',
    EXCLUSIVE: 'text-[#80BC02]',
    'NON-EXCLUSIVE': 'text-[#818080] ',
};
type Singer = {
    id: number;
    name: string;
    role: string;
    genre: string;
    description: string;
    image: string;
};

const singers: Singer[] = [
    {
        id: 1,
        name: "Ethan Levi",
        role: "Singer - Songwriter",
        genre: "Hip Hop",
        description:
            "A 28 year old singer-songwriter currently attending the Berklee School of Music in Boston, MA. He pulls inspiration from R&B and Neo Soul and has a powerful voice that’s perfect for any track.",
        image: "/images/tune/tuneBanner/manageTune.png",
    },
    {
        id: 2,
        name: "Sophia Grace",
        role: "Vocalist",
        genre: "Pop",
        description:
            "Sophia is a professional vocalist known for her clean high notes and engaging performance style, featured in over 30 commercial tracks worldwide.",
        image: "/images/tune/tuneBanner/manageTune.png",
    },
    {
        id: 3,
        name: "Jackson Cole",
        role: "Rapper - Lyricist",
        genre: "Trap",
        description:
            "Jackson brings powerful lyrical depth and rhythm, blending real-life experiences into catchy, hard-hitting verses with strong hooks.",
        image: "/images/tune/tuneBanner/manageTune.png",
    },
    {
        id: 4,
        name: "Aria Moon",
        role: "Neo Soul Artist",
        genre: "R&B",
        description:
            "With a velvet voice and heartfelt lyrics, Aria Moon creates a soulful vibe that resonates with deep emotions and chill melodies.",
        image: "/images/tune/tuneBanner/manageTune.png",
    },
];

const SingerDetails: React.FC = () => {
    const [selectedTrackId, setSelectedTrackId] = useState(null);

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

    const getSingerId = (id: number) => {
        console.log(`singer id is ${id}`)
    }










    return (
        <div className=' max-w-[1539px] mx-auto px-4 mt-20   ' >
            {/* profile image  */}
            <div className=' flex flex-col lg:flex-row items-center  lg:items-stretch justify-between ' >
                {/* left section  */}
                <div>
                    <div className=' flex flex-col lg:flex-row lg:gap-x-16 ' >
                        {/* image  */}
                        <div>
                            <Image src={"/images/tune/tuneBanner/manageTune.png"} className=' object-cover w-full mx-auto ' width={319} height={319} alt='Singer Image' />
                        </div>
                        {/* description  */}
                        <div>
                            <h1 className=' text-xl mt-3 lg:mt-0 lg:text-3xl text-[#000000] leading-9 ' >Ethan</h1>
                            <div className='lg:mt-3 mt-1.5 text-white text-xl lg:space-x-4 space-x-3 ' >
                                <button className=' bg-[#818080] px-4 py-1 rounded-2xl lg:text-lg text-sm ' >SINGER</button>
                                <button className=' bg-[#818080] px-6 py-1 rounded-2xl lg:text-lg text-sm ' >SONGWRITER</button>
                            </div>
                            <div className=' lg:mt-5 mt-2.5 ' >
                                <h1 className=' text-[#000000] text-[16px] lg:text-lg' >ABOUT</h1>

                            </div>
                            <div className=' lg:mt-3 mt-1.5 max-w-[539px] ' >
                                <p className=' text-[#000000] text-lg leading-6 ' >Hey, I’m Ethan and I create music that hits you in the feels. If you’re feeling the vibe and want to collaborate, shoot me a message!</p>
                            </div>
                            {/* address  */}
                            <div className=' flex items-center gap-x-[18px] mt-6  ' >
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 12C19.5 17.018 14.0117 20.4027 12.4249 21.2764C12.1568 21.424 11.8432 21.424 11.5751 21.2764C9.98831 20.4027 4.5 17.018 4.5 12C4.5 7.5 8.13401 4.5 12 4.5C16 4.5 19.5 7.5 19.5 12Z" stroke="#818080" />
                                        <circle cx="12" cy="12" r="3.5" stroke="#818080" />
                                    </svg>

                                </span>
                                <h1 className=' text-[#818080] text-[16px] ' >ROME</h1>
                            </div>
                            <div className=' flex items-center gap-x-[18px] mt-2.5  ' >
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="16" y="12" width="4" height="7" rx="2" stroke="#818080" strokeWidth="2" strokeLinejoin="round" />
                                        <rect x="4" y="12" width="4" height="7" rx="2" stroke="#818080" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M4 13V16" stroke="#818080" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 13V16" stroke="#818080" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 13C20 10.6131 19.1571 8.32387 17.6569 6.63604C16.1566 4.94821 14.1217 4 12 4C9.87827 4 7.84344 4.94821 6.34315 6.63604C4.84286 8.32387 4 10.6131 4 13" stroke="#818080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>


                                </span>
                                <h1 className=' text-[#818080] text-[16px] ' >WIDE VOCAL RANGE</h1>
                            </div>
                            <div className=' flex items-center gap-x-7 mt-2.5  ' >
                                <span>
                                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 13.5251H5.2343C3.38637 13.5251 1.82742 14.9006 1.59737 16.7342V16.7342C1.29651 19.1322 3.39419 21.1548 5.78688 20.8142V20.8142C7.61642 20.5538 9 18.9838 9 17.1359V5.45094C9 3.86645 9 3.07421 9.45958 2.51921C9.91916 1.96421 10.6975 1.8165 12.2542 1.52108L14.7024 1.05648C14.8368 1.03096 14.9041 1.01821 14.9416 1.05679C14.9791 1.09538 14.9644 1.1622 14.935 1.29586L14.0272 5.43063C14.014 5.49085 14.0074 5.52097 13.9869 5.54159C13.9665 5.56221 13.9364 5.56905 13.8763 5.58274L9 6.69321" stroke="#818080" strokeWidth="2" />
                                    </svg>


                                </span>
                                <h1 className=' text-[#818080] text-[16px] ' >06 VOCALS</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right section  */}
                <div>
                    <div className=' text-[#000000] ' >
                        <p className=' text-end lg:text-xl text-sm ' >PLAYS</p>
                        <h1 className=' text-2xl lg:text-4xl text-end  font-semibold ' >2640</h1>
                    </div>
                    <div className=' mt-8 lg:mt-[75px] flex flex-col justify-center space-y-3 lg:space-y-6 ' >
                        <button className=' flex cursor-pointer  items-center gap-x-2.5 lg:gap-x-5 text-sm lg:text-2xl lg:px-7 px-3.5 py-1 lg:py-1.5 border border-black rounded-2xl  ' >
                            <span><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18 15.75C19.4918 15.75 20.9226 16.3426 21.9775 17.3975C23.0324 18.4524 23.625 19.8832 23.625 21.375V23.625C23.625 23.9234 23.5065 24.2095 23.2955 24.4205C23.0845 24.6315 22.7984 24.75 22.5 24.75C22.2016 24.75 21.9155 24.6315 21.7045 24.4205C21.4935 24.2095 21.375 23.9234 21.375 23.625V21.375C21.375 20.4799 21.0194 19.6214 20.3865 18.9885C19.7536 18.3556 18.8951 18 18 18H9C8.10489 18 7.24645 18.3556 6.61351 18.9885C5.98058 19.6214 5.625 20.4799 5.625 21.375V23.625C5.625 23.9234 5.50647 24.2095 5.29549 24.4205C5.08452 24.6315 4.79837 24.75 4.5 24.75C4.20163 24.75 3.91548 24.6315 3.7045 24.4205C3.49353 24.2095 3.375 23.9234 3.375 23.625V21.375C3.375 19.8832 3.96763 18.4524 5.02252 17.3975C6.07742 16.3426 7.50816 15.75 9 15.75H18ZM24.0907 10.2161C24.2927 10.0122 24.565 9.89321 24.8519 9.88348C25.1387 9.87375 25.4184 9.97402 25.6338 10.1638C25.8491 10.3535 25.9838 10.6184 26.0102 10.9042C26.0367 11.19 25.9529 11.4751 25.776 11.7011L25.6815 11.808L22.5 14.9895C22.3063 15.1832 22.0485 15.2996 21.7751 15.3168C21.5017 15.3339 21.2315 15.2508 21.015 15.0829L20.9093 14.9895L19.3185 13.3988C19.1146 13.1968 18.9956 12.9245 18.9859 12.6376C18.9761 12.3508 19.0764 12.0711 19.2661 11.8557C19.4559 11.6404 19.7208 11.5057 20.0066 11.4793C20.2924 11.4528 20.5775 11.5366 20.8035 11.7135L20.9093 11.8069L21.7046 12.6034L24.0907 10.2161ZM13.5 2.25C14.9918 2.25 16.4226 2.84263 17.4775 3.89752C18.5324 4.95242 19.125 6.38316 19.125 7.875C19.125 9.36684 18.5324 10.7976 17.4775 11.8525C16.4226 12.9074 14.9918 13.5 13.5 13.5C12.0082 13.5 10.5774 12.9074 9.52252 11.8525C8.46763 10.7976 7.875 9.36684 7.875 7.875C7.875 6.38316 8.46763 4.95242 9.52252 3.89752C10.5774 2.84263 12.0082 2.25 13.5 2.25ZM13.5 4.5C13.0568 4.5 12.6179 4.5873 12.2084 4.75691C11.799 4.92652 11.4269 5.17512 11.1135 5.48851C10.8001 5.80191 10.5515 6.17397 10.3819 6.58344C10.2123 6.99292 10.125 7.43179 10.125 7.875C10.125 8.31821 10.2123 8.75708 10.3819 9.16656C10.5515 9.57603 10.8001 9.94809 11.1135 10.2615C11.4269 10.5749 11.799 10.8235 12.2084 10.9931C12.6179 11.1627 13.0568 11.25 13.5 11.25C14.3951 11.25 15.2536 10.8944 15.8865 10.2615C16.5194 9.62855 16.875 8.77011 16.875 7.875C16.875 6.97989 16.5194 6.12145 15.8865 5.48851C15.2536 4.85558 14.3951 4.5 13.5 4.5Z" fill="#222222" />
                            </svg>
                            </span>FOLLOW
                        </button>
                        <Link href={"/contact"}>
                            <button className=' flex cursor-pointer  items-center gap-x-2.5 lg:gap-x-5 text-sm lg:text-2xl lg:px-7 px-3.5 py-1 lg:py-1.5 border border-black rounded-2xl  ' >
                                <span>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.7759 7.29163H15.2915C11.5203 7.29163 9.63465 7.29163 8.46308 8.4632C7.2915 9.63477 7.2915 11.5204 7.2915 15.2916V25.7083C7.2915 26.6511 7.2915 27.1225 7.5844 27.4154C7.87729 27.7083 8.34869 27.7083 9.2915 27.7083H19.7082C23.4794 27.7083 25.365 27.7083 26.5366 26.5367C27.7082 25.3651 27.7082 23.4795 27.7082 19.7083V16.2239" stroke="#222222" />
                                        <path d="M13.125 14.5834L21.875 14.5834" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.125 20.4166H17.5" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M27.7085 11.6666L27.7085 2.91663M23.3335 7.29163H32.0835" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </span>MESSAGE
                            </button>
                        </Link>
                        <Link href={"/contact"}>
                            <button className=' flex cursor-pointer  items-center gap-x-2.5 lg:gap-x-5 text-sm lg:text-2xl lg:px-7 px-3.5 py-1 lg:py-1.5 border border-black rounded-2xl  ' >
                                <span>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 18.9583V7.79163C8.75 7.55592 8.75 7.43807 8.82322 7.36485C8.89645 7.29163 9.0143 7.29163 9.25 7.29163H15.4236C15.7243 7.29163 15.8747 7.29163 15.9955 7.3663C16.1163 7.44098 16.1836 7.57545 16.3181 7.84441L17.2236 9.65551C17.3581 9.92446 17.4253 10.0589 17.5462 10.1336C17.667 10.2083 17.8173 10.2083 18.118 10.2083H25.75C25.9857 10.2083 26.1036 10.2083 26.1768 10.2815C26.25 10.3547 26.25 10.4726 26.25 10.7083V21.375C26.25 21.6107 26.25 21.7285 26.1768 21.8017C26.1036 21.875 25.9857 21.875 25.75 21.875H18.118C17.8173 21.875 17.667 21.875 17.5462 21.8003C17.4253 21.7256 17.3581 21.5911 17.2236 21.3222L16.3181 19.5111C16.1836 19.2421 16.1163 19.1076 15.9955 19.033C15.8747 18.9583 15.7243 18.9583 15.4236 18.9583H8.75ZM8.75 18.9583V27.7083" stroke="#222222" strokeLinecap="round" />
                                    </svg>


                                </span>HIRE NOW
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* singer vocal  */}


            <div className="max-w-[1539px] mx-auto px-4  pt-4 lg:pt-10">
                <h1 className="text-[#121212] text-xl lg:text-3xl font-bold">Available <span className=' text-[#818080] ' >Vocals</span></h1>


                <div className="lg:mt-10 mt-4 overflow-x-auto">
                    <table className="min-w-full table-auto  text-white rounded-md shadow">
                        <thead>
                            <tr className=" text-black text-left text-sm">
                                <th className=" lg:text-[15px] lg:px-10  text-xs p-2 lg:p-4">TITLE</th>
                                <th className=" lg:text-[15px] lg:px-10  text-xs p-2 lg:p-4">ARTIST</th>
                                <th className=" lg:text-[15px] lg:px-10  text-xs p-2 lg:p-4">GENRE</th>
                                <th className=" lg:text-[15px]  lg:px-10 text-xs p-2 lg:p-4">BPM</th>
                                <th className=" lg:text-[15px] lg:px-10  text-xs p-2 lg:p-4">KEY</th>
                                <th className=" lg:text-[15px] lg:px-10  text-xs p-2 lg:p-4">GENDER</th>
                                <th className=" lg:text-[15px] lg:px-10  text-xs p-2 lg:p-4 uppercase ">License</th>
                                <th className=" lg:text-[15px] lg:px-10 ml-2  text-xs p-2 lg:p-4">PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tracks.map((track) => (
                                <tr

                                    key={track.id}

                                    onClick={() => {

                                        setSelectedTrackId(track.id);
                                    }}
                                    className={`cursor-pointer text-black ${selectedTrackId === track.id ? "bg-black text-white " : ""
                                        } ${track.id % 2 === 0 ? " bg-[#D9D9D95E] " : ""} `}
                                >
                                    <td onClick={() => openModal(track)} className="p-4 lg:px-10">
                                        <div className="relative w-16 h-16">
                                            <Image
                                                src={track.image}
                                                width={93}
                                                height={91}
                                                alt="cover"
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                            <div className="absolute inset-0 m-auto w-8 h-8 border-2 border-yellow-400 rounded-full flex items-center justify-center">
                                                <FaPlay className="text-yellow-400 w-4 h-4" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 lg:px-10 ">
                                        <div className="font-bold">{track.title}</div>
                                        <div className="text-sm ">{track.artist}</div>
                                    </td>
                                    <td className="p-4 lg:px-10 text-start">{track.genre}</td>
                                    <td className="p-4 lg:px-10 text-start">{track.bpm}</td>
                                    <td className="p-4 lg:px-10 text-start">{track.key}</td>
                                    <td className="p-4 lg:px-10 text-start">{track.gender}</td>
                                    <td className="p-4 lg:px-10 text-start flex flex-row items-center mt-5 gap-x-5 w-full ">
                                        <button
                                            className={`px-3 py-1 rounded-full w-[70%] text-xs font-semibold flex justify-center gap-3.5 items-center ${licenseColors[track.license]}`}
                                        >
                                            {track.license}
                                        </button>
                                        <span className={`flex justify-center items-center ${licenseColorsText[track.license]}`}>
                                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.64 16V13.66C11.64 12.28 12.22 11.76 13.64 11.76H13.86C15.06 11.76 15.84 10.98 15.84 9.78C15.84 8.56 15.04 7.8 13.66 7.8H9.7V6H13.96C16.24 6 17.8 7.5 17.8 9.78C17.8 12 16 13.46 14.24 13.46C13.74 13.46 13.54 13.66 13.54 14.16V16H11.64ZM11.54 20V17.8H13.64V20H11.54Z" fill="#818080" />
                                                <circle cx="13" cy="13" r="12.5" stroke="#818080" />
                                            </svg>
                                        </span>
                                    </td>
                                    <td className="p-4 lg:px-10 text-start">
                                        <span className=" text-black font-bold px-4 py-1 rounded-full">


                                            {
                                                selectedTrackId === track.id ? <> <button className=' bg-white cursor-pointer text-black text-lg font-medium text-center px-4 rounded-full ' > Add to cart </button> </> : <button className=' bg-[#E7F056] cursor-pointer px-4 rounded-full py-0.5 ' >€{track.price}</button>
                                            }


                                        </span>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                {/* bottom player  */}

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
            </div>




            {/* More Singers */}

            <div className='px-4  ' >

                <div className=' mt-7 ' >
                    <p className=' leading-6 text-[#818080] text-lg ' >*all vocals are royalty free, both non-exclusive and exclusive vocals.</p>
                </div>

                <div className=' flex flex-col lg:flex-row space-y-2.5 justify-between items-center mt-4 ' >
                    <p className=' text-3xl font-bold ' >More <span className=' text-[#818080] ' >Singers</span></p>
                    <Link href={""} className=' ' >
                        <button className=' flex cursor-pointer  items-center gap-x-5 rounded-2xl px-7 py-1.5 border border-black text-lg  ' >
                            BROWSE SINGERS
                        </button>
                    </Link>
                </div>

                <div className="mt-6 lg:mt-14 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">
                    {singers.map((singer) => (
                        <div onClick={() => { getSingerId(singer.id) }} key={singer.id} className=" cursor-pointer transition-transform duration-300 hover:-translate-y-1 mx-auto">
                            <div className="w-full max-w-[357px] rounded-md p-5 bg-[#222222]">
                                <Image
                                    src={singer.image}
                                    width={340}
                                    height={219}
                                    alt={`${singer.name} Image`}
                                    className="object-cover rounded-md"
                                />

                                <div className="mt-3.5">
                                    <h1 className="text-white text-lg leading-6">{singer.name}</h1>

                                </div>

                                <div className="mt-2">
                                    <p className="text-[#818080] text-lg leading-6">{singer.role}</p>
                                    <p className="mt-2 text-[#818080] text-lg leading-6">Genre: {singer.genre}</p>
                                </div>


                                <Link href={`/artist-library/${singer.id}`}>
                                    <p className="flex mt-5 flex-row items-center text-sm leading-6 text-white hover:underline">
                                        VIEW <span className="ml-1"><ArrowRight /></span>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



            {/* contact us browse vocal section  */}

            <div className=' flex flex-col lg:flex-row justify-between items-center px-4 lg:space-y-0 space-y-4 lg:gap-x-11 mt-[66px] ' >
                <div className='w-full p-6 bg-[#D9D9D9]  ' >
                    <div className="max-w-[516px] pt-7 lg:pt-14 space-y-2">
                        <h1 className="lg:text-4xl text-lg lg:leading-10 font-semibold">
                            Not finding the vocal you
                        </h1>


                    </div>
                    <div className="flex flex-col  lg:flex-row lg:items-center justify-between pb-4 gap-3">
                        <h1 className="lg:text-4xl text-lg lg:leading-10 font-semibold">
                            Are looking for?
                        </h1>
                        <Link href="">
                            <button className="flex items-center  rounded-2xl px-7 py-1.5 border border-black lg:text-lg cursor-pointer">
                                BROWSE SINGERS
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='w-full p-6 bg-[#D9D9D9]  ' >
                    <div className="max-w-[516px] pt-7 lg:pt-14 space-y-2">
                        <h1 className="lg:text-4xl text-lg lg:leading-10 font-semibold">
                            looking for something
                        </h1>


                    </div>
                    <div className="flex flex-col  lg:flex-row lg:items-center justify-between pb-4 gap-3">
                        <h1 className="lg:text-4xl text-lg lg:leading-10 font-semiboldd">
                            More specific?
                        </h1>
                        <Link href="/contact">
                            <button className="flex items-center gap-x-5 rounded-2xl px-7 py-1.5 border border-black lg:text-lg cursor-pointer">
                                CONTACT US
                            </button>
                        </Link>
                    </div>

                </div>
            </div>




            <div className=' mt-16 px-4 ' >

                <div className=' border border-[#000000] ' ></div>
                <div className=' flex lg:flex-row flex-col items-start justify-between relative lg:gap-5 lg:mt-16 mt-6  ' >
                    <div>
                        <p className=' lg:rotate-90 text-[#000000] lg:text-lg lg:absolute lg:top-14 lg:-ml-20  ' >JUST FOR YOU</p>
                    </div>
                    {/* left side  */}
                    <div>
                        <Image src={"/images/hire/bannerImg/hireBannerImg.png"} className=' object-cover rounded-lg block mx-auto my-1 ' width={652} height={654} alt='....' />
                    </div>
                    {/* right side  */}
                    <div>
                        <div className=' max-w-[411px] ' >
                            <h1 className=' text-2xl lg:text-[35px] font-bold text-[#000000] leading-9 ' >
                                What’s included when you buy it?
                            </h1>
                        </div>

                        <div className=' max-w-[478px] lg:mt-8 mt-3 ' >
                            <h1 className=' lg:text-lg text-[#000000] leading-6 font-thin ' >
                                WET mixed vocals (with fx), Multiple DRY Vocal Takes and Lyrics PDF. All files in 24bit WAV.
                            </h1>
                        </div>



                        <div className="max-w-[700px] mx-auto lg:mt-[50px] mt-7  space-y-6 ">
                            <div className=' lg:w-[50px] lg:h-[47px]   rounded-full bg-[#D9D9D9] ' >

                            </div>
                            <div className=' lg:ml-14 -mt-4  ' >

                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#000000] font-bold lg:text-xl ">WET Mixed Vocals (with FX)</p>
                                    <p className="text-[#000000] font-light mt-4 lg:text-lg leading-7">
                                        We make sure that you get only the best premium quality vocals by only working with the industry’s finest artists. This makes us the #1 vocal provider.
                                    </p>
                                </div>
                            </div>
                            <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                            </div>
                            <div className=' lg:ml-14 -mt-4 ' >

                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#818080] font-bold lg:text-xl mb-4">Multiple DRY Vocal Takes</p>
                                    <p className="text-[#818080] font-light mt-4 lg:text-lg leading-7">
                                        You find our vocals only on Vocalfy and nowhere else. We delete our Non-Exclusive vocals regularly to make sure you’ll get a rare vocal.                                    </p>
                                </div>
                            </div>

                            <div className=' lg:w-[50px] lg:h-[47px]  rounded-full bg-[#D9D9D9] ' >

                            </div>
                            <div className=' lg:ml-14 -mt-4 ' >

                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#818080] font-bold lg:text-xl mb-4">Lyrics PDF</p>
                                    <p className="text-[#818080] font-light mt-4 lg:text-lg leading-7">
                                        Our contracts are easy to understand without any sketchy clauses. Download your license for each of your vocals. Pick a vocal and start without obstacles.                                    </p>
                                </div>
                            </div>
                        </div>





                    </div>

                </div>


            </div>




            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-8 lg:mt-[59px] mb-6 md:mb-10 lg:mb-20 ">
                <div className=" p-5  pb-14 rounded-md text-[#000000] border-2 border-black shadow ">
                    <div className=' lg:w-[50px] lg:h-[47px] mt-4  rounded-full bg-[#D9D9D9] ' >

                    </div>

                    <h1 className="text-xl lg:text-3xl leading-9 font-bold mt-5 ">
                        100% Royalty free
                    </h1>
                    <div className="mt-6 lg:text-lg leading-6">
                        <p>Use your vocals anywhere. No limits. Cleared for release. Keep all royalties..</p>
                    </div>
                </div>
                <div className=" p-5  pb-14 rounded-md text-[#000000] border-2 border-black shadow ">
                    <div className=' lg:w-[50px] lg:h-[47px] mt-4   rounded-full bg-[#D9D9D9] ' >

                    </div>

                    <h1 className="text-xl lg:text-3xl leading-9 font-bold mt-5 ">
                        Yours forever
                    </h1>
                    <div className="mt-6 lg:text-lg leading-6">
                        <p>Dry vocal stems, Licence and Invoice emailed after purchase. Instrumental at an extra cost. </p>
                    </div>
                </div>
                <div className=" p-5  pb-14 rounded-md text-[#000000] border-2 border-black shadow ">
                    <div className=' lg:w-[50px] lg:h-[47px] mt-4   rounded-full bg-[#D9D9D9] ' >

                    </div>

                    <h1 className="text-xl lg:text-3xl leading-9 font-bold mt-5 ">
                        Vocal love gurantee
                    </h1>
                    <div className="mt-6 lg:text-lg leading-6">
                        <p>Don’t love your existing vocal. We’ll replace it with a new one!</p>
                    </div>
                </div>
            </div>




            <div
                className=" my-16 bg-[url('/images/home-page/tunemImg.png')] bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 rounded-lg mt-16 lg:mt-[107px] relative overflow-hidden"
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div>

                <div className="relative z-10">
                    <h1 className="text-center text-[#E7F056] font-bold lg:text-lg">
                        TUNEM FOR ARTISTS
                    </h1>
                    <div className="mx-auto mt-5 lg:mt-16">
                        <h1 className="text-center lg:leading-24 uppercase lg:text-7xl text-3xl text-white font-thin">
                            do you want to <br /> apply as a vocalist?
                        </h1>
                    </div>
                    <div className="max-w-[482px] mx-auto mt-3 lg:mt-9">
                        <p className="text-center text-white leading-6 lg:text-xl font-thin ">
                            We are very selective with who we work with as we value quality the most.Apply today and start earning money from your vocals.
                        </p>
                    </div>
                    <div>
                        <button className="text-[#E7F056] lg:text-lg w-[194px] py-2 border border-[#E7F056] rounded-2xl block mx-auto mt-4 lg:mt-13">
                            <Link href={""}>GET STARTED</Link>
                        </button>
                    </div>
                </div>
            </div>









        </div>
    )
}

export default SingerDetails
