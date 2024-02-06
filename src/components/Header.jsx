import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Settings from "./Settings";
import Timer from "../components/Timer";

function App({ bannerState, setBannerState, overlap, setOverlap }) {
  if (localStorage.getItem("darkMode") == null)
    localStorage.setItem("darkMode", "true");
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

  useEffect(() => {
    if (!darkMode) {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("body").classList.add("bkg-sides");
      document.querySelector(".grad").classList.remove("banner-grad");
    } else {
      document.querySelector("html").classList.add("dark");
      document.querySelector("body").classList.remove("bkg-sides");
      document.querySelector(".grad").classList.add("banner-grad");
    }
    fontSize();
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
    <div className="relative ">
      <header className="relative header-main px-4 max-[400px]:px-2 flex gap-x-2 justify-between items-center dark:bg-transparent bg-white bg-opacity-30 z-20 max-[460px]:flex-wrap max-[460px]:justify-center py-4 max-[460px]:py-0 pb-4  max-[460px]:gap-x-4 dark:border-b-2 border-accent border-opacity-50">
        {/* left side */}
        <div className="flex gap-2 z-10 -mb-1 max-[460px]:mb-1 max-[460px]:gap-4 ">
          <button className="mb-1">
            <Link to="/" title="strona główna">
              {/* <Link to="/" title="strona główna" reloadDocument> */}
              <svg
                className="header-icon  transition-all"
                height="1.1em"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="var(--icon-gray)"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </Link>
          </button>
          <Timer />
        </div>
        {/* main title */}
        <div className="absolute w-full flex gap-2 justify-center max-[460px]:static max-[460px]:-order-1">
          <h1 className="text-accent dark:brightness-100 dark:drop-shadow-[2px_0px_0px_rgba(255,255,255,0.8)] max-sm:dark:drop-shadow-[1px_0px_0px_rgba(255,255,255,0.8)] drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] brightness-90 text-header font-bold uppercase p-1 max-md:p-0 max-[330px]:text-center max-[330px]:leading-5 max-[330px]:p-1 max-[460px]:text-[7vw] max-[460px]:-mb-1">
            <div>k</div>
            <div>a</div>
            <div>r</div>
            <div>t</div>
            <div>o</div>
            <div>n</div>
            <div>o</div>
            <div>w</div>
            <div>e</div>
            &nbsp;&nbsp;
            <div>b</div>
            <div>u</div>
            <div>d</div>
            <div>o</div>
            <div>w</div>
            <div>l</div>
            <div>e</div>
          </h1>
          {/* <h1 className="text-accent dark:brightness-100 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] brightness-90 text-header font-bold uppercase p-1 max-md:p-0 max-[330px]:text-center max-[330px]:leading-5 max-[330px]:p-1 max-[460px]:text-[7vw] max-[460px]:-mb-1">
            Kartonowe &nbsp;budowle
          </h1> */}
        </div>
        {/* right side */}
        <div className="flex gap-2 z-10 -mb-1 max-[460px]:mb-1 max-[460px]:gap-4">
          {/* gear icon */}
          <button title="ustawienia">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="1.1em"
              className="header-icon hover:brightness-150 transition-all"
              fill="var(--icon-gray)"
              onClick={() => setSettingsState(!settingsState)}
            >
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
          </button>
          {/* lightbulb icon */}
          <button
            title="kolorystyka"
            onClick={() => {
              modeChange();
            }}
          >
            <svg
              className={
                darkMode
                  ? "header-icon hover:brightness-150 drop-shadow-[0_-2px_7px_white]transition-color "
                  : "header-icon hover:brightness-150 drop-shadow-[0_-2px_6px_white] fill-white transition-color  "
              }
              xmlns="http://www.w3.org/2000/svg"
              height="1.1em"
              viewBox="0 0 384 512"
              fill="var(--icon-gray)"
            >
              <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
            </svg>
          </button>
          {/* mail icon */}
          <a title="wyślij mail" href="mailto:pawelc29@interia.pl">
            <svg
              className="header-icon hover:brightness-150 transition-all "
              xmlns="http://www.w3.org/2000/svg"
              height="1.25em"
              viewBox="0 0 512 512"
              fill="var(--icon-gray)"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
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
