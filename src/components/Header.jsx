import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Settings from "./Settings";
import Timer from "../components/Timer";
import { FaHome, FaLightbulb, FaInfoCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function App({ bannerState, setBannerState, overlap, setOverlap }) {
  const darkModeCheck = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (localStorage.getItem("darkMode") == null)
    localStorage.setItem("darkMode", darkModeCheck);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );
  if (localStorage.getItem("fontSize") == null)
    localStorage.setItem("fontSize", 1);
  const [actualFontSize, setActualFontSize] = useState(
    JSON.parse(localStorage.getItem("fontSize"))
  );

  const titleAnimation = () => {
    const title = document.querySelectorAll("h1 div");
    let timeout = 100;
    title.forEach((letter) => {
      setTimeout(() => {
        letter.style.animation = "letter-rotate 1s forwards";
      }, timeout);
      timeout += 100;
    });
  };
  const titleGenerate = (title) => {
    const h1 = document.querySelector("h1");
    if (h1.childNodes.length === 0) {
      for (let i = 0; i < title.length; i++) {
        let newDiv = document.createElement("div");
        let newLetter = title.slice(i, i + 1);
        if (newLetter === " ") newDiv.innerHTML = "&nbsp;";
        else newDiv.innerHTML = newLetter;

        h1.appendChild(newDiv);
      }
    }
  };

  useEffect(() => {
    if (!darkMode) {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("body").classList.add("bkg-sides");
    } else {
      document.querySelector("html").classList.add("dark");
      document.querySelector("body").classList.remove("bkg-sides");
    }
    fontSize();
    titleGenerate("kartonowe budowle");
    titleAnimation();
  }, []);

  const fontSize = () => {
    actualFontSize < 3
      ? setActualFontSize(actualFontSize + 1)
      : setActualFontSize(1);
    actualFontSize === 1
      ? (document.querySelector("body").style = "font-size: 1rem")
      : actualFontSize === 2
        ? (document.querySelector("body").style = "font-size: 1.1rem")
        : (document.querySelector("body").style = "font-size: 1.2rem");
  };

  const modeChange = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("body").classList.add("bkg-sides");
      document.querySelector(".grad").classList.remove("banner-grad");
    } else {
      document.querySelector("html").classList.add("dark");
      document.querySelector("body").classList.remove("bkg-sides");
      document.querySelector(".grad").classList.add("banner-grad");
    }
  };

  const saveSettings = () => {
    localStorage.setItem(
      "fontSize",
      actualFontSize === 1 ? 3 : actualFontSize === 2 ? 1 : 2
    );
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("banner", bannerState);
    localStorage.setItem("overlap", overlap);
  };

  const [settingsState, setSettingsState] = useState(false);
  return (
    <div className="relative">
      <header className="relative header-main  max-[400px]:px-2 flex gap-x-2 justify-between items-center dark:bg-transparent bg-white bg-opacity-30 z-20 max-[560px]:flex-wrap max-[560px]:justify-center py-4 max-[560px]:py-0 pb-4  max-[560px]:gap-x-4 dark:border-b-2 border-accent border-opacity-50">
        {/* left side */}
        <div className="flex gap-3 z-10 ml-4 -mb-1 max-[560px]:mb-1 max-[560px]:gap-4 ">
          <button className="mb-1">
            <Link to="/" title="strona główna">
              <FaHome
                className="header-icon  transition-all"
                size={22}
                color="var(--icon-gray)"
              />
            </Link>
          </button>
          <Timer />
        </div>
        {/* main title */}
        <div className="absolute w-full flex gap-2 justify-center max-[560px]:static max-[560px]:-order-1">
          <h1 className=" text-accent dark:brightness-100 dark:drop-shadow-[2px_0px_0px_rgba(255,255,255,0.8)] max-sm:dark:drop-shadow-[1px_0px_0px_rgba(255,255,255,0.8)] drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] brightness-90 text-header font-bold uppercase p-1 max-md:p-0 max-[330px]:text-center max-[330px]:leading-5 max-[330px]:p-1 max-[560px]:text-[7vw] max-[560px]:-mb-1"></h1>
        </div>
        {/* right side */}
        <div className="flex gap-2 z-10 mr-4 -mb-1 max-[560px]:mb-1 max-[560px]:gap-4">
          <button
            title="ustawienia"
            onClick={() => setSettingsState(!settingsState)}
          >
            <FaGear
              className="header-icon transition-all"
              size={18}
              color="var(--icon-gray)"
            />
          </button>
          <button
            title="kolorystyka"
            onClick={() => {
              modeChange();
            }}
          >
            {" "}
            <FaLightbulb
              size={18}
              color="var(--icon-gray)"
              className={
                darkMode
                  ? "header-icon drop-shadow-[0_-2px_7px_white]transition-color"
                  : "header-icon drop-shadow-[0_-2px_6px_white] fill-white transition-color"
              }
            />
          </button>
          <Link
            to="/About"
            title="o autorze"
            className="header-icon transition-all"
            onClick={() => {
              document.querySelector(".article-header").scrollIntoView();
            }}
          >
            <FaInfoCircle size={18} color="var(--icon-gray)" />
          </Link>
        </div>
      </header>
      {settingsState && (
        <Settings
          modeChange={modeChange}
          darkMode={darkMode}
          fontSize={fontSize}
          actualFontSize={actualFontSize}
          bannerState={bannerState}
          setBannerState={setBannerState}
          overlap={overlap}
          setOverlap={setOverlap}
          setSettingsState={setSettingsState}
          saveSettings={saveSettings}
        />
      )}
    </div>
  );
}

export default App;
