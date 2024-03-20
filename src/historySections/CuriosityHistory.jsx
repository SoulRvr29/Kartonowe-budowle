import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CuriosityHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/curiosity/curiosity-photo-2.jpg",
    "models/curiosity/curiosity-photo-1.jpg",
  ];
  const photosTitle = [
    "Łazik Curiosity w zakładzie montażu w Pasadenie w Kalifornii",
    "Autoportret łazika u podnóża Aeolis Mons z 2015 roku",
  ];
  /////////////////////////////////////////////////////////////////
  return (
    <>
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
          <article className="px-8 max-sm:px-4">
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="pl-8 float-right hover:cursor-pointer"
                src={photosSrc[0]}
                alt="curiosity"
              />
            </PhotoView>
            <p>
              <span className="first-letter font-playfair">C</span>
              uriosity jest sześciokołowym pojazdem (łazikiem) z zamontowanym
              oprzyrządowaniem badawczym, ramieniem robotycznym, systemami
              nawigacyjnymi i komunikacyjnymi, awioniką, oprogramowaniem i
              autonomicznym źródłem zasilania – radioizotopowym generatorem
              termoelektrycznym.
            </p>
            <p>
              Nazwę Curiosity wymyśliła w 2009 roku 12-letnia Clara Ma z miasta
              Lenexa w stanie Kansas. Jej propozycja okazała się najlepsza z
              ponad 9 tysięcy zgłoszeń z całych Stanów Zjednoczonych.
            </p>
            <p>
              Polskim wkładem w Curiosity Rover są niechłodzone detektory na
              podczerwień MCT. Zostały wybrane i zastosowane w przestrajalnym
              spektrometrze laserowym zaprojektowanym do zbierania informacji o
              środowisku panującym na Marsie podczas misji Mars Science
              Laboratory. Detektory zostały opracowane przez firmę VIGO System
              S.A. z Ożarowa Mazowieckiego.
            </p>
            <p>
              Jak poinformowała NASA, 22 września 2012 roku Curiosity Rover
              zbadał pierwszy kamień. Skałę wielkości piłki futbolowej badano od
              46 do 48 dnia misji. Pierwszy okaz, który został wytypowany, aby
              przetestować systemy pomiarowe, nosi nazwę N 165. Został poddany
              działaniu lasera. Rozproszony materiał skalny, który wzbił się w
              atmosferę, posłużył do zbadania składu mineralnego. Po dokonaniu
              badań łazik wyruszył w dalszą drogę, pokonując 42 metry, co było
              najdłuższym dystansem od początku misji. Obszar, w którego stronę
              zwrócił się łazik, nosi nazwę Glenelg. Dla naukowców jest on
              interesujący, ponieważ łączą się tam trzy różne typy terenu
              charakterystyczne dla marsjańskiego krajobrazu.
            </p>{" "}
            <h4>Miejsce lądowania</h4>
            <PhotoView src={photosSrc[1]}>
              <LazyLoadImage
                className="pr-8 float-left max-w-[300px]"
                src={photosSrc[1]}
                alt="curiosity"
              />
            </PhotoView>
            <p>
              Miejscem lądowania misji, wybranym przez naukowców zaproszonych
              przez NASA, był krater Gale leżący na południe od równika. Zdjęcia
              satelitarne jego okolic ujawniły ślady wcześniejszego występowania
              ciekłej wody. Krater Gale jako miejsce lądowania można było wybrać
              dopiero podczas tej misji, bowiem jej konstrukcja umożliwiła
              określenie miejsca lądowania z czterokrotnie lepszą dokładnością.
              Dzięki temu uniknięto ryzyka lądowania w trudnym terenie w
              otoczeniu krateru. Łazik wylądował w odległości ok. 6 km od góry
              Aeolis Mons i 2 km na północny wschód od celu, w miejscu, które
              przyjęło nazwę Bradbury Landing. Wybrany krater Gale ma 154 km
              średnicy i jest położony na wschodniej półkuli Marsa. W środku
              krateru znajduje się stromy szczyt, którego warstwowa struktura
              jest kopalnią informacji o historii Marsa. W pobliżu znajdują się
              ujścia dwóch kanałów zawierających osady naniesione w przeszłości
              przez wodę. Przez te kanały można będzie zbadać głębsze warstwy
              góry. Nazwa krateru pochodzi od nazwiska znanego amatora
              astronomii Waltera Gale’a (1865–1945). Pierwszy dzień misji,
              podczas którego nastąpiło lądowanie, nazwano Sol 0. Przez pierwsze
              dni specjaliści sprawdzali systemy zasilania i łączności.
              Curiosity zainstalował nową, lądową wersję oprogramowania,
              zmierzył nachylenie do poziomu (wylądował na niemal płaskim
              podłożu), trochę się odkurzył i wyciągnął wszystkie bezpiecznie
              schowane instrumenty. Według naukowców krater Gale, jako krater
              uderzeniowy został uformowany 3,8 do 3,5 mld lat temu.
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default CuriosityHistory;
