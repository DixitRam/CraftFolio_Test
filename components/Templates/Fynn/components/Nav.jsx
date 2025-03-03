"use client";
const links = [
  { path: "#home", name: "Home" },
  { path: "#work", name: "Work" },
  { path: "#resume", name: "Resume" },
];

const Nav = ({ containerStyles }) => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${containerStyles}`}>

      {links.map((link, index) => {
        return (
          <a
            href={link.path}
            key={index}
            onClick={(e) => scrollToSection(e, link.path) }
            className="relative text-accent border-b-2 border-accent capitalize font-medium hover:text-accent transition-all"
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
