import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StiloHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/latarnie morskie/stilo/stilo-photo-1.jpg",
    "models/latarnie morskie/stilo/stilo-photo-2.jpg",
    "models/latarnie morskie/stilo/stilo-photo-3.jpg",
    "models/latarnie morskie/stilo/stilo-photo-4.jpg",
  ];
  const photosTitle = [
    "Latarnia w 1929 roku",
    "Wieża, w której niegdyś zamontowany był nautofon",
    "",
    "",
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
                  "photo-description absolute bottom-0 text-center w-full z-30 p-3 bg-black bg-opacity-40 text-text-light  " +
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
                className="mr-8 float-left max-h-[20rem]"
                src={photosSrc[0]}
                alt="Stilo"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter font-playfair">L</span>atarnia
              została zbudowana w latach 1904–1906 na wniosek Niemieckiego
              Związku Nawigacyjnego według projektu niemieckiego architekta
              Waltera Körtego przez firmę Nordische Elektrizitäts und Stahlwerke
              AG z Gdańska. Laterna została wykonana z drewna przez firmę
              Juliusa Pintscha z Berlina, natomiast optykę wykonał Wilhelm Weule
              z Goslar. Pierwotnie zainstalowano lampę łukową zasilaną prądem
              stałym o napięciu 110 V. W 1926 roku przeprowadzono modernizację,
              wprowadzając oświetlenie żarówką o mocy 2000 W i instalując
              rezerwowe oświetlenie gazowe.
            </p>
            <p>
              Od 1975 roku latarnia posiada oświetlenie halogenowe o mocy snopu
              światła 1 200 W/12V szwedzkiej firmy AGA PRB-21 (Aktiebolaget
              Gasaccumulator AGA, ang. Gas Accumulator Company). Urządzenie
              zasilane jest bezpośrednio z sieci, a awaryjnie przez agregat
              prądotwórczy i akumulatory – 6 sztuk po 100A/h, to jest rezerwa na
              18 godzin. Zapalanie świateł odbywa się przez fotokomórkę i
              tradycyjnie – ręcznie.
            </p>
            <p>
              Wraz z latarnią zbudowano pierwszy nautofon zamontowany na
              żelaznej białej wieży z galerią i stożkowym dachem o całkowitej
              wysokości 21 metrów. Ze względów technicznych buczek umiejscowiono
              przy plaży, lecz erozja brzegów groziła jego zniszczeniem. W
              latach 50 XX w. nautofon rozebrano, a jego części użyto to
              odbudowy latarni morskiej w Jastarni. W miejsce rozebranego buczka
              postawiono nową ceglaną wieżę odsuniętą od morza o 150 metrów i
              tam zamontowano urządzenia sygnalizacyjne ze starego nautofonu. W
              połowie lat 80, na skutek braku zapotrzebowania na sygnalizację
              akustyczną, urządzenia zdemontowano, a wieża, która pozostała
              obecnie służy, jako obiekt treningowy dla wspinaczy skałkowych.
            </p>
            <PhotoView src={photosSrc[2]}>
              <LazyLoadImage
                className="mr-8 float-left max-h-[20rem]"
                src={photosSrc[2]}
                alt="Stilo"
                title={photosTitle[1]}
              />
            </PhotoView>
            <p>
              W 2006 roku, w stulecie otwarcia latarni, przeprowadzono remont,
              podczas którego między innymi pokryto korpus całkowicie nową
              warstwą malarską, której kolory są charakterystyczną cechą latarni
              Stilo. Przez cały okres istnienia latarnia miała tę samą
              kolorystykę trzech pasów, od góry: czerwony, biały, czarny – barwy
              odwróconej flagi państwowej z okresu Cesarstwa Niemieckiego.
            </p>
            <p>
              Ważnym dodatkowym obowiązkiem latarników, oprócz obsługi latarni i
              wszystkich związanych z nią budowli, jest nasłuch na kanale
              bezpieczeństwa UKF i utrzymywanie łączności pomiędzy statkami, a
              stacją brzegową. Informacje o zaistniałej na morzu sytuacji
              przekazuje się do stacji głównej, która uruchamia w razie potrzeby
              ratownictwo. Na przykład w 1970 roku, z powodu awarii silników,
              przy sztormie o sile 12 w skali Beauforta, na mieliznę na
              wysokości latarni Stilo wszedł statek bandery duńskiej (od sztormu
              Xaver z początku grudnia 2013 roku widoczny jest tylko jeden
              maszt, rufowy). Obsługa latarni uczestniczyła w akcji ratowniczej
              statku i jego załogi poprzez łączność radiową.
            </p>
            <p>
              Latarnia jest dozorowana. Ostatni niemiecki latarnik, P. Pruztt,
              pracował w latarni do 1945 roku. W 1948 roku latarnię objął Stefan
              Łozicki, odznaczony Krzyżem Walecznych po walkach pod Monte
              Cassino. Pracował przez 33 lata.
            </p>
            <p>
              Również długo obsługiwali latarnię Jan Liss i Longin Godula. Po
              Stefanie Łozickim kierownictwo latarni objął jego syn – Romuald
              Łozicki wraz z małżonką Weroniką (jedna z trzech kobiet –
              latarników), a następnie wnuk – Damian Łozicki.
            </p>{" "}
            <div className="article-div">
              <PhotoView src={photosSrc[3]}>
                <LazyLoadImage
                  className="max-h-[30rem] max-w-xl"
                  src={photosSrc[3]}
                  alt="Stilo"
                  title={photosTitle[3]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem] max-w-xl"
                  src={photosSrc[1]}
                  alt="Stilo"
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default StiloHistory;
