import { useState, useRef } from "react";
import bannerData from "../data/banners-data.json";
import { Link } from "react-router-dom";

const Banner = ({ bannerState, setBannerState }) => {
  const [actualBanner, setActualBanner] = useState({
    name: bannerData[0].name,
    source: bannerData[0].source,
    link: bannerData[0].link,
  });
  let index = useRef(0);
  const [loadingIcon, setLoadingIcon] = useState(false);

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

    setActualBanner({
      name: bannerData[index.current].name,
      source: bannerData[index.current].source,
      link: bannerData[index.current].link,
    });

    document.querySelector(".banner-img").classList.remove("banner-anim");
    document.querySelector(".banner-text").classList.remove("banner-text-anim");
  };

  const imgLoadHandler = () => {
    document.querySelector(".banner-img").classList.add("banner-anim");
    document.querySelector(".banner-text").classList.add("banner-text-anim");
  };

  return (
    <>
      <Link
        onClick={() =>
          document.querySelector(".article-header").scrollIntoView()
        }
        to={bannerState === true && actualBanner.link}
        className="relative z-10 grid"
      >
        <hr className="grad-hr dark:hidden" />
        {/* loading icon */}
        {loadingIcon && (
          <div className="loading-icon absolute top-[40%] justify-self-center z-40 w-12 h-12 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
        )}
        {bannerState && (
          <div className="absolute top-2 left-4 max-sm:top-0 max-sm:left-1 z-[15]">
            {/* banner prev button */}
            <button
              onClick={(e) => {
                animEndHandler("prev");
                e.stopPropagation();
                e.preventDefault();
              }}
              title="poprzedni"
              className="px-2 max-sm:px-1 drop-shadow-[1px_2px_1px_var(--bkg)] opacity-50 dark:opacity-30 dark:hover:opacity-100 hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.8em"
                viewBox="0 0 256 512"
                fill="var(--text-light)"
              >
                <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
              </svg>
            </button>
            {/* banner next button */}
            <button
              onClick={(e) => {
                animEndHandler("next");
                e.stopPropagation();
                e.preventDefault();
              }}
              title="następny"
              className="px-2 max-sm:px-1 drop-shadow-[1px_2px_1px_var(--bkg)] opacity-50 dark:opacity-30 dark:hover:opacity-100 hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.8em"
                viewBox="0 0 256 512"
                fill="var(--text-light)"
              >
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
              </svg>
            </button>
          </div>
        )}
        <section
          className={
            bannerState == true
              ? "banner-section h-[200px] max-sm:h-[80px] w-full overflow-hidden relative flex flex-col"
              : "banner-section h-6  w-full overflow-hidden relative flex flex-col max-sm:h-5 invisible"
          }
        >
          {bannerState && (
            <h2 className="banner-text opacity-0 absolute z-[15] bottom-4 left-8 text-xl text-text-light drop-shadow-[1px_2px_1px_var(--bkg)] font-bold name-fade max-md:text-base max-md:left-4 max-md:bottom-2 max-[400px]:text-xs">
              {actualBanner.name}
            </h2>
          )}
          <div className="grid justify-center">
            {/* gradient */}
            <div className="w-full h-full absolute grad banner-grad z-10"></div>
            {bannerState && (
              <img
                onAnimationEnd={() => animEndHandler("next")}
                onLoad={() => {
                  imgLoadHandler();
                  setLoadingIcon(false);
                }}
                className="banner-img opacity-0 relative bottom-[11rem] place-self-center w-screen min-w-max max-sm:min-w-[700px] max-sm:mb-[3rem] max-sm:ml-[-4rem] "
                src={actualBanner.source}
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
        <button title={bannerState ? "ukryj banner" : "pokaż banner"}>
          <svg
            onClick={(e) => {
              setBannerState(!bannerState);
              e.stopPropagation();
              e.preventDefault();
            }}
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 448 512"
            fill="var(--text-light)"
            className={
              bannerState == true
                ? "absolute top-0 max-sm:top-1 max-sm:right-2 right-1 opacity-30 drop-shadow-[0_0_0_black] hover:opacity-100 z-[15] max-sm:h-4"
                : "absolute top-0  max-sm:right-2 right-1 opacity-30 drop-shadow-[0_0_0_black] hover:opacity-100 z-[15] max-sm:h-4 fill-accent-2 rotate-180 max-sm:top-[3px]"
            }
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
        </button>
        <hr className="grad-hr" />
      </Link>
    </>
  );
};

export default Banner;
