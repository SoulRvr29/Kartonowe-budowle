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
      let randomArrNr = Math.floor(Math.random() * length + 1);
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

      // Galleria Sandomierz fix
      if (photo === undefined) {
        let undRandomNr = Math.floor(Math.random() * 2 + 1);
        console.log(undRandomNr);
        undRandomNr == 1
          ? (photo = modelsData[nr]["Galeria - Ratusz"])
          : (photo = modelsData[nr]["Galeria - Brama"]);
      }

      // check if there are gallery sections
      if (Object.entries(photo).length > 1) {
        let randomGalleryType = Math.floor(
          Math.random() * Object.entries(photo).length
        );
        let randomPhotoNr = Math.floor(
          Math.random() * Object.entries(photo)[randomGalleryType][1].quantity +
            1
        );
        if (randomPhotoNr < 10) randomPhotoNr = `0${randomPhotoNr}`;

        thumb =
          Object.entries(photo)[randomGalleryType][1].thumb +
          randomPhotoNr +
          ".jpg";
        full =
          Object.entries(photo)[randomGalleryType][1].full +
          randomPhotoNr +
          ".jpg";
      }
      // if there is single gallery section
      else {
        let randomPhotoNr = Math.floor(
          Math.random() * photo[Object.keys(photo)[0]].quantity + 1
        );
        if (randomPhotoNr < 10) randomPhotoNr = `0${randomPhotoNr}`;
        thumb = photo[Object.keys(photo)[0]].thumb + randomPhotoNr + ".jpg";
        full = photo[Object.keys(photo)[0]].full + randomPhotoNr + ".jpg";
      }

      let name = modelsData[arr[x]].name;
      let link = modelsData[arr[x]].link;

      result.push({ thumb: thumb, full: full, name: name, link: link });
    }
    console.log(result);
    return result;
  };

  useEffect(() => {
    setData(randomData(modelsData.length - 1));
    console.log(data);
  }, []);

  return (
    <>
      <h3 className="losowe-header sticky top-0 z-10 flex justify-center items-center gap-4 mb-2 bg-bkg-light dark:bg-bkg">
        Losowa galeria{" "}
        {/* <button
          className="absolute top-2 right-0 hover:scale-110 transition-transform fill-text-dark dark:fill-text-light header-icon hover:fill-accent-4 dark:hover:fill-accent-2 shuffle-icon"
          title="losuj"
          onClick={() => {
            document.querySelector(".img-container").style.opacity = "0";
            document.querySelector(".losowe-container").scrollIntoView();
            setLoadingIcon(true);
            setTimeout(() => {
              loadCounter = 0;
              setData(randomData(modelsData.length - 1));
              console.log(data);
            }, 1000);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="1em"
          >
            <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
          </svg>
        </button> */}
      </h3>
      {/* loading icon */}
      {loadingIcon && (
        <div className="loading-icon fixed top-[calc(50vh-40px)] justify-self-center left-[calc(50vw-40px)] z-40 w-20 h-20 border-[6px] border-white rounded-full border-b-accent drop-shadow-[0_0_4px_rgba(0,0,0,0.5)] max-sm:w-6 max-sm:h-6 max-sm:border-[3px]"></div>
      )}
      <div className="flex flex-wrap gap-4 justify-center img-container transition-all duration-1000">
        <PhotoProvider
          overlayRender={({ index }) => {
            return (
              <NavLink
                onClick={() =>
                  document.querySelector(".article-header").scrollIntoView()
                }
                to={data[index].link}
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
            <div
              key={index}
              className="random-img relative border-2 border-bkg dark:border-accent dark:hover:border-white  hover:border-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.5)] cursor-pointer "
            >
              <PhotoView key={index} src={item.full}>
                <div className="photo-container">
                  <LazyLoadImage
                    title={item.name}
                    onLoad={() => {
                      loadCounter++;
                      if (loadCounter === data.length - 1) {
                        document.querySelector(".img-container").style.opacity =
                          "1";
                        setLoadingIcon(false);
                      }
                    }}
                    className=" gallery-thumb hover:cursor-pointer h-[12rem] w-auto max-[400px]:h-full max-[400px]:w-full"
                    width={200}
                    height={200}
                    src={item.thumb}
                    alt={item.name}
                  />
                  <div className="photo-div invisible absolute grid justify-center items-end top-0 left-0 w-full h-full ">
                    <div className="w-full absolute px-1 bg-black  bg-opacity-50 font-bold break-words break text-center text-white py-1">
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
