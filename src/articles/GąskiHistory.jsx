import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import data from "../data/models-data.json";

const GąskiHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  const [prop, setProp] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const photo = data.filter((item) => item.id == id)[0].photo;
  const src = (nr) => {
    return photo + nr + ".jpg";
  };
  return (
    <>
      {" "}
      <SectionHeader
        sectionName="Historia"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {fullScreen === true && (
        <FullScreen prop={prop} setFullScreen={setFullScreen} />
      )}
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
          <div className="flex justify-center gap-8">
            <img
              className=" max-h-[500px]"
              src={src(1)}
              alt="Gąski"
              onClick={(e) => {
                setProp(e);
                setFullScreen(true);
              }}
              title="Obecny wygląd latarni."
            />
            <img
              className=" max-h-[500px]"
              src={src(2)}
              alt="Gąski"
              onClick={(e) => {
                setProp(e);
                setFullScreen(true);
              }}
              title="Obecny wygląd latarni."
            />
          </div>
        </article>
      )}
    </>
  );
};

export default GąskiHistory;
