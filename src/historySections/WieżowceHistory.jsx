import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MiG29History = ({ id }) => {
  const [historyState, setHistoryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "models/wiezowce/wiezowce-photo1.jpg",
    "models/wiezowce/wiezowce-photo2.jpg",
    "models/wiezowce/wiezowce-photo3.jpg",
  ];
  const photosTitle = [
    "New York World Building",
    "Chrysler Building w 1932 roku",
    "Empire State Building w 1932 roku. Antena na budynku została zainstalowana 21 lat później, w 1953 roku.",
  ];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <SectionHeader
        sectionName="Historia"
        sectionState={historyState}
        setSectionState={setHistoryState}
      />

      {historyState === true && (
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
            <span className="first-letter font-playfair">H</span>
            <p>
              istoria drapaczy chmur w Nowym Jorku rozpoczęła się wraz z
              oddaniem do użytku World Building w 1890 roku; konstrukcja miała
              wysokość 106 metrów. Mimo że nie był to pierwszy wieżowiec w
              mieście, World Building stanowił pierwszy budynek, który
              przewyższył 87–metrowy Trinity Church. World Building, najwyższy
              budynek w Nowym Jorku do roku 1899, został wyburzony w 1955 roku,
              by zrobić miejsce dla powiększenia wjazdu na Brooklyn Bridge.
            </p>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto max-h-[20rem]"
                src={photosSrc[0]}
                alt="New York World Building"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p>
              Nowy Jork odegrał znaczącą rolę w rozwoju wieżowców; od 1890 roku,
              jedenaście struktur w mieście dzierżyło tytuły najwyższych
              budynków świata. Nowy Jork został bardzo wcześnie opanowany przez
              boom na drapacze chmur, który narodził się na początku lat 10. XX
              wieku i trwał do lat 30. XX wieku. W tym okresie powstało 16 z 82
              najwyższych budynków w mieście, a w tym Bank of Manhattan Trust
              Building, Chrysler Building i Empire State Building. Każdy z nich
              w momencie ukończenia był najwyższą strukturą na świecie.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8">
              <PhotoView src={photosSrc[1]}>
                <LazyLoadImage
                  className="max-h-[30rem] min-w-max max-md:min-w-full"
                  src={photosSrc[1]}
                  alt="Chrysler Building w 1932 roku"
                  title={photosTitle[1]}
                />
              </PhotoView>
              <PhotoView src={photosSrc[2]}>
                <LazyLoadImage
                  className="max-h-[30rem] "
                  src={photosSrc[2]}
                  alt="Empire State Building w 1932 roku. Antena na budynku została zainstalowana 21 lat później, w 1953 roku."
                  title={photosTitle[2]}
                />
              </PhotoView>
            </div>
            <p className="opacity-75 m-0">
              Źródło:{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Lista_najwy%C5%BCszych_budynk%C3%B3w_w_Nowym_Jorku"
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

export default MiG29History;
