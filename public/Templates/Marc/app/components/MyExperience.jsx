
export default function MyExperience() {
  return (
    <section data-aos="fade-in" id="experience" className="relative flex flex-col py-24 justify-center md:px-20 px-5 ">
      <h2 className="mb-14 text-center text-4xl font-black">My experience</h2>
      <div className="flex flex-col sm:flex-row md:gap-10 gap-20">
        <div className="flex sm:w-1/2 flex-col gap-2">
          <h3 className="text-xl font-bold">Work:</h3>

          <div className="h-5 w-full relative mb-3">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>

          <h4 className="font-bold">
            CO-Owner - Marketing Hunters
            <span className="pl-2 text-sm font-normal">2019 - jul 2024</span>
          </h4>
          <p className="pl-4">
            Marketing Hunters is a marketing, design, and development agency
            based in the Netherlands. Our team is capable of designing,
            building, and launching websites and webshops. <br />
            <br /> As a CO-Owner, my responsibilities spanned from leading the
            team, designing/building websites and handling client relations.
          </p>

          <div className="h-5 w-full relative mb-3">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>

          <h4 className="font-bold">
            Owner - Marc.
            <span className="pl-2 text-sm font-normal">2015 - 2019 </span>
          </h4>
          <p className="pl-4">Graphic Designer and freelancer</p>
          <p className="pl-8 font-bold">
            Freelance - Graphic Designer at CMIS Group
          </p>
          <p className="pl-8 font-bold">
            Freelance - Graphic Designer at VVD Rotterdam
          </p>

          <div className="h-5 w-full relative mb-3">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>
        </div>

        <div className="flex sm:w-1/2 flex-col gap-2">
          <h3 className="text-xl font-bold">Education:</h3>

          <div className="h-5 w-full relative mb-3">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>


          <h4 className="font-bold">
            Front-end developer
            <span className="pl-2 text-sm font-normal">2024 - current</span>
          </h4>
          <p className="pl-4">Hyper Island</p>

          <div className="h-5 w-full relative mb-3">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>

          <h4 className="font-bold">
            Packaging- / Graphic Designer
            <span className="pl-2 text-sm font-normal">2014 - 2017</span>
          </h4>
          <p className="pl-4">Grafisch Lyceum Rotterdam</p>

          <div className="h-5 w-full relative mb-3">
            <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
            <div className="corners absolute bottom-[-5px] left-0 z-10 h-4 w-4"></div>
            <div className="corners absolute bottom-[-6px] right-0 z-10 h-4 w-4 rotate-180"></div>
          </div>
        </div>

      </div>

      <p className="pt-5 font-black pb-5 md:pb-0 leading-8">
        See more on my{" "}
        <a href="https://nl.linkedin.com/in/marcruizenaar" className="relative" target="_blank">
          Linkedin
          <span className="absolute bottom-[-5px] left-0 -z-10 block h-1 w-full bg-mainGreen"></span>

        </a>{" "}
        or{" "}
        <a href="https://drive.google.com/file/d/1e7HJZZn6QVpmINveHaW21iVmJpxJlWs7/view?usp=sharing" className="relative" target="_blank">
          download my CV
          <span className="absolute bottom-[-5px] left-0 -z-10 block h-1 w-full bg-mainGreen"></span>

        </a>
      </p>

      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
      <div className="topcorners absolute left-[-2px] bottom-[-3px] z-10 hidden h-5 w-5 rotate-[-90deg] md:block"></div>
      <div className="topcorners absolute right-[-2px] bottom-[-3px] z-10 hidden h-5 w-5 rotate-180  md:block"></div>
    </section>
  );
}
