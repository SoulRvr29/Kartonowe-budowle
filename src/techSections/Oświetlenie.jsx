import TechHeader from "../components/TechHeader";
import ArticleGallery from "../components/ArticleGallery";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Article = () => {
  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
  const [photoIndex, setPhotoIndex] = useState(null);
  const photosSrc = [
    "/models/oporow/night/full-res/oporow-n05.jpg",
    "/models/latarnie morskie/gąski/noc/full-res/gąski-n02.jpg",
    "/models/bedzin/night/full-res/bedzin-n06.jpg",
    "/techSections/oświetlenie/diody.jpg",
    "/techSections/oświetlenie/latarnia.jpg",
    "/techSections/oświetlenie/wzór1.png",
    "/techSections/oświetlenie/wzór2.png",
    "/techSections/oświetlenie/kod_paskowy.jpg",
    "/techSections/oświetlenie/wtyk-gniazdo.png",
    "/techSections/oświetlenie/schemat1.png",
    "/techSections/oświetlenie/schemat2.png",
    "/techSections/oświetlenie/SMD_2x.jpg",
  ];
  const photosTitle = [
    "Oświetlenie zamku w Oporowie przy użyciu diod 3mm",
    "Oświetlenie zamku w Będzinie przy użyciu diod SMD 3528",
    "Światło w latarni morskiej Gąski przy użyciu diody 5mm",
    "trzy rodzaje najczęściej używanych przeze mnie diod",
    "diody SMD 0805 w latarni ulicznej",
    "wzór na rezystor",
    "wzór na rezystor",
    "",
    "wtyk i gniazdo DC",
    "schemat układu z jedną diodą",
    "schemat ukłądu z trzema diodami",
  ];
  const photoClickHandler = (e) => {
    setPhotoIndex(photosSrc.indexOf(e.target.getAttribute("src")));
    document.querySelector("body").classList.add("site-overflow");
  };
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <ArticleGallery
        photosSrc={photosSrc}
        photosTitle={photosTitle}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      <TechHeader title="Oświetlenie modeli" />
      <article>
        <div className="flex gap-x-4 justify-center flex-wrap -mt-4">
          <LazyLoadImage
            className=" max-h-[18rem] max-md:max-h-none"
            src={photosSrc[0]}
            alt={photosTitle[0]}
            title={photosTitle[0]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          <LazyLoadImage
            className=" max-h-[18rem] max-md:max-h-none"
            src={photosSrc[1]}
            alt={photosTitle[1]}
            title={photosTitle[1]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          <LazyLoadImage
            className=" max-h-[18rem] max-w-[20rem] max-md:max-h-none"
            src={photosSrc[2]}
            alt={photosTitle[2]}
            title={photosTitle[2]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
        </div>
        <p>
          Do wykonania oświetlenia wykorzystuję różne diody LED, początkowo były
          to głównie zwykłe diody <b>3mm</b>, a jako światło w latarniach
          morskich diody <b>5mm</b>. W ostatnich modelach zacząłem używać diod{" "}
          <b>SMD</b>, które z racji mniejszych rozmiarów są dużo łatwiejsze w
          montażu. Używam białych diod o ciepłej barwie światła, jednak nie jest
          ona tak żółta, jak mogłoby się wydawać na zdjęciach, które przekłamują
          rzeczywiste barwy.
        </p>
        <LazyLoadImage
          className="mx-auto"
          src={photosSrc[3]}
          alt={photosTitle[3]}
          title={photosTitle[3]}
          onClick={(e) => {
            photoClickHandler(e);
          }}
        />
        <h4>Diody SMD</h4>
        <p>
          Diody SMD różnią się znacząco od zwykłych diod kątem świecenia. Zwykłe
          diody świecą na ok. 40&deg;-60&deg; i dają efekt wąskich snopów
          światła przy podświetlaniu ścian, a diody SMD podświetlają bardziej
          równomiernie na ok. 160&deg;.
        </p>
        <p>
          Diody SMD mają bardzo szeroki zakres rozmiarów, najczęściej używam
          diod 3528. Podobna do nich jest dioda SMD 2835, która jest cieńsza,
          ale może szybko się stopić podczas lutowania i dlatego wolę grubszą
          SMD 3528. Numer 3528 określa wymiary diody, czyli 3,5mm na 2,8mm. Dla
          drobnych elementów, np. światła latarni ulicznej w modelu zamku w
          Będzinie, użyłem diody SMD 0805, a właściewie dwóch diod połączonych
          ze sobą.
          <div className="flex gap-4 flex-wrap">
            <LazyLoadImage
              className="mx-auto max-h-[22rem] max-md:max-h-none"
              src={photosSrc[4]}
              alt={photosTitle[4]}
              title={photosTitle[4]}
              onClick={(e) => {
                photoClickHandler(e);
              }}
            />
            <LazyLoadImage
              className="mx-auto max-h-[22rem] max-md:max-h-none"
              src={photosSrc[11]}
              alt={photosTitle[11]}
              title={photosTitle[11]}
              onClick={(e) => {
                photoClickHandler(e);
              }}
            />
          </div>
          Do diod SMD dolutowuję przewody (0.2mm) z drutu nawojowego.
        </p>
        <h4>Dobór rezystora</h4>
        <p>
          Do każdej diody dodaję rezystor (opornik). Wartośc rezystora można
          łatwo obliczyć z poniższego wzoru:{" "}
          <LazyLoadImage
            className="mx-auto max-w-[12rem]"
            src={photosSrc[5]}
            alt={photosTitle[5]}
            title={photosTitle[5]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          R - wartość rezystora
          <br />V<small>s</small> - napięcie zasilania <br />V<small>f</small> -
          napięcie przewodzenia diody <br />I<small>f</small> - prąd
          przewodzenia diody{" "}
        </p>
        <p>
          Białe diody LED mają zazwyczaj napięcie przewodzenia około 3V i prąd
          przewodzenia 20mA (0.02A). Czyli dla zasilania 9V:
          <LazyLoadImage
            className="mx-auto max-w-[22rem]"
            src={photosSrc[6]}
            alt={photosTitle[6]}
            title={photosTitle[6]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          Rezystor powinien mieć opór zawsze większy niż wskazuje wynik, czyli
          odpowiedni będzie np. 330&Omega;, a dla zasilania 5V byłby 150&Omega;.
        </p>
        <p>
          Odczyt oporu z rezystora można dokonać na podstawie kolorów pasków:
          <ol className="list-decimal ml-4">
            <li>Pierwsza cyfra.</li>
            <li>Druga cyfra.</li>
            <li>
              Mnożnik, czyli ilość zer, które trzeba dodać po dwóch pierwszych
              cyfrach.
            </li>
            <li>Tolerancja, czyli dokładność wartości rezystora.</li>
          </ol>
          <LazyLoadImage
            className="mx-auto max-w-[30rem]"
            src={photosSrc[7]}
            alt={photosTitle[7]}
            title={photosTitle[7]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          Rezystor 330&Omega; 5% to paski: pomarańczowy, pomarańczowy, brązowy,
          złoty.
        </p>
        <h4>Zasilanie</h4>
        <p>
          Jako źródło zasilania używam zasilacza 9V z wtykiem DC 5.5mm. Są dwa
          rodzaje takich wtyków, 5.5/2.1 oraz 5.5/2.5. Polecam zwrócić na to
          uwagę, gdyż różnią się wielkością otworu na bolec i wtyk 5.5/2.1 nie
          wejdzie na gniazdo 5.5/2.5, a z kolei wtyk 5.5/2.5 wejdzie na gniazdo
          5.5/2.1, ale z powodu luzu mogą nie zawsze łączyć styki.
          <LazyLoadImage
            className="mx-auto max-w-[30rem]"
            src={photosSrc[8]}
            alt={photosTitle[8]}
            title={photosTitle[8]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
        </p>
        <h4>Sterowanie jasnością</h4>
        <p>Do sterowania jasnością używam takiego prostego układu:</p>
        <div className="flex gap-8 justify-center items-center flex-wrap">
          <LazyLoadImage
            className="max-w-[30rem] dark:invert"
            src={photosSrc[9]}
            alt={photosTitle[9]}
            title={photosTitle[9]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          <ul className="list-disc ml-4">
            <b>Elementy:</b>
            <li>Potencjometr 10k&Omega;</li>
            <li>2x rezystor 330&Omega;</li>
            <li>Tranzystor BC547</li>
            <li>Dioda LED</li>
            <li>Bateria 9V</li>
          </ul>
        </div>
        <br />
        Taki układ umożliwia płynną regulację jasności. Oczywiście można
        podłączyć więcej LED, dodając kolejne diody równolegle.
        <LazyLoadImage
          className="max-w-[35rem] mx-auto dark:invert"
          src={photosSrc[10]}
          alt={photosTitle[10]}
          title={photosTitle[10]}
          onClick={(e) => {
            photoClickHandler(e);
          }}
        />
        {/* ////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////// */}
        {/* ////////////////////////////////////////////////////////// */}
        {/* placeholder */}
        {/* <div className="bg-[#222] border-2 border-[#333] w-[14rem] h-[6rem] mx-auto text-gray-500 grid place-content-center">
          wzór
        </div> */}
        {/* <LazyLoadImage
          className="mx-auto"
          src={photosSrc[3]}
          alt={photosTitle[3]}
          title={photosTitle[3]}
          onClick={(e) => {
            photoClickHandler(e);
          }}
        /> */}
      </article>
    </>
  );
};

export default Article;
