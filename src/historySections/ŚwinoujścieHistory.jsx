import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ŚwinoujścieHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie_morskie/swinoujscie/swinoujscie-photo0.webp",
    "models/latarnie_morskie/swinoujscie/swinoujscie-photo1.webp",
    "models/latarnie_morskie/swinoujscie/swinoujscie-photo2.webp",
    "models/latarnie_morskie/swinoujscie/swinoujscie-photo3.webp",
    "models/latarnie_morskie/swinoujscie/swinoujscie-photo4.webp",
  ];
  const photosTitle = [
    "Latarnia morska Świnoujście w 1898 roku",
    "Latarnia morska Świnoujście w 1905 roku",
  ];

  /////////////////////////////////////////////////////////////////
  return (
    <>
      {" "}
      <SectionHeader
        sectionName="Historia"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState === true && (
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
          loadingElement={<div className="loader"></div>}
        >
          <article className="px-8 max-sm:px-4">
            {" "}
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="float-left mr-8 max-h-[20rem] max-md:max-h-none"
                src={photosSrc[0]}
                alt="świnoujście"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter">W</span> XVII wieku nie istniała w
              Świnoujściu jeszcze żadna latarnia, ale jej funkcję pełniło
              ognisko o dużych rozmiarach palone na wzniesieniu w Chorzelinie.
              Pierwsza latarnia morska w Świnoujściu powstała w 1805 roku. Stała
              na głowicy falochronu i zbudowana była z desek i luster. W 1828
              roku została w jej miejscu postawiona nowa, tym razem stalowa.
            </p>
            <p>
              Budowę obecnej latarni rozpoczęto w 1854 roku i trwała niecałe
              trzy lata. Uruchomiono ją 1 grudnia 1857 roku. W owych czasach
              była godnym podziwu osiągnięciem budowlanym. Do 1902 roku wieża
              latarni od dolnej galerii aż do galerii górnej, miała kształt
              ośmioboku zwężającego się ku górze i zbudowana była z żółtej
              licowanej cegły. Grubość ścian wynosiła 1,7 metra nad galerią
              dolną do 1,3 metra przy galerii górnej. Do 1945 roku była to
              najwyższa latarnia morska na terytorium Niemiec.
            </p>
            <PhotoView src={photosSrc[1]}>
              <LazyLoadImage
                className="float-right ml-8 max-h-[20rem] mt-2 max-md:max-h-none"
                src={photosSrc[1]}
                alt="świnoujście"
                title={photosTitle[1]}
              />
            </PhotoView>
            <p>
              Ciężkie warunki atmosferyczne, jakie panują w Świnoujściu
              spowodowały znaczne ubytki cegły, w związku z czym w latach
              1902–1903 przeprowadzono kapitalny remont wieży. Ponieważ okazało
              się, że najbardziej zniszczone były cegły na krawędziach,
              postanowiono zmienić kształt wieży z ośmiokątnego na okrągły.
              Wokół wieży zbudowano na jej całej wysokości silne, drewniane
              rusztowanie i postępując od góry zdjęto całą okładzinę a następnie
              przystąpiono do murowania nowego płaszcza z cegły klinkierowej
              postępując odwrotnie tzn. od dołu do góry. W tej postaci latarnia
              przetrwała do dzisiaj.
            </p>
            <p>
              W czasie II wojny światowej 12 marca 1945 roku podczas alianckiego
              bombardowania lotniczego wybuchające w jej pobliżu bomby
              spowodowały pęknięcia korpusu wieży. Dopiero po 14 latach, w 1959
              roku kolumna została wzmocniona zastrzykami zespalającymi spękane
              mury.
            </p>
            <p>
              Zapylenie atmosfery chemikaliami przeładowywanymi na statki w
              otaczającym porcie spowodowało, że okładzina kolumny wieży latarni
              uległa ponownie znacznemu zniszczeniu. Od listopada 1998 roku do
              wiosny 2000 roku przeprowadzono remont, który objął całą budowlę
              czyli wieżę z przyległymi do niej dwukondygnacyjnymi budynkami.
            </p>
            <p>
              Od 1958 roku latarnia pełni rolę radiolatarni. Została wyłączona
              10 listopada 1999 roku. W 2013 roku była jedną z dwóch
              działających radiolatarni morskich na polskim wybrzeżu. Wyposażona
              w nadajnik radiolatarni – wysyłała sygnał rozpoznawczy S (• • •
              według alfabetu Morse’a)
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[2]}
                  alt="świnoujście"
                  title={photosTitle[2]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[3]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[3]}
                  alt="świnoujście"
                  title={photosTitle[3]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[4]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[4]}
                  alt="świnoujście"
                  title={photosTitle[4]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Latarnia_Morska_%C5%9Awinouj%C5%9Bcie"
                target="_blank"
              >
                wikipedia
              </a>
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default ŚwinoujścieHistory;
