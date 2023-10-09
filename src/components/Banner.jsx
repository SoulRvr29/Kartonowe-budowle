import { useState, useEffect } from "react";
import bannerData from "../data/banners-data.json";
import { Link } from "react-router-dom";

const Banner = () => {
  const [image, setImage] = useState(bannerData[0].source);
  const [name, setName] = useState(bannerData[0].name);
  const [link, setLink] = useState(bannerData[0].link);
  const [index, setIndex] = useState(1);

  // useEffect(() => {
  //   let interval;
  //   interval = setInterval(() => {
  //     setIndex(index + 1);
  //     if (index >= bannerData.length - 1) setIndex(0);
  //     setImage(() => bannerData[index].source);
  //     setName(() => bannerData[index].name);
  //     setLink(() => bannerData[index].link);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [image]);

  return (
    <>
      <Link to={link}>
        <section className="banner-container pointer  h-[200px] w-full overflow-hidden relative flex flex-col">
          <h2 className=" absolute z-20 bottom-4 left-8 text-xl text-text-light drop-shadow-[1px_2px_1px_var(--bkg)] font-bold name-fade">
            {name}
          </h2>
          {/* <div className="absolute bg-white z-10 w-full h-full"></div> */}
          <div className="grid  transition-all duration-1000 ">
            {/* gradient */}
            <div className="w-full h-full absolute banner-grad z-10"></div>
            <img
              className="banner-img relative bottom-[11rem] place-self-center  w-screen min-w-max "
              src={image}
              alt="banner photo"
            />
          </div>
        </section>
      </Link>
    </>
  );
};

export default Banner;
