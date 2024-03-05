import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const JastarniaHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie morskie/jastarnia/nautofon-photo.jpg",
    "models/latarnie morskie/jastarnia/jastarnia-photo1.jpg",
    "models/latarnie morskie/jastarnia/jastarnia-photo2.jpg",
  ];
  const photosTitle = [
    "Dawny nautofon, którego części zostały wykorzystane do budowy latarni w Jastarni",
    "Latarnia w Jastarni obecnie",
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
                className="max-h-[16rem] float-left mr-8"
                src={photosSrc[0]}
                alt="Jastarnia"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter">L</span>atarnia znajduje się
              pomiędzy Latarnią Morską Rozewie a Latarnią Morską Hel. Pierwszą
              latarnię w Jastarni zbudowano w 1938 roku i przetrwała tylko jeden
              rok. Była to ażurowa wieża ze stali o wysokości 25 metrów, na
              której szczycie umieszczono elektryczne źródło światła sprowadzone
              ze Szwecji. Obrońcy Helu we wrześniu 1939, nie dopuszczając do
              użycia latarni, jako punktu namiarowego przez niemiecką artylerię
              okrętową, wysadzili ją.
            </p>
            <p>
              W 1950 roku postawiono nową latarnię w Jastarni wykorzystując
              21-metrową kolumnę buczka mgłowego z latarni Stilo. Po
              wykorzystaniu części elementów, na betonowym cokole o wysokości
              2,4 metra powstała wieża o łącznej wysokości 13,8 metra i średnicy
              1,6 metra.
            </p>
            <p>
              Wieża latarni jest pomalowana w biało-czerwone pasy poziome a
              wieńczy ją dziesięciokątna laterna, w której umieszczone jest
              cylindryczna soczewka o średnicy 500 mm i zmieniacz żarówek na 2
              lampy o mocy 500 W. Obsługiwane automatycznie światło latarni o
              zasięgu 15 Mm widoczne jest z Zatoki Gdańskiej i z otwartego
              morza.
            </p>
            <p>
              Jest jedną z dwóch polskich latarń morskich całkowicie metalowych,
              a jednocześnie jest najniższa na polskim wybrzeżu.
            </p>
            <p>
              Ze względu na trudności komunikacyjne wewnątrz wieży nie jest ona
              udostępniona do zwiedzania.
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[1]}
                  alt="Jastarnia"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[2]}
                  alt="Jastarnia"
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default JastarniaHistory;
