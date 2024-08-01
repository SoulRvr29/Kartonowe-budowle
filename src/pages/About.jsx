import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { useEffect } from "react";

const Article = () => {
  useEffect(() => {
    document.title = "O autorze - ModelCraft";
  }, []);
  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
  const photosSrc = [
    "./models/bedzin/day/full-res/bedzin-d01.webp",
    "./models/bedzin/day/full-res/bedzin-d19.webp",
    "./models/bedzin/day/full-res/bedzin-d27.webp",
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

        <article className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 pb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10 px-8 max-sm:px-4 ">
          {" "}
          <h2 className="max-w-3xl font-bold text-xl mx-auto text-center max-sm:text-sm m-2 droh2-shadow-sm dark:text-text-light text-text-dark">
            Witaj na stronie.
          </h2>
          <p>
            Znajdziesz tu galerie sklejonych przeze mnie modeli kartonowych.
            Większość modeli to budowle, takie jak zamki, ratusze, czy latarnie
            morskie, ale jest też kilka rakiet, samolotów, czy figurek.
            Modelarstwem zajmuję się od około 1998 roku. Pierwsze modele
            wykonywałem w standardzie bez żadnych dodatków, w kolejnych modelach
            dodawałem retusz krawędzi, elementy z drutu (np. barierki, anteny)
            oraz roślinność i oświetlenie. Dwa razy podjąłem się też wykonania
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
            części. Świątynia
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
            , jeszcze nieukończona, jest już w całości budowana przeze mnie od
            podstaw.
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
              className="w-fit max-h-[30rem] mx-auto mb-4 cursor-pointer "
              src={photosSrc[0]}
              alt="będzin"
              title={photosTitle[0]}
            />
          </PhotoView>
          <h5 className="font-semibold text-left max-sm:text-base max-sm:leading-5">
            Frontend strony został wykonany przy użyciu frameworka{" "}
            <a
              className=" text-accent brightness-75 dark:brightness-100 dark:text-accent"
              href="https://react.dev/"
              target="_blank"
            >
              REACT
            </a>{" "}
            i bibliotek:{" "}
          </h5>
          <ul className="list-disc list-inside mb-4">
            <li className="text-left">
              <a
                className="font-bold -ml-2 text-accent brightness-75 dark:brightness-100 dark:text-accent"
                href="https://www.npmjs.com/package/react-router-dom"
                target="_blank"
              >
                react-router-dom
              </a>{" "}
              - podział na podstrony
            </li>
            <li className="text-left">
              <a
                className="font-bold -ml-2 text-accent brightness-75 dark:brightness-100 dark:text-accent"
                href="https://www.npmjs.com/package/react-leaflet"
                target="_blank"
              >
                react-leaflet
              </a>{" "}
              - interaktywne mapki
            </li>
            <li className="text-left">
              <a
                className="font-bold -ml-2 text-accent brightness-75 dark:brightness-100 dark:text-accent"
                href="https://www.npmjs.com/package/react-photo-view"
                target="_blank"
              >
                react-photo-view
              </a>{" "}
              - obsługa galerii
            </li>
            <li className="text-left">
              <a
                className="font-bold -ml-2 text-accent brightness-75 dark:brightness-100 dark:text-accent"
                href="https://www.npmjs.com/package/react-lazy-load-image-component"
                target="_blank"
              >
                react-lazy-load-image-component
              </a>{" "}
              - optymalizacja zdjęć
            </li>
            <li className="text-left">
              <a
                className="font-bold -ml-2 text-accent brightness-75 dark:brightness-100 dark:text-accent"
                href="https://www.npmjs.com/package/react-icons"
                target="_blank"
              >
                react-icons
              </a>{" "}
              - ikonki
            </li>
          </ul>
          <h5 className="font-semibold text-left max-sm:text-base max-sm:leading-5">
            Backend strony (logowanie, komentarze) został wykonany przy użyciu
            frameworka{" "}
            <a
              className=" text-accent brightness-75 dark:brightness-100 dark:text-accent"
              href="https://expressjs.com/"
              target="_blank"
            >
              Express
            </a>{" "}
            oraz:
          </h5>
          <ul className="list-disc list-inside mb-4 ">
            <li className="text-left">
              <a
                className="font-bold -ml-2 text-accent brightness-75 dark:brightness-100 dark:text-accent"
                href="https://www.mongodb.com/"
                target="_blank"
              >
                MongoDB
              </a>{" "}
              - baza danych
            </li>
            <li className="text-left">
              <a
                className="font-bold -ml-2 text-accent brightness-75 dark:brightness-100 dark:text-accent"
                href="https://mongoosejs.com/"
                target="_blank"
              >
                Mongoose
              </a>{" "}
              - modelowanie danych
            </li>
            <li className="text-left">
              <a
                className="font-bold -ml-2 text-accent brightness-75 dark:brightness-100 dark:text-accent"
                href="https://www.npmjs.com/package/argon2"
                target="_blank"
              >
                argon2
              </a>{" "}
              - szyfrowanie haseł
            </li>
          </ul>
          <p className="font-semibold text-lg">
            Strona jest hostowana na platformie{" "}
            <a
              className=" text-accent brightness-75 dark:brightness-100 dark:text-accent"
              href="https://vercel.com/"
              target="_blank"
            >
              Vercel
            </a>
          </p>
          <div className="flex items-center gap-2 h-8 font-bold text-lg max-sm:text-base max-sm:leading-5">
            {/* mail icon */}
            <a title="wyślij mail" href="mailto:pawelc29@interia.pl">
              <IoIosMail
                size={28}
                fill="var(--icon-gray)"
                className="header-icon hover:brightness-150 transition-all dark:brightness-125"
              />
            </a>

            <p className="m-0">Kontakt: pawelc29@interia.pl</p>
          </div>
        </article>
      </PhotoProvider>
    </>
  );
};

export default Article;
