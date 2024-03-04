import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StiloHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/latarnie morskie/port północny/port północny-photo-1.jpg",
  ];
  const photosTitle = [""];
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
                className="pr-8 float-left max-h-[400px]"
                src={photosSrc[0]}
                alt="Stilo"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter font-playfair">L</span>atarnia
              mieści się na wieży Kapitanatu Portu Gdańsk i nie jest
              udostępniona do zwiedzania. Jako jedyna latarnia morska w Polsce,
              posiada windę pozwalającą na dostanie się na górę. Latarnia
              została zbudowana w 1984. Projektantem wieży był architekt Leszek
              Zakrzewski z zespołu Generalnego Projektanta Portu Północnego inż.
              Henryka Norkiela z Biura Projektów Budownictwa Morskiego
              „Projmors”. Niebieska, czworokątna, nowoczesna konstrukcja nie
              podobna jest do typowej latarni morskiej. Wrażenie to znika jednak
              po zapaleniu świateł. 18 czerwca 1984 o godzinie 21.23 rozbłysła
              po raz pierwszy. Na latarni zainstalowane są „trzy dwustronne
              panele o 60 żarówkach 25 V typu Sealed Bea” (żarówki zabezpieczone
              przed szkodliwymi czynnikami zewnętrznymi i mogą być instalowane
              na zewnątrz bez dodatkowego zabezpieczenia) dające światłość
              1500000 kandeli na odległość 25 Mm.
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default StiloHistory;
