import { useState, useEffect } from "react";

const FullScreen = ({ photosSrc, photosTitle, photoIndex, setPhotoIndex }) => {
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
          <div className="grid">
            {/* close icon */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 384 512"
              fill="white"
              className="fixed  hover:scale-125 hover:opacity-100 transition-all drop-shadow-[0_0_3px_grey] z-40 top-14 right-20 max-sm:top-2 max-sm:justify-self-center max-sm:right-auto"
              onClick={(e) => {
                e.stopPropagation();
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
                className="p-1 px-2 fixed hover:opacity-100 hover:scale-125 transition-all drop-shadow-[0_0_3px_grey] z-40 top-1/2 left-16 max-sm:left-2 "
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
                className="p-1 px-2 fixed hover:scale-125  hover:opacity-100 transition-all drop-shadow-[0_0_3px_grey] z-40 top-1/2 right-20  max-sm:right-2"
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
          <div className="fixed w-screen h-screen left-0 top-0 z-30 grid place-content-center overflow-auto ">
            <img
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="z-30 medium-width border-4 border-accent-2  overflow-auto max-sm:min-w-max max-sm:w-screen max-h-[90vh] justify-self-center"
              src={actualSrc}
              alt="photo"
            />
            <span
              className={
                "max-w-3xl photo-title opacity-0 text-text-light text-lg bg-black px-3 mx-auto text-center max-sm:fixed bottom-0 left-0 max-sm:border-t max-sm:w-screen max-sm:z-50 " +
                (photosTitle[photoIndex] != "" && "border border-accent-2")
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
