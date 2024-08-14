import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CzołpinoHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie_morskie/czolpino/czolpino-photo1.jpg",
    "models/latarnie_morskie/czolpino/czolpino-photo2.jpg",
  ];
  const photosTitle = [
    "Latarnia Czołpino około 1920-1930 roku",
    "Latarnia Czołpino obecnie",
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
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="pr-8 pt-0 float-left max-h-[300px]"
                src={photosSrc[0]}
                alt="Czołpino"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter">B</span>udowę latarni realizowano
              na podstawie planów z 1872 roku opracowanych przez inżyniera E.
              Kummera. Trudne warunki terenowe sprawiły, że cały materiał
              budowlany musiał być dostarczony drogą morską za pomocą barek. W
              ciągu trzech lat powstała okrągła wieża z czerwonej cegły, której
              średnica u podstawy wynosi 7 metrów a poniżej galerii 6,2 metra.
            </p>
            <p>
              Budowę latarni ukończono 15 stycznia 1875 roku. U stóp wydmy od
              strony południowej wybudowano budynki gospodarcze i mieszkalne dla
              trzech latarników, niewidoczne od strony morza.
            </p>

            <p>
              Na wieży, w laternie zamontowano wyprodukowany we Francji aparat
              Fresnela, zasilany olejem, który dawał białe światło na odległość
              21 Mm. Jego głównym elementem jest bębnowa soczewka Fresnela o
              wysokości 2750 mm i wewnętrznej średnicy 1800 mm, zestawiona z 43
              szlifowanych pierścieni pryzmatycznych. W okresie międzywojennym
              zmieniono zasilanie latarni na elektryczne z 1000-watową żarówką
              uruchamianą przez fotokomórkę.
            </p>
            <p>
              W latach 1993–1994 na latarni przeprowadzono prace
              remontowo-konserwacyjne polegające na zabezpieczeniu murów przed
              szkodliwymi czynnikami hydrologicznymi.
            </p>
            <p>
              Dziś te zabudowania mieszkalne i gospodarcze czekają na remont i
              zagospodarowanie, a sama latarnia jest w bardzo dobrym stanie,
              nadal czynna i udostępniona do zwiedzania.
            </p>
            <PhotoView src={photosSrc[1]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[1]}
                alt="Czołpino"
                title={photosTitle[1]}
              />
            </PhotoView>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Latarnia_Morska_Czo%C5%82pino"
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

export default CzołpinoHistory;
