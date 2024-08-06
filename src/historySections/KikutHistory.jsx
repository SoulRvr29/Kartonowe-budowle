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
    "models/latarnie_morskie/kikut/kikut-photo1.jpg",
    "models/latarnie_morskie/kikut/kikut-photo2.jpg",
  ];
  const photosTitle = ["", ""];

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
              <span className="first-letter">E</span>tymologia pochodzi od
              niemieckiej nazwy wieży widokowej z XIX w. "Kiekturm", na której
              zbudowano latarnię morską. Rdzeń "kiek" lub "kyk" pochodzi od
              niemieckiego "gycke" - spoglądaj.
            </p>
            <p>
              W latach 60. XX wieku rozwój zespołu portowego
              Szczecin-Świnoujście, przyczynił się do powstania problemu
              dokładnego określenia pozycji na torze podejściowym do portu dla
              coraz większych statków zawijających do Świnoujścia. Zaproponowano
              więc aby w latarnię morską zmienić wieżę widokową na wzniesieniu
              Strażnica (73,9 m n.p.m.), niedaleko miejscowości Wisełka, na
              terenie Wolińskiego Parku Narodowego. Projekt adaptacji powstał w
              Biurze Projektantów Budownictwa Morskiego w Gdańsku. Okrągłą wieżę
              zbudowaną z kamieni polnych o wysokości 10,2 m podwyższono za
              pomocą cegieł o 2,6 m. Na tym postawiono pomalowaną na biało
              laternę. Latarnia uruchomiona została 10 lutego 1962 roku.
            </p>
            <p>
              {" "}
              W laternie zamontowano sprowadzone ze Szwecji urządzenia optyczne.
              Początkowo w kabinie optycznej znajdowała się latarnia
              elektryczno-gazowa z 1000 W żarówką. Jako rezerwowe źródło światła
              służyło oświetlenie pochodzące z czterech umieszczonych w
              przyziemiu latarni butli acetylenowych połączonych przewodami
              gazowymi z latarnią. Po dwudziestu latach instalację gazową
              zlikwidowano na rzecz instalacji elektrycznej ze zmieniaczem na
              dwóch żarówkach. Od 1994 w laternie zamontowane jest urządzenie
              składające się z cylindrycznej soczewki o średnicy 500 mm,
              wewnątrz której umieszczono sześciopozycyjny zmieniacz z żarówkami
              halogenowymi o mocy 75 W każda. Zmieniacz działa w ten sposób, że
              obracając się automatycznie wprowadza do optyki nową żarówkę, gdy
              któraś z żarówek się przepali. W razie awarii działa w latarni
              automatycznie ładowana bateria akumulatorów, dzięki czemu latarnia
              nie wymaga stałej obsługi na miejscu. Latarnia Kikut jest jedyną w
              Polsce latarnią bezobsługową.
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[0]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[0]}
                  alt="Kikut"
                  title={photosTitle[0]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem]"
                  src={photosSrc[1]}
                  alt="Kikut"
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default KikutHistory;
