import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import data from "../data/models-data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StiloHistory = ({ id }) => {
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
            src={src(1)}
            alt="Stilo"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
            title="Obecny wygląd latarni."
          />
        </article>
      )}
    </>
  );
};

export default StiloHistory;
