import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HelHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/latarnie_morskie/hel/Hel-photo1.jpg",
    "models/latarnie_morskie/hel/Hel-photo2.jpg",
    "models/latarnie_morskie/hel/Hel-photo3.jpg",
    "models/latarnie_morskie/hel/Hel-photo4.jpg",
    "models/latarnie_morskie/hel/Hel-photo5.jpg",
  ];
  const photosTitle = [
    "Latarnia w 1898 roku",
    "Latarnia około 1932-1935 roku",
    "Laterna latarni morskiej Hel",
    "Tablica upamiętniająca wizytę marszałka Józefa Piłsudskiego",
    "Latarnia morska obecnie",
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
            <p>
              <span className="first-letter font-playfair">P</span>o 1647 roku
              zbudowano specjalny żuraw drewniany z zawieszonym na nim żelaznym
              kotłem na węgiel. W okresie od 24 sierpnia do 3 maja blask ognia
              wskazywał drogę żeglarzom. W 1667 roku konstrukcja spłonęła i nową
              latarnię zbudowano 500 kroków za ostatnimi zabudowaniami, nad
              samym brzegiem morza. Zasięg światła był o wiele większy, bo
              żelazny zasobnik z zapaloną smolą i kosz z rozżarzonym węglem
              wciągano na dwudziestometrowy maszt. Znaczne koszty utrzymania
              latarni pokrywała Gdańska Rada Miejska, nakładając specjalne
              opłaty na statki wchodzące do Gdańska.
            </p>
            <p>
              Budowę pierwszej latarni morskiej na Helu rozpoczęto w roku 1806,
              którą ukończono po 20 latach w 1826 roku, a jej otwarcie miało
              miejsce 1 sierpnia 1827 roku. Wieża latarni miała przekrój
              okrągły, o wysokości 42 metrów. Źródłem światła było 6 lamp na
              olej rzepakowy (palnik Arganda) osadzonych na obrotowym
              mechanizmie zegarowym. Wieża latarni na skutek parcia wiatrów
              odchylała się i jak obliczono, przy silnym wietrze mogła się
              odchylać nawet o stopę i więcej. Po prawie 100 latach firma
              Pintsch zainstalowała w latarni lampę naftową w czterosoczewkowym
              aparacie optycznym, a w roku 1938 wprowadzono światło elektryczne
              z żarówką mocy 3000 W.
            </p>{" "}
            <div className="flex flex-wrap justify-center gap-4">
              <PhotoView src={photosSrc[3]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[3]}
                  alt="Hel"
                  title={photosTitle[3]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[2]}
                  alt="Hel"
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
            <p>
              W przypadku niepogody w Helu oddawano co cztery minuty strzały z
              armaty. W 1910 roku podczas takiego wystrzału nastąpiła eksplozja
              prochu, w wyniku której zginął latarnik May. Wcześniej, około roku
              1905 zbudowano na wieży maszt do dawania sygnałów flagowych.
            </p>
            <p>
              W 1926 roku zainstalowano tam lampę naftową z czterema soczewkami.
              W 1929 roku latarnię otynkowano i pomalowano w biało-czerwone
              pasy. W roku 1938 zainstalowano na latarni żarówkę elektryczną o
              mocy 3000 W. W czasie obrony Helu latarnia na rozkaz komandora
              Włodzimierza Steyera za zgodą Dowództwa Floty wysadzono w
              powietrze latarnię 16 września 1939 roku o godz.13.30 dla
              utrudnienia celowania niemieckiej artylerii. W 1942 roku, w czasie
              okupacji niemieckiej, latarnię odbudowano około 10 metrów na
              południowy wschód od fundamentu pierwszej latarni z lat 1826–1939.
              Do czasu remontu z 2001 roku, miejsce po fundamencie starej
              latarni było oznaczone kwietnikiem w betonowym murku, o zarysie
              fundamentu starej latarni, na trawniku przed nową latarnią. W
              ramach remontu w 2001 roku usunięto kwietnik, prowadząc przez
              niego nowy chodnik z kostki betonowej. Oznaczenia śladu po
              fundamencie latarni z 1826 roku wysadzonej w 1939 roku nie
              zachowano.
            </p>
            <p>
              Źródłem światła jest 1000 W żarówka, która w przypadku przepalenia
              wykonuje automatycznie obrót o 180° by ustawić żarówkę zapasową.
              Helska latarnia jest znaczącym punktem dla żeglugi, szczególnie
              dla portów w Gdańsku i Gdyni. Od 1957 była także ona także
              radiolatarnią wysyłającą alfabetem Morse'a sygnał „HL” „• • • • •
              — • •„. W 1989 na wieży zainstalowano antenę radarową systemu
              kontroli ruchu statków. 1 maja 2003 helska latarnia została
              włączona do systemu nadzoru ruchu statków VTS Zatoka Gdańska.
            </p>{" "}
            <PhotoView src={photosSrc[1]}>
              <LazyLoadImage
                className="mx-auto max-w-[40rem]"
                src={photosSrc[1]}
                alt="Hel"
                title={photosTitle[1]}
              />
            </PhotoView>
            <p>
              W 1999 roku staraniem stowarzyszenia „Przyjaciele Helu”, wmurowano
              w ścianę latarni tablicę, upamiętniającą wizytę Marszałka Józefa
              Piłsudskiego w tym miejscu w dniu 1 lipca 1928 roku. W latach 1992
              i 2001 przeprowadzono remonty latarni, sfinansowane wspólnie przez
              Urząd Morski w Gdyni i Towarzystwo Przyjaciół Narodowego Muzeum
              Morskiego w Gdańsku.
            </p>{" "}
            <PhotoView src={photosSrc[4]}>
              <LazyLoadImage
                className="mx-auto max-w-[20rem]"
                src={photosSrc[4]}
                alt="Hel"
                title={photosTitle[4]}
              />
            </PhotoView>
            <p>
              Z latarni roztacza się widok na całą Zatokę Gdańską i sąsiednie
              latanie morskie w: Jastarni, Rozewiu i Porcie Północnym, nieczynne
              już latarnie na Górze Szwedów i w Gdańsku Nowym Porcie
            </p>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto"
                src={photosSrc[0]}
                alt="Hel"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Latarnia_Morska_Hel?wprov=srpw1_1"
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

export default HelHistory;
