import { NavLink } from "react-router-dom";
import modelsData from "../data/models-data.json";
import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImagesGrid = () => {
  const [data, setData] = useState([]);
  const [loadingIcon, setLoadingIcon] = useState(false);
  let loadCounter = 0;

  const randomArr = (length) => {
    let arr = [];
    while (arr.length < length) {
      let randomArrNr = Math.floor(Math.random() * length);
      if (!arr.includes(randomArrNr)) arr.push(randomArrNr);
    }
    return arr;
  };

  const randomData = (length) => {
    let arr = randomArr(length);
    let result = [];

    for (let x = 0; x < length; x++) {
      let nr = arr[x];
      let photo = modelsData[nr].Galeria;
      let thumb = "";
      let full = "";

      // check if there are gallery sections
      if (Object.entries(photo).length > 1) {
        let randomGalleryType = 0;
        randomGalleryType = Math.floor(
          Math.random() * Object.entries(photo).length
        );
        while (
          Object.entries(photo)[randomGalleryType][1].format == "youtube"
        ) {
          randomGalleryType = Math.floor(
            Math.random() * Object.entries(photo).length
          );
        }
        let randomPhotoNr = Math.floor(
          Math.random() * Object.entries(photo)[randomGalleryType][1].quantity +
            1
        );
        if (randomPhotoNr < 10) randomPhotoNr = `0${randomPhotoNr}`;

        thumb =
          Object.entries(photo)[randomGalleryType][1].thumb +
          randomPhotoNr +
          Object.entries(photo)[randomGalleryType][1].format;
        full =
          Object.entries(photo)[randomGalleryType][1].full +
          randomPhotoNr +
          Object.entries(photo)[randomGalleryType][1].format;
      }
      // if there is single gallery section
      else {
        let randomPhotoNr = Math.floor(
          Math.random() * photo[Object.keys(photo)[0]].quantity + 1
        );
        if (randomPhotoNr < 10) randomPhotoNr = `0${randomPhotoNr}`;
        thumb =
          photo[Object.keys(photo)[0]].thumb +
          randomPhotoNr +
          photo[Object.keys(photo)[0]].format;
        full =
          photo[Object.keys(photo)[0]].full +
          randomPhotoNr +
          photo[Object.keys(photo)[0]].format;
      }

      let name = modelsData[arr[x]].name;
      let link = modelsData[arr[x]].link;

      result.push({ thumb: thumb, full: full, name: name, link: link });
    }
    return result;
  };

  useEffect(() => {
    setData(randomData(modelsData.length));
  }, []);

  return (
    <>
      <h5 className="losowe-header flex justify-center items-center gap-4 my-1 bg-bkg-light dark:bg-bkg pb-1 pt-3 mx-auto border-none w-full">
        Losowe zdjęcia{" "}
      </h5>
      {/* loading icon */}
      {loadingIcon && (
        <div className="loading-icon fixed top-[calc(50vh-40px)] justify-self-center left-[calc(50vw-40px)] z-40 w-20 h-20 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
      )}
      <div className="flex flex-wrap gap-4 justify-center img-container transition-all duration-1000 relative z-[15]">
        <PhotoProvider
          overlayRender={({ index }) => {
            return (
              <NavLink
                onClick={() => {
                  if (localStorage.getItem("autoScroll") == "true") {
                    // document.querySelector(".article-header").scrollIntoView();
                    const articleSection =
                      document.querySelector(".article-header");
                    const header = document.querySelector("header");
                    const articleTop =
                      articleSection.getBoundingClientRect().top +
                      window.scrollY;

                    window.scrollTo({
                      top: articleTop - header.offsetHeight,
                      behavior: "smooth",
                    });
                  }
                }}
                to={data[index].link}
                title="Przejdź do galerii"
                className="photo-description absolute bottom-0 text-center w-full z-30 p-3 bg-black bg-opacity-40 text-text-light hover:text-white transition-colors "
              >
                {data[index].name}
              </NavLink>
            );
          }}
          maskOpacity={0.5}
          maskClassName="backdrop-blur-sm"
          loadingElement={<div className="loader"></div>}
        >
          {data.map((item, index) => (
            <div key={index} className="random-img relative cursor-pointer ">
              <PhotoView key={index} src={item.full}>
                <div className="gallery-thumb photo-container  border-2 border-bkg rounded-xl dark:border-accent dark:hover:border-white hover:border-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.5)] overflow-hidden hover:scale-105 transition-all opacity-0">
                  <LazyLoadImage
                    threshold={300}
                    title={item.name}
                    onLoad={(e) => {
                      e.target.parentElement.classList.remove("opacity-0");
                      loadCounter++;
                      if (loadCounter === data.length - 1) {
                        document.querySelector(".img-container").style.opacity =
                          "1";
                        setLoadingIcon(false);
                      }
                    }}
                    className="hover:cursor-pointer h-[12rem] w-auto max-[400px]:h-full max-[400px]:w-full"
                    width={200}
                    height={200}
                    src={item.thumb}
                    alt={item.name}
                  />
                  <div className="photo-div invisible absolute grid justify-center items-end top-0 left-0 w-full h-full">
                    <div className="w-full absolute px-1 bg-black  bg-opacity-50 font-bold break-words break text-center text-white py-1 rounded-b-xl">
                      {item.name}
                    </div>
                  </div>
                </div>
              </PhotoView>
            </div>
          ))}
        </PhotoProvider>
      </div>
    </>
  );
};

export default ImagesGrid;
