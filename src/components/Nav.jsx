import Card from "./Card.jsx";
import modelsData from "../data/models-data.json";
import { useState } from "react";

const Nav_li = ({ name, activeList, setActiveList, completeData, setData }) => {
  return (
    <button
      className={
        "grid nav-li hover:underline-offset-2 max-[830px]:text-sm text-lg max-sm:bg-text-light max-sm:px-2 max-sm:border max-sm:border-white max-sm:rounded-md dark:max-sm:bg-accent dark:max-sm:bg-opacity-75 dark:max-sm:border-text-light  " +
        (activeList == name &&
          " text-accent-4 dark:text-accent-2 max-sm:dark:text-text-light max-sm:dark:bg-accent-2 max-sm:text-text-light max-sm:bg-accent-4 hover:cursor-default")
      }
      onClick={(e) => {
        setActiveList(e.target.outerText);
        console.log(e.target.outerText, name);
        console.log(e.target.outerText == name);
        if (name == "wszystkie modele") setData(completeData);
        else if (name == "z oświetleniem")
          setData(
            completeData.filter((item) => {
              return item.oświetlenie == true;
            })
          );
        else {
          setData(
            completeData.filter((item) => {
              return item.typ == name;
            })
          );
        }
      }}
    >
      <li className="active-li ">{name}</li>
      {activeList != name && (
        <div className="custom-underline dark:bg-accent-2 bg-accent-4 h-[2px] w-0 justify-self-center transition-all duration-300"></div>
      )}
    </button>
  );
};

const Nav = ({ overlap, setOverlap }) => {
  const completeData = modelsData.sort((a, b) => {
    return b["rok ukończenia"] - a["rok ukończenia"];
  });
  const [navState, setNavState] = useState(true);
  const [data, setData] = useState(completeData);
  const [activeList, setActiveList] = useState("wszystkie modele");

  return (
    <div className="relative grid select-none z-10 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.4)] dark:via-text-dark to-transparent ">
      {/* CATEGORIES LIST */}
      <div className={navState ? "relative mx-8 max-sm:mx-0" : "hidden"}>
        <ul className="flex mt-1 max-sm:text-sm flex-wrap gap-x-[0.4rem]  max-[700px]:gap-[0.2rem] w-full text-center justify-center nav-clamp tracking-wide dark:text-text-light text-bkg bg-opacity-30 font-semibold px-6 max-sm:px-4 text-lg max-sm:gap-1">
          <Nav_li
            name="wszystkie modele"
            activeList={activeList}
            setActiveList={setActiveList}
            completeData={completeData}
            setData={setData}
          />{" "}
          <span className="max-[830px]:text-sm max-sm:hidden">-</span>
          <Nav_li
            name="latarnie morskie"
            activeList={activeList}
            setActiveList={setActiveList}
            completeData={completeData}
            setData={setData}
          />{" "}
          <span className="max-[830px]:text-sm max-sm:hidden">-</span>
          <Nav_li
            name="zamki i ratusze"
            activeList={activeList}
            setActiveList={setActiveList}
            completeData={completeData}
            setData={setData}
          />
          <span className="max-[830px]:text-sm max-sm:hidden">-</span>
          <Nav_li
            name="kościoły"
            activeList={activeList}
            setActiveList={setActiveList}
            completeData={completeData}
            setData={setData}
          />{" "}
          <span className="max-[830px]:text-sm max-sm:hidden">-</span>
          <Nav_li
            name="kosmos"
            activeList={activeList}
            setActiveList={setActiveList}
            completeData={completeData}
            setData={setData}
          />{" "}
          <span className="max-[830px]:text-sm max-sm:hidden">-</span>
          <Nav_li
            name="figurki"
            activeList={activeList}
            setActiveList={setActiveList}
            completeData={completeData}
            setData={setData}
          />
          <span className="max-[830px]:text-sm max-sm:hidden">-</span>
          <Nav_li
            name="samoloty"
            activeList={activeList}
            setActiveList={setActiveList}
            completeData={completeData}
            setData={setData}
          />
          <span className="max-[830px]:text-sm max-sm:hidden">-</span>
          <Nav_li
            name="z oświetleniem"
            activeList={activeList}
            setActiveList={setActiveList}
            completeData={completeData}
            setData={setData}
          />
        </ul>
      </div>
      {/* NAVIGATION */}
      <nav
        className={
          navState === true
            ? "max-sm:mx-0 mx-8 relative grid overflow-y-hidden max-md:px-0 px-8 pt-2 " +
              (!overlap && "pl-20")
            : "relative h-5"
        }
      >
        {/* CARDS CONTAINER */}
        <section
          className={
            overlap
              ? "w-max relative grid justify-self-center max-md:justify-start  max-md:px-4 mb-4 max-sm:mb-2"
              : "w-max relative grid justify-self-center px-10 max-md:justify-start  max-md:px-4 mb-4 max-sm:mb-2"
          }
        >
          <div
            className={
              navState === true
                ? "cards-container nav flex relative py-1 transition-all max-md:gap-4 "
                : "cards-container nav hidden"
            }
          >
            {data.map((model) => (
              <Card model={model} key={model.id} overlap={overlap} />
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
        <button>
          <svg
            className={
              navState
                ? "arrow-l fill-white dark:fill-text-light absolute top-[calc(50%-20px)] left-2 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]  hover:fill-accent-2"
                : "hidden"
            }
            onClick={() => {
              document.querySelector("nav").scrollLeft -= 400;
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="2.2em"
            viewBox="0 0 256 512"
            fill="var(--text-light)"
          >
            <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
          </svg>
        </button>
        <div
          className={
            navState
              ? "h-full w-[2px] absolute right-0 top-0 bg-gradient-to-b from-transparent via-text-light to-transparent"
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
        <button>
          <svg
            className={
              navState
                ? "arrow-r fill-white dark:fill-text-light absolute top-[calc(50%-20px)] left-2 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]  hover:fill-accent-2"
                : "hidden"
            }
            onClick={() => {
              document.querySelector("nav").scrollLeft += 400;
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="2.2em"
            viewBox="0 0 256 512"
            fill="var(--text-light)"
          >
            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
          </svg>
        </button>
        <div
          className={
            navState
              ? "h-full w-[2px] absolute left-0 top-0 bg-gradient-to-b from-transparent via-text-light to-transparent"
              : "hidden"
          }
        ></div>
      </div>
      {/* nav hide icon */}
      <button
        title={navState ? "ukryj nawigację" : "pokaż nawigację"}
        className="absolute -top-[2px] max-sm:top-[2px] max-sm:right-2 right-1 "
      >
        <svg
          onClick={(e) => {
            // e.stopPropagation();
            setNavState(!navState);
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="1.5em"
          fill="var(--text-light)"
          className={
            navState == true
              ? "opacity-40 dark:opacity-20 drop-shadow-[0_0_0_black] hover:dark:opacity-100 hover:opacity-100  max-sm:h-4"
              : "opacity-40 dark:opacity-20 hover:opacity-100 max-sm:h-4 fill-accent-2 rotate-180 drop-shadow-[0_0_0_black] "
          }
        >
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
      </button>
      {/* nav show button */}
      <button
        onClick={(e) => {
          setNavState(!navState);
        }}
        className={
          !navState
            ? "dark:text-text-light text-text-dark text-opacity-50  dark:text-opacity-30 h-full uppercase text-sm justify-self-center z-20 absolute top-0 font-semibold hover:text-opacity-90 dark:hover:text-opacity-50 transition-all"
            : "hidden"
        }
      >
        nawigacja
      </button>
      {/* overlap button */}
      {navState && (
        <button
          title={!overlap ? "szeroko" : "wąsko"}
          className="absolute right-[5px] bottom-1 max-sm:hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2em"
            fill="var(--text-light)"
            viewBox="0 0 512 512"
            onClick={() => setOverlap(!overlap)}
            className={
              overlap == false
                ? "opacity-60 dark:opacity-50 drop-shadow-[0_0_0_black] hover:opacity-100 hover:dark:opacity-100 max-sm:h-4"
                : "opacity-60 dark:opacity-50 hover:opacity-100 max-sm:h-4 fill-accent-2 rotate-180 drop-shadow-[0_0_0_black] "
            }
          >
            <path d="M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Nav;
