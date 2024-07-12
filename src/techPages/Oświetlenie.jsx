import TechHeader from "../components/TechHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ResistorCalc from "../components/ResistorCalc";
import { useEffect } from "react";

const Article = () => {
  useEffect(() => {
    document.title = "Oświetlenie - Kartonowe budowle";
  }, []);

  return (
    <>
      <TechHeader title="Oświetlenie modeli" />
      <PhotoProvider
        overlayRender={({ index }) => {
          return (
            <div
              className={
                "photo-description absolute bottom-0 text-center w-full z-30 p-3 bg-black bg-opacity-40 text-text-light " +
                (!document.querySelectorAll(`article img`)[index] && " hidden")
              }
            >
              {document.querySelectorAll(`article img`)[index] &&
                document.querySelectorAll(`article img`)[index].title}
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
            montażu. Używam zazwyczaj białych diod o ciepłej barwie światła.
          </p>
          <PhotoView src="/techSections/oświetlenie/full-res/diody.webp">
            <LazyLoadImage
              className="mx-auto"
              src="/techSections/oświetlenie/full-res/diody.webp"
              alt="trzy rodzaje najczęściej używanych przeze mnie diod"
              title="trzy rodzaje najczęściej używanych przeze mnie diod"
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
            ale łatwo topi się podczas lutowania i dlatego wolę grubszą i
            bardziej wytrzymałą SMD 3528. Numer 3528 określa wymiary diody,
            czyli 3,5mm na 2,8mm. Dla drobnych elementów, np. światła latarni
            ulicznej w modelu zamku w Będzinie, użyłem diody SMD 0805 (tutaj
            numer już nie określa wymiarów, które wynoszą 2mm na 1,25mm), a
            właściwie dwóch diod połączonych ze sobą.
          </p>
          <div className="flex gap-4 flex-wrap justify-evenly">
            <PhotoView src="/techSections/oświetlenie/full-res/latarnia.webp">
              <LazyLoadImage
                className=" max-h-[18rem] max-md:max-h-none"
                src="/techSections/oświetlenie/thumb/latarnia-thumb.webp"
                alt="diody SMD 0805 w latarni ulicznej"
                title="diody SMD 0805 w latarni ulicznej"
              />
            </PhotoView>
            <PhotoView src="models/bedzin/night/full-res/bedzin-n18.webp">
              <LazyLoadImage
                className=" max-h-[18rem] max-md:max-h-none"
                src="models/bedzin/night/thumb/bedzin-thumb-n18.webp"
                alt="latarnia uliczna w modelu zamku w Będzinie"
                title="latarnia uliczna w modelu zamku w Będzinie"
              />
            </PhotoView>
          </div>
          <p>
            {" "}
            Do diod SMD dolutowuję przewody (0.2mm) z drutu nawojowego, który
            można łatwo pozyskać np. ze starych zasilaczy, silniczków. Taki drut
            jest pokryty warstwą izolacyjną i należy zdrapać ją z końcówek przed
            lutowaniem.
          </p>
          <div className="flex gap-4 flex-wrap justify-evenly">
            <PhotoView src="/techSections/oświetlenie/full-res/SMD_2x.webp">
              <LazyLoadImage
                className="mx-auto max-h-[18rem] max-md:max-h-none"
                src="/techSections/oświetlenie/thumb/SMD_2x-thumb.webp"
                alt="połączone diody SMD 3528 biała i 1206 niebieska"
                title="połączone diody SMD 3528 biała i 1206 niebieska"
              />
            </PhotoView>
            <PhotoView src="/techSections/oświetlenie/full-res/wnętrza.webp">
              <LazyLoadImage
                className="mx-auto max-h-[18rem] max-md:max-h-none"
                src="/techSections/oświetlenie/thumb/wnętrza-thumb.webp"
                alt="Wnętrze zamku w Będzinie oświetlone diodami SMD 3528"
                title="Wnętrze zamku w Będzinie oświetlone diodami SMD 3528"
              />
            </PhotoView>
          </div>
          <h4>Dobór rezystora</h4>
          <p>
            Do każdej diody dodaję rezystor (opornik). Wartośc rezystora można
            łatwo obliczyć z poniższego wzoru:{" "}
            <PhotoView src="/techSections/oświetlenie/full-res/wzór1.png">
              <LazyLoadImage
                className="mx-auto max-w-[12rem]"
                src="/techSections/oświetlenie/full-res/wzór1.png"
                alt="wzór na rezystor"
                title="wzór na rezystor"
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
            <PhotoView src="/techSections/oświetlenie/full-res/wzór2.png">
              <LazyLoadImage
                className="mx-auto max-w-[22rem]"
                src="/techSections/oświetlenie/full-res/wzór2.png"
                alt="wynik rezystora dla białej diody przy zasilaniu 9V"
                title="wynik rezystora dla białej diody przy zasilaniu 9V"
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
          <PhotoView src="/techSections/oświetlenie/full-res/kod_paskowy.png">
            <LazyLoadImage
              className="mx-auto max-w-[30rem]"
              src="/techSections/oświetlenie/full-res/kod_paskowy.png"
              alt="kody paskowe rezystorów"
              title="kody paskowe rezystorów"
            />
          </PhotoView>
          <p>
            Rezystor <b>330&Omega; 5%</b> to paski:{" "}
            <b>pomarańczowy, pomarańczowy, brązowy, złoty.</b>
          </p>
          <h4>Zasilanie</h4>
          <p>
            Jako źródło zasilania używam zasilacza <b>9V</b> z wtykiem{" "}
            <b>DC 5.5mm</b>. Są dwa rodzaje takich wtyków, 5.5/2.1 oraz 5.5/2.5.
            Lepiej zwrócić na to uwagę, gdyż różnią się wielkością otworu na
            bolec i wtyk 5.5/2.1 nie wejdzie na gniazdo 5.5/2.5, a z kolei wtyk
            5.5/2.5 wejdzie na gniazdo 5.5/2.1, ale z powodu luzu mogą nie
            zawsze łączyć styki.
          </p>
          <PhotoView src="/techSections/oświetlenie/full-res/wtyk-gniazdo.png">
            <LazyLoadImage
              className="mx-auto max-w-[30rem]"
              src="/techSections/oświetlenie/full-res/wtyk-gniazdo.png"
              alt="wtyk i gniazdo DC"
              title="wtyk i gniazdo DC"
            />
          </PhotoView>
          <p>
            Gniazda DC montuję tylko w większych modelach, w mniejszych jak
            latarnie morskie zostawiam same kabelki.
          </p>
          <h4>Sterowanie jasnością</h4>
          <p>Do sterowania jasnością można użyć tego prostego układu:</p>
          <div className="flex gap-8 justify-center items-center flex-wrap">
            <PhotoView src="/techSections/oświetlenie/full-res/schemat1.png">
              <LazyLoadImage
                className="max-w-[30rem] "
                src="/techSections/oświetlenie/full-res/schemat1.png"
                alt="schemat układu z jedną diodą"
                title="schemat układu z jedną diodą"
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
          <PhotoView src="/techSections/oświetlenie/full-res/schemat2.png">
            <LazyLoadImage
              className="max-w-[35rem] mx-auto "
              src="/techSections/oświetlenie/full-res/schemat2.png"
              alt="schemat układu z trzema diodami"
              title="schemat układu z trzema diodami"
            />
          </PhotoView>
          <hr className="grad-hr " />
          <div className="flex gap-4 justify-center flex-wrap  ">
            <PhotoView src="/models/oporow/night/full-res/oporow-n05.webp">
              <LazyLoadImage
                className=" max-h-[18rem] max-md:max-h-none cursor-pointer"
                src="/models/oporow/night/thumb/oporow-thumb-n05.webp"
                alt="Oświetlenie zamku w Oporowie przy użyciu diod 3mm (0805 w latarniach)"
                title="Oświetlenie zamku w Oporowie przy użyciu diod 3mm (0805 w latarniach)"
              />
            </PhotoView>
            <PhotoView src="/models/latarnie morskie/gąski/noc/full-res/gąski-n02.jpg">
              <LazyLoadImage
                className=" max-h-[18rem] max-w-[20rem] max-md:max-h-none  cursor-pointer"
                src="/models/latarnie morskie/gąski/noc/thumb/gąski-thumb-n02.jpg"
                alt="Światło w latarni morskiej Gąski przy użyciu diody 5mm"
                title="Światło w latarni morskiej Gąski przy użyciu diody 5mm"
              />
            </PhotoView>
            <PhotoView src="/models/bedzin/night/full-res/bedzin-n06.webp">
              <LazyLoadImage
                className=" max-h-[18rem] max-w-[20rem] max-md:max-h-none cursor-pointer"
                src="/models/bedzin/night/thumb/bedzin-thumb-n06.webp"
                alt="Oświetlenie zamku w Będzinie przy użyciu diod SMD 3528 (0805 na wieży)"
                title="Oświetlenie zamku w Będzinie przy użyciu diod SMD 3528 (0805 na wieży)"
              />
            </PhotoView>
          </div>
        </article>{" "}
      </PhotoProvider>
    </>
  );
};

export default Article;
