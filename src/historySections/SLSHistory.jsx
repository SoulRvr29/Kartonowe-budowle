import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StarshipS30History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/sls/sls-photo1.webp"];
  const photosTitle = ["Start rakiety SLS w misji Artemis I"];
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
              <span className="first-letter font-playfair">S</span>pace Launch
              System ( SLS ) to amerykański superciężki, jednorazowy pojazd
              nośny używany przez NASA. Jako główny pojazd nośny programu
              lądowania na Księżycu Artemis, SLS został zaprojektowany do
              wystrzelenia załogowego statku kosmicznego Orion na trajektorię
              transksiężycową. System SLS został po raz pierwszy wystrzelony 16
              listopada 2022 roku w ramach bezzałogowej misji Artemis I.
            </p>
            <p>
              Prace nad SLS rozpoczęły się w 2011 roku, jako następca wycofanego
              z użytku wahadłowca kosmicznego oraz anulowanych rakiet nośnych
              Ares I i Ares V. SLS został zbudowany z wykorzystaniem komponentów
              wahadłowca, w tym rakiet nośnych na paliwo stałe i silników RS-25.
              Projekt borykał się z problemami z zarządzaniem, przekroczeniami
              budżetu i opóźnieniami. Pierwszy start, wymagany przez Kongres do
              2016 roku, odbył się prawie sześć lat później.
            </p>
            <p>
              Wszystkie loty Space Launch System będą startować z kompleksu
              startowego 39B w Centrum Kosmicznym im. Kennedy'ego na Florydzie.
              Oczekuje się, że pierwsze trzy loty SLS będą odbywać się w
              konfiguracji Block 1, obejmującej stopień główny, wydłużone
              wzmacniacze wahadłowca kosmicznego opracowane dla Ares I oraz
              górny stopień tymczasowego kriogenicznego stopnia napędowego
              (ICPS). Ulepszona konfiguracja Block 1B ze specjalnie zbudowanym
              górnym stopniem eksploracyjnym (EUS) ma zostać wprowadzona podczas
              czwartego lotu; dalsza ulepszona konfiguracja Block 2 z nowymi
              wzmacniaczami rakiet na paliwo stałe planowana jest na dziewiąty
              lot. Po starcie Artemis IV, NASA planuje przenieść produkcję i
              operacje startowe SLS do Deep Space Transport LLC, spółki joint
              venture Boeinga i Northrop Grumman.
            </p>
            <div className="w-full flex">
              <PhotoView src={photosSrc[0]}>
                <LazyLoadImage
                  className="mx-auto"
                  src={photosSrc[0]}
                  alt="starship s30"
                  title={photosTitle[0]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Space_Launch_System"
                target="_blank"
              >
                starship-spacex.fandom
              </a>
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default StarshipS30History;
