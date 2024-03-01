import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const FullScreen = ({ photosSrc, photosTitle, photoIndex, setPhotoIndex }) => {
  const [actualSrc, setActualSrc] = useState(photosSrc[photoIndex]);
  const [loadingIcon, setLoadingIcon] = useState(true);

  useEffect(() => {
    setActualSrc(photosSrc[photoIndex]);
  }, [photoIndex]);

  const imgSwitchHandler = (direction) => {
    if (direction == "left") {
      if (photoIndex > 0) {
        setPhotoIndex(photoIndex - 1);
        setActualSrc(photosSrc[photoIndex]);
        setLoadingIcon(true);
      }
    }
    if (direction == "right") {
      if (photoIndex < photosSrc.length - 1) {
        setPhotoIndex(photoIndex + 1);
        setActualSrc(photosSrc[photoIndex]);
        setLoadingIcon(true);
      }
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
          {/* IMG CONTAINER medium-w-false / full-w-true */}
          <div className="fixed w-screen h-full left-0 top-0 z-30 grid place-content-center overflow-auto">
            <img
              onLoad={() => setLoadingIcon(false)}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="z-30 medium-width border-2 border-accent overflow-auto w- max-sm:w-screen max-sm:h-full max-sm:min-w-max max-h-[90vh] justify-self-center max-sm:justify-self-auto"
              // className="medium-width w-full max-sm:w-screen max-sm:h-full max-sm:min-w-max "
              src={actualSrc}
              alt="photo"
            />
            <span
              className={
                "max-w-3xl photo-title opacity-0 text-text-light text-lg bg-black px-3 mx-auto text-center max-sm:fixed bottom-0 left-0 max-sm:border-t max-sm:w-screen max-sm:z-50 max-sm:text-base " +
                (photosTitle[photoIndex] != "" &&
                  "border-2 border-accent relative -top-[2px]")
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
