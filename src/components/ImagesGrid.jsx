import { NavLink } from "react-router-dom";
import data from "../data/home-photos-data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";

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

  // let order = [];
  // for (let x = 1; x <= 30; x++) {
  //   order.push(x);
  // }
  // console.log(order);

  return (
    <div className="flex flex-wrap gap-2 justify-center ">
      {photoSrc.map((src, index) => (
        <div
          key={index}
          className=" relative border-2 border-bkg border-opacity-50 hover:border-white hover:drop-shadow-[0_0_7px_rgba(255,255,255,0.5)] "
        >
          <NavLink
            to={data[order[index] - 1].link}
            onClick={() =>
              document.querySelector(".article-header").scrollIntoView()
            }
          >
            <div className="photo-container">
              <LazyLoadImage
                className=" gallery-thumb hover:cursor-pointer max-h-[12rem] w-auto max-sm:max-h-none max-sm:h-auto max-sm:w-full"
                width={200}
                height={200}
                src={src}
                alt={data[order[index] - 1].name}
              />
              <div className="photo-div invisible absolute grid justify-center items-end top-0 left-0 w-full h-full ">
                <div className="w-full absolute px-1 bg-black  bg-opacity-50  text-md font-bold text-center text-white py-1">
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
