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

  const [galleryState, setGalleryState] = useState("day");

  for (let i = 1; i <= dayMax; i++) {
    dayPhotos.push(daySrc + i + ".jpg");
  }

  for (let i = 1; i <= nightMax; i++) {
    nightPhotos.push(nightSrc + i + ".jpg");
  }

  return (
    <section className="px-8  ">
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
      {galleryState === "day" && (
        <div className="gallery relative flex gap-5 py-4 flex-wrap justify-center ">
          {dayPhotos.map((loc) => {
            return (
              <button className="z-10">
                <img
                  className="h-[10rem] border-2 border-accent-3 rounded-xl hover:border-accent-2  hover:brightness-110 hover:scale-105 transition-all"
                  src={loc}
                  alt={model.name + " photo"}
                />
              </button>
            );
          })}
        </div>
      )}
      {galleryState === "night" && (
        <div className="gallery h20 flex gap-5 p-4 flex-wrap justify-center">
          {nightPhotos.map((loc) => {
            return (
              <button>
                <img
                  className="h-[10rem] border-2 border-accent rounded-xl hover:border-accent-2  hover:brightness-110 hover:scale-105 transition-all"
                  src={loc}
                  alt={model.name + " photo"}
                />
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Gallery;
