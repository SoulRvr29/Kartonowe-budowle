import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Falcon9History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/falcon_9/falcon_9-photo2.webp",
    "models/falcon_9/falcon_9-photo1.webp",
  ];
  const photosTitle = ["Rodzina rakiet Falcon", "Start rakiety Falcon 9"];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />
      {historyState === true && (
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
          <article className="px-8">
            <h4>Rakiety Falcon 9</h4>
            <p>
              <span className="first-letter font-playfair">R</span>odzina
              dwustopniowych rakiet nośnych, zaprojektowana i wyprodukowana
              przez amerykańską firmę SpaceX, przeznaczona do wynoszenia
              ładunków na orbitę, misji bezzałogowych i załogowych do
              Międzynarodowej Stacji Kosmicznej. Napędzana mieszaniną ciekłego
              tlenu (LOX) i nafty (RP-1). Obecnie jest to jedyna rakieta zdolna
              do wyniesienia satelity, której pierwszy stopień może wylądować i
              być użyty ponownie. Podobnie jak Falcon 1 rakieta używa silników
              Merlin 1. Początkowo były to silniki w wersji 1C, które później
              zastąpiono nowszymi wersjami silnika.
            </p>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto  max-w-4xl w-full max-[900px]:max-w-2xl"
                src={photosSrc[0]}
                alt="Rodzina rakiet Falcon."
                title={photosTitle[0]}
              />
            </PhotoView>
            <h4>Misja DM-2 (SpaceX Demonstration Mission 2)</h4>
            <p>
              <span className="first-letter font-playfair">D</span>ruga testowa
              misja orbitalna załogowej wersji kapsuły Dragon firmy SpaceX. Była
              pierwszą misją załogową należącą do prowadzonego przez NASA
              programu lotów na Międzynarodową Stację Kosmiczną przy pomocy
              pojazdów partnerów komercyjnych (Commercial Crew Program) i
              pierwszym załogowym lotem kosmicznym z terytorium USA od czasu
              ostatniej misji programu wahadłowców, STS-135.
            </p>
            <PhotoView src={photosSrc[1]}>
              <LazyLoadImage
                className="mx-auto hover:cursor-pointer"
                src={photosSrc[1]}
                alt="Start rakiety Falcon 9."
                title={photosTitle[1]}
              />
            </PhotoView>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a href="https://pl.wikipedia.org/wiki/Falcon_9" target="_blank">
                wikipedia
              </a>
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default Falcon9History;
