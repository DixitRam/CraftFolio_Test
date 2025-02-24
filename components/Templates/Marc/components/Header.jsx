import Image from "next/image";
// import ProfilePicture from "../assets/Marc-Ruizenaar-Front-end-Developer.jpg";

export default function Header({ProfilePicture,email}) {

  // Handle menu toggle without useEffect


  return (
    <header className="relative flex items-center justify-between py-4 md:mt-4 p-5">
      <div className="topBorder absolute left-0 top-0 hidden h-[0.2rem] w-full md:block"></div>
      <div className="topcorners absolute left-[-2px] top-[-3px] z-10 hidden h-5 w-5 md:block"></div>
      <div className="topcorners absolute right-[-2px] top-[-3px] z-10 hidden h-5 w-5 rotate-90 md:block"></div>
      <div className="corners absolute bottom-[-8px] left-0 z-10 h-5 w-5"></div>
      <div className="corners absolute bottom-[-8px] right-0 z-10 h-5 w-5 rotate-180"></div>

      <div className="flex w-full items-center justify-between gap-6 md:justify-normal md:pl-6">
        <Image
          src={(ProfilePicture)}
          height={50}
          width={50}
          alt="Profile Picture"
          loading="eager"
          className="z-50 rounded-full object-cover"
        />

        <nav id="headerNav" className="hidden md:gap-4 lg:gap-8 md:flex">
          <a href="#aboutme" className="group relative">
            About me
            <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
          </a>
          <a href="#work" className="group relative">
            Work
            <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
          </a>
          <a href="#experience" className="group relative">
            Experience
            <span className="absolute bottom-[-2px] left-0 h-1 w-0 bg-mainGreen duration-300 group-hover:w-full group-hover:transition-all"></span>
          </a>
        </nav>

        <details
          
          id="hamburgerMenu"
          className="md:hidden appearance-none"
        >
          <summary className="absolute right-5 top-5 z-50 p-5 flex cursor-pointer flex-col gap-1">
            <span className="block h-[1px] w-4 bg-black"></span>
            <span className="block h-[1px] w-4 bg-black"></span>
            <span className="block h-[1px] w-4 bg-black"></span>
          </summary>

          <nav className="fixed inset-0 z-20 flex h-screen flex-col items-center justify-center gap-8 bg-white">
            <a href="#aboutme">About me</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </div>

      <div className="hidden items-center gap-6 text-nowrap pr-6 md:flex">
        <a href={`mailto:${email}`} className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
          </span>
          <p>Available now</p>
        </a>
      </div>

      <div className="topBorder absolute bottom-0 left-0 h-[0.2rem] w-full"></div>
    </header>
  );
}
