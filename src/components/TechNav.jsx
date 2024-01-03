import React from "react";
import { NavLink } from "react-router-dom";

const TechNav_li = ({ name, link }) => {
  return (
    <li>
      <NavLink
        onClick={() =>
          document.querySelector(".article-header").scrollIntoView()
        }
        to={link}
      >
        <button className="tech-li text-cente w-fit px-4">{name}</button>
      </NavLink>
    </li>
  );
};

const TechNav = () => {
  return (
    <nav className=" bg-bkg bg-opacity-20">
      <hr className="grad-hr"></hr>
      <ul className=" w-full flex justify-center items-center flex-wrap">
        <TechNav_li name="oświetlenie" link="/Oświetlenie" />
        <TechNav_li name="roślinność" link="/Roślinność" />
        <TechNav_li name="sadzarka" link="/Sadzarka" />
        <TechNav_li name="okna" link="/Okna" />
        <TechNav_li name="arduino" link="/Arduino" />
      </ul>
    </nav>
  );
};

export default TechNav;
