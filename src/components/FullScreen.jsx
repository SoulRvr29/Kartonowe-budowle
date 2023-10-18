import { useState } from "react";

const FullScreen = ({ prop, setFullScreen }) => {
  const [photoMaxWidth, setPhotoMaxWidth] = useState(false);
  let id = prop.target.src.slice(-10).match(/\d/g).join("");

  return (
    <div className="gallery relative flex gap-5 flex-wrap justify-center">
      <div
        onClick={() => {
          setFullScreen(false);
          document.querySelector("body").classList.remove("site-overflow");
        }}
        className="full-size fixed  w-full h-full overflow-auto bg-black top-0 left-0 z-30 bg-opacity-70 grid place-content-center  gr-rows-1 max-sm:place-content-start"
      >
        {/* ////////////  ICON CONTAINER  //////////// */}
        <div className="w-full grid max-w-6xl place-self-center mx-auto h-full absolute ">
          {/* close icon */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="3em"
            viewBox="0 0 384 512"
            fill="white"
            className="fixed hover:cursor-pointer hover:scale-125 transition-all drop-shadow-[0_0_3px_black] z-40 justify-self-end m-8"
            onClick={(e) => {
              e.stopPropagation();
              setPhotoMaxWidth(false);
              setFullScreen(false);
              document.querySelector("body").classList.remove("site-overflow");
            }}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <button
          className="grid max-sm:w-max"
          onClick={(e) => {
            e.stopPropagation();
            setPhotoMaxWidth(!photoMaxWidth);
          }}
        >
          {/* IMG CONTAINER medium-w-false / full-w-true */}
          <div className="medium-width grid z-30 mx-auto place-self-center ">
            <img
              className={
                photoMaxWidth === false
                  ? "w-full max-w-[600px] max-h-[85vh] border-4 border-accent-2 max-sm:w-screen"
                  : "w-full border-4 border-accent-2 max-sm:h-screen max-sm:w-auto "
              }
              src={"models/bedzin/bedzin-photo" + id + ".jpg"}
              alt={"photo" + id}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FullScreen;
