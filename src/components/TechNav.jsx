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
        <TechNav_li name="oświetlenie" link="/Kartonowe-budowle/Oświetlenie" />
        <TechNav_li name="roślinność" link="/Kartonowe-budowle/Roślinność" />
        <TechNav_li name="sadzarka" link="/Kartonowe-budowle/Sadzarka" />
        <TechNav_li name="okna" link="/Kartonowe-budowle/Okna" />
        <TechNav_li name="arduino" link="/Kartonowe-budowle/Arduino" />
      </ul>
    </nav>
  );
};

export default TechNav;
