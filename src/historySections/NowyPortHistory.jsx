import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const KikutHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie_morskie/nowy_port/nowyport-photo1.webp",
    "models/latarnie_morskie/nowy_port/nowyport-photo2.webp",
    "models/latarnie_morskie/nowy_port/nowyport-photo3.webp",
    "models/latarnie_morskie/nowy_port/nowyport-photo4.webp",
  ];
  const photosTitle = ["Latarnia Nowy Port na początku XX wieku", "", "", ""];

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
                className="float-left mr-8 max-h-[15rem]"
                src={photosSrc[0]}
                alt="Kikut"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter">L</span>atarnia Morska Gdańsk Nowy
              Port została zbudowana w latach 1893-1894, zastępując starszą
              latarnię. Stanowi ośmiokątną wieżę zwężającą się ku górze,
              zakończoną galerią z misternie kutymi poręczami. Latarnia jest
              wzorowana na nieistniejącej latarni z Cleveland w Stanach
              Zjednoczonych. Była pierwszą latarnią morską nad Bałtykiem
              używającą światła elektrycznego.
            </p>
            <p>
              Latarnia morska Gdańsk Nowy Port była jednocześnie wieżą pilotów
              portowych i mieściła na swym szczycie zamontowaną w 1893 r. Kulę
              Czasu. Podniesienie i spadek kuli w każde południe pozwalało
              nawigatorom statków stojących na redzie portu na ustalenie
              poprawki chronometrów okrętowych, żeby później móc dokładnie
              określić położenie statku na otwartym morzu. Kula została usunięta
              i dopiero w 2008 roku została zrekonstruowana i ponownie
              umieszczona na szczycie latarni.
            </p>
            <p>
              1 września 1939 roku strzałem z okna latarni dano znak żołnierzom
              znajdującym się na okręcie „Schleswig-Holstein” do rozpoczęcia
              ostrzału Westerplatte. Kilka chwil później z Westerplatte padły
              dwa strzały armatnie – pierwszy chybił. Drugi był już celny i
              trafił w budynek latarni, likwidując stanowisko CKM-u. Do dziś
              widać miejsca z nową jasną cegłą.
            </p>
            <p>
              Wraz z uruchomieniem latarni w gdańskim Porcie Północnym, w 1984
              roku została wyłączona. Obecny, prywatny właściciel wyremontował
              latarnię i od 2004 udostępnił zwiedzającycm.
            </p>
            <p>
              1 kwietnia 2008 roku na szczycie latarni zamontowano
              zrekonstruowaną Kulę Czasu. Wykonana ze stali nierdzewnej ażurowa
              sferyczna konstrukcja ma średnicę 1,7 m i waży 70 kg.
              Czterometrowy masz zainstalowany został 30 m nad ziemią. Została
              ona uruchomiona 21 maja 2008 roku, od tego czasu swoim opadaniem
              wskazuje godziny 10:00, 12:00, 14:00, 16:00 i 18:00. Na świecie
              zachowało się do czasów dzisiejszych tylko kilka egzemplarzy.
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[1]}
                  alt="Kikut"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[2]}
                  alt="Kikut"
                  title={photosTitle[2]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[3]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[3]}
                  alt="Kikut"
                  title={photosTitle[3]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Latarnia_Morska_Gda%C5%84sk_Nowy_Port"
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

export default KikutHistory;
