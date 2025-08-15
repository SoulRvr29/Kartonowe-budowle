import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StarshipS30History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/starship_s30/starship_s30-photo1.webp",
    "models/starship_s30/starship_landing.gif",
  ];
  const photosTitle = [
    "Start Starshipa S30 z boosterem B12",
    "Udane lądowanie boostera B12",
  ];
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
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="pr-8 float-left hover:cursor-pointer"
                src={photosSrc[0]}
                alt="starship s30"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter font-playfair">S</span>tarship S30
              był prototypem drugiego stopnia statku kosmicznego Starship.
              Przeszedł trzy udane próby kriogeniczne, dwa udane statyczne próby
              ogniowe oraz udany test samozapłonu w korkociągu. S30 odbył lot z
              rakietą wspomagającą B12 w ramach piątego lotu testowego statku
              kosmicznego Starship i pomyślnie ukończył misję, lądując w
              wyznaczonym miejscu i łagodnie wodując na Oceanie Indyjskim.
            </p>
            <p>
              Starship S30 przeszedł całkowitą wymianę osłony termicznej, która
              według SpaceX będzie dwa razy mocniejsza i ma warstwę materiału
              izolacyjnego pod spodem dla dodatkowej ochrony. Według Elona Muska
              ta dodatkowa osłona ma „zwiększyć odporność na uszkodzenia płytek
              i skrócić czas renowacji”. Ta osłona ablacyjna została
              przetestowana na statku 29 podczas testu w locie 4. Wspomniał
              również, że zrezygnowali z chłodzenia transpiracyjnego i aktywnego
              chłodzenia regeneracyjnego ze względu na wagę. Ponadto drzwi
              ładowni S30 zostały usunięte i ponownie zainstalowane. W
              porównaniu z poprzednimi statkami, nowe czarne skrzynki zostały
              zauważone przez każdą z czterech klap, prawdopodobnie kamery
              zawiasowe.
            </p>
            <div className="w-full flex">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="mx-auto"
                  src={photosSrc[1]}
                  alt="starship s30"
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://starship-spacex.fandom.com/wiki/Ship_30_(S30)"
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
