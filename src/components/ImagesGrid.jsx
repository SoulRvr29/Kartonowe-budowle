import { NavLink } from "react-router-dom";
import modelsData from "../data/models-data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect } from "react";

const ImagesGrid = () => {
  const [data, setData] = useState([]);

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

        photo =
          Object.entries(photo)[randomGalleryType][1].thumb +
          randomPhotoNr +
          ".jpg";
      }
      // if there is single gallery section
      else {
        let randomPhotoNr = Math.floor(
          Math.random() * photo[Object.keys(photo)[0]].quantity + 1
        );
        if (randomPhotoNr < 10) randomPhotoNr = `0${randomPhotoNr}`;
        photo = photo[Object.keys(photo)[0]].thumb + randomPhotoNr + ".jpg";
      }

      let name = modelsData[arr[x]].name;
      let link = modelsData[arr[x]].link;

      result.push({ src: photo, name: name, link: link });
    }

    return result;
  };

  useEffect(() => {
    setData(randomData(modelsData.length - 1));
  }, []);

  return (
    <>
      <h4 className="losowe-header sticky top-0 z-10 flex justify-center items-center gap-4 mb-2 bg-bkg-light dark:bg-bkg">
        Losowe zdjęcia{" "}
        <button
          className="absolute top-2 right-0 hover:scale-110 transition-transform fill-text-dark dark:fill-text-light header-icon hover:fill-accent-4 dark:hover:fill-accent-2 shuffle-icon"
          title="losuj"
          onClick={() => {
            setData(randomData(modelsData.length - 1));
            document.querySelector(".losowe-container").scrollIntoView();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="1em"
          >
            <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
          </svg>
        </button>
      </h4>
      <div className="flex flex-wrap gap-2 justify-center ">
        {data.map((item, index) => (
          <div
            key={index}
            className="random-img relative border-2 border-bkg border-opacity-50 hover:border-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.5)] "
          >
            <NavLink
              to={item.link}
              onClick={() =>
                document.querySelector(".article-header").scrollIntoView()
              }
            >
              <div className="photo-container">
                <LazyLoadImage
                  className=" gallery-thumb hover:cursor-pointer max-h-[15rem] w-auto max-[400px]:max-h-full max-[400px]:max-w-full "
                  width={200}
                  height={200}
                  src={item.src}
                  alt={item.name}
                />
                <div className="photo-div invisible absolute grid justify-center items-end top-0 left-0 w-full h-full ">
                  <div className="w-full absolute px-1 bg-black  bg-opacity-50 font-bold break-words break text-center text-white py-1">
                    {item.name}
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImagesGrid;
