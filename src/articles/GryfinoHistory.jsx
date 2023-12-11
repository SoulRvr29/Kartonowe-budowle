import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import data from "../data/models-data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GryfinoHistory = ({ id }) => {
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
          <LazyLoadImage
            className="pr-8 pt-2 float-left hover:cursor-pointer"
            src={src(1)}
            alt="Kościół w gryfinie"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />
          <p>
            <span className="first-letter font-playfair">W</span>
            edług szczecińskiego historyka sztuki Wojciecha Łopucha początek
            budowy świątyni miał miejsce w 1278 roku, w którym książę Barnim I
            przekazał patronat nad świątynią kościołowi Mariackiemu w
            Szczecinie. Dla piszącego w latach pięćdziesiątych ubiegłego wieku
            Zygmunta Świechowskiego data ta oznaczała zakończenie budowy całej
            świątyni. Wojciech Łopuch ufundowanie ołtarza w 1300 roku wiąże z
            zakończeniem budowy części wschodniej świątyni, czyli prezbiterium i
            transeptu. Partie te zostały wybudowane z ciosów kamiennych z
            dodatkiem cegły w detalach architektonicznych.
          </p>
          <p>
            Drugi etap budowy zapewne został zakończony w 1325 roku, kiedy to
            książę Otton I ofiarował drugi ołtarz. Wybudowany miał wtedy zostać
            z cegły korpus bazylikowy, o trzech nawach i jednym przęśle oraz
            kamienna w dolnej części wieża zachodnia. O istnieniu w tamtym
            okresie układu bazylikowego (nawy boczne są obniżone w stosunku do
            nawy głównej) świadczą okna w górnej części elewacji nawy głównej,
            widoczne obecnie na strychu świątyni.
          </p>
          <p>
            Trzeci etap budowy to epoka późnego gotyku, czyli XV stulecie.
            Zostały podwyższone wtedy nawy boczne do wysokości nawy głównej
            (dzięki temu powstał układ halowy) oraz zostały założone sklepienia
            gwiaździste (do tego czasu świątynia pokryta była drewnianym
            stropem).
          </p>
          <p>
            W XVI wieku świątynię przejęli protestanci. W czasach nowożytnych
            architektura świątyni zasadniczo nie uległa zmianie. Poważna
            restauracja miała miejsce w latach 1861 -63 pod kierunkiem
            architekta Buchterkircha, znanego z niezbyt udanych regotyzacji
            pomorskich świątyń. W 1938 roku został zmieniony średniowieczny
            stożek na wieży na kolidujący architekturą gotyku hełm neobarokowy.
            Od 1945 jest to ponownie świątynia katolicka.
          </p>
          <LazyLoadImage
            className="pr-8 pt-2 max-w-[700px] mx-auto hover:cursor-pointer"
            src={src(2)}
            alt="Kościół w gryfinie"
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

export default GryfinoHistory;
