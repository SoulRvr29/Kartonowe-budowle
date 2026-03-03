import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaCaretUp } from "react-icons/fa";

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
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const pagesWithoutSectionsNav = ["/", "/About", "/Oswietlenie"];

  const sectionsList = [...document.querySelectorAll("section")].map(
    (section) => section.id,
  );

  useEffect(() => {
    const sections = [...document.querySelectorAll("section")] || [];
    if (!sections.length) return;

    const onScroll = () => {
      let offset = 80; // wysokość navbara
      if (window.innerWidth <= 560) {
        offset = 110; // wysokość navbara na urządzeniach mobilnych
      }

      let currentSection = null;

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

  useEffect(() => {
    const scrollHandler = () => {
      setIsVisible(Boolean(activeSection));
    };

    window.addEventListener("scroll", scrollHandler);

    // uruchom od razu
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [activeSection]);

  if (pagesWithoutSectionsNav.includes(location.pathname)) return null;
  if (isVisible)
    return (
      <div className="flex justify-center sectionsNav z-10 absolute -bottom-[30px] left-0 w-full gap-4 px-4 text-sm font-semibold dark:bg-bkg bg-bkg-light bg-opacity-60 dark:bg-opacity-60 py-1 border-b-2 border-white dark:border-accent dark:border-opacity-50 border-opacity-50 backdrop-blur-[2px] capitalize">
        <a href="#">
          <FaCaretUp
            size={20}
            className="hover:text-white dark:hover:text-accent"
          />
        </a>
        {sectionsList.map((section) => (
          <SectionsNavLi
            key={section}
            sectionName={section}
            activeSection={activeSection}
          />
        ))}
        {/* <SectionsNavLi sectionName="model" activeSection={activeSection} />
        <SectionsNavLi sectionName="galeria" activeSection={activeSection} />
        <SectionsNavLi sectionName="komentarze" activeSection={activeSection} />
        <SectionsNavLi sectionName="historia" activeSection={activeSection} /> */}
      </div>
    );
  return null;
};
export default SectionsNav;
