"use client";
import AboutMe from "./components/AboutMe";
import JumboHeader from "./components/JumboHeader";
import Projects from "./components/Projects";
import MyExperience from "./components/MyExperience";
import ItsTime from "./components/ItsTime";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  });
  
  return (
    <>
      <div className="border_div container relative mx-auto bg-white px-5 md:px-0 ">
        <div className="leftBorder absolute left-0 top-0 hidden h-full w-[0.2rem] md:block"></div>
        <div className="rightBorder absolute right-0 top-0 hidden h-full w-[0.2rem] md:block"></div>
        <Header />
        <main>
          <JumboHeader />

          <AboutMe />

          <Projects />

          <MyExperience />
        </main>
      </div>
      <ItsTime />

      <Footer />
    </>
  );
}
