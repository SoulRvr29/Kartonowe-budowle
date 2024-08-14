import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StarshipSN15History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/starship_sn15/starship_sn15-photo1.jpg",
    "models/starship_sn15/starship_landing.gif",
  ];
  const photosTitle = [
    "Prototyp SN15 na stanowisku startowym",
    "Udane lądowanie SN15",
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
                alt="starship sn15"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter font-playfair">S</span>tarship to
              statek kosmiczny obecnie opracowywany przez amerykańską firmę
              lotniczą SpaceX. Ułożony na szczycie boostera o nazwie Super
              Heavy, tworzy superciężki pojazd kosmiczny o identycznej nazwie
              Starship. Statek kosmiczny został zaprojektowany do transportu
              zarówno załogi, jak i ładunku do różnych miejsc docelowych, w tym
              na orbitę Ziemi, Księżyc, Marsa i potencjalnie dalej. Ma on
              umożliwić długotrwałe loty międzyplanetarne dla załogi liczącej do
              100 osób.
            </p>
            <p>
              W prototypie SN15 wprowadzono ulepszone oprogramowanie awioniki,
              zaktualizowaną architekturę paliwa na rufie oraz nowy projekt i
              konfigurację Raptora (silnika rakietowego). Kolejną nowością była
              antena Starlink umieszczona z boku pojazdu. SN15 przeszedł próbę
              ciśnieniową w temperaturze otoczenia (9 kwietnia), próbę
              kriogeniczną (12 kwietnia) i próbę kriogeniczną zbiornika górnego
              (13 kwietnia). Następnie nastąpił test statyczny (26 kwietnia) i
              test statyczny zbiornika górnego (27 kwietnia). Próbę w locie na
              dużej wysokości 10 km (33 000 stóp) przeprowadzono przy pochmurnej
              pogodzie 5 maja, uzyskując miękkie przyziemienie. Mały pożar w
              pobliżu bazy został opanowany wkrótce po wylądowaniu. Po usunięciu
              silników 31 maja został wycofany ze służby jako pierwszy prototyp
              statku kosmicznego, który latał, lądował i został odzyskany.
              Prototyp zajął swoje miejsce w Rocket Garden. 26 lipca 2023 roku
              SN15 został zezłomowany.
            </p>
            <div className="w-full flex">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="mx-auto"
                  src={photosSrc[1]}
                  alt="starship sn15"
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://en.wikipedia.org/wiki/SpaceX_Starship"
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

export default StarshipSN15History;
