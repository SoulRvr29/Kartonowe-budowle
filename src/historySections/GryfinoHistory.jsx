import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GryfinoHistory = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/gryfino/gryfino-photo3.jpg",
    "models/gryfino/gryfino-photo1.jpg",
    "models/gryfino/gryfino-photo2.jpg",
  ];
  const photosTitle = ["Kościół w 1905 roku", "", ""];
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
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mr-8 float-left max-h-[20rem]"
                src={photosSrc[0]}
                alt="Kościół w gryfinie"
              />
            </PhotoView>
            <p>
              <span className="first-letter font-playfair">W</span>
              edług szczecińskiego historyka sztuki Wojciecha Łopucha początek
              budowy świątyni miał miejsce w 1278 roku, w którym książę Barnim I
              przekazał patronat nad świątynią kościołowi Mariackiemu w
              Szczecinie. Dla piszącego w latach pięćdziesiątych ubiegłego wieku
              Zygmunta Świechowskiego data ta oznaczała zakończenie budowy całej
              świątyni. Wojciech Łopuch ufundowanie ołtarza w 1300 roku wiąże z
              zakończeniem budowy części wschodniej świątyni, czyli prezbiterium
              i transeptu. Partie te zostały wybudowane z ciosów kamiennych z
              dodatkiem cegły w detalach architektonicznych.
            </p>
            <p>
              Drugi etap budowy zapewne został zakończony w 1325 roku, kiedy to
              książę Otton I ofiarował drugi ołtarz. Wybudowany miał wtedy
              zostać z cegły korpus bazylikowy, o trzech nawach i jednym przęśle
              oraz kamienna w dolnej części wieża zachodnia. O istnieniu w
              tamtym okresie układu bazylikowego (nawy boczne są obniżone w
              stosunku do nawy głównej) świadczą okna w górnej części elewacji
              nawy głównej, widoczne obecnie na strychu świątyni.
            </p>
            <p>
              Trzeci etap budowy to epoka późnego gotyku, czyli XV stulecie.
              Zostały podwyższone wtedy nawy boczne do wysokości nawy głównej
              (dzięki temu powstał układ halowy) oraz zostały założone
              sklepienia gwiaździste (do tego czasu świątynia pokryta była
              drewnianym stropem).
            </p>
            <p>
              W XVI wieku świątynię przejęli protestanci. W czasach nowożytnych
              architektura świątyni zasadniczo nie uległa zmianie. Poważna
              restauracja miała miejsce w latach 1861 -63 pod kierunkiem
              architekta Buchterkircha, znanego z niezbyt udanych regotyzacji
              pomorskich świątyń. W 1938 roku został zmieniony średniowieczny
              stożek na wieży na kolidujący architekturą gotyku hełm
              neobarokowy. Od 1945 jest to ponownie świątynia katolicka.
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[400px]"
                  src={photosSrc[1]}
                  alt="Kościół w gryfinie"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[400px]"
                  src={photosSrc[2]}
                  alt="Kościół w gryfinie"
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default GryfinoHistory;
