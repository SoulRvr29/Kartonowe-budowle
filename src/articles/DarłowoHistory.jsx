import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import data from "../data/models-data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DarłowoHistory = ({ id }) => {
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
          <LazyLoadImage
            className="pr-8 pt-0 float-left w-[400px]"
            src={src(1)}
            alt="Latarina Darłowo"
            title="Obecny wygląd latarni"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />
          <p>
            <span className="first-letter">W</span> marcu 1715 roku nakazano
            ustawienie świateł nawigacyjnych po obu stronach ujścia Wieprzy, ale
            dopiero po ponad stu latach wybudowano stację pilotów z 6 metrową
            wieżą. W 1885 roku stanął na wschodnim brzegu nieduży parterowy
            budynek z czerwonej licowanej cegły z kwadratową wieżą, w której
            mieszkał latarnik dbający o to, by lampa na latarni świeciła stałym
            czerwonym światłem o zasięgu 6 Mm. Źródłem światła była soczewka IV
            klasy umieszczona w oknie na wysokości 12 metrów, która w 1899 roku
            zmieniono na soczewkę VI kasy a pięć lat później spis świateł
            informuje o zmianie charakterystyki światła na białe, przerywane.
          </p>
          <p>
            W 1927 roku wieżę latarni podwyższono o jedną kondygnację, na której
            zbudowano galeryjkę i laternę z białą kopułą. Do dnia dzisiejszego
            tak właśnie wygląda latarnia morska w Darłowie, zmieniały się tylko
            z latami źródła światła. Obecnie używana jest „żarówka o mocy 500 W,
            umieszczona w pół cylindrycznej soczewce. Całkowita wysokość latarni
            wynosi 23 metry a zasięg światła 15 Mm.
          </p>
          <p>
            Lokalizacja darłowskiej latarni jest bardzo niekorzystna ze względu
            na warunki hydrologiczne. Jesienią i zimą w czasie sztormów jest
            zalewany cały budynek a zimą ściana od strony morza jest skuta
            lodem. Spowodowało to konieczność umocnienia północnej ściany, która
            obmurowana dodatkową warstwą cegieł i otynkowana tynkiem cementowo –
            wapiennym, ma imponująca grubość 54 centymetrów. Z powodu
            nawilgocenie i zasolenia murów latarnia przez długi okres nie była
            udostępniona turystom, ale po remoncie kapitalnym w 2006 roku znów
            można ją zwiedzać.
          </p>
        </article>
      )}
    </>
  );
};

export default DarłowoHistory;
