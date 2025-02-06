import "../css/Banner.css";
import { useState, useRef, useEffect } from "react";
import bannerData from "../data/banners-data.json";
import { Link } from "react-router-dom";
import { PiCaretDoubleLeftFill, PiCaretDoubleRightFill } from "react-icons/pi";
import { FaPause } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const Banner = ({ bannerState, setBannerState }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let index = useRef(Math.floor(Math.random() * bannerData.length));
  const [actualBanner, setActualBanner] = useState(bannerData[index.current]);

  const [loadingIcon, setLoadingIcon] = useState(false);
  const [animRunning, setAnimRunning] = useState(true);

  const animEndHandler = (direction) => {
    setLoadingIcon(true);

    if (direction == "next") {
      index.current = index.current + 1;
      if (index.current >= bannerData.length) index.current = 0;
    }
    if (direction == "prev") {
      index.current = index.current - 1;
      if (index.current < 0) index.current = bannerData.length - 1;
    }

    setActualBanner(bannerData[index.current]);

    document.querySelector(".banner-img").classList.remove("banner-anim");
    document.querySelector(".banner-text").classList.remove("banner-text-anim");
  };

  const imgLoadHandler = () => {
    document.querySelector(".banner-img").classList.add("banner-anim");
    document.querySelector(".banner-text").classList.add("banner-text-anim");
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Link
        onClick={() => {
          if (localStorage.getItem("autoScroll") == "true") {
            if (localStorage.getItem("autoScroll") == "true") {
              // document.querySelector(".article-header").scrollIntoView();
              const articleSection = document.querySelector(".article-header");
              const header = document.querySelector("header");
              const articleTop =
                articleSection.getBoundingClientRect().top + window.scrollY;

              window.scrollTo({
                top: articleTop - header.offsetHeight,
                behavior: "smooth",
              });
            }
          }
        }}
        to={bannerState === true && actualBanner.link}
        className="relative z-10 grid"
      >
        <hr className="grad-hr hidden" />
        {/* loading icon */}
        {loadingIcon && (
          <div className="loading-icon absolute top-[40%] justify-self-center z-40 w-12 h-12 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
        )}
        {bannerState && (
          <div className="absolute flex gap-1 max-sm:gap-0 top-3 left-4 max-sm:top-1 max-sm:left-1 z-[15]">
            {/* banner prev button */}
            <button
              onClick={(e) => {
                setAnimRunning(true);
                animEndHandler("prev");
                e.stopPropagation();
                e.preventDefault();
              }}
              title="poprzedni"
              className="drop-shadow-[1px_2px_1px_var(--bkg)] opacity-50 dark:opacity-30 dark:hover:opacity-100 hover:opacity-100 transition-opacity max-sm:scale-[85%]"
            >
              <PiCaretDoubleLeftFill size={22} fill="var(--text-light)" />
            </button>
            {/* banner pause button */}
            <button
              onClick={(e) => {
                setAnimRunning(!animRunning);
                e.stopPropagation();
                e.preventDefault();
              }}
              title={animRunning ? "pauza" : "wznów"}
              className="max-sm:px-1 drop-shadow-[1px_2px_1px_var(--bkg)] opacity-50 dark:opacity-30 dark:hover:opacity-100 hover:opacity-100 transition-opacity max-sm:scale-[85%]"
            >
              <FaPause size={22} fill="var(--text-light)" />
            </button>
            {/* banner next button */}
            <button
              onClick={(e) => {
                setAnimRunning(true);
                animEndHandler("next");
                e.stopPropagation();
                e.preventDefault();
              }}
              title="następny"
              className="drop-shadow-[1px_2px_1px_var(--bkg)] opacity-50 dark:opacity-30 dark:hover:opacity-100 hover:opacity-100 transition-opacity max-sm:scale-[85%]"
            >
              <PiCaretDoubleRightFill size={22} fill="var(--text-light)" />
            </button>
          </div>
        )}
        <section
          className={
            bannerState == true
              ? "banner-section h-[200px] max-sm:h-[92px] w-full overflow-hidden relative flex flex-col"
              : "banner-section h-6  w-full overflow-hidden relative flex flex-col max-sm:h-5 invisible"
          }
        >
          {bannerState && (
            <h2
              className="banner-text opacity-0 absolute z-[15] bottom-4 left-8 text-xl text-text-light drop-shadow-[1px_2px_1px_var(--bkg)] font-bold name-fade max-md:text-base max-md:left-4 max-md:bottom-2 max-[400px]:text-xs"
              style={
                animRunning
                  ? { animationPlayState: "running" }
                  : { animationPlayState: "paused" }
              }
            >
              {actualBanner.name}
            </h2>
          )}
          <div className="grid justify-center">
            {/* gradient */}
            <div className="w-full h-full absolute grad banner-grad z-10 invisible dark:visible"></div>
            {bannerState && (
              <img
                onAnimationEnd={() => animEndHandler("next")}
                onLoad={() => {
                  imgLoadHandler();
                  setLoadingIcon(false);
                }}
                className="banner-img opacity-0 relative bottom-[11rem] place-self-center w-screen min-w-max max-sm:min-w-[700px] max-sm:mb-[3rem] max-sm:ml-[-4rem] "
                style={
                  animRunning
                    ? { animationPlayState: "running" }
                    : { animationPlayState: "paused" }
                }
                src={
                  screenWidth > 640 ? actualBanner.full : actualBanner.mobile
                }
                alt="banner photo"
              />
            )}
          </div>
        </section>
        {/* show banner button */}
        <button
          onClick={(e) => {
            setBannerState(!bannerState);
            e.stopPropagation();
            e.preventDefault();
          }}
          className={
            !bannerState
              ? "dark:text-text-light text-text-dark text-opacity-50 dark:text-opacity-30 h-full uppercase text-sm justify-self-center z-20 absolute top-0 font-semibold hover:text-opacity-90 dark:hover:text-opacity-50 transition-all"
              : "hidden"
          }
        >
          banner
        </button>
        {/* banner hide icon */}
        <button
          title={bannerState ? "ukryj banner" : "pokaż banner"}
          onClick={(e) => {
            setBannerState(!bannerState);
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <IoIosArrowUp
            size={26}
            fill="var(--text-light)"
            className={
              bannerState == true
                ? "absolute top-0 max-sm:top-1 max-sm:right-1 right-[2px] opacity-30 drop-shadow-[0_0_0_black] hover:opacity-100 z-[15] max-sm:h-4"
                : "absolute top-0  max-sm:right-1 right-[1px]  opacity-30 drop-shadow-[0_0_0_black] hover:opacity-100 z-[15] max-sm:h-4 fill-accent-2 rotate-180 max-sm:top-[3px]"
            }
          />
        </button>
        <hr className="grad-hr" />
      </Link>
    </>
  );
};

export default Banner;
