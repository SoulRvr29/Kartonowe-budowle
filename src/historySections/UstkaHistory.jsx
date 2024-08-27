import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const UstkaHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie_morskie/ustka/ustka-photo1.webp",
    "models/latarnie_morskie/ustka/ustka-photo2.webp",
    "models/latarnie_morskie/ustka/ustka-photo3.webp",
  ];
  const photosTitle = ["Latarnia Ustka w 1901 roku"];

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
                className="float-left mr-8 max-h-[20rem]"
                src={photosSrc[0]}
                alt="Kikut"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter">Z</span>e względu na trudne wejście
              do portu, w 1871 roku postawiono przy stacji pilotów 11 metrowy
              maszt, na który wciągano lampę naftową z soczewką Fresnela. Dawała
              ona stałe, czerwone światło o zasięgu 6 Mm.
            </p>
            <p>
              Obecna budowla została wzniesiona w 1892 roku. Składa się z
              murowanego budynku wykorzystywanego jako stacja pilotów oraz
              przylegającej do niego wysokiej na 19,5 m, ośmiokątnej wieży –
              latarni. Uroku jej dodaje ogromna liczba gzymsów, daszków oraz
              kilkanaście okien różnego rozmiaru. Na szczyt wieży prowadzą
              betonowe i metalowe schodki, a przez szyby galerii można
              obserwować układ soczewek. Zasięg światła zwiększył się do 18 Mm.
            </p>
            <p>
              W 1904 roku zmieniono charakterystykę światła na białe,
              przerywane.
            </p>
            <p>
              II wojna światowa nie wyrządziła szkody obiektom i już 15
              listopada 1945 roku latarnia wznowiła pracę, jako latarnia morska
              Postomino. Nazwa ta nie przyjęła się i 1 stycznia 1947 roku
              powrócono do historycznej nazwy „Ustka”. Obecnie optykę latarni
              stanowi cylindryczna soczewka o średnicy 1000 mm, a źródłem
              światła jest 1000 W żarówka, umieszczona na dwupozycyjnym
              zmieniaczu. Zabudowania przetrwały do XXI wieku bez większych
              zmian.
            </p>
            <p>
              Latarnia nie jest dozorowana. 30 kwietnia 2010 roku zakończył
              służbę ostatni z usteckich latarników.
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[1]}
                  alt="Ustka"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[2]}
                  alt="Ustka"
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Latarnia_Morska_Ustka"
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

export default UstkaHistory;
