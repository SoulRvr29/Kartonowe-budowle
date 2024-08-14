import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const JarosławiecHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie_morskie/jaroslawiec/jaroslawiec-photo1.jpg",
    "models/latarnie_morskie/jaroslawiec/jaroslawiec-photo2.jpg",
    "models/latarnie_morskie/jaroslawiec/jaroslawiec-photo3.jpg",
    "models/latarnie_morskie/jaroslawiec/jaroslawiec-photo4.jpg",
  ];
  const photosTitle = ["Latarnia Jarosławiec w 1930 roku"];

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
                className="float-left mr-8 max-h-[20rem]"
                src={photosSrc[0]}
                alt="Jarosławiec"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter">P</span>ierwsze wzmianki o latarni
              pochodzą z 1818 roku, kiedy to pisano o konieczności jej budowy.
              11 czerwca 1818 roku wystąpiono do Ministerstwa Żeglugi z
              wnioskiem o pozwolenie na budowę, ale na jarosławskiej latarni
              światło rozbłysło dopiero po 20 latach. Od początku budowy
              napotykano na wiele problemów. W lutym 1820 roku inspektor
              budowlany ze Słupska przedłożył pierwsze plany konstrukcyjne,
              które jednak nie zostały zrealizowane. Następne plany
              przedstawiono w maju 1827, a w październiku zostały one
              przeanalizowane przez specjalna komisję przy Ministerstwie Spraw
              Wewnętrznych w Berlinie, w której składzie był mistrz pruskiego
              klasycyzmu budowlanego, budowniczy latarni w Arkonie, Fryderyk
              Schikel. Budowę rozpoczęto w 1829 roku 380 metrów od brzegu.
              Roboty zlecono mistrzowi murarskiemu ze Sławna, Widekowskiemu, a
              stalową konstrukcję lampy wykonał mistrz kowalski Karol Winneg z
              Koszalina. „Lustrzane szyby do oszklenia kopuły dostarczyła
              manufaktura Schickler & Splittgerber, ta sama, która realizowała
              zamówienia dla latarń na Helu i w Nowym Porcie. Budowę latarni
              ukończono w 1832. Wieżę latarni zbudowano na planie koła, a przy
              jej wznoszeniu wykorzystano czerwoną i glazurowaną cegłę. W 1902
              roku latarnia została przebudowana.
            </p>
            <p>
              Mimo iż po trzech latach latarnia już stała, to nie została ona
              uruchomiona. Była za niska. Od północnego zachodu zasłaniały ją
              drzewa i dachy domów, a od wschodu świerkowy las. Ze względu na
              sprzeciw mieszkańców wobec wycinki lasu i niemożności podwyższenia
              latarni ze względu na słabe mury w 1835 roku zdecydowano o budowie
              nowej latarni, która znajduje się obecnie w centrum miasta.
              Istniejącą powiększono i przeznaczono na mieszkanie dla
              latarników. Nowa okrągła wieża zbudowana z czerwonej cegły
              podzielona została gzymsami na cztery kondygnacje a jej całkowita
              wysokość wyniosła 33,3 metra. Pierwszy raz zapalono światła 1
              lipca 1838 używając piętnastu lamp Arganda zasilanych olejem
              rzepakowym z parabolicznymi zwierciadłami, które przeniesiono ze
              starej latarni. Zasięg światła wyniósł 16 Mm z wysokości 50, 2 m
              n.p.m. W 1878 wymieniono lampy Arganda na soczewkę Fresnela, a w
              1912 włączono zasilanie elektryczne.
            </p>
            <p>
              W czasie działań wojennych latarnia została uszkodzona i służbę
              nautyczną rozpoczęła w 1946 roku. W roku 1975 zmodernizowano
              urządzenia optyczne i zainstalowano nowoczesną lampę obrotową, AGA
              PRB-21, istniejącą do dziś, złożoną z czterech paneli po 6 żarówek
              o mocy 600 W każda, która daje światło na odległość 23 Mm.
            </p>
            <p>
              W 1993 roku latarnia została wpisana do rejestru zabytków.
              Latarnia jest dozorowana, udostępniona do zwiedzania, a z jej
              szczytu podziwiać można panoramę Jarosławca i okolicy.
            </p>
            <p>
              W 1996 roku przeprowadzono generalny remont latarni z
              uzupełnieniem braków cegieł w gzymsach i ścianach oraz
              zabezpieczeniem latarni przed działaniem szkodliwych czynników,
              np.: wody, soli.
            </p>
            <p>
              Do dnia 31 marca 2020 roku administratorem latarni był Urząd
              Morski w Słupsku, a od dnia 1 kwietnia 2020 roku zadanie to
              zostało przejęte przez Urząd Morski w Szczecinie.
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[1]}
                  alt="Jarosławiec"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[2]}
                  alt="Jarosławiec"
                  title={photosTitle[2]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[3]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[3]}
                  alt="Jarosławiec"
                  title={photosTitle[3]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Latarnia_Morska_Jaros%C5%82awiec"
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

export default JarosławiecHistory;
