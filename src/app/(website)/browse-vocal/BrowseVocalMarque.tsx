"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BrowseVocalMarque: React.FC = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-[#E7F056] my-11 py-3">
            <motion.div
                className="inline-block text-xl font-semibold text-gray-200"
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 35, // ⬅️ Increased duration for slower speed
                    ease: "linear",
                }}
            >
                <div className=" flex flex-row items-center gap-16 lg:gap-24 " >
                    <div>
                        <h1 className="text-[#000000] text-2xl lg:text-5xl leading-24 ">
                            Want to Hire singers Royalty Free?
                        </h1>
                    </div>

                    <div>
                        <Link href={"/all-singer"}><button className=" text-[#000000] text-lg border border-[#000000] rounded-[17px] py-3 px-6 " >VIEW  OUR SINGERS</button></Link>
                    </div>
                    <div>
                        <h1 className="text-[#000000] text-2xl lg:text-5xl leading-24 " >Want to Hire singers Royalty Free?</h1>
                    </div>
                    <div>
                        <Link href={"/all-singer"}><button className=" text-[#000000] text-lg border border-[#000000] rounded-[17px] py-3 px-6 " >VIEW  OUR SINGERS</button></Link>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default BrowseVocalMarque;
