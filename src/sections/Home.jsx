import { useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data/home-photos-data.json";

const Article = () => {
  // const photoSrc = [];
  // for (let x = 1; x <= 31; x++) {
  //   if (x < 10) photoSrc.push(`models/home/home-photo0${x}.jpg`);
  //   else photoSrc.push(`models/home/home-photo${x}.jpg`);
  // }

  const randomArr = (length) => {
    let arr = [];
    while (arr.length < length) {
      let nr = Math.floor(Math.random() * length + 1);
      if (!arr.includes(nr)) {
        arr.push(nr);
      }
    }
    // arr = arr.map((item) => {
    //   return item < 10
    //     ? `models/home/home-photo0${item}.jpg`
    //     : `models/home/home-photo${item}.jpg`;
    // });
    return arr;
  };
  const setSrc = (order) => {
    let srcArr = [];
    for (let x = 0; x <= order.length - 1; x++) {
      if (order[x] < 10) srcArr.push(`models/home/home-photo0${order[x]}.jpg`);
      else srcArr.push(`models/home/home-photo${order[x]}.jpg`);
    }
    return srcArr;
  };

  const order = randomArr(31);
  const photoSrc = setSrc(order);

  console.log(photoSrc);

  return (
    <>
      <hr className="grad-hr" />
      <header className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 mb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10">
        <p className="max-w-3xl font-bold text-lg mx-auto text-center max-sm:text-sm px-4 m-4 drop-shadow-sm dark:text-text-light text-text-dark">
          Witaj na stronie poświęconej modelarstwu kartonowemu. Znajdziesz tu
          galerie sklejonych przeze mnie modeli. W większości są to budowle z
          wydawnictwa GPM. Modele na liście powyżej są podzielone na kategorie i
          ułożone od najnowszych do najstaszych.
        </p>
        <hr className="grad-hr" />
      </header>
      <article className=" mb-8">
        <div className="img-grid flex flex-wrap gap-2">
          {photoSrc.map((src, index) => (
            <div className="relative h-[25vh] grow max-md:h-[40vh] max-[540px]:h-auto border-2 border-bkg hover:border-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.5)] ">
              <NavLink
                to={data[order[index] - 1].link}
                onClick={() =>
                  document.querySelector(".article-header").scrollIntoView()
                }
              >
                <div className="photo-container h-full w-full">
                  <img
                    className=" hover:cursor-pointer max-h-full min-w-full  object-cover align-bottom max-[540px]:object-contain max-[540px]:w-full max-[540px]:h-auto"
                    src={src}
                    alt={data[order[index] - 1].name}
                  />
                  <div className="photo-div invisible absolute grid justify-center items-end top-0 left-0 w-full h-full ">
                    <div className="w-full absolute bg-black  bg-opacity-50  text-lg font-bold text-center text-white py-1">
                      {data[order[index] - 1].name}
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

export default Article;
