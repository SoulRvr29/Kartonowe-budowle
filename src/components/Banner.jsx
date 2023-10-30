import { useState, useEffect } from "react";
import bannerData from "../data/banners-data.json";
import { Link } from "react-router-dom";

const Banner = ({ animState, setAnimState }) => {
  const [image, setImage] = useState(bannerData[0].source);
  const [name, setName] = useState(bannerData[0].name);
  const [link, setLink] = useState(bannerData[0].link);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const section = document.querySelector(".banner-section");
    const img = document.querySelector(".banner-img");
    let interval1;
    img.classList.remove("banner-scroll");
    img.classList.add("banner-scroll");
    setTimeout(() => {
      section.classList.add("banner-fade-out");
    }, 19000);

    interval1 = setInterval(() => {
      setIndex(index + 1);
      if (index >= bannerData.length - 1) setIndex(0);
      setImage(() => bannerData[index].source);
      setName(() => bannerData[index].name);
      setLink(() => bannerData[index].link);
      img.classList.remove("banner-scroll");
      void img.offsetWidth;
      img.classList.add("banner-scroll");
      section.classList.remove("banner-fade-out");
      section.classList.add("banner-fade-in");
      setTimeout(() => {
        section.classList.remove("banner-fade-in");
      }, 1000);
      setTimeout(() => {
        section.classList.add("banner-fade-out");
      }, 19000);
    }, 20000);
    return () => {
      clearInterval(interval1);
    };
  });

  return (
    <>
      <Link to={animState === true && link} className="relative z-10 grid">
        <hr className="grad-hr" />
        <section
          className={
            animState == true
              ? "banner-section banner-on pointer  h-[200px] max-[400px]:h-[80px] w-full overflow-hidden relative flex flex-col"
              : "banner-section banner-on pointer  h-6  w-full overflow-hidden relative flex flex-col max-sm:h-5 invisible"
          }
        >
          <h2 className=" absolute z-[15] bottom-4 left-8 text-xl text-text-light drop-shadow-[1px_2px_1px_var(--bkg)] font-bold name-fade max-md:text-base max-md:left-4 max-md:bottom-2 max-[400px]:text-xs">
            {name}
          </h2>
          <div className="grid  transition-all duration-1000 ">
            {/* gradient */}
            <div className="w-full h-full absolute grad banner-grad z-10"></div>
            <img
              className="banner-img relative bottom-[11rem] place-self-center w-screen min-w-max max-[400px]:min-w-[600px] max-[400px]:mb-[3rem] max-[400px]:ml-[-4rem] "
              src={image}
              alt="banner photo"
            />
          </div>
        </section>
        {/* show banner button */}
        <button
          onClick={(e) => {
            setAnimState(!animState);
          }}
          className={
            !animState
              ? "dark:text-text-light text-text-dark text-opacity-50 dark:text-opacity-30 h-full uppercase text-sm justify-self-center z-20 absolute top-0 font-semibold hover:text-opacity-90 dark:hover:text-opacity-50 transition-all"
              : "hidden"
          }
        >
          banner
        </button>
        {/* banner hide icon */}
        <svg
          onClick={(e) => {
            setAnimState(!animState);
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 448 512"
          fill="var(--text-light)"
          className={
            animState == true
              ? "absolute top-0 max-sm:top-1 max-sm:right-2 right-1 opacity-30 drop-shadow-[0_0_0_black] hover:opacity-100 z-[15] max-sm:h-4"
              : "absolute top-0  max-sm:right-2 right-1 opacity-30 drop-shadow-[0_0_0_black] hover:opacity-100 z-[15] max-sm:h-4 fill-accent-2 rotate-180 max-sm:top-[3px]"
          }
        >
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
        <hr className="grad-hr" />
      </Link>
    </>
  );
};

export default Banner;
