"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { motion } from "framer-motion";
import { ScrollArea } from "./ui/scroll-area";

const Resume = ({ education, experience, skills, aboutMe }) => {
  // Convert skills to array if it's not already
  const skillsArray = Array.isArray(skills) ? skills : Object.keys(skills || {});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="max-h-[30vh] flex items-center justify-center py-6 xl:py-0"
      >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[40px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">Experience</h3>
                <ScrollArea className="h-[340px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-[20px]">
                    {experience?.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[154px] text-[14px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.date}</span>
                        <h3 className="text-[17px] max-w-[260px] min-h-[60px] text-center lg:text-left leading-6">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[15px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">Education</h3>
                <ScrollArea className="h-[340px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-[20px]">
                    {education?.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[154px] text-[14px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.date}</span>
                        <h3 className="text-[17px] max-w-[260px] min-h-[60px] text-center lg:text-left leading-6">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[15px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">Skills</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[20px] gap-4">
                  {skillsArray.map((skill, index) => (
                    <li key={index} className="bg-[#232329] p-4 rounded-xl text-center">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[15px]">
                <h3 className="text-3xl font-bold">About Me</h3>
                <p className="text-white/60">{aboutMe}</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
