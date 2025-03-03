"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = ({profileImage}) => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[200px] h-[200px] xl:w-[380px] xl:h-[380px] mix-blend-lighten absolute"
        >
          <Image
            src={profileImage}
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[202px] xl:w-[382px] h-[202px] xl:h-[382px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke='hsl(75,94%, 57%)'
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
