import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SopotHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/latarnie morskie/sopot/sopot-photo-1.jpg",
    "models/latarnie morskie/sopot/sopot-photo-2.jpg",
    "models/latarnie morskie/sopot/sopot-photo-3.jpg",
  ];
  const photosTitle = [
    "Latarnia Sopot z widocznym jeszcze kominem",
    "Latarnia w 2012 roku",
    "Latarnia w 2023 roku",
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
            <p>
              <span className="first-letter font-playfair">W </span> &nbsp;1903
              roku w Sopocie wybudowano zakład balneologiczny, który istniał do
              II wojny światowej. Po zakończeniu działań wojennych obiekt
              przejęło miasto. Urządzono tam łaźnię. W 1956 roku budynek
              przekazano Szpitalowi Reumatologicznemu.
            </p>
            <p>
              Kiedy w 1975 roku zmodernizowano szpitalną kotłownię, dotychczas
              bardzo uciążliwy dymiący komin stał się zbędny. Przebudowano go i
              umieszczono na nim źródło światła. Początkowo światło to nie było
              uznawane za latarnię morską ze względu na niewielki zasięg (5 mil
              morskich), dopiero po zmianie urządzenia optyczno-świetlnego i
              uzyskaniu nominalnego zasięgu świetlnego ponad 17 mil morskich,
              stało się latarnią morską. Obecnie światło ma zasięg nominalny 7
              mil morskich i formalnie nie jest już zaliczane do polskich
              latarni morskich.
            </p>{" "}
            <div className="flex flex-wrap justify-center gap-x-8">
              <PhotoView src={photosSrc[0]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[0]}
                  alt="Sopot"
                  title={photosTitle[0]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[1]}
                  alt="Sopot"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[2]}
                  alt="Sopot"
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

export default SopotHistory;
