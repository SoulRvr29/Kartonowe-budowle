import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const KołobrzegHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie morskie/kołobrzeg/kołobrzeg-photo1.jpg",
    "models/latarnie morskie/kołobrzeg/kołobrzeg-photo2.jpg",
    "models/latarnie morskie/kołobrzeg/kołobrzeg-photo3.jpg",
    "models/latarnie morskie/kołobrzeg/kołobrzeg-photo4.jpg",
    "models/latarnie morskie/kołobrzeg/kołobrzeg-photo5.jpg",
    "models/latarnie morskie/kołobrzeg/kołobrzeg-photo6.jpg",
  ];
  const photosTitle = [
    "Latarnia w Kołobrzegu w 1899 roku",
    "Latarnia w Kołobrzegu w 1909 roku",
    "Uroczystość oodania do użytku nowej latarni morskiej 1 listopada 1945 roku",
    "Remont latarni morskiej w 1979 roku",
    "Latarnia w Kołobrzegu obecnie",
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
              <span className="first-letter">P</span>o raz pierwszy światło
              zapalane dla celów nawigacyjnych pojawiło się w Kołobrzegu w 1666
              roku. Wykorzystywano do tego celu wieżyczkę budynku zarządu portu.
              Światło to było zapalane tylko okazjonalnie w czasie zawijania
              statków do portu. W późniejszym czasie światło zapalano na
              falochronie.
            </p>
            <p>
              W II połowie XIX wieku do wskazywania statkom drogi
              wykorzystywano, zasilaną olejem, lampę z soczewką Fresnela
              umieszczoną na wysokości około 8 m n.p.m. o zasięgu około 6 NM.
            </p>
            <p>
              W 1899 roku wybudowano w technice ryglowej nowy budynek
              przeznaczony na stację pilotów, z wysoką na 25 m wieżą,
              wykorzystywaną jako latarnia morska. Zasięg tej latarni wynosił 8
              Mm, a źródło światła znajdowało się na wysokości 14 m n.p.m.
            </p>
            <p>
              W 1909 roku lekki budynek ryglowy zastąpiono solidniejszą budowlą
              z cegły. Zasięg latarni wzrósł do 12 Mm, a zasilane gazem światło
              żarowe znalazło się na wysokości 25 m n.p.m.
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[0]}>
                <LazyLoadImage
                  className="max-h-[20rem]"
                  src={photosSrc[0]}
                  alt="Kikut"
                  title={photosTitle[0]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[20rem]"
                  src={photosSrc[1]}
                  alt="Kikut"
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
            <p>
              W 1945 roku latarnię wysadzili niemieccy saperzy, ponieważ
              stanowiła doskonały punkt orientacyjny dla polskich artylerzystów
              podczas walk o Kołobrzeg w marcu 1945.
            </p>
            <p>
              Wkrótce po zakończeniu działań wojennych przystąpiono do budowy
              nowej latarni, którą ukończono najpóźniej w listopadzie 1945 roku.
              Wybudowano ją w nieco innym miejscu, wykorzystując fundamenty
              potężnych zabudowań fortecznych (poprzednia latarnia stała przed
              fortem, obecna stoi na jego głównej platformie) i stanowi
              jednocześnie pomnik zwycięstwa nad Niemcami, co sugeruje
              znajdująca się na niej tablica ze słowami: „Bohaterom poległym w
              walce z najeźdźcą hitlerowskim o wolność i niepodległość...”
            </p>
            <p>
              W latach 1979–1981 dokonano kapitalnego remontu latarni,
              wymieniając między innymi laternę oraz schody na metalowe.
            </p>{" "}
            <div className="article-div">
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
            <p>
              W 2005 roku stylizowany wizerunek latarni morskiej w Kołobrzegu
              znalazł się na rewersie monety okolicznościowej NBP o nominale 2
              zł. W 2008 roku Urząd Miasta Kołobrzeg wydał monetę 7
              Kołobrzeżanek, na której znalazł się stylizowany wizerunek latarni
              morskiej z dwoma konikami morskimi.
            </p>
            <p>
              W 2009 roku Urząd Miasta Kołobrzeg sfinansował zainstalowanie
              podświetlenia szańca i latarni.
            </p>
            <p>
              W 2022 roku z kołobrzeskiej latarni morskiej zdjęto płaskorzeźbę,
              przedstawiającą pepeszę i sztandar z sierpem i młotem. Latarnia ma
              zostać przekształcona w Pomnik Żołnierzy Polskich, poległych w
              walkach o Kołobrzeg w marcu 1945 roku.
            </p>{" "}
            <div className="article-div">
              <PhotoView src={photosSrc[4]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[4]}
                  alt="Kikut"
                  title={photosTitle[4]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[5]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[5]}
                  alt="Kikut"
                  title={photosTitle[5]}
                />
              </PhotoView>
            </div>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default KołobrzegHistory;
