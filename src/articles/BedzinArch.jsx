import SectionHeader from "../components/SectionHeader";
import FullScreen from "../components/FullScreen";
import { useState } from "react";
import data from "../data/models-data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BedzinArch = ({ id }) => {
  const [architectureState, setArchitectureState] = useState(true);
  const [prop, setProp] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const photo = data.filter((item) => item.id == id)[0].photo;
  const src = (nr) => {
    return photo + nr + ".jpg";
  };

  return (
    <>
      <SectionHeader
        sectionName="Architektura"
        sectionState={architectureState}
        setSectionState={setArchitectureState}
      />
      {fullScreen === true && (
        <FullScreen prop={prop} setFullScreen={setFullScreen} />
      )}
      {architectureState === true && (
        <article className="px-8">
          <LazyLoadImage
            className="pr-8 float-left max-w-xs"
            src={src(3)}
            alt="będzin"
            title="Ekipa odbudowująca zamek w Będzinie w 1953; drugi od prawej w szeregu stojących Roman Romański – wojewódzki konserwator zabytków w Katowicach w latach 1954–1961"
            onClick={(e) => {
              setProp(e);
              setFullScreen(true);
            }}
          />
          <p>
            Zamek założono na pozostałościach wczesnośredniowiecznego grodu
            istniejącego od XI do XIII w., na wzniesieniu na lewym brzegu
            Czarnej Przemszy. Początkowo założenie to stanowiła cylindryczna
            wieża o średnicy 10,7 m wzniesiona z miejscowego kamienia w
            północno-wschodniej części wzgórza zamkowego. Wejście do niej
            znajdowało się w trzeciej, z istniejących czterech kondygnacji.
            Kolejnym etapem rozbudowy zamku było wzniesienie
            pięciokondygnacyjnej wieży na planie zbliżonym do kwadratu o
            wymiarach 9 × 8,5 m, do której nieco później dobudowano budynek
            mieszkalny o czterech kondygnacjach, przez który prawdopodobnie
            prowadziło wejście do zamku. Inna koncepcja opierająca się na widoku
            przedstawiającym zamek na weducie Gerunga, stanowi że nie było
            wyodrębnionej widocznej dziś kwadratowej wieży, lecz że część
            zajmująca wieżę i budynek była tej samej wysokości i była przykryta
            jednym dachem (kasztel). Dziedziniec pierwotnie był położony o ok. 2
            metry niżej niż obecnie.
          </p>
          <p>
            Mury zamku w Będzinie wzniesiono techniką „opus emplectum”, która
            polega na murowaniu zewnętrznej i wewnętrznej części muru z
            ociosanych bloków kamiennych (czasem z cegieł) łączonych zaprawą
            wapienną i wypełnianiu przestrzeni między nimi kruszonym kamieniem
            zalanym także zaprawą wapienną (tzw. rumosz). Podstawowym elementem
            murowym stosowanym do wzniesienia zamku był dolomitowy kamień
            łamany.
          </p>
          <p>
            Zamek górny otaczały dwa przedzielone bramami mury obwodowe,
            pomiędzy którymi wiodła droga prowadząca na dziedziniec. Istniejący
            dziś jedynie w formie resztek fundamentów zamek dolny znajdował się
            na zachód od zamku – posiadał dodatkowy mur obronny, czworoboczną
            basztę i bramę wychodzącą na północ.
          </p>
        </article>
      )}
    </>
  );
};
export default BedzinArch;
