import Card from "./Card.jsx";
import modelsData from "../data/models-data.json";
import { useState } from "react";

const Nav = () => {
  const completeData = modelsData.sort((a, b) => {
    return b["rok ukończenia"] - a["rok ukończenia"];
  });
  const [navState, setNavState] = useState(true);
  const [data, setData] = useState(completeData);
  const [activeList, setActiveList] = useState("Wszystko");

  return (
    <div className="relative grid select-none z-10">
      {/* CATEGORIES */}
      <div className={navState ? "relative mx-8 max-sm:mx-0" : "hidden"}>
        <ul className="flex flex-wrap w-full text-center justify-center nav-clamp tracking-wide dark:text-text-light text-bkg bg-opacity-30 font-semibold px-6 max-sm:px-4 ">
          <button
            className={
              "nav-li hover:underline hover:decoration-2 hover:underline-offset-2 max-md:text-sm text-lg  " +
              (activeList == "Wszystko" && " text-accent-4 dark:text-accent-2 ")
            }
            onClick={(e) => {
              setActiveList(e.target.outerText);
              setData(completeData);
            }}
          >
            <li className="active-li">Wszystko</li>
          </button>
          <span className="mx-2 max-md:mx-1 hover:cursor-default max-sm:text-sm max text-lg py-1 max-sm:py-[0.20rem]">
            -
          </span>
          <button
            className={
              "nav-li active:text-white  hover:underline hover:decoration-2 hover:underline-offset-2 max-md:text-sm text-lg   " +
              (activeList == "Latarnie morskie" &&
                " text-accent-4 dark:text-accent-2")
            }
            onClick={(e) => {
              setActiveList(e.target.outerText);
              setData(
                completeData.filter((item) => {
                  return item.typ == "latarnia morska";
                })
              );
            }}
          >
            <li className="">Latarnie morskie</li>
          </button>
          <span className="mx-2 max-md:mx-1 hover:cursor-default max-sm:text-sm max text-lg py-1 max-sm:py-[0.20rem]">
            -
          </span>
          <button
            className={
              "nav-li active:text-white hover:underline hover:decoration-2 hover:underline-offset-2 max-md:text-sm text-lg border-r-text-light   " +
              (activeList == "Zamki" && " text-accent-4 dark:text-accent-2")
            }
            onClick={(e) => {
              setActiveList(e.target.outerText);
              setData(
                completeData.filter((item) => {
                  return item.typ == "zamek";
                })
              );
            }}
          >
            <li className="">Zamki</li>
          </button>
          <span className="mx-2 max-md:mx-1 hover:cursor-default max-sm:text-sm max text-lg py-1 max-sm:py-[0.20rem]">
            -
          </span>

          <button
            className={
              "nav-li active:text-white hover:underline hover:decoration-2 hover:underline-offset-2 max-md:text-sm text-lg border-r-text-light   " +
              (activeList == "Ratusze i kościoły" &&
                " text-accent-4 dark:text-accent-2")
            }
            onClick={(e) => {
              setActiveList(e.target.outerText);
              setData(
                completeData.filter((item) => {
                  return item.typ == "ratusz" || item.typ == "kościół";
                })
              );
            }}
          >
            <li className="">Ratusze i kościoły</li>
          </button>
          <span className="mx-2 max-md:mx-1 hover:cursor-default max-sm:text-sm max text-lg py-1 max-sm:py-[0.20rem]">
            -
          </span>
          <button
            className={
              "nav-li active:text-white hover:underline hover:decoration-2 hover:underline-offset-2 max-md:text-sm text-lg   " +
              (activeList == "Kosmos" && " text-accent-4 dark:text-accent-2")
            }
            onClick={(e) => {
              setActiveList(e.target.outerText);
              setData(
                completeData.filter((item) => {
                  return item.typ == "kosmos";
                })
              );
            }}
          >
            <li className="">Kosmos</li>
          </button>
          <span className="mx-2 max-md:mx-1 hover:cursor-default max-sm:text-sm max text-lg py-1 max-sm:py-[0.20rem]">
            -
          </span>
          <button
            className={
              "nav-li active:text-white  hover:underline hover:decoration-2 hover:underline-offset-2 max-md:text-sm text-lg   " +
              (activeList == "Figurki" && " text-accent-4 dark:text-accent-2")
            }
            onClick={(e) => {
              setActiveList(e.target.outerText);
              setData(
                completeData.filter((item) => {
                  return item.typ == "figurka";
                })
              );
            }}
          >
            <li className="">Figurki</li>
          </button>
        </ul>
      </div>
      {/* <hr className="grad-hr relative bottom-[2px] justify-self-center w-[90%]" /> */}
      <nav
        className={
          navState === true
            ? "max-sm:mx-0 mx-8 relative  grid overflow-y-hidden max-md:px-0 px-8 pl-20 h-[14rem] pt-2"
            : "relative h-5"
        }
      >
        {/* CARDS CONTAINER */}

        <section className="w-max relative grid justify-self-center px-10 max-md:justify-start  max-md:px-4">
          <div
            className={
              navState === true
                ? "nav flex relative py-1  max-md:gap-4"
                : "nav hidden"
            }
          >
            {data.map((model) => (
              <Card model={model} key={model.id} />
            ))}
          </div>
        </section>
      </nav>
      {/* nav left */}
      <div
        className={
          navState
            ? "bg-gradient-to-b from-transparent via-text-light dark:via-accent to-transparent nav-left max-sm:hidden h-full w-8 absolute top-0 left-0 "
            : "hidden"
        }
      >
        <svg
          className={
            navState
              ? "fill-white dark:fill-text-light absolute top-[calc(50%-20px)] left-2 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)] hover:scale-125 transition-all hover:fill-accent-2"
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
      <div
        className={
          navState
            ? "bg-gradient-to-b from-transparent via-text-light dark:via-accent to-transparent max-sm:hidden h-full w-8 absolute top-0 right-0  "
            : "hidden"
        }
      >
        <svg
          className={
            navState
              ? "fill-white dark:fill-text-light absolute top-[calc(50%-20px)] left-2 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)] hover:scale-125 transition-all hover:fill-accent-2"
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
          <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
        </svg>
        <div
          className={
            navState
              ? "h-full w-[2px] absolute left-0 bg-gradient-to-b from-transparent via-text-light to-transparent"
              : "hidden"
          }
        ></div>
      </div>
      <button
        onClick={(e) => {
          setNavState(!navState);
        }}
        className={
          !navState
            ? "dark:text-text-light text-text-dark text-opacity-50 dark:text-opacity-30 h-full uppercase text-sm justify-self-center z-20 absolute top-0 font-semibold hover:text-opacity-90 dark:hover:text-opacity-50 transition-all"
            : "hidden"
        }
      >
        nawigacja
      </button>
      {/* nav hide icon */}
      <button className="absolute -top-[2px] max-sm:top-[2px] max-sm:right-2 right-1 ">
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
              ? "  opacity-40 dark:opacity-20 drop-shadow-[0_0_0_black]  hover:opacity-100  max-sm:h-4"
              : "opacity-40 dark:opacity-20 hover:opacity-100 max-sm:h-4 fill-accent-2 rotate-180 drop-shadow-[0_0_0_black] "
          }
        >
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
      </button>
    </div>
  );
};

export default Nav;
