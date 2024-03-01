import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GąskiHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
  const photosSrc = [
    "models/latarnie morskie/gąski/gąski-photo-1.jpg",
    "models/latarnie morskie/gąski/gąski-photo-2.jpg",
  ];
  const photosTitle = ["Obecny wygląd latarni", "Obecny wygląd latarni"];
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
          loadingElement={<div class="loader"></div>}
        >
          <article className="px-8 max-sm:px-4">
            <p>
              <span className="first-letter font-playfair">L</span>atarnię
              zbudowano w latach 1876–1878. Warty uwagi jest fakt, że materiały
              do jej budowy dowożono statkami i wyładowywano na specjalnie
              postawionym pomoście. Jest przykładem typowej trójczłonowej
              konstrukcji, której podstawą jest ośmiokąt o średnicy 11,3 metra,
              na nim opiera się okrągła wieża o grubych na 3,3 metra licowanych
              obustronnie ścianach. Pod kopułą w latarni umieszczono pierwotnie
              naftowy aparat Fresnela, który dawał białe światło naftowe o
              zasięgu 18 Mm. Latarnię obsługiwało dwóch latarników, którzy
              mieszkali w budynku położonym na południe od wieży. Według
              dokumentacji z roku 1927 w laternie zainstalowana została optyka
              zasilana energią elektryczną i urządzenie przesłonowe, regulowane
              mechanizmem zegarowym z wahadłem dla utrzymania charakterystyki
              światła. Ponownie uruchomiono ją po II wojnie światowej, w 1948
              roku. Obecnie w laternie umieszczona jest soczewka
              pierścieniowo-bębnowa z 1500 W żarówką.
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <PhotoView src={photosSrc[0]}>
                <LazyLoadImage
                  className=" max-h-[500px]"
                  src={photosSrc[0]}
                  alt="Gąski"
                  title={photosTitle[0]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className=" max-h-[500px]"
                  src={photosSrc[1]}
                  alt="Gąski"
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

export default GąskiHistory;
