import { useState } from "react";

const Settings = ({
  modeChange,
  darkMode,
  actualFontSize,
  fontSize,
  bannerState,
  setBannerState,
  overlap,
  setOverlap,
  setSettingsState,
  saveSettings,
}) => {
  const [confirm, setconfirm] = useState(false);
  return (
    <>
      <div
        onClick={() => setSettingsState(false)}
        className="settings max-sm:grid w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-30 z-20 "
      ></div>
      <div className="settings grid w-80 max-sm:right-auto max-sm:mx-4 max-sm:w-[calc(100%-2rem)] max-sm:top-7 select-none absolute top-[62px] right-8 dark:bg-text-dark bg-text-light rounded-xl drop-shadow-[5px_5px_10px_rgba(0,0,0,0.5)] border-2 dark:border-text-light dark:border-opacity-40 z-20 px-4 pt-1 pb-4 dark:text-text-light text-text-dark">
        <div className={!confirm ? " visible" : " invisible"}>
          <h5 className="text-center text-xl">Ustawienia</h5>
          {/* <hr className="bg-white h-[2px]" /> */}
          <ul className=" font-medium grid gap-y-1 mt-2">
            {/* KOLORYSTYKA */}
            <li className="rounded-md  flex justify-between bg-text-dark bg-opacity-20 p-1 pl-2 dark:bg-text-light dark:bg-opacity-20">
              Kolorystyka:{" "}
              <button
                className=" dark:border-text-dark w-24 rounded-[4px] pb-[2px] px-2 dark:hover:text-text-dark dark:hover:bg-text-light dark:bg-text-dark bg-text-light bg-opacity-60 hover:text-text-light hover:bg-text-dark hover:bg-opacity-60 transition-colors"
                onClick={() => modeChange()}
              >
                {darkMode ? "ciemna" : "jasna"}
              </button>
            </li>
            {/* WIELKOŚĆ CZCIONKI */}
            <li className="rounded-md  flex justify-between bg-text-dark bg-opacity-20 p-1 pl-2 dark:bg-text-light dark:bg-opacity-20">
              Wielkość czcionki:{" "}
              <button
                className=" dark:border-text-dark w-24 rounded-[4px] pb-[2px] px-2 dark:hover:text-text-dark dark:hover:bg-text-light dark:bg-text-dark bg-text-light bg-opacity-60 hover:text-text-light hover:bg-text-dark hover:bg-opacity-60 transition-colors"
                onClick={() => fontSize()}
              >
                {actualFontSize == 1
                  ? "duża"
                  : actualFontSize == 2
                  ? "mała"
                  : "średnia"}
              </button>
            </li>
            {/* RUCHOMY BANNER */}
            <li className="rounded-md  flex justify-between bg-text-dark bg-opacity-20 p-1 pl-2 dark:bg-text-light dark:bg-opacity-20">
              Ruchomy banner:{" "}
              <button
                className=" dark:border-text-dark w-24 rounded-[4px] pb-[2px] px-2 dark:hover:text-text-dark dark:hover:bg-text-light dark:bg-text-dark bg-text-light bg-opacity-60 hover:text-text-light hover:bg-text-dark hover:bg-opacity-60 transition-colors"
                onClick={() => setBannerState(!bannerState)}
              >
                {bannerState ? "widoczny" : "ukryty"}
              </button>
            </li>
            {/* KARTY NAWIGACJI */}
            <li className="rounded-md max-sm:hidden flex justify-between bg-text-dark bg-opacity-20 p-1 pl-2 dark:bg-text-light dark:bg-opacity-20">
              Karty nawigacji:{" "}
              <button
                className=" dark:border-text-dark w-24 rounded-[4px] pb-[2px] px-2 dark:hover:text-text-dark dark:hover:bg-text-light dark:bg-text-dark bg-text-light bg-opacity-60 hover:text-text-light hover:bg-text-dark hover:bg-opacity-60 transition-colors"
                onClick={() => setOverlap(!overlap)}
              >
                {overlap ? "szeroko" : "wąsko"}
              </button>
            </li>
            {/* PRZYCISKI ZAPISZ / ZAMKNIJ */}
            <div className="flex justify-center gap-6 px-8 max-sm:px-0 pt-3 text-white">
              <button
                onClick={() => {
                  saveSettings();
                  setconfirm(true);
                  setTimeout(() => {
                    setconfirm(false);
                    //   setSettingsState(false);
                  }, 1000);
                }}
                className="drop-shadow-lg bg-green-700 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg"
              >
                Zapisz
              </button>
              <button
                onClick={() => setSettingsState(false)}
                className="drop-shadow-lg  bg-accent-4 py-1 px-4 pb-[6px] hover:brightness-125 text-lg rounded-lg"
              >
                Zamknij
              </button>
            </div>
          </ul>
        </div>
        {/* POTWIERDZENIE */}
        <div
          className={
            "confirm flex gap-3 absolute place-self-center text-4xl drop-shadow-sm font-bold " +
            (!confirm ? "hidden" : "visible")
          }
        >
          Zapisano{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2em"
            viewBox="0 0 448 512"
            className="fill-green-500 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.5)]"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Settings;
