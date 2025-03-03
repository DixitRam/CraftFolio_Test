"use client";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = ({name}) => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-6 xl:py-6 text-white  w-full z-50 bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
          <h1 className="font-semibold text-[30px]">
        {name}       
            <span className="text-accent">.</span>{" "}
          </h1>
        </a>

        {/*desktop navbar & hire me btn*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav containerStyles="flex items-center gap-4" />
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
            <Button>Hire me</Button>
          </a>
        </div>

        {/* mobile navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
