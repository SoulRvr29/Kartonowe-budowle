import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MiG29History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/mig_29/mig-29-photo.jpg"];
  const photosTitle = ["MiG-29"];
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
                className="pr-8 pt-2 float-left hover:cursor-pointer"
                src={photosSrc[0]}
                alt="MiG-29"
                title={photosTitle[0]}
              />
            </PhotoView>
            <span className="first-letter font-playfair">S</span>
            <p>
              amolot odrzutowy MiG-29 zaprojektowano w 1972 roku w celu wymiany
              MiG-ów-21 i MiG-ów-23 na nowocześniejsze. Samolot miał być tzw.
              lekkim myśliwcem frontowym, uzupełniającym ciężki myśliwiec
              przewagi powietrznej Su-27. W konstrukcji skoncentrowano się na
              osiągnięciu dobrych parametrów lotnych i manewrowych uzyskanych
              drogą dopracowania koncepcji aerodynamicznej.
            </p>
            <p>
              Pierwszy prototyp wzniósł się w powietrze 6 października 1977
              roku, a pierwsze seryjne samoloty MiG-29 wersji 9.12 („Fulcrum-A”)
              weszły do służby w 1984 roku. Oprócz oznaczenia wojskowego MiG-29
              z dalszymi literami określającymi wersje, samolot nosi fabryczny
              kod „wyrób 9” (ros. изделие 9 – izdielije 9), a jego poszczególne
              wersje produkcyjne odróżniane są fabrycznie dalszymi dwucyfrowymi
              numerami po kropce.
            </p>
            <p>
              Wersja 9.12 produkowana była również w dwóch słabiej wyposażonych
              wersjach eksportowych. Wersja 9.12A przeznaczona na eksport do
              krajów Układu Warszawskiego (m.in. Polska, Czechosłowacja, NRD,
              Rumunia). Pozbawiona była kilku trybów pracy radaru, a inne
              różnice dotyczyły także radiostacji, układu identyfikacji
              „swój-obcy”, systemu nawigacji. Wersja 9.12B była eksportowana
              poza Układ Warszawski. Zakupiły ją m.in. Irak i Peru, a także – po
              rozpadzie Układu Warszawskiego – w 1993 roku Węgry. W 1990 roku
              Siły Powietrzne ZSRR przestały kupować MiG-i-29, przez co
              zaprzestano produkcji seryjnej. Samolot jednak wciąż rozwijano.
              Powstała głęboko zmodernizowana wielozadaniowa wersja MiG-29M
              („Fulcrum-E”), później przeznaczona na lotniskowiec pokładowa
              wersja MiG-29K. Obie wersje posiadały zarówno zmiany w wewnętrznym
              wyposażeniu jak i w samym płatowcu. Samolot od poprzednika różnią
              większe płytowe stery wysokości, ostra krawędź natarcia skrzydeł
              pasmowych, zupełnie inny hamulec aerodynamiczny, brak dodatkowych
              wlotów powietrza na górnej powierzchni skrzydeł pasmowych oraz
              regulowane główne wloty powietrza. Obecnie samolot wciąż jest
              modernizowany. Nowa wersja MiG-29OWT, znana również jako MiG-35,
              potrafi zmieniać kierunek wektora siły ciągu we wszystkich trzech
              wymiarach (ciąg wektorowany).
            </p>
            <p>
              W 1990 roku Siły Powietrzne ZSRR przestały kupować MiG-i-29, przez
              co zaprzestano produkcji seryjnej. Samolot jednak wciąż rozwijano.
              Powstała głęboko zmodernizowana wielozadaniowa wersja MiG-29M
              („Fulcrum-E”), później przeznaczona na lotniskowiec pokładowa
              wersja MiG-29K. Obie wersje posiadały zarówno zmiany w wewnętrznym
              wyposażeniu jak i w samym płatowcu. Samolot od poprzednika różnią
              większe płytowe stery wysokości, ostra krawędź natarcia skrzydeł
              pasmowych, zupełnie inny hamulec aerodynamiczny, brak dodatkowych
              wlotów powietrza na górnej powierzchni skrzydeł pasmowych oraz
              regulowane główne wloty powietrza. Obecnie samolot wciąż jest
              modernizowany. Nowa wersja MiG-29OWT, znana również jako MiG-35,
              potrafi zmieniać kierunek wektora siły ciągu we wszystkich trzech
              wymiarach (ciąg wektorowany).
            </p>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a href="https://pl.wikipedia.org/wiki/MiG-29" target="_blank">
                wikipedia
              </a>
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default MiG29History;
