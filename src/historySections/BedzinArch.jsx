import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BedzinArch = ({ id }) => {
  const [architectureState, setArchitectureState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/bedzin/bedzin-arch.jpg"];
  const photosTitle = [
    "Ekipa odbudowująca zamek w Będzinie w 1953; drugi od prawej w szeregu stojących Roman Romański – wojewódzki konserwator zabytków w Katowicach w latach 1954–1961",
  ];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <SectionHeader
        sectionName="Architektura"
        sectionState={architectureState}
        setSectionState={setArchitectureState}
      />

      {architectureState === true && (
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
          loadingElement={<div className="loader"></div>}
        >
          <article className="px-8">
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="pr-8 float-left max-w-xs"
                src={photosSrc[0]}
                alt="photo"
                title={photosTitle[0]}
              />
            </PhotoView>
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
              prowadziło wejście do zamku. Inna koncepcja opierająca się na
              widoku przedstawiającym zamek na weducie Gerunga, stanowi że nie
              było wyodrębnionej widocznej dziś kwadratowej wieży, lecz że część
              zajmująca wieżę i budynek była tej samej wysokości i była
              przykryta jednym dachem (kasztel). Dziedziniec pierwotnie był
              położony o ok. 2 metry niżej niż obecnie.
            </p>
            <p>
              Mury zamku w Będzinie wzniesiono techniką „opus emplectum”, która
              polega na murowaniu zewnętrznej i wewnętrznej części muru z
              ociosanych bloków kamiennych (czasem z cegieł) łączonych zaprawą
              wapienną i wypełnianiu przestrzeni między nimi kruszonym kamieniem
              zalanym także zaprawą wapienną (tzw. rumosz). Podstawowym
              elementem murowym stosowanym do wzniesienia zamku był dolomitowy
              kamień łamany.
            </p>
            <p>
              Zamek górny otaczały dwa przedzielone bramami mury obwodowe,
              pomiędzy którymi wiodła droga prowadząca na dziedziniec.
              Istniejący dziś jedynie w formie resztek fundamentów zamek dolny
              znajdował się na zachód od zamku – posiadał dodatkowy mur obronny,
              czworoboczną basztę i bramę wychodzącą na północ.
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};
export default BedzinArch;
