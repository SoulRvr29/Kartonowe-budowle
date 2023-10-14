import modelsData from "../data/models-data.json";
import { useState } from "react";

const Gallery = (id) => {
  const model = modelsData[id.id];
  const dayMax = model.photos.day.quantity;
  const nightMax = model.photos.night.quantity;
  const daySrc = model.photos.day.thumb;
  const nightSrc = model.photos.night.thumb;
  let dayPhotos = [];
  let nightPhotos = [];

  const [photoSize, setPhotoSize] = useState(false);
  const [fullPhotoState, setFullPhotoState] = useState(false);
  const [photoId, setPhotoId] = useState(1);

  const [galleryState, setGalleryState] = useState("day");

  for (let i = 1; i <= dayMax; i++) {
    let nr = i;
    if (i < 10) nr = "0" + i;
    dayPhotos.push(daySrc + nr + ".jpg");
  }

  for (let i = 1; i <= nightMax; i++) {
    let nr = i;
    if (i < 10) nr = "0" + i;
    nightPhotos.push(nightSrc + nr + ".jpg");
  }
  // addEventListener("mousemove") (() => console.log("move"));
  return (
    <section className="gallery-cont px-8 select-none">
      <h3 className="font-bold flex">
        {" "}
        <button
          onClick={() => {
            setGalleryState(galleryState === "off" ? "day" : "off");
            galleryState === "off" &&
              document.querySelector(".gallery-cont").scrollIntoView();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.3rem"
            viewBox="0 0 512 512"
            fill="var(--accent-2)"
            className={
              galleryState === "off"
                ? "mr-2 mt-1 hover:scale-125 rotate-180"
                : "mr-2 mt-1 hover:scale-125"
            }
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </button>
        Galeria
        <button
          onClick={() => {
            nightMax != 0 &&
              setGalleryState(galleryState === "day" ? "night" : "day");
          }}
        >
          {galleryState === "day" && (
            <>
              <span>&nbsp;/ </span>
              <span className="text-accent-3 hover:underline">dzień</span>
            </>
          )}{" "}
          {galleryState === "night" && nightMax !== 0 && (
            <>
              <span>&nbsp;/ </span>
              <span className="text-accent hover:underline">noc</span>
            </>
          )}
        </button>
      </h3>

      <hr />
      {/* thumbials */}

      <div className="gallery relative flex gap-5  flex-wrap justify-center ">
        {galleryState === "day" && (
          <div className="p-4 gallery relative flex gap-5  flex-wrap justify-center ">
            {dayPhotos.map((loc) => {
              return (
                <button
                  key={loc}
                  onClick={(e) => {
                    setFullPhotoState(true);
                    document
                      .querySelector("body")
                      .classList.add("site-overflow");
                    setPhotoId(e.target.attributes.value.value);
                  }}
                  className="z-10"
                >
                  <img
                    value={loc.slice(-6, -4)}
                    className="h-[10rem] border-2 border-accent-3 rounded-xl hover:border-accent-2  hover:brightness-110 hover:scale-105 transition-all max-sm:max-w-[200px] max-sm:h-auto"
                    src={loc}
                    alt={model.name + " photo"}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div className="gallery h20 flex gap-5  flex-wrap justify-center">
        {galleryState === "night" && (
          <div className="gallery h20 flex gap-5 p-4 flex-wrap justify-center">
            {nightPhotos.map((loc) => {
              return (
                <button
                  key={loc}
                  onClick={(e) => {
                    setFullPhotoState(true);
                    document
                      .querySelector("body")
                      .classList.add("site-overflow");
                    setPhotoId(e.target.attributes.value.value);
                  }}
                >
                  <img
                    value={loc.slice(-6, -4)}
                    className="h-[10rem] border-2 border-accent rounded-xl hover:border-accent-2  hover:brightness-110 hover:scale-105 transition-all"
                    src={loc}
                    alt={model.name + " photo"}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* FULL SIZE PHOTO GALLERY */}
      {fullPhotoState === true && (
        <div
          onClick={() => {
            setFullPhotoState(false);
            document.querySelector("body").classList.remove("site-overflow");
          }}
          className="full-size fixed  w-full h-full overflow-auto bg-black top-0 left-0 z-30 bg-opacity-70 grid place-content-center  grid-rows-1 max-sm:place-content-start"
        >
          {/* ICON CONTAINER */}
          <div className="w-full grid max-w-6xl place-self-center mx-auto h-full absolute ">
            {/* close icon */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 384 512"
              fill="white"
              className={
                photoSize == false
                  ? "fixed hover:cursor-pointer hover:scale-125 transition-all drop-shadow-[0_0_5px_black] z-40 justify-self-end m-8 max-sm:justify-self-center"
                  : "fixed hover:cursor-pointer opacity-50 hover:scale-125 transition-all drop-shadow-[0_0_5px_black] z-40 top-14 right-20 max-sm:top-2 max-sm:right-3"
              }
              onClick={(e) => {
                e.stopPropagation();
                setPhotoSize(false);
                setFullPhotoState(false);
                document
                  .querySelector("body")
                  .classList.remove("site-overflow");
              }}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            {/* left icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 320 512"
              fill="white"
              className={
                photoSize == false
                  ? "gallery-icon icon-hidden fixed hover:cursor-pointer hover:scale-125 transition-all drop-shadow-[0_0_5px_black] z-40 top-1/2 ml-8 max-sm:top-auto max-sm:bottom-8"
                  : "fixed hover:cursor-pointer opacity-50 hover:scale-125 transition-all drop-shadow-[0_0_5px_black] z-40 top-1/2 left-16 max-sm:left-4"
              }
              onClick={(e) => {
                e.stopPropagation();
                let nr = Number.parseInt(photoId);
                if (nr > 1) nr--;
                if (nr < 10) nr = "0" + nr;
                setPhotoId(nr);
              }}
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>

            {/* right icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 320 512"
              fill="white"
              className={
                photoSize == false
                  ? "fixed hover:cursor-pointer hover:scale-125 transition-all drop-shadow-[0_0_5px_black] z-40 justify-self-end top-1/2 mr-8 max-sm:top-auto max-sm:bottom-8"
                  : "fixed hover:cursor-pointer opacity-50 hover:scale-125 transition-all drop-shadow-[0_0_5px_black] z-40 top-1/2 right-20 max-sm:right-4"
              }
              onClick={(e) => {
                e.stopPropagation();
                let nr = Number.parseInt(photoId);
                let max = galleryState === "day" ? dayMax : nightMax;
                if (nr < max) nr++;
                if (nr < 10) nr = "0" + nr;
                setPhotoId(nr);
              }}
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </div>
          <button
            className="grid max-sm:w-max"
            onClick={(e) => {
              e.stopPropagation();
              setPhotoSize(!photoSize);
            }}
          >
            {/* IMG CONTAINER medium-w-false / full-w-true */}
            <div className="medium-width grid z-30 mx-auto place-self-center ">
              <img
                className={
                  photoSize === false
                    ? "w-full max-w-4xl max-h-[85vh] border-4 border-accent-2 max-sm:w-screen"
                    : "w-full max-sm:h-screen max-sm:w-auto"
                }
                src={
                  galleryState === "day"
                    ? model.photos.day.full + photoId + ".jpg"
                    : model.photos.night.full + photoId + ".jpg"
                }
                alt={"photo" + photoId}
              />
              {/* photo number */}
              <span
                className={
                  photoSize === false
                    ? "fixed bottom-4 text-2xl drop-shadow-[0_0_3px_black]  left-[calc(50%-40px)] z-40 border-2 px-2 pb-1 rounded-xl border-accent-3 text-accent-3 max-sm:top-auto max-sm:bottom-9"
                    : "fixed bottom-4 text-3xl drop-shadow-[0_0_3px_black]  left-[calc(50%-48px)] z-40 border-2 px-2 pb-1 rounded-xl border-accent-3 text-accent-3 opacity-60 max-sm:top-auto max-sm:bottom-4"
                }
              >
                {(photoId < 10 ? photoId[1] : photoId) +
                  " / " +
                  (galleryState === "day"
                    ? dayMax
                    : galleryState === "night"
                    ? nightMax
                    : "")}
              </span>
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
