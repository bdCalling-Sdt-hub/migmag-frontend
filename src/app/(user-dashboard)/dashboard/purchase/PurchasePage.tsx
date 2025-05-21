import React from 'react';
import { FaDownload, FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import AuthFooter from '@/components/footer/AuthFooter';

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
        image: '/images/cover1.jpg',
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
        image: '/images/cover2.jpg',
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
        image: '/images/cover3.jpg',
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
        image: '/images/cover4.jpg',
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
        image: '/images/cover5.jpg',
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
        image: '/images/cover6.jpg',
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
    return (
        <>
            <div className="    text-white">
                <div className=" overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse text-white text-left">
                        {/* Table Head */}
                        <thead className="bg-gray-900 text-gray-300 text-lg font-semibold">
                            <tr>
                                {/* <th className="px-4 py-3 w-[93px]"></th>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Artist</th>
                            <th className="px-6 py-3">Genre</th>
                            <th className="px-6 py-3">BPM</th>
                            <th className="px-6 py-3">Key</th>
                            <th className="px-6 py-3">Gender</th>
                            <th className="px-4 py-3 text-center">License</th>
                            <th className="px-4 py-3 text-center">Download</th> */}
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className=' space-y-5 ' >
                            {tracks.map((track, index) => (
                                <tr key={track.id} className={index % 2 === 0 ? "bg-black" : "bg-gray-800"}>
                                    {/* Image + Play */}
                                    <td className="px-4 py-3">
                                        <div className="relative w-[93px] h-[91px]">
                                            <Image
                                                src={track.image || "/images/default.jpg"}
                                                alt={track.title}
                                                className="object-cover rounded-md w-full h-full"
                                                width={93}
                                                height={91}
                                            />
                                            <button className="absolute mt-2 ml-6 inset-0 flex items-center justify-center w-12 h-12 rounded-full bg-opacity-40 border border-[#E7F056] hover:bg-opacity-60 transition">
                                                <FaPlay className="text-[#E7F056]" />
                                            </button>
                                        </div>
                                    </td>

                                    {/* Track Info */}
                                    <td className="px-6 py-3 text-xl font-bold">{track.title}</td>
                                    <td className="px-6 py-3 text-xl">{track.artist}</td>
                                    <td className="px-6 py-3 text-xl">{track.genre}</td>
                                    <td className="px-6 py-3 text-xl">{track.bpm}</td>
                                    <td className="px-6 py-3 text-xl">{track.key}</td>
                                    <td className="px-6 py-3 text-xl">{track.gender}</td>

                                    {/* License */}
                                    <td className="px-4 py-3 text-center">
                                        <LicenseBadge type={track.license} />
                                    </td>

                                    {/* Download */}
                                    <td className="px-4 py-3 text-center">
                                        <button
                                            // onClick={() => downloadAudio(track.audio, track.title)}
                                            className="w-10 h-10 rounded-full bg-[#80BC02] flex justify-center items-center cursor-pointer"
                                        >
                                            <FaDownload />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='mt-20' >
                <AuthFooter></AuthFooter>
            </div>
        </>
    );
};

export default PurchasePage;
