import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DarłowoHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  ///////////////////////// PHOTOS DATA /////////////////////////

  const photosSrc = [
    "models/latarnie morskie/darlowo/darłowo-photo-1.jpg",
    "models/latarnie morskie/darlowo/darłowo-photo-2.jpg",
    "models/latarnie morskie/darlowo/darłowo-photo-3.jpg",
  ];
  const photosTitle = ["Latarnia Darłowo około 1900-1903 roku", "", ""];

  /////////////////////////////////////////////////////////////////
  return (
    <>
      {" "}
      <SectionHeader
        sectionName="Historia"
        sectionState={sectionState}
        setSectionState={setSectionState}
      />
      {sectionState === true && (
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
          <article className="px-8 max-sm:px-4">
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="pr-8 pt-0 float-left max-w-[500px]"
                src={photosSrc[0]}
                alt="Latarina Darłowo"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              <span className="first-letter">W</span> marcu 1715 roku nakazano
              ustawienie świateł nawigacyjnych po obu stronach ujścia Wieprzy,
              ale dopiero po ponad stu latach wybudowano stację pilotów z 6
              metrową wieżą. W 1885 roku stanął na wschodnim brzegu nieduży
              parterowy budynek z czerwonej licowanej cegły z kwadratową wieżą,
              w której mieszkał latarnik dbający o to, by lampa na latarni
              świeciła stałym czerwonym światłem o zasięgu 6 Mm. Źródłem światła
              była soczewka IV klasy umieszczona w oknie na wysokości 12 metrów,
              która w 1899 roku zmieniono na soczewkę VI kasy a pięć lat później
              spis świateł informuje o zmianie charakterystyki światła na białe,
              przerywane.
            </p>
            <p>
              W 1927 roku wieżę latarni podwyższono o jedną kondygnację, na
              której zbudowano galeryjkę i laternę z białą kopułą. Do dnia
              dzisiejszego tak właśnie wygląda latarnia morska w Darłowie,
              zmieniały się tylko z latami źródła światła. Obecnie używana jest
              „żarówka o mocy 500 W, umieszczona w pół cylindrycznej soczewce.
              Całkowita wysokość latarni wynosi 23 metry a zasięg światła 15 Mm.
            </p>
            <p>
              Lokalizacja darłowskiej latarni jest bardzo niekorzystna ze
              względu na warunki hydrologiczne. Jesienią i zimą w czasie
              sztormów jest zalewany cały budynek a zimą ściana od strony morza
              jest skuta lodem. Spowodowało to konieczność umocnienia północnej
              ściany, która obmurowana dodatkową warstwą cegieł i otynkowana
              tynkiem cementowo – wapiennym, ma imponująca grubość 54
              centymetrów. Z powodu nawilgocenie i zasolenia murów latarnia
              przez długi okres nie była udostępniona turystom, ale po remoncie
              kapitalnym w 2006 roku znów można ją zwiedzać.
            </p>
            <div className="article-div">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[25rem]"
                  src={photosSrc[1]}
                  alt="Latarnia Darłowo"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[25rem]"
                  src={photosSrc[2]}
                  alt="Latarnia Darłowo"
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default DarłowoHistory;
