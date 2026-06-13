import React from "react";
import { NavLink } from "react-router-dom";

const TechNav_li = ({ name, link }) => {
  return (
    <li>
      <NavLink
        onClick={() => {
          if (localStorage.getItem("autoScroll") == "true") {
            document.querySelector(".article-header").scrollIntoView();
          }
          const articleSection = document.querySelector(".article-header");
          const header = document.querySelector("header");
          const articleTop =
            articleSection.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: articleTop - header.offsetHeight,
            behavior: "smooth",
          });
        }}
        to={link}
      >
        <button className="tech-li text-center w-fit px-2 hover:underline">
          {name}
        </button>
      </NavLink>
    </li>
  );
};

const TechNav = () => {
  return (
    <nav className=" bg-bkg bg-opacity-20 dark:bg-accent dark:bg-opacity-20 ">
      {/* <hr className="grad-hr "></hr> */}
      <ul className=" w-full flex justify-start items-center flex-wrap  px-2 py-1 ">
        <h2 className=" ml-2 text-white max-sm:text-sm font-bold uppercase text-center drop-shadow-[1px_2px_1px_rgba(0,0,0,0.3)]">
          Artykuły:
        </h2>
        <TechNav_li name="Oświetlenie modeli" link="/Oswietlenie" />
        {/* / */}
        {/* <TechNav_li name="arduino" link="/Arduino" /> */}
        {/* <TechNav_li name="roślinność" link="/Roslinnosc" /> */}
        {/* <TechNav_li name="sadzarka" link="/Sadzarka" /> */}
        {/* <TechNav_li name="okna" link="/Okna" /> */}
      </ul>
      <hr className="grad-hr "></hr>
    </nav>
  );
};

export default TechNav;
