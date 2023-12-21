import modelsData from "../data/models-data.json";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = ({ id, name }) => {
  if (name === undefined) name = "Galeria";
  const model = modelsData.filter((item) => item.id == id)[0];
  const gallerySections = Object.keys(model[name]);

  const [photoMaxWidth, setPhotoMaxWidth] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [photoId, setPhotoId] = useState(1);
  const [galleryState, setGalleryState] = useState(true);
  const [actualSection, setActualSection] = useState(gallerySections[0]);
  const [galleryLength, setGalleryLength] = useState(
    model[name][actualSection].quantity
  );
  const [actualSrc, setActualSrc] = useState([]);
  const [loadingIcon, setLoadingIcon] = useState(false);

  useEffect(() => {
    getPhotosSrc(gallerySections[0]);
    gallerySections.length > 1 &&
      document.querySelector(".section").classList.add("active-section");
  }, []);

  const getPhotosSrc = (section) => {
    let src = [];
    let max = model[name][section].quantity;
    setGalleryLength(max);
    for (let i = 1; i <= max; i++) {
      let nr = i;
      if (i < 10) nr = "0" + i;
      src.push(model[name][section].thumb + nr + ".jpg");
      console.log(model[name][section].thumb + nr + ".jpg");
    }
    setActualSrc(src);
  };

  onkeydown = (e) => {
    e.key === "ArrowLeft" && imgSwitchHandler("left");
    e.key === "ArrowRight" && imgSwitchHandler("right");
  };

  const imgSwitchHandler = (direction) => {
    let nr = Number.parseInt(photoId);
    if (direction === "left") {
      if (nr > 1) {
        nr--;
        setLoadingIcon(true);
      }
      if (nr < 10) nr = "0" + nr;
    }
    if (direction === "right") {
      if (nr < galleryLength) {
        nr++;
        setLoadingIcon(true);
      }
      if (nr < 10) nr = "0" + nr;
    }
    setPhotoId(nr);
  };

  return (
    <section className="gallery-cont px-8 select-none max-sm:px-4 grid ">
      <h3 className="font-bold flex flex-wrap text-2xl max-md:text-lg max-[400px]:text-base">
        {/* //////////// gallery on/of button //////////// */}
        <button
          className="arrow-up-down"
          onClick={() => {
            setGalleryState(galleryState === false ? true : false);
            // galleryState === "off" &&
            //   document.querySelector(".gallery-cont").scrollIntoView();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.3rem"
            viewBox="0 0 512 512"
            fill="var(--accent-4)"
            className={
              galleryState === false
                ? "transition-all arrow-down dark:fill-accent-2 mr-2 mt-1 max-sm:h-3 rotate-180"
                : "transition-all arrow-up dark:fill-accent-2 mr-2 mt-1 max-sm:h-3"
            }
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </button>
        {name === undefined ? "Galeria" : name}
        {/* //////////// gallery-type button //////////// */}
        {gallerySections.length > 1 &&
          gallerySections.map((section) => {
            return (
              <div key={section}>
                <button
                  onClick={(e) => {
                    getPhotosSrc(section);
                    setActualSection(section);
                    document.querySelectorAll(".section").forEach((item) => {
                      item.classList.remove("active-section");
                    });
                    e.target.classList.add("active-section");
                  }}
                >
                  <span className="opacity-50">&nbsp;/</span>
                  <span className="section text-accent-4 dark:text-accent-2 opacity-40 transition-all">
                    {" " + section}
                  </span>
                </button>
              </div>
            );
          })}
      </h3>
      <hr className=" dark:bg-accent-2 bg-accent-4 w-full" />
      {/* ////////////  thumbials  //////////// */}
      <div className="gallery relative flex gap-5  flex-wrap justify-center">
        {galleryState === true && (
          <div className="p-4 gallery relative flex gap-5 flex-wrap justify-center">
            {actualSrc.map((loc, index) => {
              return (
                <button
                  key={loc}
                  onClick={(e) => {
                    setFullScreen(true);
                    setLoadingIcon(true);
                    document
                      .querySelector("body")
                      .classList.add("site-overflow");
                    setPhotoId(e.target.attributes.value.value);
                  }}
                >
                  <LazyLoadImage
                    width={160}
                    height={160}
                    value={index + 1 < 10 ? "0" + (index + 1) : index + 1}
                    className="h-[10rem] w-auto border-2 border-accent-3 rounded-xl hover:border-accent-2  hover:brightness-110 hover:scale-105 transition-all max-sm:max-w-[250px] max-sm:h-auto dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] drop-shadow-[5px_5px_8px_rgba(0,0,0,0.5)]  "
                    src={loc}
                    alt={model.name + " photo"}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
      {/* ////////////  FULL SIZE PHOTO GALLERY  //////////// */}
      {fullScreen === true && (
        <section>
          <div
            onClick={() => {
              setFullScreen(false);
              setPhotoMaxWidth(false);
              document.querySelector("body").classList.remove("site-overflow");
            }}
            className="full-size bg-black bg-opacity-70 backdrop-blur-sm fixed top-0 left-0 w-screen h-screen z-30"
          >
            {/* ////////////  ICON CONTAINER  //////////// */}
            <div
              className={
                photoMaxWidth == false
                  ? "mx-auto relative grid max-w-6xl"
                  : "grid"
              }
            >
              {/* close icon */}
              <button
                className={
                  photoMaxWidth == false
                    ? "p-1 px-2 absolute hover:scale-125 transition-all drop-shadow-[0_0_3px_black] z-40 right-0 top-0 m-8 max-sm:justify-self-center max-sm:right-auto max-sm:m-2"
                    : "p-1 px-2 fixed opacity-50 hover:scale-125 hover:opacity-100 transition-all drop-shadow-[0_0_3px_grey] z-40 top-14 right-20 max-sm:top-2 max-sm:justify-self-center max-sm:right-auto"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  setPhotoMaxWidth(false);
                  setFullScreen(false);
                  document
                    .querySelector("body")
                    .classList.remove("site-overflow");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3em"
                  viewBox="0 0 384 512"
                  fill="white"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
              {/* left icon */}
              {photoId != 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    imgSwitchHandler("left");
                  }}
                  className={
                    photoMaxWidth == false
                      ? "p-1 px-2  gallery-icon icon-hidden fixed  hover:scale-125 transition-all drop-shadow-[0_0_3px_black] z-40 top-1/2 ml-8 max-sm:ml-2 "
                      : "p-1 px-2  fixed opacity-50 hover:opacity-100 hover:scale-125 transition-all drop-shadow-[0_0_3px_grey] z-40 top-1/2 left-16 max-sm:left-2 "
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="3em"
                    viewBox="0 0 320 512"
                    fill="white"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                  </svg>
                </button>
              )}
              {/* right icon */}
              {photoId != galleryLength && (
                <button
                  className={
                    photoMaxWidth == false
                      ? "p-1 px-2 fixed hover:scale-125 transition-all drop-shadow-[0_0_3px_black] z-40 justify-self-end top-1/2  mr-8 max-sm:mr-2"
                      : "p-1 px-2 fixed opacity-50 hover:scale-125  hover:opacity-100 transition-all drop-shadow-[0_0_3px_grey] z-40 top-1/2 right-20  max-sm:right-2"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    imgSwitchHandler("right");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="3em"
                    viewBox="0 0 320 512"
                    fill="white"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </button>
              )}
              {/* loading icon */}
              {loadingIcon && (
                <div className="loading-icon fixed top-1/2 justify-self-center z-40 w-12 h-12 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"></div>
              )}
            </div>
            {/* IMAGE CONTAINER medium-w-false / full-w-true */}
            <div className="fixed w-screen left-0 top-0 h-full grid place-content-center overflow-auto ">
              <img
                onClick={(e) => {
                  e.stopPropagation();
                  setPhotoMaxWidth(!photoMaxWidth);
                }}
                onLoad={() => setLoadingIcon(false)}
                className={
                  photoMaxWidth === false
                    ? "cursor-pointer medium-width border-4 border-accent-2 max-w-4xl max-md:w-screen max-h-[85vh] max-sm:w-screen "
                    : "cursor-pointer medium-width w-full max-sm:w-screen overflow-auto max-sm:h-full max-sm:min-w-max "
                }
                src={model[name][actualSection].full + photoId + ".jpg"}
                alt={"photo" + photoId}
              />
            </div>
          </div>
          {/* photo number */}
          <span
            className={
              photoMaxWidth === false
                ? "fixed bottom-4 text-2xl max-sm:text-xl drop-shadow-[0_0_2px_black] left-[calc(50%-38px)] z-40 border-2 px-2 pb-1 rounded-xl border-texttext-text-light text-text-light max-sm:top-auto max-sm:bottom-[18px]"
                : "fixed bottom-4 text-3xl max-sm:text-xl drop-shadow-[0_0_2px_black] left-[calc(50%-48px)] max-sm:left-[calc(50%-38px)] z-40 border-2 px-2 pb-1 rounded-xl border-texttext-text-light text-text-light opacity-50 max-sm:top-auto max-sm:bottom-[18px]"
            }
          >
            {(photoId < 10 ? photoId[1] : photoId) + " / " + galleryLength}
          </span>
        </section>
      )}
    </section>
  );
};

export default Gallery;
