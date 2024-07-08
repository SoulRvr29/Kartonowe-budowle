import TechHeader from "../components/TechHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ResistorCalc from "../components/ResistorCalc";
import { useEffect } from "react";

const Article = () => {
  useEffect(() => {
    document.title = "Oświetlenie - Kartonowe budowle";
  }, []);
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "/models/oporow/night/full-res/oporow-n05.webp",
    "/models/latarnie morskie/gąski/noc/full-res/gąski-n02.jpg",
    "/models/bedzin/night/full-res/bedzin-n06.webp",
    "/techSections/oświetlenie/diody.jpg",
    "/techSections/oświetlenie/latarnia.jpg",
    "/techSections/oświetlenie/SMD_2x.jpg",
    "/techSections/oświetlenie/wzór1.png",
    "/techSections/oświetlenie/wzór2.png",
    "/techSections/oświetlenie/kod_paskowy.jpg",
    "/techSections/oświetlenie/wtyk-gniazdo.png",
    "/techSections/oświetlenie/schemat1.png",
    "/techSections/oświetlenie/schemat2.png",
    "/models/bedzin/night/full-res/bedzin-n18.webp",
  ];
  const photosTitle = [
    "trzy rodzaje najczęściej używanych przeze mnie diod",
    "diody SMD 0805 w latarni ulicznej",
    "latarnia uliczna w modelu zamku w Będzinie",
    "połączone diody SMD 3528 biała i 1206 niebieska",
    "wzór na rezystor",
    "wynik rezystora dla białej diody przy zasilaniu 9V ",
    "kody paskowe rezystorów",
    "wtyk i gniazdo DC",
    "schemat układu z jedną diodą",
    "schemat układu z trzema diodami",
    "Oświetlenie zamku w Oporowie przy użyciu diod 3mm",
    "Światło w latarni morskiej Gąski przy użyciu diody 5mm",
    "Oświetlenie zamku w Będzinie przy użyciu diod SMD 3528",
  ];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <TechHeader title="Oświetlenie modeli" />
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
        <article>
          <p>
            Do wykonania oświetlenia wykorzystuję różne diody LED, początkowo
            były to głównie zwykłe diody <b>3mm</b>, a jako światło w latarniach
            morskich diody <b>5mm</b>. W ostatnich modelach zacząłem używać diod{" "}
            <b>SMD</b>, które z racji mniejszych rozmiarów są dużo łatwiejsze w
            montażu. Używam białych diod o ciepłej barwie światła.
          </p>
          <PhotoView src={photosSrc[3]}>
            <LazyLoadImage
              className="mx-auto"
              src={photosSrc[3]}
              alt={photosTitle[0]}
              title={photosTitle[0]}
            />
          </PhotoView>
          <h4>Diody SMD</h4>
          <p>
            Diody SMD różnią się znacząco od zwykłych diod kątem świecenia.
            Zwykłe diody świecą na ok. 40&deg;-60&deg; i dają efekt wąskich
            snopów światła przy podświetlaniu ścian, a diody SMD podświetlają
            bardziej równomiernie na ok. 160&deg;.
          </p>
          <p>
            Diody SMD mają bardzo szeroki zakres rozmiarów, najczęściej używam
            diod 3528. Podobna do nich jest dioda SMD 2835, która jest cieńsza,
            ale może się łatwo stopić podczas lutowania i dlatego wolę grubszą i
            bardziej wytrzymałą SMD 3528. Numer 3528 określa wymiary diody,
            czyli 3,5mm na 2,8mm. Dla drobnych elementów, np. światła latarni
            ulicznej w modelu zamku w Będzinie, użyłem diody SMD 0805, a
            właściwie dwóch diod połączonych ze sobą.
          </p>
          <div className="flex gap-4 flex-wrap">
            <PhotoView src={photosSrc[4]}>
              <LazyLoadImage
                className="mx-auto max-h-[22rem] max-md:max-h-none"
                src={photosSrc[4]}
                alt={photosTitle[1]}
                title={photosTitle[1]}
              />
            </PhotoView>
            <PhotoView src={photosSrc[12]}>
              <LazyLoadImage
                className="mx-auto max-h-[22rem] max-md:max-h-none"
                src={photosSrc[12]}
                alt={photosTitle[2]}
                title={photosTitle[2]}
              />
            </PhotoView>
            <PhotoView src={photosSrc[5]}>
              <LazyLoadImage
                className="mx-auto max-h-[22rem] max-md:max-h-none"
                src={photosSrc[5]}
                alt={photosTitle[3]}
                title={photosTitle[3]}
              />
            </PhotoView>
          </div>
          Do diod SMD dolutowuję przewody (0.2mm) z drutu nawojowego.
          <h4>Dobór rezystora</h4>
          <p>
            Do każdej diody dodaję rezystor (opornik). Wartośc rezystora można
            łatwo obliczyć z poniższego wzoru:{" "}
            <PhotoView src={photosSrc[6]}>
              <LazyLoadImage
                className="mx-auto max-w-[12rem]"
                src={photosSrc[6]}
                alt={photosTitle[4]}
                title={photosTitle[4]}
              />
            </PhotoView>
            R - wartość rezystora
            <br />V<small>s</small> - napięcie zasilania <br />V<small>f</small>{" "}
            - napięcie przewodzenia diody <br />I<small>f</small> - prąd
            przewodzenia diody{" "}
          </p>
          <p>
            Białe diody LED mają zazwyczaj napięcie przewodzenia około <b>3V</b>{" "}
            i prąd przewodzenia <b>20mA</b> (0.02A). Czyli dla zasilania{" "}
            <b>9V</b>:
            <PhotoView src={photosSrc[7]}>
              <LazyLoadImage
                className="mx-auto max-w-[22rem]"
                src={photosSrc[7]}
                alt={photosTitle[5]}
                title={photosTitle[5]}
              />
            </PhotoView>
            Rezystor powinien mieć opór zawsze większy niż wskazuje wynik, czyli
            odpowiedni będzie np. 330&Omega;, a dla zasilania 5V byłby to
            150&Omega;.
          </p>
          <p>Do obliczeń zrobiłem Kalkulator:</p>
          <div className="flex flex-col justify-center items-center mb-4">
            <ResistorCalc />
          </div>
          <p>
            Odczyt oporu z rezystora można dokonać na podstawie kolorów pasków:
          </p>
          <ol className="list-decimal ml-4">
            <li>Pierwsza cyfra.</li>
            <li>Druga cyfra.</li>
            <li>
              Mnożnik, czyli ilość zer, które trzeba dodać po dwóch pierwszych
              cyfrach.
            </li>
            <li>Tolerancja, czyli dokładność wartości rezystora.</li>
          </ol>
          <PhotoView src={photosSrc[8]}>
            <LazyLoadImage
              className="mx-auto max-w-[30rem]"
              src={photosSrc[8]}
              alt={photosTitle[6]}
              title={photosTitle[6]}
            />
          </PhotoView>
          Rezystor 330&Omega; 5% to paski: pomarańczowy, pomarańczowy, brązowy,
          złoty.
          <h4>Zasilanie</h4>
          <p>
            Jako źródło zasilania używam zasilacza 9V z wtykiem <b>DC 5.5mm</b>.
            Są dwa rodzaje takich wtyków, 5.5/2.1 oraz 5.5/2.5. Lepiej zwrócić
            na to uwagę, gdyż różnią się wielkością otworu na bolec i wtyk
            5.5/2.1 nie wejdzie na gniazdo 5.5/2.5, a z kolei wtyk 5.5/2.5
            wejdzie na gniazdo 5.5/2.1, ale z powodu luzu mogą nie zawsze łączyć
            styki.
            <PhotoView src={photosSrc[9]}>
              <LazyLoadImage
                className="mx-auto max-w-[30rem]"
                src={photosSrc[9]}
                alt={photosTitle[7]}
                title={photosTitle[7]}
              />
            </PhotoView>
          </p>
          <h4>Sterowanie jasnością</h4>
          <p>Do sterowania jasnością można użyć tego prostego układu:</p>
          <div className="flex gap-8 justify-center items-center flex-wrap">
            <PhotoView src={photosSrc[10]}>
              <LazyLoadImage
                className="max-w-[30rem] "
                src={photosSrc[10]}
                alt={photosTitle[8]}
                title={photosTitle[8]}
              />
            </PhotoView>
            <ul className="list-disc ml-4">
              <b>Elementy:</b>
              <li>Potencjometr 10k&Omega;</li>
              <li>2x rezystor 330&Omega;</li>
              <li>Tranzystor BC547</li>
              <li>Dioda LED</li>
              <li>Zasilanie 9V</li>
            </ul>
          </div>
          <br />
          Taki układ umożliwia płynną regulację jasności, można podłączyć więcej
          LED, dodając kolejne diody równolegle.
          <PhotoView src={photosSrc[11]}>
            <LazyLoadImage
              className="max-w-[35rem] mx-auto "
              src={photosSrc[11]}
              alt={photosTitle[9]}
              title={photosTitle[9]}
            />
          </PhotoView>
        </article>{" "}
        <hr className="grad-hr" />
        <div className="flex gap-4 justify-center flex-wrap my-8 ">
          <PhotoView src={photosSrc[0]}>
            <LazyLoadImage
              className=" max-h-[18rem] max-md:max-h-none cursor-pointer"
              src={photosSrc[0]}
              alt={photosTitle[10]}
              title={photosTitle[10]}
            />
          </PhotoView>
          <PhotoView src={photosSrc[1]}>
            <LazyLoadImage
              className=" max-h-[18rem] max-w-[20rem] max-md:max-h-none  cursor-pointer"
              src={photosSrc[1]}
              alt={photosTitle[11]}
              title={photosTitle[11]}
            />
          </PhotoView>
          <PhotoView src={photosSrc[2]}>
            <LazyLoadImage
              className=" max-h-[18rem] max-w-[20rem] max-md:max-h-none cursor-pointer"
              src={photosSrc[2]}
              alt={photosTitle[12]}
              title={photosTitle[12]}
            />
          </PhotoView>
        </div>
      </PhotoProvider>
    </>
  );
};

export default Article;
