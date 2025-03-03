/* eslint-disable react/no-unescaped-entities */
import './Portfolio.css'
import { Button } from "./components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "./components/Social";
import Photo from "./components/Photo";
import Stats from "./components/Stats";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/contact"
import StairTransition from "./components/StairTransition";
import PageTransition from "./components/PageTransition";

import Header from "./components/Header";


const Home = ({userDetails}) => {

  if (!userDetails) return <div>Loading...</div>;

  // Create social media links object from userDetails
  const socialLinks = {
    github: userDetails.contact.github,
    linkedin: userDetails.contact.linkedin,
    // Add any other social links from userDetails.contact if available
  };

  return (
    <PageTransition>
    <div className="overflow-x-hidden">
              <StairTransition />

      {/* Hero Section */}
      <Header name={userDetails.name}/>

      <section id="home" className="h-full py-5 xl:py-10">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between">
            {/* Text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              {/* <span className="text-xl">{userDetails.profile_summary}</span> */}
              <h1 className="h1 mb-3">
                Hello I'm <br />{" "}
                <span className="text-accent">
                  {userDetails.name}
                </span>
              </h1>
              <p className="max-w-[500px] mb-5 text-white/90">
                {userDetails.tagline}
              </p>
              {/* buttons and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-4">
                <a href={userDetails.cvURL} download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-4"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                    socialLinks={socialLinks}
                  />
                </div>
              </div>
            </div>
            {/* Photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo profileImage={userDetails.profile_picture} />
            </div>
          </div>
        </div>
        <Stats 
          projects={userDetails.projects}
          skills={userDetails.skills}
          experience={userDetails.experience}
        />
      </section>

      {/* Work Section */}
      <section id="work" className="py-5 xl:py-10">
        <Work projects={userDetails.projects} />
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-5 xl:py-10">
        <Resume 
          education={userDetails.education}
          experience={userDetails.experience}
          skills={userDetails.skills}
          aboutMe={userDetails.about_me}
        />
      </section>

{/* Contat selction */}
<section id="contact" className="py-5 xl:py-10">
       <Contact/>
      </section>
   
    </div>
    </PageTransition>
  );
};

export default Home;
