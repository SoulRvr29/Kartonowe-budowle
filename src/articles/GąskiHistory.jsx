import SectionHeader from "../components/SectionHeader";
import ArticleGallery from "../components/ArticleGallery";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GąskiHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
  const [photoIndex, setPhotoIndex] = useState(null);
  const photosSrc = [
    "models/latarnie morskie/gąski/gąski-photo-1.jpg",
    "models/latarnie morskie/gąski/gąski-photo-2.jpg",
  ];
  const photosTitle = ["Obecny wygląd latarni", "Obecny wygląd latarni"];
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
            <span className="first-letter font-playfair">L</span>atarnię
            zbudowano w latach 1876–1878. Warty uwagi jest fakt, że materiały do
            jej budowy dowożono statkami i wyładowywano na specjalnie
            postawionym pomoście. Jest przykładem typowej trójczłonowej
            konstrukcji, której podstawą jest ośmiokąt o średnicy 11,3 metra, na
            nim opiera się okrągła wieża o grubych na 3,3 metra licowanych
            obustronnie ścianach. Pod kopułą w latarni umieszczono pierwotnie
            naftowy aparat Fresnela, który dawał białe światło naftowe o zasięgu
            18 Mm. Latarnię obsługiwało dwóch latarników, którzy mieszkali w
            budynku położonym na południe od wieży. Według dokumentacji z roku
            1927 w laternie zainstalowana została optyka zasilana energią
            elektryczną i urządzenie przesłonowe, regulowane mechanizmem
            zegarowym z wahadłem dla utrzymania charakterystyki światła.
            Ponownie uruchomiono ją po II wojnie światowej, w 1948 roku. Obecnie
            w laternie umieszczona jest soczewka pierścieniowo-bębnowa z 1500 W
            żarówką.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <LazyLoadImage
              className=" max-h-[500px]"
              src={photosSrc[0]}
              alt="Gąski"
              onClick={(e) => {
                photoClickHandler(e);
              }}
              title={photosTitle[0]}
            />
            <LazyLoadImage
              className=" max-h-[500px]"
              src={photosSrc[1]}
              alt="Gąski"
              onClick={(e) => {
                photoClickHandler(e);
              }}
              title={photosTitle[1]}
            />
          </div>
        </article>
      )}
    </>
  );
};

export default GąskiHistory;
