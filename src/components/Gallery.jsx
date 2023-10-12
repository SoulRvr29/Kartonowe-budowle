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

  return (
    <section className="px-8  select-none">
      <h3 className="font-bold">
        {" "}
        <button
          className="hover:underline"
          onClick={() =>
            setGalleryState(galleryState === "off" ? "day" : "off")
          }
        >
          Galeria
        </button>
        <button
          onClick={() => {
            setGalleryState(galleryState === "day" ? "night" : "day");
          }}
        >
          {galleryState === "day" && (
            <>
              <span>&nbsp;/ </span>
              <span className="text-accent-3 hover:underline">dzień</span>
            </>
          )}{" "}
          {galleryState === "night" && (
            <>
              <span>&nbsp;/ </span>
              <span className="text-accent hover:underline">noc</span>
            </>
          )}
        </button>
      </h3>

      <hr />
      {/* thumbials */}

      <div className="gallery relative flex gap-5 py-4 flex-wrap justify-center ">
        {galleryState === "day" &&
          dayPhotos.map((loc) => {
            return (
              <button
                key={loc}
                onClick={(e) => {
                  setFullPhotoState(true);
                  setPhotoId(e.target.attributes.value.value);
                }}
                className="z-10"
              >
                <img
                  value={loc.slice(-6, -4)}
                  className="h-[10rem] border-2 border-accent-3 rounded-xl hover:border-accent-2  hover:brightness-110 hover:scale-105 transition-all"
                  src={loc}
                  alt={model.name + " photo"}
                />
              </button>
            );
          })}
      </div>
      <div className="gallery h20 flex gap-5 p-4 flex-wrap justify-center">
        {galleryState === "night" &&
          nightPhotos.map((loc) => {
            return (
              <button
                key={loc}
                onClick={(e) => {
                  setFullPhotoState(true);
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

      {/* FULL SIZE PHOTO GALLERY */}
      {fullPhotoState === true && (
        <div
          onClick={() => setFullPhotoState(false)}
          className="full-size fixed w-full h-full overflow-auto  bg-black top-0 left-0 z-30 bg-opacity-40 grid place-content-center"
        >
          {/* ICON CONTAINER */}
          <div className="w-full grid max-w-6xl place-self-center mx-auto h-full absolute">
            {/* close icon medium*/}
            {photoSize == false ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 384 512"
                  fill="white"
                  className="hover:cursor-pointer fixed justify-self-end hover:bg-accent-2 rounded-full  aspect-square p-[2px] bg-accent drop-shadow-lg border-2  m-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullPhotoState(false);
                  }}
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
                {/* left icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 320 512"
                  fill="white"
                  className="hover:cursor-pointer fixed hover:bg-accent-2 rounded-full  aspect-square p-[2px] bg-accent drop-shadow-lg border-2 top-1/2 ml-8"
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
                  height="2em"
                  viewBox="0 0 320 512"
                  fill="white"
                  className="hover:cursor-pointer fixed justify-self-end hover:bg-accent-2 rounded-full  aspect-square p-[2px] bg-accent drop-shadow-lg border-2 top-1/2 mr-8"
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
              </>
            ) : (
              // close icon full
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 384 512"
                  fill="white"
                  className="hover:cursor-pointer fixed  hover:bg-accent-2 rounded-full  aspect-square p-[2px] bg-accent drop-shadow-lg border-2 z-40 top-8 right-12"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullPhotoState(false);
                  }}
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
                {/* left icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 320 512"
                  fill="white"
                  className="hover:cursor-pointer z-40 fixed hover:bg-accent-2 rounded-full  aspect-square p-[2px] bg-accent drop-shadow-lg border-2 top-1/2 left-8"
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
                  height="2em"
                  viewBox="0 0 320 512"
                  fill="white"
                  className="hover:cursor-pointer z-40 fixed justify-self-end hover:bg-accent-2 rounded-full  aspect-square p-[2px] bg-accent drop-shadow-lg border-2 top-1/2 right-12"
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
              </>
            )}
          </div>
          <button
            className="grid"
            onClick={(e) => {
              e.stopPropagation();
              setPhotoSize(!photoSize);
            }}
          >
            {/* MEDIUM WIDTH */}
            {photoSize === false ? (
              <div className="grid z-30">
                <img
                  className="w-full max-w-4xl max-h-screen "
                  src={
                    galleryState === "day"
                      ? model.photos.day.full + photoId + ".jpg"
                      : model.photos.night.full + photoId + ".jpg"
                  }
                  alt={"photo" + photoId}
                />
              </div>
            ) : (
              // FULL WIDTH
              <div className="grid z-30">
                <img
                  className="w-full "
                  src={
                    galleryState === "day"
                      ? model.photos.day.full + photoId + ".jpg"
                      : model.photos.night.full + photoId + ".jpg"
                  }
                  alt={"photo" + photoId}
                />
              </div>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
