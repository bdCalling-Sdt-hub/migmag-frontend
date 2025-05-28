"use client"

import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Image from 'next/image';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast';
import MusickPlayer from '@/components/musick-player/MusickPlayer';


type VocalItem = {
    id: number;
    title: string;
    artist: string;
    genre: string;
    bpm: string;
    key: string;
    gender: string;
    license: string;
    price: string;
    type: string;
    image: string;
};

type FilterType = {
    genre: string;
    bpm: string;
    key: string;
    gender: string;
    license: string;
    type: string;
    latest: string
};

const BrowseAllVocal = () => {
    const genreRef = useRef<HTMLDivElement>(null);
    const bpmRef = useRef<HTMLDivElement>(null);
    const keyRef = useRef<HTMLDivElement>(null);
    const genderRef = useRef<HTMLDivElement>(null);
    const licenseRef = useRef<HTMLDivElement>(null);
    const typeRef = useRef<HTMLDivElement>(null);
    const latestRef = useRef<HTMLDivElement>(null);


    // Genre 

    const genres: string[] = ["Rock", "Pop", "Jazz", "Classical"];

    const [open, setOpen] = useState<boolean>(false);
    const [selectGenre, setSelectGenre] = useState<string[]>([]);

    function toggleGenre(genre: string): void {
        let newselectGenre: string[];
        if (selectGenre.includes(genre)) {
            newselectGenre = selectGenre.filter((g) => g !== genre);
        } else {
            newselectGenre = [...selectGenre, genre];
        }
        setSelectGenre(newselectGenre);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (genreRef.current && !genreRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);







    // BPM  start


    const bpm: number[] | string[] = [60, 80, 100, 120, 140, 160];


    const [selectedBPM, setSelectedBPM] = useState<string[]>([]);
    const [openBPM, setOpenBPM] = useState<boolean>(false);



    function toggleBPM(bpm: string): void {
        let newBPM: string[];
        if (selectedBPM.includes(bpm)) {
            newBPM = selectedBPM.filter((g) => g !== bpm);
        } else {
            newBPM = [...selectedBPM, bpm];
        }
        setSelectedBPM(newBPM);
        setOpenBPM(false);  // dropdown close korar jonno
    }



    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (bpmRef.current && !bpmRef.current.contains(event.target as Node)) {
                setOpenBPM(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const minBPM = Math.min(...bpm);
    const maxBPM = Math.max(...bpm);

    const [minValue, setMinValue] = useState(minBPM);
    const [maxValue, setMaxValue] = useState(maxBPM);

    const rangeWidth = 100; // in percent

    const getPercent = (value) =>
        ((value - minBPM) / (maxBPM - minBPM)) * rangeWidth;

    const getTrackBackground = () => {
        const minPercent = getPercent(minValue);
        const maxPercent = getPercent(maxValue);
        return `linear-gradient(to right, white 0%, white ${minPercent}%, yellow ${minPercent}%, yellow ${maxPercent}%, white ${maxPercent}%, white 100%)`;
    };


    // BPM  end


    // Key  start
    const keys: string[] = ["60", "80", "100", "120", "140", "160"];
    const [selectedKey, setSelectedKey] = useState<string[]>([]);
    const [openKey, setOpenKey] = useState<boolean>(false);

    function toggleKey(keyValue: string, genderValue?: string): void {
        // Update selected keys
        const newKey = selectedKey.includes(keyValue)
            ? selectedKey.filter((g) => g !== keyValue)
            : [...selectedKey, keyValue];

        setSelectedKey(newKey);
        setOpenKey(false); // Close dropdown

        // Update selected gender if `genderValue` is provided
        if (genderValue) {
            setSelectedGender((prev) =>
                prev.includes(genderValue)
                    ? prev.filter((i) => i !== genderValue)
                    : [...prev, genderValue]
            );
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (keyRef.current && !keyRef.current.contains(event.target as Node)) {
                setOpenKey(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Key end




    // Gender  start
    const gender: string[] = ["male", "female"];
    const [selectedGender, setSelectedGender] = useState<string[]>([]);
    const [openGender, setOpenGender] = useState<boolean>(false);

    function toggleGender(genderValue: string): void {
        const newGender = selectedGender.includes(genderValue)
            ? selectedGender.filter((g) => g !== genderValue)
            : [...selectedGender, genderValue];

        setSelectedGender((prev) =>
            prev.includes(genderValue) ? prev.filter((i) => i !== genderValue) : [...prev, genderValue]
        );



        setSelectedGender(newGender);
        setOpenGender(false); // Close dropdown

    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (genderRef.current && !genderRef.current.contains(event.target as Node)) {
                setOpenGender(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);




    // Gender end


    // License  start
    const License: string[] = [
        "Creative Commons",
        "Royalty Free",
        "Public Domain",
        "All Rights Reserved",
    ];

    const [selectedLicense, setSelectedLicense] = useState<string[]>([]);
    const [openLicense, setOpenLicense] = useState<boolean>(false);

    function toggleLicense(licenseValue: string): void {
        let newLicense: string[];
        if (selectedLicense.includes(licenseValue)) {
            newLicense = selectedLicense.filter((g) => g !== licenseValue);
            setSelectedLicense((prev) =>
                prev.includes(licenseValue) ? prev.filter((i) => i !== licenseValue) : [...prev, licenseValue]
            );
        } else {
            newLicense = [...selectedLicense, licenseValue];
        }
        setSelectedLicense(newLicense); // ✅ Corrected here
        setOpenLicense(false); // dropdown close
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (licenseRef.current && !licenseRef.current.contains(event.target as Node)) {
                setOpenLicense(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);






    // License end








    // Type  start
    const type: string[] = [
        "Rock",
        "Pop",
        "Jazz",
        "Classical",
        "Hip Hop",
        "Electronic",
        "Country",
        "Reggae",
        "Blues",
        "Folk",
    ];

    const [selectedType, setSelectedType] = useState<string[]>([]);
    const [openType, setOpenType] = useState<boolean>(false);

    function toggleType(type: string): void {
        let newType: string[];
        if (selectedType.includes(type)) {
            newType = selectedType.filter((g) => g !== type);
        } else {
            newType = [...selectedType, type];
        }
        setSelectedType((prev) =>
            prev.includes(type) ? prev.filter((i) => i !== type) : [...prev, type]
        );
        setSelectedType(newType); // ✅ Corrected here
        setOpenType(false); // dropdown close
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
                setOpenType(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    // Type end




    // Latest  start
    const latest: string[] = ["60", "80", "100", "120", "140", "160"];


    const [selectLatest, setselectLatest] = useState<string[]>([]);
    const [openLatest, setOpenLatest] = useState<boolean>(false);

    function toggleLatest(latestValue: string): void {
        const newLatest = selectLatest.includes(latestValue)
            ? selectLatest.filter((g) => g !== latestValue)
            : [...selectLatest, latestValue];

        setselectLatest((prev) =>
            prev.includes(latestValue) ? prev.filter((i) => i !== latestValue) : [...prev, latestValue]
        );

        setselectLatest(newLatest);
        setOpenLatest(false)
        setOpenKey(false); // Close dropdown
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (latestRef.current && !latestRef.current.contains(event.target as Node)) {
                setOpenLatest(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Latest end





    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filter, setFilter] = useState<FilterType>({
        genre: '',
        bpm: '',
        key: '',
        gender: '',
        license: '',
        type: '',
        latest: "",
    });
    const [data, setData] = useState<VocalItem[]>([]);

    useEffect(() => {
        setData([
            {
                id: 1,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'NON-EXCLUSIVE',
                price: '€120',
                type: 'non-exclusive',
                image: "/images/browse-vocal/browse/browse-1.png",
            },
            {
                id: 2,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'EXCLUSIVE',
                price: '€120',
                type: 'exclusive',
                image: "/images/browse-vocal/browse/browse-2.png",
            },
            {
                id: 3,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'G#major',
                gender: 'Male',
                license: 'PREMIUM',
                price: '€120',
                type: 'premium',
                image: "/images/browse-vocal/browse/browse-3.png",
            },
            {
                id: 4,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'NON-EXCLUSIVE',
                price: '€120',
                type: 'non-exclusive',
                image: "/images/browse-vocal/browse/browse-4.png",
            },
            {
                id: 5,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'EXCLUSIVE',
                price: '€120',
                type: 'exclusive',
                image: "/images/browse-vocal/browse/browse-5.png",
            },
            {
                id: 6,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'G#major',
                gender: 'Male',
                license: 'PREMIUM',
                price: '€120',
                type: 'premium',
                image: "/images/browse-vocal/browse/browse-6.png",
            },
            {
                id: 7,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'NON-EXCLUSIVE',
                price: '€120',
                type: 'non-exclusive',
                image: "/images/browse-vocal/browse/browse-7.png",
            },
            {
                id: 8,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'EXCLUSIVE',
                price: '€120',
                type: 'exclusive',
                image: "/images/browse-vocal/browse/browse-8.png",
            },
            {
                id: 9,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'G#major',
                gender: 'Male',
                license: 'PREMIUM',
                price: '€120',
                type: 'premium',
                image: "/images/browse-vocal/browse/browse-9.png",
            },
            {
                id: 10,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'NON-EXCLUSIVE',
                price: '€120',
                type: 'non-exclusive',
                image: "/images/browse-vocal/browse/browse-10.png",
            },
            {
                id: 11,
                title: 'Lost In The Night',
                artist: 'Barbie Mack',
                genre: 'Cover',
                bpm: '128BMP',
                key: 'Cminor',
                gender: 'Female',
                license: 'EXCLUSIVE',
                price: '€120',
                type: 'exclusive',
                image: "/images/browse-vocal/browse/browse-5.png",
            },


        ]);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (key: keyof FilterType, value: string) => {
        setFilter((prev) => ({ ...prev, [key]: value }));
    };

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter.genre ? item.genre === filter.genre : true) &&
        (filter.bpm ? item.bpm === filter.bpm : true) &&
        (filter.key ? item.key === filter.key : true) &&
        (filter.gender ? item.gender === filter.gender : true) &&
        (filter.license ? item.license === filter.license : true) &&
        (filter.type ? item.type === filter.type : true)
    );

    const [visibleData, setVisibleData] = useState(10)

    const clearSearch = () => {
        setFilter("")
        setSearchTerm("")
    }


    const addToCard = (id: number) => {
        toast.success('Added to cart successfully');
        console.log(id)
    }


    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const handleOpenModal = (index: number) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    const nextTrack = () => {
        if (currentIndex !== null) {
            const nextIndex = (currentIndex + 1) % data.length;
            setCurrentIndex(nextIndex);
        }
    };

    const prevTrack = () => {
        if (currentIndex !== null) {
            const prevIndex = (currentIndex - 1 + data.length) % data.length;
            setCurrentIndex(prevIndex);
        }
    };

    return (
        <>
            <div style={{ fontFamily: 'Favorit' }} className=" max-w-[1551px] mx-auto px-4  ">
                <div className=' mt-12 mb-6 ' >
                    <div className=' border border-white ' ></div>
                </div>
                <div className=' flex md:flex-row lg:flex-row flex-col justify-between items-center mb-11  ' >
                    <div className='flex-1' >
                        <h1 className=' lg:text-3xl md:text-2xl font-bold leading-9 text-white ' >Browse <span className=' text-[#818080] ' >Vocals</span></h1>
                    </div>

                    <div className='  flex-1 lg:flex flex-col md:flex-row gap-14 relative   ' >
                        <div className='   ' >
                            <button onClick={clearSearch} className='  border-none text-[#FFFFFF] text-lg underline mt-4  cursor-pointer   ' >Clear filters</button>
                        </div>
                        <div className="relative md:mt-0 mt-6 flex-1">
                            <input
                                className="border border-white focus:outline-0 w-full py-2.5 rounded-2xl text-white px-14 bg-transparent placeholder-gray-400 placeholder:text-[16px] placeholder:ml-3.5  "
                                placeholder="SEARCH"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white" />
                        </div>
                    </div>
                </div>


                <div className=" grid 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 xl:gap-x-14 md:gap-x-10 gap-y-4 gap-x-5 mx-auto   mb-6  ">

                    {/* genre  */}

                    <div className="relative md:w-[177px] w-[150px]  " ref={genreRef}>
                        <button
                            type="button"
                            className="bg-[#201F1F] text-white md:px-5 px-3 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                            onClick={() => setOpen(!open)}
                        >
                            {/* Icon on RIGHT side */}
                            {open ? (
                                <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            ) : (
                                <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            )}

                            {/* Only show selected count */}
                            <span className="w-28 text-white md:text-lg ">
                                {selectGenre.length > 0 ? <>Selected {selectGenre.length}</> : "Genre"}
                            </span>
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                    style={{ top: "calc(100% + 0.5rem)" }} // better margin than mt-20
                                >
                                    {genres.map((genre) => (
                                        <label
                                            key={genre}
                                            className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectGenre.includes(genre)}
                                                onChange={(e) => {
                                                    toggleGenre(genre);
                                                    handleFilterChange('genre', e.target.checked ? genre : '');
                                                }}
                                                className="mr-3 accent-indigo-500 w-5 h-5"
                                            />
                                            <span className="text-white md:text-lg   ">{genre}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>


                    {/* BPM */}

                    {/* BPM */}

                    <div className="relative md:w-[177px] w-[150px] " ref={bpmRef}>
                        <button
                            type="button"
                            className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                            onClick={() => setOpenBPM(!openBPM)}
                        >
                            {openBPM ? (
                                <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            ) : (
                                <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            )}

                            <span className="w-28 text-white md:text-lg   ">
                                BPM
                            </span>
                        </button>

                        <AnimatePresence>
                            {openBPM && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50"
                                >
                                    <div
                                        ref={bpmRef}
                                        className="bg-[#201F1F] rounded-2xl p-6 w-[90%] max-w-md max-h-[80vh] overflow-auto"
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-white text-xl font-semibold">Filter By BPM</h2>
                                            <button onClick={() => setOpenBPM(false)} className="cursor-pointer text-white text-2xl">×</button>
                                        </div>

                                        <div className="flex flex-col gap-6">


                                            <div className="flex flex-col items-center gap-4">
                                                {/* Selected BPM and Range Input */}
                                                <div className="relative w-full pt-8">
                                                    {/* Number Labels */}
                                                    <div
                                                        className="absolute  -top-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                        style={{ left: `calc(${getPercent(minValue)}% - 20px)` }}
                                                    >
                                                        {minValue.toFixed(2)}
                                                    </div>
                                                    <div
                                                        className="absolute  -top-4  -ml-4 text-sm font-semibold text-white bg-black px-2 py-1 rounded"
                                                        style={{ left: `calc(${getPercent(maxValue)}% - 20px)` }}
                                                    >
                                                        {maxValue.toFixed(2)}
                                                    </div>

                                                    {/* Track */}
                                                    <div
                                                        className="w-full h-2 rounded-full"
                                                        style={{ background: getTrackBackground() }}
                                                    />

                                                    {/* Left Thumb */}
                                                    <input
                                                        type="range"
                                                        min={minBPM}
                                                        max={maxBPM}
                                                        value={minValue}
                                                        onChange={(e) => {
                                                            const val = Math.min(Number(e.target.value), maxValue - 1);
                                                            setMinValue(val);
                                                        }}
                                                        className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                    />

                                                    {/* Right Thumb */}
                                                    <input
                                                        type="range"
                                                        min={minBPM}
                                                        max={maxBPM}
                                                        value={maxValue}
                                                        onChange={(e) => {
                                                            const val = Math.max(Number(e.target.value), minValue + 1);
                                                            setMaxValue(val);
                                                        }}
                                                        className="absolute top-8 w-full h-4 appearance-none bg-transparent pointer-events-auto"
                                                    />
                                                </div>

                                                {/* Buttons */}
                                                <div className="flex justify-center items-center gap-4 w-full">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedBPM(0); // or default value
                                                            handleFilterChange("bpm", "");
                                                            setOpenBPM(false)
                                                        }}
                                                        className="bg-gray-700 cursor-pointer text-white px-4 py-1 rounded-lg hover:bg-gray-600 transition"
                                                    >
                                                        Reset
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            handleFilterChange("bpm", [minValue, maxValue]); // ⬅ send the selected range
                                                            setSelectedBPM([minValue, maxValue]);           // ⬅ store the selection
                                                            setOpenBPM(false);                              // ⬅ close the modal
                                                        }}
                                                        className="bg-[#E7F056] cursor-pointer text-black px-4 py-1 font-semibold rounded-lg transition"
                                                    >
                                                        Filter
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>



                    {/* KEY */}

                    <div className="relative md:w-[177px] w-[150px]" ref={keyRef}>
                        <button
                            type="button"
                            className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                            onClick={() => setOpenKey(!openKey)}
                        >
                            {openKey ? (
                                <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            ) : (
                                <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            )}

                            <span className="w-28 text-white md:text-lg ">
                                {selectedKey.length > 0 ? <>Selected {selectedKey.length}</> : "KEY"}
                            </span>
                        </button>

                        <AnimatePresence>
                            {openKey && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                    style={{ top: "calc(100% + 0.5rem)" }}
                                >
                                    {keys.map((keys) => (
                                        <label
                                            key={keys}
                                            className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedKey.includes(keys)}
                                                onChange={(e) => {
                                                    toggleKey(keys);
                                                    handleFilterChange('keys', e.target.checked ? keys : '');
                                                }}
                                                className="mr-3 accent-indigo-500 w-5 h-5"
                                            />
                                            <span className="text-white md:text-lg ">{keys}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>




                    {/* Gender */}

                    <div className="relative md:w-[177px] w-[150px]" ref={genderRef}>
                        <button
                            type="button"
                            className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                            onClick={() => setOpenGender(!openGender)}
                        >
                            {openGender ? (
                                <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            ) : (
                                <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            )}

                            <span className="w-28 text-white md:text-lg  ">
                                {selectedGender.length > 0 ? <>Selected {selectedGender.length}</> : "Gender"}
                            </span>
                        </button>

                        <AnimatePresence>
                            {openGender && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                    style={{ top: "calc(100% + 0.5rem)" }}
                                >
                                    {gender.map((gender) => (
                                        <label
                                            key={gender}
                                            className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedGender.includes(gender)}
                                                onChange={(e) => {
                                                    toggleGender(gender);
                                                    handleFilterChange('gender', e.target.checked ? gender : '');
                                                }}
                                                className="mr-3 accent-indigo-500 w-5 h-5"
                                            />
                                            <span className="text-white md:text-lg ">{gender}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>







                    {/* License */}

                    <div className="relative md:w-[177px] w-[150px]" ref={licenseRef}>
                        <button
                            type="button"
                            className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                            onClick={() => setOpenLicense(!openLicense)}
                        >
                            {openLicense ? (
                                <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            ) : (
                                <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            )}

                            <span className="w-28 text-white md:text-lg   ">
                                {selectedLicense.length > 0 ? <>Selected {selectedLicense.length}</> : "License"}
                            </span>
                        </button>

                        <AnimatePresence>
                            {openLicense && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                    style={{ top: "calc(100% + 0.5rem)" }}
                                >
                                    {License.map((license) => (
                                        <label
                                            key={license}
                                            className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedLicense.includes(license)}
                                                onChange={(e) => {
                                                    toggleLicense(license);
                                                    handleFilterChange('license', e.target.checked ? license : '');
                                                }}
                                                className="mr-3 accent-indigo-500 w-5 h-5"
                                            />
                                            <span className="text-white md:text-lg  ">{license}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>


                    {/* Type  */}



                    <div className="relative md:w-[177px] w-[150px]" ref={typeRef}>
                        <button
                            type="button"
                            className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                            onClick={() => setOpenType(!openType)}
                        >
                            {openType ? (
                                <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            ) : (
                                <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            )}

                            <span className="w-28 text-white md:text-lg   ">
                                {selectedType.length > 0 ? <>Selected {selectedType.length}</> : "Type"}
                            </span>
                        </button>

                        <AnimatePresence>
                            {openType && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                    style={{ top: "calc(100% + 0.5rem)" }}
                                >
                                    {type.map((item) => (
                                        <label
                                            key={item}
                                            className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedType.includes(item)}
                                                onChange={(e) => {
                                                    toggleType(item); // ✅ Efficient toggle
                                                    handleFilterChange("type", e.target.checked ? item : "");
                                                }}
                                                className="mr-3 accent-indigo-500 w-5 h-5"
                                            />
                                            <span className="text-white md:text-lg  ">{item}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>





                    {/* latest  */}


                    <div className="relative md:w-[177px] w-[150px] " ref={latestRef}>
                        <button
                            type="button"
                            className="bg-[#201F1F]  relative  text-white px-5 py-3 rounded-2xl w-full text-left cursor-pointer flex items-center gap-2"
                            onClick={() => setOpenLatest(!openLatest)}
                        >
                            {openLatest ? (
                                <HiChevronUp className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            ) : (
                                <HiChevronDown className="text-white w-5 h-5 absolute right-2 md:right-7" />
                            )}

                            <span className="w-28 text-white md:text-lg   ">
                                {selectLatest.length > 0 ? <>Selected {selectLatest.length}</> : "Latest"}
                            </span>
                        </button>

                        <AnimatePresence>
                            {openLatest && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute z-10 mt-2 bg-gray-800 rounded-2xl w-full max-h-44 overflow-auto border border-gray-700 shadow-lg"
                                    style={{ top: "calc(100% + 0.5rem)" }}
                                >
                                    {
                                        latest.map((item) => (
                                            <label
                                                key={item}
                                                className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedType.includes(item)}
                                                    onChange={(e) => {
                                                        toggleLatest(item);
                                                        handleFilterChange('latest', e.target.checked ? item : '');
                                                    }}
                                                    className="mr-3 accent-indigo-500 w-5 h-5"
                                                />
                                                <span className="text-white md:text-lg  ">{item}</span>
                                            </label>
                                        ))
                                    }
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>


                </div>



                {/* table  */}

                <div className='overflow-x-auto w-full' >
                    <table className="  min-w-[800px] rounded-lg overflow-hidden w-full">
                        <thead>
                            <tr className="text-white  ">
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] ">TITLE</th>
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] "></th>
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] ">ARTIST</th>
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] ">GENRE</th>
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] ">BPM</th>
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] ">KEY</th>
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] ">GENDER</th>
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] ">License</th>
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] "></th>
                                <th className="py-3 lg:px-6 mt-10 mb-8 text-left text-[#E7F056] text-[10px] md:text-[16px] ">PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.slice(0, visibleData).map((item, i) => (
                                <motion.tr
                                    key={item.id}
                                    className={`cursor-pointer ${i % 2 === 0 ? "bg-[#201F1F]" : "bg-[#000000]"} rounded-md `}
                                >
                                    <td className="lg:py-4 py-1 px-3 lg:px-6">
                                        <div className="relative w-20 h-20">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={80}
                                                height={80}
                                                className="w-full h-full rounded-lg object-cover"
                                            />
                                            <span onClick={() => { handleOpenModal(item.id) }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <svg
                                                    width="52"
                                                    height="52"
                                                    viewBox="0 0 52 52"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx="26" cy="26" r="25.5" stroke="#E7F056" />
                                                    <g clipPath="url(#clip0_1_1751)">
                                                        <path
                                                            d="M18.72 14.594V37.4059C18.7182 37.7838 18.8178 38.1553 19.0083 38.4813C19.1988 38.8074 19.4732 39.0759 19.8028 39.2588C20.1324 39.4417 20.5049 39.5322 20.8813 39.5208C21.2578 39.5094 21.6242 39.3966 21.9422 39.1941L40.6175 26.4512C40.9186 26.2617 41.1668 25.9987 41.3388 25.6866C41.5108 25.3746 41.6011 25.0238 41.6011 24.6672C41.6011 24.3106 41.5108 23.9598 41.3388 23.6478C41.1668 23.3357 40.9186 23.0726 40.6175 22.8832L21.9422 12.8142C21.6248 12.6121 21.2591 12.4993 20.8834 12.4876C20.5077 12.4759 20.1358 12.5656 19.8065 12.7475C19.4772 12.9294 19.2026 13.1968 19.0115 13.5216C18.8204 13.8464 18.7197 14.2168 18.72 14.594Z"
                                                            fill="#E7F056"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_1751">
                                                            <rect
                                                                width="22.88"
                                                                height="27.04"
                                                                fill="white"
                                                                transform="translate(18.72 12.48)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </div>
                                    </td>
                                    <td className="lg:py-4 lg:px-6 px-3 ">
                                        <h3 className="text-white lg:font-bold text-[10px] lg:text-xl lg:leading-6 md:text-sm  ">{item.title}</h3>
                                    </td>
                                    <td className="lg:py-4 lg:px-6 px-3 ">
                                        <p className="text-white lg:font-bold text-[10px] lg:text-xl lg:leading-6">{item.artist}</p>
                                    </td>
                                    <td className="lg:py-4 py-1 px-2 lg:px-6 text-white lg:font-bold text-[10px] lg:text-xl lg:leading-6">{item.genre}</td>
                                    <td className="lg:py-4 py-1 px-2 lg:px-6 text-white lg:font-bold text-[10px] lg:text-xl lg:leading-6">{item.bpm}</td>
                                    <td className="lg:py-4 py-1 px-2 lg:px-6 text-white lg:font-bold text-[10px] lg:text-xl lg:leading-6">{item.key}</td>
                                    <td className="lg:py-4 py-1 px-2 lg:px-6 text-white lg:font-bold text-[10px] lg:text-xl lg:leading-6">{item.gender}</td>
                                    <td className='lg:py-4 py-1 px-2 lg:px-6 text-white md:text-lg text-[10px]  '

                                    >
                                        <h1 className={` text-center rounded-2xl py-1 px-3
                                    ${item.license === "EXCLUSIVE"
                                                ? "bg-[#80BC02] "
                                                : item.license === "NON-EXCLUSIVE"
                                                    ? "bg-[#818080]"
                                                    : item.license === "PREMIUM"
                                                        ? "bg-[#00C2CE]"
                                                        : ""
                                            }`} >
                                            {item.license}
                                        </h1>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span onClick={() => { addToCard(item?.id) }} className="inline-block">
                                            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.48486H2.78025C3.88523 1.48486 4.75488 2.65437 4.6628 3.99992L3.8136 16.5249C3.67036 18.5747 4.99019 20.3352 6.66812 20.3352H17.5644C19.0377 20.3352 20.3269 18.8514 20.4394 17.0531L20.9919 7.62161C21.1147 5.53411 19.8255 3.83644 18.1169 3.83644H4.90836" stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.5797 26.6355C16.2861 26.6355 16.8586 25.9318 16.8586 25.0636C16.8586 24.1954 16.2861 23.4917 15.5797 23.4917C14.8733 23.4917 14.3008 24.1954 14.3008 25.0636C14.3008 25.9318 14.8733 26.6355 15.5797 26.6355Z" stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.39463 26.6355C8.10096 26.6355 8.67354 25.9318 8.67354 25.0636C8.67354 24.1954 8.10096 23.4917 7.39463 23.4917C6.68831 23.4917 6.11572 24.1954 6.11572 25.0636C6.11572 25.9318 6.68831 26.6355 7.39463 26.6355Z" stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.16187 9.03003H20.4394" stroke="#E7F056" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </span>
                                    </td>
                                    <td className="lg:py-4 py-1 px-3 lg:px-6 ">
                                        <h1 className=' text-[#000000] font-bold text-[10px] lg:text-lg bg-[#E7F056] text-center rounded-2xl px-2 ' >
                                            {item.price}
                                        </h1>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='  mt-14 mb-20 grid lg:grid-cols-2 items-center ' >
                    <div>
                        <h1 className=' text-[#818080] text-lg ' >*New Vocals Added Monthly</h1>
                        <h1 className=' text-3xl text-[#E7F056] leading-9 font-thin ' >Notify me</h1>
                    </div>
                    <div  >
                        {
                            visibleData < filteredData.length && (
                                <button onClick={() => { setVisibleData(prev => prev + 10) }} className=' mt-4 lg:mt-0 rounded-2xl border border-white text-white px-6 py-3 text-lg cursor-pointer   ' >LOAD MORE VOCALS</button>
                            )
                        }
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row justify-between items-stretch gap-5">
                    {/* Box 1 */}
                    <div className="bg-[#201F1F] p-6 lg:pt-44 rounded-md text-white max-w-full lg:max-w-[32%]">
                        <h1 className="text-3xl font-bold leading-9">100% Royalty free</h1>
                        <p className="mt-6 text-lg leading-6">
                            Use your vocals anywhere. No limits. Cleared for release. Keep all royalties.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="bg-[#201F1F] p-6 lg:pt-44 rounded-md text-white max-w-full lg:max-w-[32%]">
                        <h1 className="text-3xl font-bold leading-9">Yours forever</h1>
                        <p className="mt-6 text-lg leading-6">
                            Dry vocal stems, Licence and Invoice emailed after purchase. Instrumental at an extra cost.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-[#201F1F]  p-6 lg:pt-44 rounded-md text-white max-w-full lg:max-w-[32%]">
                        <h1 className="text-3xl font-bold leading-9">Vocal love guarantee</h1>
                        <p className="mt-6 text-lg leading-6">
                            Don’t love your existing vocal? We’ll replace it with a new one!
                        </p>
                    </div>
                </div>




                <div className='  flex lg:flex-row flex-col items-start justify-between relative gap-5 lg:mt-40 mt-8 ' >
                    {/* left side  */}
                    <div>
                        <div className=' max-w-[411px] ' >
                            <h1 className=' text-2xl lg:text-[35px] font-bold text-[#ffffff] leading-9 ' >
                                We’ve got you <br /> covered
                            </h1>
                        </div>

                        <div className=' max-w-[478px] lg:mt-8 mt-3 ' >
                            <h1 className=' lg:text-lg text-[#ffffff] leading-6 font-thin ' >Browse and purchase acapellas created by top singers from around the world. Use them to create original music that you can release and profit from.</h1>
                        </div>



                        <div className="max-w-[700px] mx-auto lg:mt-[50px] mt-7 lg:space-y-12 space-y-3 ">
                            <div className=' flex flex-row gap-5  items-start  ' >
                                <div className=' w-[50px] h-[47px]  rounded-full bg-[#201F1F] ' >

                                </div>
                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#ffffff] font-bold lg:text-xl mb-4">Premium-Quality Vocals</p>
                                    <p className="text-[#ffffff] font-light mt-4 lg:text-lg leading-7">
                                        Perfectly edited by our industry-leading vocal editors to make your music the best it can be. 3 Vocal Takes and edited vocals are always included.
                                    </p>
                                </div>
                            </div>

                            <div className=' flex flex-row gap-5  items-start  ' >
                                <div className=' w-[50px] h-[47px]  rounded-full bg-[#201F1F] ' >

                                </div>
                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#ffffff] font-bold lg:text-xl mb-4">World-class Artists</p>
                                    <p className="text-[#ffffff] font-light mt-4 lg:text-lg leading-7">
                                        All singers are fully verified and must meet our high quality standards regarding skill, lyrics and recording quality. Message and hire our artists for your projects.
                                    </p>
                                </div>
                            </div>

                            <div className=' flex flex-row gap-5  items-start  ' >
                                <div className=' w-[50px] h-[47px]  rounded-full bg-[#201F1F] ' >

                                </div>
                                <div className=" transition duration-300 w-full ">
                                    <p className="text-[#ffffff] font-bold lg:text-xl mb-4">Release Worldwide</p>
                                    <p className="text-[#ffffff] font-light mt-4 lg:text-lg leading-7">
                                        Publish your new song on all streaming platforms, record labels, use commercially and never worry about royalties, they belong to you – 100%. Go beyond with Vocalfy.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* right side  */}
                    <div>
                        <Image src={"/images/home-page/coveredImg.png"} className=' object-cover rounded-lg block mx-auto ' width={652} height={654} alt='....' />
                    </div>
                </div>


                <div
                    className=" bg-[url('/images/home-page/tunemImg.png')] bg-no-repeat bg-cover bg-center py-6 lg:pt-11 lg:pb-16 rounded-lg mt-16 lg:mt-[107px] relative overflow-hidden"
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-black/30 z-0"></div>

                    <div className="relative z-10">
                        <h1 className="text-center text-[#E7F056] font-bold lg:text-lg">
                            TUNEM FOR ARTISTS
                        </h1>
                        <div className="mx-auto mt-5 lg:mt-16">
                            <h1 style={{ fontFamily: 'Bayon' }} className="text-center lg:text-7xl text-3xl text-white font-thin">
                                GROW YOUR <br />
                                REACH & AUDIENCE
                            </h1>
                        </div>
                        <div className="max-w-[482px] mx-auto mt-3 lg:mt-9">
                            <p className="text-center text-white leading-6 lg:text-xl font-thin ">
                                Whether you want to promote your own song, increase revenue or reach a
                                wider audience, artists always benefit from our artists-first approach.
                            </p>
                        </div>
                        <div>
                            <button className="text-[#E7F056] lg:text-lg w-[194px] py-2 border border-white rounded-2xl block mx-auto mt-4 lg:mt-13">
                                <Link href={""}>GET STARTED</Link>
                            </button>
                        </div>
                    </div>
                </div>


                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />

            </div>


            {showModal && currentIndex !== null && (
                <MusickPlayer
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    currentTrack={data[currentIndex]}
                    nextTrack={nextTrack}
                    prevTrack={prevTrack}
                />
            )}
        </>
    );
};

export default BrowseAllVocal;

