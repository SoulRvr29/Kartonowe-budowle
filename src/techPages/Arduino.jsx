import TechHeader from "../components/TechHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";

const Article = () => {
  useEffect(() => {
    document.title = "Arduino - Kartonowe budowle";
  }, []);

  return (
    <>
      <TechHeader title="Programowanie Arduino" />
      <PhotoProvider
        overlayRender={({ index }) => {
          return (
            <div
              className={
                "photo-description absolute bottom-0 text-center w-full z-30 p-3 bg-black bg-opacity-40 text-text-light " +
                (!document.querySelectorAll(`article img`)[index] && " hidden")
              }
            >
              {document.querySelectorAll(`article img`)[index] &&
                document.querySelectorAll(`article img`)[index].title}
            </div>
          );
        }}
        maskOpacity={0.5}
        maskClassName="backdrop-blur-sm"
        loadingElement={<div className="loader"></div>}
      >
        <article>
          <PhotoView src="/techSections/arduino/full-res/Arduino_Logo.png">
            <LazyLoadImage
              className="mx-auto max-h-40 max-w-[10rem] brightness-50 dark:brightness-100 "
              src="/techSections/arduino/full-res/Arduino_Logo.png"
              alt="logo Arduino"
              title="logo Arduino"
            />
          </PhotoView>
          <p>
            Arduino to niewielka płytka drukowana z mikroprocesorem i szeregiem
            złącz, którą można zaprogramować. Używa się do tego aplikacji{" "}
            <a href="https://www.arduino.cc/en/software" target="_blank">
              Arduino IDE
            </a>
            , a program wgrywa się podłączając płytkę przez port USB do
            komputera. Język programowania w Arduino bazuje na języku C/C++.
          </p>
          <h4>Rodzaje płytek Arduino</h4>
          <p>
            Istnieje wiele rodzajów płytek Arduino. Podstawowy model to{" "}
            <b>Arduino UNO</b> (76mm / 57mm) który ma gniazdo USB typu B
            (drukarkowe) i gniazdo zasilania DC. <b>Arduino NANO</b> (45mm /
            18mm) to bardzo podobna pomniejszona wersja bez gniazda DC i z
            mniejszym gniazdem USB (zazwyczaj micro lub mini). Są też wersje jak{" "}
            <b>Arduino MICRO</b> - jeszcze bardziej pomniejszona wersja, z
            mniejszą ilością pinów, <b>Arduino MEGA</b> - bardziej rozbudowana
            wersja, z dużo większą ilością pinów i wiele innych.
          </p>
          <div className="flex gap-4 justify-evenly items-center max-md:flex-col">
            <PhotoView src="/techSections/arduino/full-res/Arduino_UNO.png">
              <LazyLoadImage
                className="max-w-[18rem] max-h-[20rem]"
                src="/techSections/arduino/full-res/Arduino_UNO.png"
                alt="Arduino UNO"
                title="Arduino UNO"
              />
            </PhotoView>
            <PhotoView src="/techSections/arduino/full-res/Arduino_NANO.png">
              <LazyLoadImage
                className="max-w-[12rem] max-h-[7rem]"
                src="/techSections/arduino/full-res/Arduino_NANO.png"
                alt="Arduino NANO"
                title="Arduino NANO"
              />
            </PhotoView>
          </div>
          <p>
            Do większych modeli moim zdaniem najlepiej nadaje się{" "}
            <b>Arduino NANO</b>, które ma właściwie całą funkcjonalność
            podstawowego Arduino. Ale co jeśli Arduino NANO jest za duże by je
            zmieścić w modelu np. latarni morskiej? Wtedy można wykorzystać
            mikrokontrolery takie jak <b>ATtiny85</b> na które można wgrać
            program poprzez Arduino. <b>ATtiny85</b> ma tylko kilka pinów i
            mniej pamięci, ale w zupełności wystarczy do zaprogramowania np.
            migającej diody.
          </p>
          <PhotoView src="/techSections/arduino/full-res/tiny85.png">
            <LazyLoadImage
              className="mx-auto max-w-[8rem] max-h-[8rem]"
              src="/techSections/arduino/full-res/tiny85.png"
              alt="Arduino NANO"
              title="Arduino NANO"
            />
          </PhotoView>
        </article>
      </PhotoProvider>
    </>
  );
};

export default Article;
