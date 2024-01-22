import SectionHeader from "../components/SectionHeader";
import ArticleGallery from "../components/ArticleGallery";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StarshipSN15History = ({ id }) => {
  const [historyState, setHistoryState] = useState(true);

  ///////////////////////// PHOTOS SCRIPTS /////////////////////////
  const [photoIndex, setPhotoIndex] = useState(null);
  const photosSrc = ["models/starship sn15/starship sn15-photo1.jpg"];
  const photosTitle = ["Prototyp SN15 na stanowisku startowym"];
  const photoClickHandler = (e) => {
    setPhotoIndex(photosSrc.indexOf(e.target.getAttribute("src")));
    document.querySelector("body").classList.add("site-overflow");
  };
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />
      <ArticleGallery
        photosSrc={photosSrc}
        photosTitle={photosTitle}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      {historyState === true && (
        <article className="px-8">
          <LazyLoadImage
            className="pr-8 float-left hover:cursor-pointer"
            src={photosSrc[0]}
            alt="starship sn15"
            title={photosTitle[0]}
            onClick={(e) => {
              photoClickHandler(e);
            }}
          />
          <p>
            <span className="first-letter font-playfair">S</span>tarship to
            statek kosmiczny obecnie opracowywany przez amerykańską firmę
            lotniczą SpaceX. Ułożony na szczycie boostera o nazwie Super Heavy,
            tworzy superciężki pojazd kosmiczny o identycznej nazwie Starship.
            Statek kosmiczny został zaprojektowany do transportu zarówno załogi,
            jak i ładunku do różnych miejsc docelowych, w tym na orbitę Ziemi,
            Księżyc, Marsa i potencjalnie dalej. Ma on umożliwić długotrwałe
            loty międzyplanetarne dla załogi liczącej do 100 osób.
          </p>
          <p>
            W prototypie SN15 wprowadzono ulepszone oprogramowanie awioniki,
            zaktualizowaną architekturę paliwa na rufie oraz nowy projekt i
            konfigurację Raptora. Kolejną nowością była antena Starlink
            umieszczona z boku pojazdu. SN15 przeszedł próbę ciśnieniową w
            temperaturze otoczenia (9 kwietnia), próbę kriogeniczną (12
            kwietnia) i próbę kriogeniczną zbiornika górnego (13 kwietnia).
            Następnie nastąpił test statyczny (26 kwietnia) i test statyczny
            zbiornika górnego (27 kwietnia). Próbę w locie na dużej wysokości 10
            km (33 000 stóp) przeprowadzono przy pochmurnej pogodzie 5 maja,
            uzyskując miękkie przyziemienie. Mały pożar w pobliżu bazy został
            opanowany wkrótce po wylądowaniu. Po usunięciu silników 31 maja
            został wycofany ze służby jako pierwszy prototyp statku kosmicznego,
            który latał, lądował i został odzyskany. Prototyp zajął swoje
            miejsce w Rocket Garden. 26 lipca 2023 roku SN15 został zezłomowany.
          </p>
        </article>
      )}
    </>
  );
};

export default StarshipSN15History;
