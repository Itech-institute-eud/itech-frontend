"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { title: "Arise Health", path: "/images/Arise Health.png" },
  { title: "Ephicient", path: "/images/Ephicient.png" },
  { title: "2020INC", path: "/images/2020INC.png" },
  { title: "THE PAAK", path: "/images/THE PAAK.png" },
  { title: "Pipelinx.co", path: "/images/Pipelinx.co.png" },
  { title: "TOOGETHER", path: "/images/TOOGETHER.png" },
];

const Marquee = () => {
  return (
    <div className="overflow-hidden py-2 lg:py-4 relative bg-gray-100">
      <motion.div
        className="flex gap-8 min-w-max"
        animate={{ x: ["0%", "-40%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="relative w-[120px] h-[60px]">
            <Image
              src={logo.path}
              alt={logo.title}
              layout="fill"
              objectFit="contain" // Prevent cropping, keep original proportions
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
