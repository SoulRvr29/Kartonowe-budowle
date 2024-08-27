import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NiechorzeHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie_morskie/niechorze/niechorze-photo1.webp",
    "models/latarnie_morskie/niechorze/niechorze-photo2.webp",
    "models/latarnie_morskie/niechorze/niechorze-photo3.webp",
  ];
  const photosTitle = ["Latarnia morska w 1905 roku"];

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
            {" "}
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="float-left mr-8 max-h-[20rem] max-md:max-h-none"
                src={photosSrc[0]}
                alt="Niechorze"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              W dniu 5 grudnia 1860 roku, niemieckie Ministerstwo Żeglugi
              powołało komisję, która miała ustalić miejsce powstania nowej
              latarni morskiej. Wzięto pod uwagę okolice Trzęsacza i Niechorze.
              Ponadto komisja miała za zadanie wyznaczenie kształtu i
              charakterystyki świateł latarni. Okolice Trzęsacza nie zostały
              zaakceptowane przez Ministerstwo Żeglugi i 15 maja 1863 roku
              przystąpiono do prac projektowych, a następnie budowy latarni w
              Niechorzu. Po trzech latach budowy, dnia 1 grudnia 1866 roku,
              zapłonęło na niej pierwsze światło.
            </p>
            <p>
              Wieża latarni została wybudowana z licowej jasnożółtej cegły. W
              dolnej części do wysokości 13 metrów ma przekrój czworokąta,
              natomiast w górnej, powyżej przybudówek – ośmiokąta. Na
              narożnikach wypuszczono lizeny wykonane naprzemiennie z czerwonej
              i czarno glazurowanej cegły. Wierzchołek wieży wieńczy taras
              widokowy z balustradą. Na wieżę prowadzi 208 lewoskrętnych
              schodów. Do czasu wprowadzenia elektryczności w tunelu technicznym
              w środku wieży znajdowały się obciążniki, które wprowadzały w ruch
              mechanizm obrotu aparatu świecącego. Na szczycie została
              umieszczona laterna, w której wykorzystano aparat Fresnela I
              klasy.
            </p>
            <p>
              Podczas działań wojennych w 1945 roku, pocisk artyleryjski
              uszkodził układ optyczny. Wycofujący się Niemcy założyli dodatkowo
              w budynku osiem min, które udało się odnaleźć, rozbroić i tym
              samym uchronić obiekt przed zniszczeniem. W 1948 roku odbudowano
              aparaturę optyczną, a jej ponowne uruchomienie nastąpiło 18
              grudnia 1948 roku.
            </p>
            <p>
              Podczas kolejnego remontu rozpoczętego w 1999 roku, a zakończonego
              5 grudnia 2000 roku odnowiono zabudowania latarni, przywrócono
              oryginalny kolor wieży i odtworzono zabytkowe ogrodzenie
              dziedzińca.
            </p>
            <p>
              W 2000 roku w ramach remontu kapitalnego całego obiektu
              przeprowadzono także remont budynków mieszkalnych i inwentarskich
              oraz estetyzację całego otoczenia. W budynkach mieszkalnych
              wymieniono instalację elektryczną oraz położono nową instalację
              grzewczą, przechodząc z ogrzewania węglowego na gazowe.
              Wyremontowano wszystkie pomieszczenia mieszkalne, znacznie
              poprawiając warunki socjalne mieszkańców. W trakcie remontu muru
              otaczającego cały obiekt okazało się, że cegły są tak skruszałe,
              że nie nadają się do naprawy. Cały mur został rozebrany i
              postawiony na nowo, zachowując jego dotychczasowy wygląd.
            </p>
            <p>
              Wiosną 2008 roku wykonano remont tarasu widokowego i laterny.
              Remont objął wymianę podłoża i balustrad tarasu oraz wymianę
              siatki zabezpieczającej i szyb laterny.
            </p>
            <p>
              Wiosną 2015 roku rozpoczęto przebudowę terenu przed głównym
              wejściem do latarni. Zlikwidowano ogrody oraz okalające je
              żywopłoty.
            </p>
            <p>
              Wiosną i latem 2023 roku wykonano remont wieży latarni. Wewnątrz
              wieży odmalowano ściany natomiast na zewnątrz naprawiono tynki,
              częściowo naprawiono cegły i spoiny oraz zaimpregnowano tynki i
              cegły przed solą morską.
            </p>
            <p>
              W dniu 19 sierpnia 2023 roku odsłonięto na placu przed latarnią
              pomnik latarnika upamiętniający wszystkich latarników służących na
              Latarni Morskiej Niechorze.
            </p>
            <div className="article-div">
              {" "}
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[2]}
                  alt="Niechorze"
                  title={photosTitle[2]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[1]}
                  alt="Niechorze"
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Latarnia_Morska_Niechorze"
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

export default NiechorzeHistory;
