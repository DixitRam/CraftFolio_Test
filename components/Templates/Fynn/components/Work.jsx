"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "./WorkSliderBtns";

const Work = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(projects?.[0] || null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    setCurrentIndex(1);
  }, []);

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    setCurrentProject(projects[index]);
    setCurrentIndex(index + 1);
  };

  if (!projects || projects.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center"
      >
        <p className="text-white/60">No projects available</p>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[15px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-7xl font-extrabold leading-none text-transparent text-outline">
                {String(currentIndex).padStart(2, '0')}
              </div>
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {currentProject.name}
              </h2>
              <p className="text-white/60">{currentProject.description}</p>
              <ul className="flex gap-4">
                {currentProject.technologies.map((tech, index) => (
                  <li key={index} className="text-[16px] text-accent">
                    {tech}
                    {index !== currentProject.technologies.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link target="_blank" href={currentProject.project_url}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[420px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="flex h-[360px]  rounded-xl relative group justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 rounded-xl w-full h-full bg-black/10 z-10"></div>
                    <div className="relative rounded-xl w-full h-full">
                      <Image
                        src={project.thumbnail[0]}
                        alt={project.name}
                        fill
                        className="object-contain rounded-xl"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns projectNum={String(currentIndex).padStart(2, '0')} />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
