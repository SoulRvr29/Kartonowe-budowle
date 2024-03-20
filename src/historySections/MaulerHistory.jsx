import SectionHeader from "../components/SectionHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MaulerHistory = ({ id }) => {
  const [sectionState, setSectionState] = useState(true);
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = ["/models/mauler/mauler-photo1.webp"];
  const photosTitle = [""];
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
          loadingElement={<div className="loader"></div>}
        >
          <article className="px-8 max-sm:px-4">
            <p>
              <span className="first-letter">M</span>auler to postać z uniwersum
              Gears of War. Jest to wariant Boomera, wyposażony w tarczę
              (Boomshield) i rogaty hełm, które razem zapewniają mu znaczną
              osłonę przed ogniem wroga. Gracz może również używać jego tarczy.
              Maulerzy noszą wybuchowy cep, który jest zabójczy na bliskie
              odległości. Po otrzymaniu obrażeń rozkładają tarczę co utrudnia
              ich trafienie.
            </p>
            <PhotoView src={photosSrc[0]}>
              <LazyLoadImage
                className="mx-auto max-w-xl"
                src={photosSrc[0]}
                alt="mauler"
                title={photosTitle[0]}
              />
            </PhotoView>
          </article>
        </PhotoProvider>
      )}
    </>
  );
};

export default MaulerHistory;
