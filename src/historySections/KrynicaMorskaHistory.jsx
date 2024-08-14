import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const KrynicaMorskaHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie_morskie/krynica_morska/krynica_morska-photo1.jpg",
    "models/latarnie_morskie/krynica_morska/krynica_morska-photo2.jpg",
    "models/latarnie_morskie/krynica_morska/krynica_morska-photo3.jpg",
  ];
  const photosTitle = [
    "Dawna latarnia w Krynicy Morskiej, zniszczona w 1945r.",
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
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="float-left mr-8 max-h-[20rem]"
                src={photosSrc[0]}
                alt="Krynica Morska"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter">P</span>ruska Administracja Morska
              zdecydowała o budowie latarni morskiej na Mierzei Wiślanej na 29
              metrowej wydmie położonej 300 metrów od Krynicy Morskiej. Po
              zaakceptowaniu projektu 29 metrowej wieży z budynkiem technicznym,
              przystąpiono do budowy, którą zakończono po roku. Została ona
              zbudowana przez elbląskiego rzemieślnika Edwarda Stacha. 1 maja
              1895 roku światło na krynickiej latarni rozbłysło po raz pierwszy.
              Na czworokątnym cokole stała 19 metrowa, okrągła, ceglana wieża
              zakończona ośmiokątnym granitowym gzymsem i laterną w kolorze
              szarym. Na laternie zainstalowano obrotowy aparat Fresnela III
              klasy z niemieckiej firmy Picht & Co. zasilany początkowo olejem,
              później benzolem, gazem, aż do 1938, kiedy wprowadzono zasilanie
              elektryczne.
            </p>
            <p>
              W dniu 3 maja 1945 roku, zaminowana przez wycofujących się
              Niemców, latarnia uległa zniszczeniu grzebiąc pod swoimi gruzami
              kilku żołnierzy radzieckich.
            </p>
            <p>
              Prawie trzy lata Krynica Morska nie posiadała oznakowania
              nawigacyjnego. W 1948 roku, decyzją Urzędu Morskiego w Gdyni,
              zainstalowano prowizoryczne światło o widzialności 10 Mm na
              wieżyczce domu wczasowego „Bałtyk” (dawny hotel"Kaiserhof").
              Światło to widoczne było z Zatoki Gdańskiej i miejscowości po
              drugiej stronie zalewu: Tolkmicka, Fromborka i Suchacza.
            </p>
            <p>
              Trzy lata później ukończono budowę nowej latarni, wraz z budynkami
              technicznymi, która stanęła 15 metrów od ruin starej. Autorem
              projektu był prof. Stanisław Puzyna z Politechniki Gdańskiej.
              Konstrukcję wykonano z prefabrykowanych bloczków betonowych
              łączonych pionowymi wkładkami ze stali zbrojonej i poziomymi
              wieńcami zbrojonymi, co szóstą warstwę bloczków. U dołu wieża ma
              średnicę 6 metrów, u góry 4,5 metra a całkowita wysokość wynosi
              26,5 metra. W laternie na wysokości 53 m n.p.m. umieszczono
              urządzenie optyczno – świetlne, składające się z cylindrycznej
              soczewki średnicy 1000 mm i dwupozycyjnego zmieniacza z 2
              żarówkami o mocy 1000 W każda, o zasięgu 19,5 Mm. Nowa latarnia
              została uroczyście otwarta 25 sierpnia 1951 roku. W latach
              1957-1997 pełniła również funkcję radiolatarni i nadawała
              alfabetem Morse'a sygnał "KM".
            </p>

            <div className="article-div">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[1]}
                  alt="Krynica Morska"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[2]}
                  alt="Krynica Morska"
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Latarnia_Morska_Krynica_Morska"
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

export default KrynicaMorskaHistory;
