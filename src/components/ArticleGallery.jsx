import { useState, useEffect } from "react";

const FullScreen = ({ photosSrc, photosTitle, photoIndex, setPhotoIndex }) => {
  const [photoMaxWidth, setPhotoMaxWidth] = useState(true);
  const [actualSrc, setActualSrc] = useState(photosSrc[photoIndex]);

  useEffect(() => {
    setActualSrc(photosSrc[photoIndex]);
  }, [photoIndex]);

  const imgSwitchHandler = (direction) => {
    if (direction == "left") {
      if (photoIndex > 0) setPhotoIndex(photoIndex - 1);
      setActualSrc(photosSrc[photoIndex]);
    }
    if (direction == "right") {
      if (photoIndex < photosSrc.length - 1) setPhotoIndex(photoIndex + 1);
      setActualSrc(photosSrc[photoIndex]);
    }
  };

  return (
    <>
      {photoIndex != null && (
        <div
          onClick={() => {
            setPhotoIndex(null);
            document.querySelector("body").classList.remove("site-overflow");
          }}
          className="select-none grid full-size bg-black bg-opacity-70 backdrop-blur-sm fixed top-0 left-0 z-30 w-screen h-screen"
        >
          {/* ////////////  ICON CONTAINER  //////////// */}
          <div
            className={
              photoMaxWidth == false
                ? "mx-auto relative grid max-w-6xl w-full"
                : "grid"
            }
          >
            {/* close icon */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 384 512"
              fill="white"
              className={
                photoMaxWidth == false
                  ? "absolute hover:scale-125 transition-all drop-shadow-[0_0_3px_black] z-40 right-0 top-0 m-16 max-sm:justify-self-center max-sm:right-auto"
                  : "fixed opacity-50 hover:scale-125 hover:opacity-100 transition-all drop-shadow-[0_0_3px_grey] z-40 top-14 right-20 max-sm:top-2 max-sm:justify-self-center max-sm:right-auto"
              }
              onClick={(e) => {
                e.stopPropagation();
                setPhotoMaxWidth(false);
                setPhotoIndex(null);
                document
                  .querySelector("body")
                  .classList.remove("site-overflow");
              }}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            {/* left icon */}
            {photoIndex > 0 && (
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
            {photoIndex < photosSrc.length - 1 && (
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
          </div>
          {/* IMG CONTAINER medium-w-false / full-w-true */}
          <div className="fixed w-screen h-screen left-0 top-0 z-30 grid place-content-center overflow-auto">
            <img
              onClick={(e) => {
                e.stopPropagation();
                setPhotoMaxWidth(!photoMaxWidth);
              }}
              className={
                photoMaxWidth === false
                  ? "z-30 cursor-pointer medium-width border-4 border-accent-2 max-w-[600px] max-md:w-screen max-h-[95vh] max-sm:w-screen "
                  : "z-30 cursor-pointer medium-width border-4 border-accent-2 w-full overflow-auto  max-sm:min-w-max max-sm:w-screen"
              }
              src={actualSrc}
              alt="photo"
            />
            <span
              className={
                photoMaxWidth === false
                  ? "photo-title opacity-0 text-text-light text-lg max-w-[500px] bg-black px-3 border border-t-0 border-accent-2  w-fit max-sm:w-screen mx-auto text-center"
                  : "photo-title opacity-0 text-text-light  text-lg bg-black px-3 border border-accent-2 border-t-0 mx-auto text-center max-sm:fixed bottom-0 left-0 max-sm:border-t max-sm:w-screen max-sm:z-50"
              }
            >
              {photosTitle[photoIndex]}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default FullScreen;
