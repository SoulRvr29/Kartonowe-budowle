import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import data from "../data/models-data.json";

const Falcon9History = ({ id }) => {
  const [historyState, setHistoryState] = useState(true);
  const [prop, setProp] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const photo = data.filter((item) => item.id == id)[0].photo;
  const src = (nr) => {
    return photo + nr + ".jpg";
  };
  return (
    <>
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />
      {fullScreen === true && (
        <FullScreen prop={prop} setFullScreen={setFullScreen} />
      )}
      {historyState === true && (
        <article className="px-8">
          <h4>Rakieta Falcon 9</h4>
          <p>
            <span className="first-letter font-playfair">R</span>odzina
            dwustopniowych rakiet nośnych, zaprojektowana i wyprodukowana przez
            amerykańską firmę SpaceX, przeznaczona do wynoszenia ładunków na
            orbitę, misji bezzałogowych i załogowych do Międzynarodowej Stacji
            Kosmicznej. Napędzana mieszaniną ciekłego tlenu (LOX) i nafty
            (RP-1). Obecnie jest to jedyna rakieta zdolna do wyniesienia
            satelity, której pierwszy stopień może wylądować i być użyty
            ponownie. Podobnie jak Falcon 1 rakieta używa silników Merlin 1.
            Początkowo były to silniki w wersji 1C, które później zastąpiono
            nowszymi wersjami silnika.
          </p>
          <img
            className="mx-auto  max-w-4xl hover:cursor-pointer"
            src={src(2)}
            alt="Rodzina rakiet Falcon."
            title="Rodzina rakiet Falcon."
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />
          <h4>Misja DM-2 (SpaceX Demonstration Mission 2)</h4>
          <p>
            <span className="first-letter font-playfair">D</span>ruga testowa
            misja orbitalna załogowej wersji kapsuły Dragon (ang. Smok) firmy
            SpaceX. Była pierwszą misją załogową należącą do prowadzonego przez
            NASA programu lotów na Międzynarodową Stację Kosmiczną przy pomocy
            pojazdów partnerów komercyjnych (Commercial Crew Program) i
            pierwszym załogowym lotem kosmicznym z terytorium USA od czasu
            ostatniej misji programu wahadłowców, STS-135.
          </p>
          <img
            className="mx-auto hover:cursor-pointer"
            src={src(1)}
            alt="Start rakiety Falcon 9."
            title="Start rakiety Falcon 9."
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />
        </article>
      )}
    </>
  );
};

export default Falcon9History;
