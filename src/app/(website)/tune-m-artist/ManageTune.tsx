import Image from 'next/image';
import React from 'react'

type TuneType = {
    image: string;
    description: string;
    title: string
}

const ManageTune: React.FC = () => {
    const tuneData: TuneType[] = [
        {
            image: "/images/tune/tuneBanner/manageTune.png",
            description: "I’m always at a gig, so I can influence how things are for our fans from the inside.",
            title: "Miguel, Founder & Music Producer",
        },
        {
            image: "/images/tune/tuneBanner/manageTune.png",
            description: "I love that I’m trusted by everyone in the company to make certain decisions.",
            title: "Alice, Talent Manager"
        },
        {
            image: "/images/tune/tuneBanner/manageTune.png",
            description: "That’s the great thing about TUNEM – you can feel the love that goes into the site.",
            title: "Martina, Customer Relations"
        }
    ]
    return (
        <div>
            <div className="pt-20 pb-28 max-w-[1427px] mx-auto px-4">
                <h1 className="text-center text-[35px] font-bold leading-9">
                    Who manages TuneM?
                </h1>

                <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mt-20">
                    {tuneData.map((item, i) => (
                        <div
                            key={i}
                            className="mx-auto lg:mx-0 w-full max-w-[425px] flex-shrink-0"
                        >
                            <div>
                                <Image
                                    className="rounded object-cover w-full"
                                    src={item.image}
                                    width={425}
                                    height={500}
                                    alt={item.title}
                                />
                            </div>

                            <div className="mt-6">
                                <p className="text-lg leading-6 text-gray-800">{item?.description}</p>
                                <p className="mt-4 text-[#000000] font-bold text-lg leading-6">
                                    {item?.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ManageTune
