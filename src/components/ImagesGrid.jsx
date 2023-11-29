import { NavLink } from "react-router-dom";
import data from "../data/home-photos-data.json";

const ImagesGrid = () => {
  const randomArr = (length) => {
    let arr = [];
    while (arr.length < length) {
      let nr = Math.floor(Math.random() * length + 1);
      if (!arr.includes(nr)) {
        arr.push(nr);
      }
    }
    return arr;
  };

  const setSrc = (order) => {
    let srcArr = [];
    for (let x = 0; x <= order.length - 1; x++) {
      if (order[x] < 10) srcArr.push(`models/home/home-photo0${order[x]}.jpg`);
      else srcArr.push(`models/home/home-photo${order[x]}.jpg`);
    }
    return srcArr;
  };

  const order = randomArr(data.length);
  const photoSrc = setSrc(order);

  return (
    <div className="img-grid flex flex-wrap gap-2">
      {photoSrc.map((src, index) => (
        <div className="relative h-[25vh] grow max-md:h-[40vh] max-[540px]:h-auto border-2 border-bkg hover:border-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.5)] ">
          <NavLink
            to={data[order[index] - 1].link}
            onClick={() =>
              document.querySelector(".article-header").scrollIntoView()
            }
          >
            <div className="photo-container h-full w-full">
              <img
                className=" hover:cursor-pointer max-h-full min-w-full  object-cover align-bottom max-[540px]:object-contain max-[540px]:w-full max-[540px]:h-auto"
                src={src}
                alt={data[order[index] - 1].name}
              />
              <div className="photo-div invisible absolute grid justify-center items-end top-0 left-0 w-full h-full ">
                <div className="w-full absolute px-1 bg-black  bg-opacity-50  text-lg font-bold text-center text-white py-1">
                  {data[order[index] - 1].name}
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ImagesGrid;
