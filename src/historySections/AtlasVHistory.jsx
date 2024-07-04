import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Falcon9History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/atlasV/atlasV-photo1.jpg"];
  const photosTitle = ["Start rakiety Atlas V"];
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
            <p>
              <span className="first-letter font-playfair">R</span>akieta Atlas
              V została zaprojektowana przez Lockheed Martin i jest obsługiwana
              przez United Launch Alliance (ULA) od 2006 roku. Jest używana
              przez DoD, NASA i ładunki komercyjne. Jest to najdłużej działająca
              aktywna rakieta w Ameryce. Po 87 startach, w sierpniu 2021 roku
              ULA ogłosiło, że Atlas V zostanie wycofany ze służby, a wszystkie
              29 pozostałych startów zostało sprzedanych. Do czerwca 2024 roku
              pozostało 16 startów. Produkcja zakończyła się w 2024 roku. Inne
              przyszłe starty ULA będą wykorzystywać rakietę Vulcan Centaur.
            </p>
            <p>
              Każdy rakieta nośna Atlas V składa się z dwóch głównych stopni.
              Pierwszy stopień jest napędzany rosyjskim silnikiem wyprodukowanym
              przez Energomash i spalającym naftę i ciekły tlen. Górny stopień
              Centaur jest napędzany jednym lub dwoma amerykańskimi silnikami
              RL10 wyprodukowanymi przez Aerojet Rocketdyne i spalającymi ciekły
              wodór i ciekły tlen. W większości konfiguracji używane są
              przypinane stałe rakiety wspomagające (SRB). Pierwotnie używano
              rakiet AJ-60A SRB, ale w listopadzie 2020 r. zastąpiono je
              rakietami SRB z silnikiem grafitowo-epoksydowym (GEM 63).
              Standardowe osłony ładunku mają średnicę 4,2 lub 5,4 m (14 lub 18
              stóp) i różną długość.
            </p>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto  max-w-xl w-full"
                src={photosSrc[0]}
                alt="Start rakiety Atlas V."
                title={photosTitle[0]}
              />
            </PhotoView>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default Falcon9History;
