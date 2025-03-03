"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const MobileNav = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e, sectionId) => {
    setIsOpen(false);
    scrollToSection(e, sectionId.substring(1));
  };

  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* logo */}
          <div className="mt-20 mb-20 text-2xl text-center">
            <a href="#home" onClick={(e) => handleClick(e, '#home')}>
              <h1 className="font-semibold text-3xl">
                Fynn<span className="text-accent">.</span>{" "}
              </h1>
            </a>
          </div>
          <nav className="flex flex-col justify-center items-center gap-5">
            {links.map((link, index) => {
              return (
                <a
                  href={link.path}
                  key={index}
                  onClick={(e) => handleClick(e, link.path)}
                  className="relative hover:text-accent transition-all duration-300"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
