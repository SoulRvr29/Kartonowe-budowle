import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import data from "../data/models-data.json";

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
          <h4>Dane techniczne</h4>
          <div className="flex justify-center gap-8 max-md:flex-col">
            <img
              className="pr-8 float-left max-h-[500px]"
              src={src(1)}
              alt="Stilo"
              onClick={(e) => {
                setProp(e);
                setFullScreen(true);
              }}
              title="Obecny wygląd latarni."
            />
            <ul className="list-disc pl-8 marker:text-accent mt-10 max-md:mt-0 max-md:mb-4 max-sm:text-left font-bold border-2 h-full border-text-dark rounded-xl p-4 ">
              <li>
                Położenie:{" "}
                <span className="li-span">54°23,988' N 18°41,784' E</span>
              </li>

              <li>
                Wysokość wieży:<span className="li-span"> 56,00 m</span>
              </li>
              <li>
                Wysokość światła:{" "}
                <span className="li-span">61,00 m n.p.m.</span>
              </li>
              <li>
                Zasięg nominalny światła:{" "}
                <span className="li-span">25,00 Mm (46,30 km)</span>
              </li>
              <li>
                Sektor widzialności światła:
                <span className="li-span"> 140&deg;-320&deg;</span>
              </li>
              <li>
                Charakterystyka światła:{" "}
                <span className="li-span">Błyskowe grupowe</span>
                <ul className="list-disc pl-6 pt-2">
                  <li>
                    Błysk: <span className="li-span">0,5 s</span>
                  </li>
                  <li>
                    Przerwa: <span className="li-span">1,5 s</span>
                  </li>
                  <li>
                    Błysk: <span className="li-span">0,5 s</span>
                  </li>
                  <li>
                    Przerwa: <span className="li-span">1,5 s</span>
                  </li>
                  <li>
                    Błysk: <span className="li-span">0,5 s</span>
                  </li>
                  <li>
                    Przerwa: <span className="li-span">4,5 s</span>
                  </li>
                  <li>
                    Okres (pełny cykl): <span className="li-span">9,0 s</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </article>
      )}
    </>
  );
};

export default StiloHistory;
