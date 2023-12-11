import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import data from "../data/models-data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SopotHistory = ({ id }) => {
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
          {" "}
          <LazyLoadImage
            className=" max-h-[300px] pt-2 pr-8 float-left"
            src={src(1)}
            alt="Sopot"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
            title="Obecny wygląd latarni."
          />
          <p>
            <span className="first-letter font-playfair">W </span> &nbsp;1903
            roku w Sopocie wybudowano zakład balneologiczny, który istniał do II
            wojny światowej. Po zakończeniu działań wojennych obiekt przejęło
            miasto. Urządzono tam łaźnię. W 1956 roku budynek przekazano
            Szpitalowi Reumatologicznemu.
          </p>
          <p>
            Kiedy w 1975 roku zmodernizowano szpitalną kotłownię, dotychczas
            bardzo uciążliwy dymiący komin stał się zbędny. Przebudowano go i
            umieszczono na nim źródło światła. Początkowo światło to nie było
            uznawane za latarnię morską ze względu na niewielki zasięg (5 mil
            morskich), dopiero po zmianie urządzenia optyczno-świetlnego i
            uzyskaniu nominalnego zasięgu świetlnego ponad 17 mil morskich,
            stało się latarnią morską. Obecnie światło ma zasięg nominalny 7 mil
            morskich i formalnie nie jest już zaliczane do polskich latarni
            morskich.
          </p>
        </article>
      )}
    </>
  );
};

export default SopotHistory;
