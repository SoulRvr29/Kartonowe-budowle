import SectionHeader from "../components/SectionHeader";
import ArticleGallery from "../components/ArticleGallery";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StiloHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);

  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
  const [photoIndex, setPhotoIndex] = useState(null);
  const photosSrc = [
    "models/latarnie morskie/port północny/port północny-photo-1.jpg",
  ];
  const photosTitle = ["Obecny wygląd latarni"];
  const photoClickHandler = (e) => {
    setPhotoIndex(photosSrc.indexOf(e.target.getAttribute("src")));
    document.querySelector("body").classList.add("site-overflow");
  };
  /////////////////////////////////////////////////////////////////
  return (
    <>
      {" "}
      <SectionHeader
        sectionName="Historia"
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
          <p>
            <span className="first-letter font-playfair">L</span>atarnia mieści
            się na wieży Kapitanatu Portu Gdańsk i nie jest udostępniona do
            zwiedzania. Jako jedyna latarnia morska w Polsce, posiada windę
            pozwalającą na dostanie się na górę. Latarnia została zbudowana w
            1984. Projektantem wieży był architekt Leszek Zakrzewski z zespołu
            Generalnego Projektanta Portu Północnego inż. Henryka Norkiela z
            Biura Projektów Budownictwa Morskiego „Projmors”. Niebieska,
            czworokątna, nowoczesna konstrukcja nie podobna jest do typowej
            latarni morskiej. Wrażenie to znika jednak po zapaleniu świateł. 18
            czerwca 1984 o godzinie 21.23 rozbłysła po raz pierwszy. Na latarni
            zainstalowane są „trzy dwustronne panele o 60 żarówkach 25 V typu
            Sealed Bea” (żarówki zabezpieczone przed szkodliwymi czynnikami
            zewnętrznymi i mogą być instalowane na zewnątrz bez dodatkowego
            zabezpieczenia) dające światłość 1500000 kandeli na odległość 25 Mm.
          </p>

          <LazyLoadImage
            className="pr-8 float-left max-h-[500px]"
            src={photosSrc[0]}
            alt="Stilo"
            onClick={(e) => {
              photoClickHandler(e);
            }}
            title={photosTitle[0]}
          />
        </article>
      )}
    </>
  );
};

export default StiloHistory;
