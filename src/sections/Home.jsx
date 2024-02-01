import ImagesGrid from "../components/ImagesGrid";
import ArticleGallery from "../components/ArticleGallery";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const Article = () => {
  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
  const [photoIndex, setPhotoIndex] = useState(null);
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
  const photoClickHandler = (e) => {
    setPhotoIndex(photosSrc.indexOf(e.target.getAttribute("src")));
    document.querySelector("body").classList.add("site-overflow");
  };
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <ArticleGallery
        photosSrc={photosSrc}
        photosTitle={photosTitle}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      <hr className="grad-hr" />

      <header className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30 mb-2 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10 px-8 max-sm:px-4">
        <h2 className="max-w-3xl font-bold text-xl mx-auto text-center max-sm:text-sm m-2 droh2-shadow-sm dark:text-text-light text-text-dark">
          Witaj na stronie.
        </h2>
        <p>
          Znajdziesz tu galerie sklejonych przeze mnie modeli kartonowych.
          Modele sklejam od 1998 roku, głównie budowle, takie jak zamki,
          ratusze, czy latarnie morskie. Zdarzyło mi się też skleić kilka
          rakiet, samolotów, czy figurek. Pierwsze modele wykonywałem w
          standardzie bez żadnych dodatków. W kolejnych modelach dodawałem
          retusz krawędzi, elementy z drutu, jak np. barierki, roślinność oraz
          oświetlenie. Zamki w{" "}
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
          </NavLink>{" "}
          mają również wykonane wnętrza pomieszczeń. W ostatnich modelach
          wprowadzałem sporo modyfikacji i zmieniałem niektóre tekstury np.
          dachu, podstawy, dorabiałem też swoje części. Świątynia Wang, jeszcze
          nieukończona, jest już w całości zaprojektowana przeze mnie.
        </p>
        {/* <p>
          Modele można wybrać z listy powyżej z podziałem na kategorie. Modele
          są ułożone od najnowszych od lewej. Lista nie jest jeszcze w pełni
          kompletna, z czasem będę dodawał kolejne pozycje.
        </p> */}
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
        <LazyLoadImage
          className="w-fit max-h-[40rem] mx-auto mb-4 cursor-pointer border-4 dark:border-accent border-[#666] "
          src={photosSrc[0]}
          alt="będzin"
          title={photosTitle[0]}
          onClick={(e) => {
            photoClickHandler(e);
          }}
        />
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <LazyLoadImage
            className="w-fit max-h-[25rem] mx-auto mb-4 cursor-pointer border-4 dark:border-accent border-[#666] "
            src={photosSrc[1]}
            alt="będzin"
            title={photosTitle[1]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          <LazyLoadImage
            className="w-fit max-h-[25rem] mx-auto mb-4 cursor-pointer border-4 dark:border-accent border-[#666] "
            src={photosSrc[2]}
            alt="będzin"
            title={photosTitle[2]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
        </div>
        <hr className="grad-hr" />
      </header>
      <div className=" mb-8 mt-4 mx-8">
        {/* <h4 className="max-sm:text-base max-[425px]:text-xs mx-auto mt-4">
          Poniżej kilka wybranych zdjęć z różnych modeli:
        </h4> */}
        <ImagesGrid />
      </div>
    </>
  );
};

export default Article;
