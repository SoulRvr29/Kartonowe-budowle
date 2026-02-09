import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SectionsNavLi = ({ sectionName, activeSection }) => {
  return (
    <a
      href={`#${sectionName}`}
      className={
        activeSection === sectionName
          ? "hover:underline hover:cursor-pointer text-accent-4 dark:text-accent-2"
          : "hover:underline hover:cursor-pointer"
      }
    >
      {sectionName}
    </a>
  );
};

const SectionsNav = () => {
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const pagesWithoutSectionsNav = ["/", "/About", "/Oswietlenie"];

  useEffect(() => {
    const sections = [...document.querySelectorAll("section")];

    const onScroll = () => {
      const offset = 80; // wysokość navbara
      let currentSection = sections[0].id;

      for (const section of sections) {
        const top = section.getBoundingClientRect().top;

        if (top - offset <= 0) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const scrollHandler = () => {
    activeSection
      ? (document.querySelector(".sectionsNav").style.display = "flex")
      : (document.querySelector(".sectionsNav").style.display = "none");
    // let y = window.scrollY;
    // y > 450
    //   ? (document.querySelector(".sectionsNav").style.display = "flex")
    //   : (document.querySelector(".sectionsNav").style.display = "none");
  };
  window.addEventListener("scroll", scrollHandler);

  if (pagesWithoutSectionsNav.includes(location.pathname)) return null;
  return (
    <div className="hidden sectionsNav z-50 absolute -bottom-[28px] left-0 w-full gap-4 px-4 text-sm font-semibold dark:bg-bkg bg-white bg-opacity-20 dark:bg-opacity-80 py-1  border-accent border-opacity-20">
      <SectionsNavLi sectionName="model" activeSection={activeSection} />
      <SectionsNavLi sectionName="galeria" activeSection={activeSection} />
      <SectionsNavLi sectionName="komentarze" activeSection={activeSection} />
      <SectionsNavLi sectionName="historia" activeSection={activeSection} />
    </div>
  );
};
export default SectionsNav;
