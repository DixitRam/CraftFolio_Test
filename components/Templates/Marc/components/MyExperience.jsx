export default function MyExperience({userExperiences, userEducation, userLinkedin, userCV}) {
    return (
      <section data-aos="fade-in" id="experience" className="relative flex flex-col py-24 justify-center md:px-20 px-5">
        <h2 className="mb-14 text-center text-4xl font-black">My experience</h2>
        <div className="flex flex-col sm:flex-row md:gap-10 gap-20">
          <div className="flex sm:w-1/2 flex-col gap-2">
            <h3 className="text-xl font-bold">Work:</h3>
            <div className="h-5 w-full relative mb-3">
              <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
              <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
              <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
            </div>
  
            {userExperiences.map((experience, index) => (
              <div key={`experience-${index}`}>
                <h4 className="font-bold">
                  {experience.role} - {experience.company}
                  <span className="pl-2 text-sm font-normal">{experience.date}</span>
                </h4>
                <p className="pl-4">{experience.description}</p>
                <div className="h-5 w-full relative mb-3">
                  <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
                  <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
                  <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex sm:w-1/2 flex-col gap-2">
            <h3 className="text-xl font-bold">Education:</h3>
            <div className="h-5 w-full relative mb-3">
              <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
              <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
              <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
            </div>
  
            {userEducation.map((education, index) => (
              <div key={`education-${index}`}>
                <h4 className="font-bold">
                  {education.institution}
                  <br />
                  <span className="pl-2 font-normal">
                    {education.degree} - {education.date}
                  </span>
                </h4>
                <p className="pl-6 text-sm">{education.description}</p>
                <div className="h-5 w-full relative mb-3">
                  <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
                  <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
                  <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <p className="pt-5 font-black pb-5 md:pb-0 leading-8">
          See more on my{" "}
          <a href={userLinkedin} className="relative" target="_blank" rel="noopener noreferrer">
            Linkedin
            <span className="absolute bottom-[-5px] left-0 -z-10 block h-1 w-full bg-mainGreen"></span>
          </a>{" "}
          or{" "}
          <a href={userCV} className="relative" target="_blank" rel="noopener noreferrer">
            download my CV
            <span className="absolute bottom-[-5px] left-0 -z-10 block h-1 w-full bg-mainGreen"></span>
          </a>
        </p>
  
        <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
        <div className="topcorners absolute left-[-2px] bottom-[-3px] z-10 hidden h-5 w-5 rotate-[-90deg] md:block"></div>
        <div className="topcorners absolute right-[-2px] bottom-[-3px] z-10 hidden h-5 w-5 rotate-180 md:block"></div>
      </section>
    );
  }