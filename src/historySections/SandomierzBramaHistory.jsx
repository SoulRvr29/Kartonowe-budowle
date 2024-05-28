import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SandomierzHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );

  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["models/sandomierz/sandomierz-photo-3.jpg"];
  const photosTitle = ["Brama Opatowska"];
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
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="pr-8 float-left max-h-[20rem]"
                src={photosSrc[0]}
                alt="brama"
                title={photosTitle[0]}
              />
            </PhotoView>
            <p className="pt-2">
              <span className="first-letter font-playfair">B</span>rama
              Opatowska – gotycka brama wjazdowa z 2 poł. XIV w. w Sandomierzu.
              Zbudowana z fundacji Kazimierza Wielkiego jako część murów
              obronnych miasta. W XVI w. została zwieńczona renesansową attyką
              ufundowaną przez sandomierskiego lekarza Stanisława Bartolona.
            </p>
            <p>
              W czasie powstania styczniowego 8 lutego 1863 r. miał tu miejsce
              dramatyczny epilog bitwy pod Słupczą. Uchodzący z pola bitwy
              rozgromieni powstańcy próbowali stawiać opór na barykadzie
              wzniesionej w Bramie Opatowskiej. Została ona jednak zdobyta już
              przy pierwszym ataku ścigających ich Kozaków.
            </p>
            <p>
              Jest jedyną zachowaną bramą spośród czterech, które prowadziły
              niegdyś do Sandomierza. Poza Opatowską do miasta prowadziły
              jeszcze bramy: Zawichojska, Lubelska i Krakowska oraz dwie furty,
              spośród których zachowała się jedna – Dominikańska, nazywana Uchem
              Igielnym.
            </p>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default SandomierzHistory;
