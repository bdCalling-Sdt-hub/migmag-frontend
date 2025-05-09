import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const AllArtistPage: React.FC = () => {
    interface SingerInterface {
        image: string;
        name: string;
        singer: string;
        genre: string
    }
    const singerData: SingerInterface[] = [
        {
            image: "/images/home-page/artist/singer-3.png",
            name: "Blinding Lights",
            singer: "The Weeknd",
            genre: "Pop"
        },
        {
            image: "/images/home-page/artist/singer-4.png",

            name: "Shape of You",
            singer: "Ed Sheeran",
            genre: "Pop"
        },
        {
            image: "/images/home-page/artist/singer-5.png",
            name: "Levitating",
            singer: "Dua Lipa",
            genre: "Disco-Pop"
        },
        {
            image: "/images/home-page/artist/singer-6.png",
            name: "Bad Guy",
            singer: "Billie Eilish",
            genre: "Electropop"
        },
        {
            image: "/images/home-page/artist/singer-1.png",
            name: "Lose Yourself",
            singer: "Eminem",
            genre: "Hip-Hop"
        },
        {
            image: "/images/home-page/artist/singer-2.png",
            name: "Peaches",
            singer: "Justin Bieber",
            genre: "R&B"
        },
        {
            image: "/images/home-page/artist/singer-3.png",
            name: "Stay",
            singer: "The Kid LAROI & Justin Bieber",
            genre: "Pop"
        },
        {
            image: "/images/home-page/artist/singer-4.png",
            name: "Uptown Funk",
            singer: "Mark Ronson ft. Bruno Mars",
            genre: "Funk"
        },
        {
            image: "/images/home-page/artist/singer-5.png",
            name: "Thinking Out Loud",
            singer: "Ed Sheeran",
            genre: "Soul"
        },
        {
            image: "/images/home-page/artist/singer-6.png",
            name: "Happier Than Ever",
            singer: "Billie Eilish",
            genre: "Alternative"
        }
    ]
    return (
        <div>
            <div className=' lg:my-10 my-4 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2  gap-3 lg:gap-7     ' >
                {
                    singerData.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className={`bg-[#c5c1bf] p-2 rounded-lg   `}
                            >
                                <Image
                                    src={item.image}
                                    width={213}
                                    height={163}
                                    alt={item.name}
                                    className="object-cover"
                                />
                                <div className='mt-2' >
                                    <h1 className=' lg:text-xl leading-6 text-[#000000] ' >
                                        {
                                            item.name
                                        }
                                    </h1>
                                    <h1 className=' text-[15px] leading-6 text-[#504E4E] my-0.5 ' >
                                        Singer - {item.singer}
                                    </h1>
                                    <h1 className=' text-[15px] leading-6 text-[#504E4E]  ' >
                                        Genre : {item.genre}
                                    </h1>
                                </div>
                                <div>
                                    <Link href={"/profile"} className=' text-[#000000] leading-6 text-sm flex items-center gap-1 font-thin  ' >VIEW  <span><FaArrowRight /></span> </Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default AllArtistPage
