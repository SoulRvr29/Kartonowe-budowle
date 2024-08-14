import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SandomierzHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/sandomierz/sandomierz-photo-1.jpg",
    "models/sandomierz/sandomierz-photo-2.jpg",
  ];
  const photosTitle = ["Ratusz w roku 1899", "Ratusz obecnie"];
  /////////////////////////////////////////////////////////////////
  return (
    <>
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
          loadingElement={<div class="loader"></div>}
        >
          <article className="px-8 max-sm:px-4">
            <p>
              <span className="first-letter font-playfair">B</span>
              udynek wzniesiony w 1349 r. - wkrótce po najeździe Litwinów.
              Pierwotnie gotycki, był budowlą na planie kwadratu zwieńczoną
              wysoką, ośmioboczną wieżą. Część południowa, najstarsza (na niej
              zegar słoneczny) pochodzi z tego okresu. W XVI w. został
              rozbudowany w formę wydłużonego prostokąta, a następnie zwieńczony
              attyką trójstrefową, której autorstwo przypisywane jest Janowi
              Marii Padovano. Naroża attyki zdobią głowy przedstawiające cztery
              stany. Wieża została dobudowana w XVII wieku.
            </p>
            <p>
              Na ścianie południowej ratusza znajduje się zegar słoneczny
              wykonany w technice sgraffito przez Tadeusza Przypkowskiego
              (1958), byłego właściciela muzeum zegarów w Jędrzejowie. Od strony
              wschodniej przed ratuszem znajduje się figura Matki Boskiej
              Niepokalanej z 1776 r. ustawiona na pamiątkę misji świętej w 1770
              r.
            </p>
            <p>
              W ratuszu mieści się Urząd Stanu Cywilnego, w podziemiach klub
              „Lapidarium”. Obok znajduje się wyjście z trasy podziemnej.
            </p>
            <p>
              O godzinie 12.00 z wieży ratuszowej grany jest hejnał
              sandomierski.
            </p>{" "}
            <div className="flex flex-wrap justify-center gap-x-8">
              <PhotoView src={photosSrc[0]}>
                <LazyLoadImage
                  className="max-h-[25rem]"
                  src={photosSrc[0]}
                  alt="ratusz"
                  title={photosTitle[0]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[25rem]"
                  src={photosSrc[1]}
                  alt="ratusz"
                  title={photosTitle[1]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Ratusz_w_Sandomierzu"
                target="_blank"
              >
                wikipedia
              </a>
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default SandomierzHistory;
