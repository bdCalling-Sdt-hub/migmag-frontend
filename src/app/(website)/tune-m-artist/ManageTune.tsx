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
            <div className=' pt-20 pb-28 max-w-[1427px] mx-auto px-4 ' >
                <h1 className=' text-center text-[35px] font-bold leading-9 ' >Who manages TuneM?</h1>
                <div className=' flex lg:flex-row flex-col justify-between mt-20 ' >
                    {
                        tuneData.map((item, i) => {
                            return (
                                <div className='' key={i} >
                                    <div>
                                        <Image className=' rounded object-cover ' src={item.image} width={425} height={500} alt={item.title} />
                                    </div>
                                    <div className=' max-w-[425px] mt-9 ' >
                                        <p className=' text-lg leading-6 ' >
                                            {
                                                item?.description
                                            }
                                        </p>
                                        <p className=' mt-5 text-[#000000] font-bold text-lg leading-6 ' >
                                            {
                                                item?.title
                                            }
                                        </p>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ManageTune
