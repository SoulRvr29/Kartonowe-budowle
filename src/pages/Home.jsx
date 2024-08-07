import ImagesGrid from "../components/ImagesGrid";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { NavLink } from "react-router-dom";
import modelsData from "../data/models-data.json";
import MapAll from "../components/MapAll";
import { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

const Article = () => {
  useEffect(() => {
    document.title = "ModelCraft";
  }, []);
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "./models/bedzin/day/full-res/bedzin-d01.jpg",
    "./models/bedzin/day/full-res/bedzin-d19.jpg",
    "./models/bedzin/day/full-res/bedzin-d27.jpg",
  ];
  const photosTitle = [
    "Zamek w Będzinie",
    "Wejście do zamku w Będzinie",
    "Dziedziniec zamku w Będzinie",
  ];
  /////////////////////////////////////////////////////////////////
  const photoCounter = () => {
    let count = 0;
    modelsData.forEach((item) => {
      if (item.Galeria) {
        Object.entries(item.Galeria).forEach((item) => {
          count += item[1].quantity;
        });
      }
    });
    return count;
  };
  const photosQuantity = photoCounter();
  const [mapSize, setMapSize] = useState(false);

  return (
    <>
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
        <hr className="grad-hr" />
        <header className="article-header dark:bg-text-dark dark:bg-opacity-30  bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10 px-8 max-sm:px-4 py-4 pb-0 max-sm:py-0 relative">
          <div
            className={
              "flex max-lg:flex-col max-lg:gap-0 gap-8 " +
              (mapSize && " flex-col gap-0")
            }
          >
            <InfoCard mapSize={mapSize} />
            <MapAll mapSize={mapSize} setMapSize={setMapSize} />
          </div>
          <div className="rounded-full max-sm:rounded-xl dark:bg-accent/20 bg-white/20 px-4 py-1 text-center">
            Na stronie znajduje się aktualnie{" "}
            <b className="text-accent-4 dark:text-accent-2">
              {modelsData.length}
            </b>{" "}
            galerii oraz{" "}
            <b className="text-accent-4 dark:text-accent-2">{photosQuantity}</b>{" "}
            zdjęć.
          </div>
        </header>
        {/* <hr className="grad-hr" /> */}
      </PhotoProvider>
      <div className="losowe-container m-8 mt-0 max-sm:m-4 mb-4 max-sm:mb-2 relative">
        <ImagesGrid />
      </div>
    </>
  );
};

export default Article;
