"use client";

import { motion } from "framer-motion";

const BrowseVocalMarque: React.FC = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap bg-gray-800 py-2">
            <motion.div
                className="inline-block text-xl font-semibold text-gray-200"
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 5, // ⬅️ Increased duration for slower speed
                    ease: "linear",
                }}
            >
                <h1 className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    perferendis voluptas delectus doloribus explicabo assumenda, quo
                    officiis vero, nobis itaque nam officia autem facere? Tempora placeat,
                    quaerat autem, quos sit iusto quia aperiam itaque nulla quo facilis
                    excepturi totam fugiat voluptatibus pariatur.
                </h1>
            </motion.div>
        </div>
    );
};

export default BrowseVocalMarque;
