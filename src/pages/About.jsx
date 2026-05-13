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
  const photosSrc = ["./models/wang/day/full-res/wang-d01.webp"];
  const photosTitle = ["Świątynia Wang"];
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
        {/* <hr className="grad-hr" /> */}

        <article className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 pb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10 px-8 max-sm:px-4 ">
          {" "}
          <h2 className="max-w-3xl font-bold text-xl mx-auto text-center max-sm:text-sm m-2 droh2-shadow-sm dark:text-text-light text-text-dark">
            Witaj na stronie.
          </h2>
          <p>
            Modelarstwem zacząłem interesować się od około 1998 roku. Sklejam
            głównie budowle takie jak zamki, ratusze, czy latarnie morskie, ale
            czasem wykonuję także inne modele - rakiety, samoloty czy
            figurki.{" "}
          </p>
          <p>
            Interesuję się również elektroniką oraz programowaniem i staram się
            wykorzystywać to w moich projektach. Na stronie znajdziesz wiele
            galerii nocnych zdjęć modeli, w których wykonałem oświetlenie.
          </p>
          <p>
            {" "}
            Z czasem kolejne modele wykonywałem coraz dokładniej, dodając własne
            elementy oraz wykorzystując inne materiały, takie jak styrodur czy
            balsa. Dwukrotnie podjąłem się wykonania wnętrz w modelach zamków w{" "}
            <NavLink to="/Bedzin" target="_blank">
              {" "}
              <span className="text-accent-4 dark:text-accent-2 hover:underline">
                Będzinie
              </span>
            </NavLink>{" "}
            i{" "}
            <NavLink to="/Oporow" target="_blank">
              {" "}
              <span className="text-accent-4 dark:text-accent-2 hover:underline">
                Oporowie
              </span>
            </NavLink>
            .
          </p>
          <p>
            {" "}
            Jedynym jak dotąd modelem w całości wykonanym przeze mnie od podstaw
            jest{" "}
            <NavLink to="/Wang" target="_blank">
              <span className="text-accent-4 dark:text-accent-2 hover:underline">
                {" "}
                Świątynia Wang
              </span>
            </NavLink>
            .
          </p>
          <PhotoView src={photosSrc[0]}>
            <LazyLoadImage
              className="w-fit max-h-[30rem] mx-auto mb-4 cursor-pointer "
              src={photosSrc[0]}
              alt="wang"
              title={photosTitle[0]}
            />
          </PhotoView>
          {/* <hr className="mt-8 mb-6" /> */}
          <h4>Informacje o stronie</h4>
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
            {/* <li className="text-left">
              <a
                className="font-bold -ml-2 text-accent brightness-75 dark:brightness-100 dark:text-accent"
                href="https://www.npmjs.com/package/argon2"
                target="_blank"
              >
                argon2
              </a>{" "}
              - szyfrowanie haseł
            </li> */}
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
                color="var(--icon-gray)"
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
