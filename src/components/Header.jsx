import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  if (localStorage.getItem("darkMode") == null)
    localStorage.setItem("darkMode", "true");
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );

  let actualFontSize = 1;

  useEffect(() => {
    modeChange();
    let localFontSize = localStorage.getItem("fontSize");
    document.querySelector("body").style = "font-size: " + localFontSize;
  }, []);

  const fontSizeChange = () => {
    actualFontSize < 3 ? actualFontSize++ : (actualFontSize = 1);
    actualFontSize === 1
      ? ((document.querySelector("body").style = "font-size: 1rem"),
        localStorage.setItem("fontSize", "1rem"))
      : actualFontSize === 2
      ? ((document.querySelector("body").style = "font-size: 1.1rem"),
        localStorage.setItem("fontSize", "1.1rem"))
      : ((document.querySelector("body").style = "font-size: 1.2rem"),
        localStorage.setItem("fontSize", "1.2rem"));
    console.log(actualFontSize);
  };

  const modeChange = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      localStorage.setItem("darkMode", darkMode);
      document.querySelector("html").classList.remove("dark");
      document.querySelector("body").classList.add("bkg-sides");
      document.querySelector(".grad").classList.remove("banner-grad");
    } else {
      localStorage.setItem("darkMode", darkMode);
      document.querySelector("html").classList.add("dark");
      document.querySelector("body").classList.remove("bkg-sides");
      document.querySelector(".grad").classList.add("banner-grad");
    }
  };
  return (
    <>
      <header className="relative px-4 max-sm:px-1 flex justify-between items-center dark:bg-transparent bg-white bg-opacity-30 ">
        {/* left side */}
        <div className="mt-1">
          <button>
            <Link to="/Kartonowe-budowle/" reloadDocument>
              <svg
                className="hover:brightness-150 opacity-50 dark:opacity-100 transition-all max-sm:h-4"
                height="1.25em"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="var(--text-dark)"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </Link>
          </button>
        </div>
        {/* main title */}
        <div className="flex gap-2 justify-center align-middle place-items-center">
          <h1 className="text-accent dark:brightness-100 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)] brightness-90 text-header font-bold uppercase p-1 max-md:p-0 max-[330px]:text-center max-[330px]:leading-5 max-[330px]:p-1">
            Kartonowe &nbsp;budowle
          </h1>
        </div>
        {/* right side */}
        <div className="flex gap-2 max-sm:ga mt-1">
          <svg
            className={
              darkMode
                ? "hover:brightness-150 drop-shadow-[0_-2px_7px_white]transition-color opacity-50 dark:opacity-100 max-sm:h-[14px] mt-[1px]"
                : "hover:brightness-150 drop-shadow-[0_-2px_6px_white] fill-white transition-color opacity-100 dark:opacity-100 max-sm:h-[14px] mt-[1px]"
            }
            xmlns="http://www.w3.org/2000/svg"
            height="1.1em"
            viewBox="0 0 384 512"
            fill="var(--text-dark)"
            onClick={() => {
              modeChange();
            }}
          >
            <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
          </svg>
          <svg
            className="hover:brightness-150 transition-all opacity-50 dark:opacity-100 max-sm:h-[14px] mt-[1px]"
            xmlns="http://www.w3.org/2000/svg"
            height="1.1em"
            viewBox="0 0 448 512"
            fill="var(--text-dark)"
            onClick={() => fontSizeChange()}
          >
            <path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z" />
          </svg>
          <a title="mail" href="mailto:pawelc29@interia.pl">
            <svg
              className="hover:brightness-150 transition-all opacity-50 dark:opacity-100 max-sm:h-4"
              xmlns="http://www.w3.org/2000/svg"
              height="1.25em"
              viewBox="0 0 512 512"
              fill="var(--text-dark)"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}

export default App;
