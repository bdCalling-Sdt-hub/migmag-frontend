'use client';

import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import Image from 'next/image';
import { FiPlay, FiHeart } from 'react-icons/fi';
import { CiPause1 } from 'react-icons/ci';
import { AnimatePresence, motion } from 'framer-motion';

interface AudioItem {
    title: string;
    name: string;
    audio: string;
    img: string;
}

export default function MusickPlayer({
    show,
    onClose,
    currentTrack,
}: {
    show: boolean;
    onClose: () => void;
    currentTrack: AudioItem;
}) {
    const waveformRef = useRef<HTMLDivElement>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState('00:00');
    const [timeLeft, setTimeLeft] = useState('00:00');

    useEffect(() => {
        if (!waveformRef.current) return;
        wavesurferRef.current?.destroy();

        wavesurferRef.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: '#ccc',
            progressColor: '#E7F056',
            height: 40,
            barWidth: 2,
            responsive: true,
        });

        wavesurferRef.current.load(currentTrack.audio);

        wavesurferRef.current.on('ready', () => {
            const duration = wavesurferRef.current?.getDuration() || 0;
            setTimeLeft(`-${formatTime(duration)}`);
        });

        wavesurferRef.current.on('audioprocess', () => {
            const ws = wavesurferRef.current;
            if (ws) {
                const duration = ws.getDuration();
                const current = ws.getCurrentTime();
                setCurrentTime(formatTime(current));
                setTimeLeft(`-${formatTime(duration - current)}`);
            }
        });

        wavesurferRef.current.on('finish', () => {
            setIsPlaying(false);
        });

        return () => {
            wavesurferRef.current?.destroy();
        };
    }, [currentTrack]);

    const togglePlay = () => {
        if (wavesurferRef.current) {
            wavesurferRef.current.playPause();
            setIsPlaying(wavesurferRef.current.isPlaying());
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60)
            .toString()
            .padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed max-w-[1539px] mx-auto bottom-0 left-0 right-0 z-50 bg-[#1b1b1b] px-4 py-2 shadow-xl border-t-2 border-[#E7F056]"
                    >
                        <div className="flex items-center justify-between gap-4 text-white">
                            {/* Track Info */}
                            <div className="flex items-center gap-3 min-w-[200px]">
                                <div className="w-14 h-14 relative rounded overflow-hidden">
                                    <Image
                                        src={currentTrack.img}
                                        alt={currentTrack.title}
                                        width={93}
                                        height={91}
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm" style={{ fontFamily: 'Favorit' }}>{currentTrack.title}</h3>
                                    <p className="text-xs text-gray-400" style={{ fontFamily: 'Favorit' }}>{currentTrack.name}</p>
                                </div>
                            </div>

                            {/* Controls + Waveform */}
                            <div className="flex-1 flex items-center gap-3" style={{ fontFamily: 'Favorit' }}>
                                <button
                                    onClick={togglePlay}
                                    className="text-[#E7F056] hover:scale-110 cursor-pointer transition"
                                >
                                    {isPlaying ? <CiPause1 size={24} /> : <FiPlay size={24} />}
                                </button>
                                <span className="text-xs w-10 text-right">{currentTime}</span>
                                <div className="w-full">
                                    <div ref={waveformRef} className="w-full h-10" />
                                </div>
                                <span className="text-xs w-12 text-left">{timeLeft}</span>
                            </div>

                            {/* Heart */}
                            <div className="min-w-[30px]" style={{ fontFamily: 'Favorit' }}>
                                <FiHeart size={20} className="text-white cursor-pointer hover:text-[#E7F056]" />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
