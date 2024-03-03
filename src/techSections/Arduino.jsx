import TechHeader from "../components/TechHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Article = () => {
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "/techSections/arduino/Arduino_Logo.png",
    "/techSections/arduino/Arduino_UNO.png",
    "/techSections/arduino/Arduino_NANO.png",
  ];
  const photosTitle = ["logo Arduino", "Arduino UNO", "Arduino NANO"];
  /////////////////////////////////////////////////////////////////
  return (
    <>
      <TechHeader title="Programowanie Arduino" />
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
        <article>
          <PhotoView src={photosSrc[0]}>
            <LazyLoadImage
              className="mx-auto max-h-40 max-w-[10rem] brightness-50 dark:brightness-100 "
              src={photosSrc[0]}
              alt={photosTitle[0]}
              title={photosTitle[0]}
            />
          </PhotoView>
          Arduino to niewielka płytka drukowana z mikroprocesorem i szeregiem
          złącz, którą można dowolnie programować. Do programowania używa się
          aplikacji{" "}
          <a href="https://www.arduino.cc/en/software" target="_blank">
            Arduino IDE
          </a>
          , a program wgrywa się podłączając płytkę przez port USB do komputera.
          Język programowania którego się używa bazuje na języku C/C++.
          <h4 className="mt-4">Rodzaje płytek Arduino</h4>
          Jest wiele różnych rodzajów płytek, bardziej lub mniej rozbudowanych,
          najpopularniejszą jest Arduino UNO
          <div className="flex gap-4 justify-evenly items-center max-md:flex-col">
            <PhotoView src={photosSrc[1]}>
              <LazyLoadImage
                className="max-w-[18rem] max-h-[20rem]"
                src={photosSrc[1]}
                alt={photosTitle[1]}
                title={photosTitle[1]}
              />
            </PhotoView>
            <PhotoView src={photosSrc[2]}>
              <LazyLoadImage
                className="max-w-[12rem] max-h-[7rem]"
                src={photosSrc[2]}
                alt={photosTitle[2]}
                title={photosTitle[2]}
              />
            </PhotoView>
          </div>
        </article>
      </PhotoProvider>
    </>
  );
};

export default Article;
