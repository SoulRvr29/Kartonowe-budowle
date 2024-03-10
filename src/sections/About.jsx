import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const Article = () => {
  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
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

        <header className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 mb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10 px-8 max-sm:px-4">
          <h2 className="max-w-3xl font-bold text-xl mx-auto text-center max-sm:text-sm m-2 droh2-shadow-sm dark:text-text-light text-text-dark">
            Witaj na stronie.
          </h2>
          <p>
            Znajdziesz tu galerie sklejonych przeze mnie modeli kartonowych.
            Większość modeli to budowle, takie jak zamki, ratusze, czy latarnie
            morskie, ale jest też się kilka rakiet, samolotów, czy figurek.
            Modelarstwem zajmuję się od około 1998 roku. Pierwsze modele
            wykonywałem w standardzie bez żadnych dodatków, w kolejnych modelach
            dodawałem retusz krawędzi, elementy z drutu (np. barierki) oraz
            roślinność i oświetlenie. Dwa razy podjąłem się też wykonania
            pomieszczeń w modelach zamku w{" "}
            <NavLink
              to="/Bedzin"
              onClick={() =>
                document.querySelector(".article-header").scrollIntoView()
              }
            >
              {" "}
              <span className="text-accent-4 dark:text-accent-2 hover:underline">
                Będzinie
              </span>
            </NavLink>{" "}
            i{" "}
            <NavLink
              to="/Oporow"
              onClick={() =>
                document.querySelector(".article-header").scrollIntoView()
              }
            >
              {" "}
              <span className="text-accent-4 dark:text-accent-2 hover:underline">
                Oporowie
              </span>
            </NavLink>
            . W ostatnich modelach wprowadzałem sporo modyfikacji i zmieniałem
            niektóre tekstury (np. dachu, podstawy), dorabiałem również swoje
            elementy. Świątynia
            <NavLink
              to="/Wang"
              onClick={() =>
                document.querySelector(".article-header").scrollIntoView()
              }
            >
              {" "}
              <span className="text-accent-4 dark:text-accent-2 hover:underline">
                Wang
              </span>
            </NavLink>
            , jeszcze nieukończona, jest już w całości zaprojektowana przeze
            mnie.
          </p>
          <p>
            Jeśli miałbym wybrać najlepszy model, jaki udało mi się do tej pory
            ukończyć, będzie to z pewnością{" "}
            <NavLink
              to="/Bedzin"
              onClick={() =>
                document.querySelector(".article-header").scrollIntoView()
              }
            >
              {" "}
              <span className="text-accent-4 dark:text-accent-2 hover:underline">
                zamek w Będzinie.
              </span>
            </NavLink>
          </p>
          <PhotoView src={photosSrc[0]}>
            <LazyLoadImage
              className="w-fit max-h-[30rem] mx-auto mb-4 cursor-pointer border-4 dark:border-accent border-[#666] "
              src={photosSrc[0]}
              alt="będzin"
              title={photosTitle[0]}
            />
          </PhotoView>
        </header>
      </PhotoProvider>
    </>
  );
};

export default Article;
