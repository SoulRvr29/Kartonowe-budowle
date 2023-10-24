import Card from "./Card.jsx";
import modelsData from "../data/models-data.json";
import { useState } from "react";
const Nav = () => {
  const [navState, setNavState] = useState(true);
  return (
    <div className="relative">
      <nav
        className={
          navState === true
            ? "max-sm:mx-0 mx-8 relative overflow-y-hidden max-md:px-0 px-8 pl-20 h-[14.4rem] "
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
                ? "nav flex relative py-4 z-10 max-md:gap-4"
                : "nav hidden"
            }
          >
            {modelsData.map((model) => (
              <Card model={model} key={model.id} />
            ))}
          </div>
        </section>
      </nav>
      {/* nav left */}
      <div className="nav-left max-sm:hidden h-full w-8 absolute top-0 left-0 z-40 ">
        <svg
          className={
            navState
              ? "absolute top-[calc(50%-20px)] left-2 z-30 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] hover:scale-125 transition-all hover:fill-accent-2"
              : "hidden"
          }
          onClick={() => {
            document.querySelector("nav").scrollLeft -= 300;
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="2.2em"
          viewBox="0 0 256 512"
          fill="var(--text-light)"
        >
          <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
        </svg>
        <div
          className={
            navState
              ? "h-full w-[2px] absolute right-0 bg-gradient-to-b from-transparent via-text-light to-transparent"
              : "hidden"
          }
        ></div>
      </div>
      {/* nav right */}
      <div className="max-sm:hidden h-full w-8 absolute top-0 right-0 z-30 ">
        <svg
          className={
            navState
              ? "absolute top-[calc(50%-20px)] left-2 z-30 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] hover:scale-125 transition-all hover:fill-accent-2 rotate-180"
              : "hidden"
          }
          onClick={() => {
            document.querySelector("nav").scrollLeft += 300;
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="2.2em"
          viewBox="0 0 256 512"
          fill="var(--text-light)"
        >
          <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
        </svg>
        <div
          className={
            navState
              ? "h-full w-[2px] absolute left-0 bg-gradient-to-b from-transparent via-text-light to-transparent"
              : "hidden"
          }
        ></div>
      </div>
      {/* nav hide icon */}
      <button className="absolute top-[-2px] max-md:top-[1px] max-md:right-2 right-1 z-30">
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
              ? "  opacity-40 dark:opacity-20 drop-shadow-[0_0_0_black]  hover:opacity-100 z-20 max-md:h-4"
              : "opacity-40 dark:opacity-20 hover:opacity-100 z-20 max-md:h-4 fill-accent-2 rotate-180 drop-shadow-[0_0_0_black] "
          }
        >
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
      </button>
    </div>
  );
};

export default Nav;
