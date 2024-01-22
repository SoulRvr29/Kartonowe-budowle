import SectionHeader from "../components/SectionHeader";
import ArticleGallery from "../components/ArticleGallery";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CuriosityHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
  const [photoIndex, setPhotoIndex] = useState(null);
  const photosSrc = [
    "models/curiosity/curiosity-photo-2.jpg",
    "models/curiosity/curiosity-photo-1.jpg",
  ];
  const photosTitle = ["", ""];
  const photoClickHandler = (e) => {
    setPhotoIndex(photosSrc.indexOf(e.target.getAttribute("src")));
    document.querySelector("body").classList.add("site-overflow");
  };
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <SectionHeader
        sectionName="Informacje"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      <ArticleGallery
        photosSrc={photosSrc}
        photosTitle={photosTitle}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {sectionState === true && (
        <article className="px-8 max-sm:px-4">
          <LazyLoadImage
            className="pl-8 float-right hover:cursor-pointer"
            src={photosSrc[0]}
            alt="curiosity"
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          <p>
            <span className="first-letter font-playfair">C</span>uriosity Rover
            – zautomatyzowane i autonomiczne laboratorium naukowo-badawcze
            wysłane na Marsa, w ramach programu badawczego Mars Science
            Laboratory (MSL) w celu oceny możliwości występowania potencjalnych
            warunków do życia w przeszłości, zbadania możliwości utrzymania się
            życia organicznego na Marsie, wykonania pomiarów meteorologicznych,
            poszukiwania pierwiastków biogennych, badania stopnia wilgotności
            gleby oraz poszukiwania wody i związków mineralnych z nią
            związanych, przeprowadzenia pomiarów widma wysokoenergetycznego
            promieniowania naturalnego, zbadania składu skał i gleby oraz
            określenia charakterystyki możliwych cyklów hydrologicznych na
            badanej planecie.
          </p>
          <p>
            Curiosity jest sześciokołowym pojazdem (łazikiem) z zamontowanym
            oprzyrządowaniem badawczym, ramieniem robotycznym, systemami
            nawigacyjnymi i komunikacyjnymi, awioniką, oprogramowaniem i
            autonomicznym źródłem zasilania – radioizotopowym generatorem
            termoelektrycznym.
          </p>
          <p>
            Nazwę Curiosity wymyśliła w 2009 roku 12-letnia Clara Ma z miasta
            Lenexa w stanie Kansas. Jej propozycja okazała się najlepsza z ponad
            9 tysięcy zgłoszeń z całych Stanów Zjednoczonych.
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
            Jak poinformowała NASA, 22 września 2012 roku Curiosity Rover zbadał
            pierwszy kamień. Skałę wielkości piłki futbolowej badano od 46 do 48
            dnia misji. Pierwszy okaz, który został wytypowany, aby przetestować
            systemy pomiarowe, nosi nazwę N 165. Został poddany działaniu
            lasera. Rozproszony materiał skalny, który wzbił się w atmosferę,
            posłużył do zbadania składu mineralnego. Po dokonaniu badań łazik
            wyruszył w dalszą drogę, pokonując 42 metry, co było najdłuższym
            dystansem od początku misji. Obszar, w którego stronę zwrócił się
            łazik, nosi nazwę Glenelg. Dla naukowców jest on interesujący,
            ponieważ łączą się tam trzy różne typy terenu charakterystyczne dla
            marsjańskiego krajobrazu.
          </p>
          <LazyLoadImage
            className="pr-8 float-left max-w-[300px]"
            src={photosSrc[1]}
            alt="curiosity"
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          <h4 className="inline-block mt-2">Miejsce lądowania</h4>
          <p>
            Miejscem lądowania misji, wybranym przez naukowców zaproszonych
            przez NASA, był krater Gale leżący na południe od równika. Zdjęcia
            satelitarne jego okolic ujawniły ślady wcześniejszego występowania
            ciekłej wody. Krater Gale jako miejsce lądowania można było wybrać
            dopiero podczas tej misji, bowiem jej konstrukcja umożliwiła
            określenie miejsca lądowania z czterokrotnie lepszą dokładnością.
            Dzięki temu uniknięto ryzyka lądowania w trudnym terenie w otoczeniu
            krateru. Łazik wylądował w odległości ok. 6 km od góry Aeolis Mons i
            2 km na północny wschód od celu, w miejscu, które przyjęło nazwę
            Bradbury Landing. Wybrany krater Gale ma 154 km średnicy i jest
            położony na wschodniej półkuli Marsa. W środku krateru znajduje się
            stromy szczyt, którego warstwowa struktura jest kopalnią informacji
            o historii Marsa. W pobliżu znajdują się ujścia dwóch kanałów
            zawierających osady naniesione w przeszłości przez wodę. Przez te
            kanały można będzie zbadać głębsze warstwy góry. Nazwa krateru
            pochodzi od nazwiska znanego amatora astronomii Waltera Gale’a
            (1865–1945). Pierwszy dzień misji, podczas którego nastąpiło
            lądowanie, nazwano Sol 0. Przez pierwsze dni specjaliści sprawdzali
            systemy zasilania i łączności. Curiosity zainstalował nową, lądową
            wersję oprogramowania, zmierzył nachylenie do poziomu (wylądował na
            niemal płaskim podłożu), trochę się odkurzył i wyciągnął wszystkie
            bezpiecznie schowane instrumenty. Według naukowców krater Gale, jako
            krater uderzeniowy został uformowany 3,8 do 3,5 mld lat temu.
          </p>
        </article>
      )}
    </>
  );
};

export default CuriosityHistory;
