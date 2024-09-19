import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OlsztynHistory = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/saturn_v/saturnV-photo2.webp"];
  const photosTitle = ["Kolejne wersje rakiety Saturn"];
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
              Około 1334 powstała na wzgórzu w zakolu Łyny drewniano-ziemna
              strażnica. Na jej miejscu kapituła warmińska rozpoczęła budowę
              murowanego zamku, który powstał pomiędzy rokiem 1348 a 1353, gdy
              miasto uzyskało prawa miejskie. Składał się on wówczas z jednego
              północnego, głównego skrzydła po północno-wschodniej stronie
              czworokątnego dziedzińca, którego ozdobą od strony dziedzin ca
              były piętrowe krużganki. Mieściły się w nim pomieszczenia
              reprezentacyjne: kaplica św. Anny, refektarz, mieszkanie
              administratora i kancelaria. Dojście do zamku, otoczonego pasem
              murów obronnych i fosą prowadziło od strony Łyny mostem zwodzonym.
              Południowo-zachodnie skrzydło zamku zbudowano w XV w. Wieżę z
              połowy XIV w., położoną w zachodnim narożniku dziedzińca,
              przebudowano w początku XVI w., nadając jej kształt okrągły na
              czworokątnej podstawie, a wysokość 40 m. Jednocześnie zamkowe mury
              obronne podwyższono do wysokości 12 m i uzupełniono drugim pasem
              niższych murów, wzmocnionych basztami. System zamkowych murów
              połączono częściowo z murami miejskimi, przez co zamek stał się
              jak gdyby potężnym bastionem wysuniętym poza miasto i broniącym do
              niego dostępu. Zamek należał do kapituły warmińskiej, która, wraz
              z biskupem warmińskim, do 1454 podlegała wojskowej opiece zakonu
              krzyżackiego. Z tego względu odegrał sporą rolę podczas wojen
              polsko-krzyżackich. W 1410 po bitwie pod Grunwaldem poddał się bez
              walki Polakom, w 1414 zaś zdobyli go oni po kilkudniowym
              oblężeniu. W czasie wojny trzynastoletniej (1454–1466) przechodził
              z rąk do rąk. Krzyżacy zagrozili zamkowi i miastu jeszcze w 1521,
              obrona jednak była tak skuteczna, że poprzestali po jednym,
              nieudanym szturmie. Kapituła powierzała zarządzanie komornictwem
              olsztyńskim wybieranemu co roku ze swego grona kanonikowi
              nazywanemu administratorem. W latach 1516–1521, z krótką przerwą,
              administratorem komornictwa olsztyńskiego był Mikołaj Kopernik. On
              właśnie przygotował obronę Olsztyna przed najazdem krzyżackim. W
              XVI wieku gościli tu też dwaj biskupi warmińscy, a zarazem wielcy
              pisarze: Jan Dantyszek – „pierwszy poeta sarmacki”, obdarzony
              cesarskim wawrzynem za „pieśni łacińskie” (1538, 1541) oraz Marcin
              Kromer z równą swobodą tworzący po łacinie i po polsku dzieła
              naukowe i literackie (1580). Kromer poświęcił wówczas kaplicę św.
              Anny, niedawno zbudowaną w południowo-zachodnim skrzydle zamku, a
              obdarzoną misternym siatkowym sklepieniem.
            </p>
            <p>
              Z czasem oba skrzydła zamku utraciły militarne znaczenie, a dla
              celów mieszkalnych stały się mało dogodne. W 1758 doprowadzono
              więc do zamku dojazd od strony miasta i zbudowano z tej strony
              skrzydło pałacowe, jednocześnie likwidując podgrodzie i część
              murów. W 1779 zatrzymywał się tutaj Ignacy Krasicki. Po zaborze
              Warmii (1772) zamek przeszedł na własność zarządu państwowych
              majątków ziemskich, mieściła się tu przez pewien czas również
              parafia ewangelicka. W 1845 most nad fosą zastąpiono groblą
              łączącą zamek z miastem, fosę zaś osuszono. W latach 1901–1911, w
              związku wybraniem zamku na siedzibę prezydenta rejencji
              olsztyńskiej (odpowiednik wojewody) przeprowadzono generalny
              remont zamku. Zmieniono wówczas poziom podłóg w refektarzu, a w
              krużganku wprawiono futryny okienne i dostawiono neogotycką klatkę
              schodową. Wieżę zamkową, która straciła hełm (stożkowy dach)
              podczas burzy w 1821, uwieńczono ponownie w 1926, po ponad stu
              latach. W 1921 w salach zamku umieszczono muzeum. Było to wówczas
              muzeum regionalne o charakterze etnograficznym, którego
              kierownictwo znajdowało się w rękach nauczycieli olsztyńskich:
              Leonarda Fromma – archeologa i Hugo Hermanna Grossa – nauczyciela
              przyrody.
            </p>
            <p>
              Zamek także i dzisiaj służy celom muzealnym. W 1945 zamek stał się
              siedzibą Muzeum Mazurskiego, które dzisiaj nosi nazwę Muzeum
              Warmii i Mazur. Oprócz działalności wystawienniczej obejmującą
              ekspozycję archeologiczną, galerię malarstwa, militaria, kolekcję
              sztuku zdobniczej dużą popularnością cieszą się imprezy
              organizowane tu w ramach Olsztyńskiego Lata Artystycznego (OLA)
              jak wieczory zamkowe i „Niedziele w Muzeum”.
            </p>
            <h4>Muzeum</h4>
            <p>
              Na zamku znajduje się stała wystawa kopernikowska (zlokalizowana w
              dwóch pomieszczeniach: na krużganku i sali będącej niegdyś
              prywatnym mieszkaniem administratora). Na ścianie krużganka
              umieszczona jest astronomiczna tablica doświadczalna z 1517 r.,
              prawdopodobnie wykonana własnoręcznie przez Mikołaja Kopernika.
            </p>
            <h4>Mikołaj Kopernik</h4>
            <p>
              Mikołaj Kopernik mieszkał w północno-wschodnim skrzydle zamku, w
              dużej komnacie, z której dwu okien rozciągał się widok na Łynę i
              młyn zamkowy, a z trzeciego – na dziedziniec, jedne drzwi zaś
              prowadziły na krużganek, a drugie do komnaty urzędowej. Obie
              komnaty otrzymały na początku XVI wieku piękne, kryształowe
              sklepienie, były jednak dość niskie i dopiero cztery wieki później
              podwyższono je przez obniżenie podłogi. Kopernik napisał tu swą
              rozprawę o monecie, tu dokonywał obserwacji ruchu planet, a na
              krużganku sporządził tablicę umożliwiającą mu śledzenie wiosennych
              i jesiennych zrównań dnia z nocą. Tablica ta jest po dziś dzień
              zachowaną pamiątką po Koperniku. Kopernik przebywał jeszcze na
              zamku w latach 1524, 1531, 1535 i 1538 jako wizytator.
            </p>
            <p>
              W roku 2010, od 16 marca do 21 maja na zamku przebywał sarkofag z
              doczesnymi szczątkami Mikołaja Kopernika. 22 maja sarkofag został
              przewieziony do Fromborka, gdzie został uroczyście pochowany w
              tamtejszej bazylice katedralnej.
            </p>
            {/* <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[0]}
                alt={photosTitle[0] || "photo"}
                title={photosTitle[0]}
              />
            </PhotoView> */}

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

export default OlsztynHistory;
