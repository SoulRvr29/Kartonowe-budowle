import ImagesGrid from "../components/ImagesGrid";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const Article = () => {
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "./models/bedzin/day/full-res/bedzin-d01.jpg",
    "./models/bedzin/day/full-res/bedzin-d19.jpg",
    "./models/bedzin/day/full-res/bedzin-d27.jpg",
  ];
  const photosTitle = [
    "Zamek w Będzinie",
    "Wejście do zamku w Będzinie",
    "Dziedziniec zamku w Będzinie",
  ];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <PhotoProvider
        overlayRender={({ index }) => {
          return (
            <div
              className={
                "photo-description absolute bottom-0 text-center w-full z-30 p-3 bg-black bg-opacity-40 text-text-light " +
                (!photosTitle[index] && " hidden")
              }
            >
              {photosTitle[index]}
            </div>
          );
        }}
        maskOpacity={0.5}
        maskClassName="backdrop-blur-sm"
        loadingElement={<div class="loader"></div>}
      >
        <hr className="grad-hr" />

        <header className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30  bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10 px-8 max-sm:px-4 py-4 max-sm:py-0 max-sm:pb-2 ">
          {/* <h2 className="max-w-3xl font-bold text-xl mx-auto text-center max-sm:text-sm m-2 droh2-shadow-sm dark:text-text-light text-text-dark">
            Witaj na stronie głównej.
          </h2> */}
          <h4>Modele w budowie:</h4>
          <p>
            <b>
              <NavLink
                to="/Wang"
                onClick={() =>
                  document.querySelector(".article-header").scrollIntoView()
                }
              >
                <span className="text-accent-4 dark:text-accent-2 hover:underline">
                  Świątynia Wang{" "}
                </span>
              </NavLink>
              (projekt własny){" "}
            </b>
            - budowla jest już na ukończeniu, do zrobienia trawniki, drzewka,
            oświetlenie wokół budowli. <br />
            <b> Świątynia Wang (GPM)</b> - budowla gotowa, do zrobienia drzewka.
            <br />
            <b>Rakieta Saturn V</b> - do zrobienia górny stopień rakiety,
            silniki i detale.
          </p>
          <h4>Galerie do dodania:</h4>
          <ul className="list-disc list-inside">
            <li>Rakieta Atlas V</li>
            <li>wieżowce</li>
            <br />
            <b>Starsze modele (do 2010r):</b>
            <li>Olsztyn</li>
            <li>Malbork</li>
            <li>Nowy Wiśnicz</li>
            <li>Wawel</li>
            <li>Samolot Mig 29UB</li>
            <li>Samolot P51-B Mustang</li>
          </ul>
        </header>
        <hr className="grad-hr" />
      </PhotoProvider>
      <div className="m-8 my-4 max-sm:mb-2">
        {/* <h4 className="max-sm:text-base max-[350px]:text-xs mx-auto text-center mb-4">
          Losowe zdjęcia z różnych modeli:
        </h4> */}
        <ImagesGrid />
      </div>
    </>
  );
};

export default Article;
