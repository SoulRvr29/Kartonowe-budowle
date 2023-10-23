import Card from "./Card.jsx";
import modelsData from "../data/models-data.json";
import { useState } from "react";
const Nav = () => {
  const [navState, setNavState] = useState(true);
  return (
    <nav
      className={
        navState === true
          ? "relative overflow-x-auto overflow-y-hidden max-md:px-0 px-8 pl-20 h-[14.4rem] "
          : "relative h-6"
      }
    >
      {/* categories */}
      {/* <div className="relative z-10 ">
        <ul className="flex w-full text-center justify-center nav-clamp tracking-wide bg-text-dark text-text-light bg-opacity-30 font-semibold">
          <li className="border-r-text-light border-r py-1 px-2 border-b-2 border-b-transparent hover:border-b-2 hover:cursor-pointer  hover:border-b-accent-2 text">
            Budowle
          </li>
          <li className="border-r-text-light border-r py-1 px-2 border-b-2 border-b-transparent hover:border-b-2 pointer hover:border-b-accent-2">
            Latarnie morskie
          </li>
          <li className="border-r-text-light border-r py-1 px-2 border-b-2 border-b-transparent hover:border-b-2 pointer  hover:border-b-accent-2">
            Wieżowce
          </li>
          <li className="border-r-text-light  py-1 px-2 border-b-2 border-b-transparent hover:border-b-2 pointer  hover:border-b-accent-2">
            Inne
          </li>
        </ul>
      </div> */}
      <hr className="grad-hr relative bottom-[2px]" />
      {/* cards */}
      <section className="w-max relative grid justify-center  px-10 max-md:justify-start  max-md:px-4">
        <div
          className={
            navState === true
              ? "flex relative py-4 z-10 max-md:gap-4"
              : "hidden"
          }
        >
          {modelsData.map((model) => (
            <Card model={model} key={model.id} />
          ))}
        </div>
      </section>{" "}
      <button>
        <svg
          onClick={(e) => {
            // e.stopPropagation();
            setNavState(!navState);
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 448 512"
          fill="var(--text-light)"
          className={
            navState == true
              ? "absolute top-[2px] max-md:top-1 max-md:right-2 right-4 opacity-40 dark:opacity-20 drop-shadow-[0_0_0_black]  hover:opacity-100 z-20 max-md:h-4"
              : "absolute top-[2px] max-md:top-1 max-md:right-2 right-4 opacity-40 dark:opacity-20 hover:opacity-100 z-20 max-md:h-4 fill-accent-2 rotate-180 drop-shadow-[0_0_0_black] "
          }
        >
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
