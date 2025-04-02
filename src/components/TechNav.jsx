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
        }}
        to={link}
      >
        <button className="tech-li text-cente w-fit px-4 ">{name}</button>
      </NavLink>
    </li>
  );
};

const TechNav = () => {
  return (
    <nav className=" bg-bkg bg-opacity-20 dark:bg-accent dark:bg-opacity-20 ">
      <hr className="grad-hr "></hr>
      <ul className=" w-full flex justify-start items-center flex-wrap max-sm:justify-center px-2 max-sm:pb-1">
        <h2 className="mr-4 ml-2 text-white max-sm:text-sm font-bold uppercase max-sm:w-full text-center drop-shadow-[1px_2px_1px_rgba(0,0,0,0.3)]">
          Tematy:
        </h2>
        <TechNav_li name="oświetlenie" link="/Oswietlenie" />
        {/* <TechNav_li name="arduino" link="/Arduino" /> */}
        {/* <TechNav_li name="roślinność" link="/Roslinnosc" /> */}
        {/* <TechNav_li name="sadzarka" link="/Sadzarka" /> */}
        {/* <TechNav_li name="okna" link="/Okna" /> */}
      </ul>
    </nav>
  );
};

export default TechNav;
