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
    "models/saturn_v/saturnV-photo2.webp",
    "models/saturn_v/saturnV-photo3.webp",
    "models/saturn_v/saturnV-photo4.webp",
    "models/saturn_v/saturnV-photo5.webp",
    "models/saturn_v/saturnV-photo7.webp",
    "models/saturn_v/saturnV-photo6.webp",
    "models/saturn_v/saturnV-photo1.webp",
  ];
  const photosTitle = [
    "Kolejne wersje rakiety Saturn",
    "Pierwszy stopień z pięcioma silnikami F-1",
    "Drugi stopień podczas montażu w VAB",
    "Trzeci stopień podczas testów",
    "Trzeci stopień podczas misji apollo 17",
    "Saturn V na stanowisku startowym",
    "Start Saturna V podczas misji Apollo 11",
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
            <p>
              <span className="first-letter font-playfair">S</span>aturn V to
              największa z rakiet należących do rodziny Saturn. Została
              zaprojektowana przez zespół pod kierownictwem Wernhera von Brauna
              i Artura Rudolpha w instytucie Marshall Space Flight Center przy
              udziale firm Boeing, North American Aviation, Douglas Aircraft
              Company oraz IBM. Głównym powodem budowy rakiety Saturn V był
              program Apollo, którego celem było lądowanie ludzi na Księżycu
              (zrealizowany misją Apollo 11). Rakiety typu Saturn V
              wykorzystywano w latach 1967–1973 podczas 13 misji, w tym 10
              załogowych (21 grudnia 1968 – 6 grudnia 1972 roku). Godny
              zauważenia jest fakt wysokiej bezawaryjności tej konstrukcji,
              bowiem podczas eksploatacji doszło jedynie do dwóch niewielkich
              awarii rakiety (podczas misji Apollo 6 i Apollo 13 nastąpiła
              awaria jednego z silników, jednak komputer pokładowy zdołał
              wyrównać spadek mocy).
            </p>
            <h4>Tło powstania</h4>
            <p>
              Na początku lat 60. XX wieku ZSRR prowadził w wyścigu kosmicznym.
              W 1957 Sowieci umieścili na orbicie pierwszego satelitę Sputnika
              1, a 12 kwietnia 1961 Jurij Gagarin został pierwszym człowiekiem w
              kosmosie.
            </p>
            <p>
              25 maja 1961 prezydent Stanów Zjednoczonych Kennedy ogłosił, że
              Ameryka wyśle do końca dziesięciolecia ludzi na Księżyc. W tym
              czasie jedynym załogowym lotem kosmicznym USA był 15-minutowy
              suborbitalny Freedom 7 z Alanem Shepardem na pokładzie. Na świecie
              wówczas nie było rakiety zdolnej wynieść załogową kapsułę w
              kierunku Księżyca. Projektowano rakietę Saturn I, lecz była ona za
              słaba, by móc wynieść ludzi na Srebrny Glob.
            </p>
            <p>We wczesnych planach NASA rozważała trzy możliwości lotu.</p>
            <ul>
              <li>
                Lot bezpośredni, w którym cały statek kosmiczny lądowałby na
                Księżycu i z niego wracał.
              </li>
              <li>
                Spotkanie na orbicie okołoziemskiej wymagające lotu dwóch
                rakiet: jednej z kapsułą i drugiej z paliwem. Tu także cały
                pojazd kosmiczny miał lądować na Księżycu.
              </li>
              <li>
                Spotkanie na orbicie okołoksiężycowej, projekt który został
                przyjęty, gdzie statek kosmiczny składał się z modułu
                serwisowego i dowodzenia – Apollo Command/Service Module (CSM) i
                modułu lądownika – Lunar Module. CSM miał przetransportować
                trzyosobową załogę w kierunku Księżyca oraz umożliwić bezpieczne
                wejście w atmosferę ziemską w czasie powrotu. LM miał odłączyć
                się od modułu CSM na orbicie Księżyca i bezpiecznie wylądować.
              </li>
            </ul>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[0]}
                alt={photosTitle[0] || "photo"}
                title={photosTitle[0]}
              />
            </PhotoView>
            <h4>Saturn C-1 do C-4</h4>
            <p>
              Pomiędzy 1960 a 1962 rokiem Marshall Space Flight Center
              projektowało rakiety służące do różnych misji.
            </p>
            <ul>
              <li>Saturn C-1, który został nazwany Saturn I.</li>
              <li>Saturn C-2 (Saturn IB), z którego wyłonił się Saturn C-3.</li>
              <li>
                Saturn C-3 – chciano go wykorzystać w koncepcji lotu
                bezpośredniego, lecz wymagałoby to pięciu startów do wykonania
                jednej misji. Posiadałby on dwa silniki F-1 w pierwszym stopniu,
                cztery silniki J-2 w drugim stopniu oraz człon S-IVB z sześcioma
                silnikami RL-10 jako trzeci stopień.
              </li>
              <li>
                Saturn C-4, który również miał być wykorzystany w locie
                bezpośrednim, wówczas wymagałoby to dwóch startów tej rakiety
                podczas jednej misji. Miałaby 1 silnik F-1 w pierwszym stopniu,
                4 silniki J-2 w drugim stopniu i człon S-IVB z jednym silnikiem
                J-2 jako trzeci stopień.
              </li>
            </ul>
            <h4>Saturn C-5</h4>
            <p>
              10 stycznia 1962 roku Marshall Space Flight Center ogłosiło plan
              zbudowania rakiety C-5. Plany zakładały pierwszy stopień z
              pięcioma silnikami F-1, drugi stopień z pięcioma silnikami J-2, a
              także S-IVB jako trzeci stopień rakiety z jednym silnikiem J-2.
              Pierwsze cztery starty miały być bezzałogowymi lotami testowymi, a
              pierwszy lot załogowy miał się odbyć nie później niż w roku 1969.
            </p>
            <p>W 1963 r. rakietę C-5 przemianowano na Saturn V.</p>
            <p>
              Pierwszy bezzałogowy start miał miejsce 9 listopada 1967 (misja
              Apollo 4).
            </p>
            <p>
              Pierwszy załogowy start odbył się 21 grudnia 1968 (misja Apollo
              8).
            </p>
            <h4>Konstrukcja rakiety</h4>
            <p>
              Saturn V jest jednym z najbardziej zaawansowanych technicznie
              tworów człowieka w historii. Była to rakieta wysoka na 110 metrów,
              miała 10 metrów średnicy i była w stanie wynieść 118 ton ładunku
              na LEO. Użyto w niej silniki F-1 oraz J-2. Podczas testów huk
              silników był słyszalny w promieniu 80 km.
            </p>
            <h5>Człon rakiety</h5>
            <p>
              Rakieta składała się z trzech stopni. Wszystkie napędzane były
              paliwem ciekłym. Separację członów podczas startu wspomagały
              niewielkie ładunki separujące.
            </p>
            <h5>S-IC – pierwszy stopień</h5>
            <p>
              Stopień ten został skonstruowany w firmie Boeing Company w Nowym
              Orleanie, gdzie później były budowane zbiorniki ET dla
              wahadłowców. Był wysoki na 42 metry, a jego średnica wynosiła 10
              metrów. Ciąg, jaki wytwarzało 5 silników F-1, wynosił 34,02 MN.
              Stopień ten był wykorzystywany podczas pierwszych 67 kilometrów
              wznoszenia.
            </p>
            <PhotoView src={photosSrc[1]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[1]}
                alt={photosTitle[1] || "photo"}
                title={photosTitle[1]}
              />
            </PhotoView>
            <h5>S-II – drugi stopień</h5>
            <p>
              Stopień ten skonstruowała firma North American Aviation w Seal
              Beach w Kalifornii. Miał 5 silników J-2, które wytwarzały ciąg 5
              MN. 97% masy stanowiło paliwo.
            </p>
            <PhotoView src={photosSrc[2]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[2]}
                alt={photosTitle[2] || "photo"}
                title={photosTitle[2]}
              />
            </PhotoView>
            <h5>S-IVB – trzeci stopień</h5>
            <p>
              Stopień został skonstruowany przez firmę Douglas Aircraft Company
              w Huntington Beach w Kalifornii. Posiadał jeden silnik J-2. Człon
              ten wykorzystywano podczas końcowych chwil wchodzenia na orbitę, a
              potem do TLI (ang. Trans-Lunar Injection). Był to jedyny stopień
              na tyle mały, że mógł być transportowany przez samolot. Stopień
              ten był również wykorzystywany jako drugi stopień w rakiecie
              Saturn IB.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8">
              <PhotoView src={photosSrc[3]}>
                <LazyLoadImage
                  src={photosSrc[3]}
                  alt={photosTitle[3] || "photo"}
                  title={photosTitle[3]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[4]}>
                <LazyLoadImage
                  src={photosSrc[4]}
                  alt={photosTitle[4] || "photo"}
                  title={photosTitle[4]}
                />
              </PhotoView>
            </div>
            <h5>Instrument Unit</h5>
            <p>
              Był to okrąg zamieszczony nad trzecim stopniem skonstruowany przez
              IBM. Zawierał komputer kontrolujący rakietę podczas startu aż do
              separacji członu S-IVB. Zapisywał telemetrię oraz korygował kurs
              rakiety.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8">
              <PhotoView src={photosSrc[5]}>
                <LazyLoadImage
                  className="mx-auto"
                  src={photosSrc[5]}
                  alt={photosTitle[5] || "photo"}
                  title={photosTitle[5]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[6]}>
                <LazyLoadImage
                  className="mx-auto"
                  src={photosSrc[6]}
                  alt={photosTitle[6] || "photo"}
                  title={photosTitle[6]}
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
