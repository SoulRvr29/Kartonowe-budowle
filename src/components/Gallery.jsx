import "../css/Gallery.css";
import modelsData from "../data/models-data.json";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { IoIosArrowUp } from "react-icons/io";
import { FaShareNodes } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";

import ShareScreen from "./ShareScreen";

const Gallery = ({ id, name }) => {
  if (name === undefined) name = "Galeria";
  const model = modelsData.filter((item) => item.id == id)[0];
  const gallerySections = Object.keys(model[name]);

  // const videoId = model.Galeria.filmy.videoId || "";

  const [photoId, setPhotoId] = useState(1);
  const [galleryState, setGalleryState] = useState(
    JSON.parse(localStorage.getItem("sections"))
  );
  const [actualSection, setActualSection] = useState(gallerySections[0]);
  const [galleryLength, setGalleryLength] = useState(
    model[name][actualSection].quantity
  );
  const [actualSrcThumb, setactualSrcThumb] = useState([]);
  const [actualSrcFull, setactualSrcFull] = useState([]);

  useEffect(() => {
    getPhotosSrc(gallerySections[0]);
    gallerySections.length > 1 &&
      document
        .querySelector(".section-list .section")
        .classList.add("active-section");
  }, []);

  const getPhotosSrc = (section) => {
    let srcThumb = [];
    let srcFull = [];
    let max = model[name][section].quantity;
    setGalleryLength(max);
    for (let i = 1; i <= max; i++) {
      let nr = i;
      if (i < 10) nr = "0" + i;
      srcThumb.push(
        model[name][section].thumb + nr + model[name][section].format
      );
      srcFull.push(
        model[name][section].full + nr + model[name][section].format
      );
    }
    setactualSrcThumb(srcThumb);
    setactualSrcFull(srcFull);
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

  let [directFull, setDirectFull] = useState("");
  let [shareForum, setShareForum] = useState("");
  let [shareWebsite, setShareWebsite] = useState("");

  const [shareScreen, setShareScreen] = useState(false);
  const [copy, setCopy] = useState(false);

  const makeShareLinks = (i) => {
    const full = `https://www.modelcraft.pl${actualSrcFull[i].slice(1)}`;
    const thumb = `https://www.modelcraft.pl${actualSrcThumb[i].slice(1)}`;
    setDirectFull(full);
    setShareForum(`[url=${full}][img]${thumb}[/img][/url]`);
    setShareWebsite(
      `<a href="${full}" target='_blank'><img src="${thumb}" border='0' alt='photo thumbnail'/></a>`
    );
  };

  const makeAllThumbLinks = () => {
    let thumbsArr = [];
    for (let i = 0; i < actualSrcFull.length; i++) {
      const full = `https://www.modelcraft.pl${actualSrcFull[i].slice(1)}`;
      const thumb = `https://www.modelcraft.pl${actualSrcThumb[i].slice(1)}`;
      thumbsArr.push(`[url=${full}][img]${thumb}[/img][/url]`);
    }
    return thumbsArr.join(" ");
  };

  const allThumbLinks = makeAllThumbLinks();

  return (
    <section className="gallery-cont select-none grid ">
      <header className="relative max-sm:w-screen">
        <div className="absolute w-full h-12 -top-2 left-0  bg-gradient-to-b from-transparent via-text-light dark:via-accent to-transparent opacity-20 "></div>
        <h3 className="font-bold flex flex-wrap text-2xl max-md:text-lg max-[400px]:text-base mx-6 max-sm:mx-2">
          {/* //////////// gallery on/of button //////////// */}
          <button
            className="arrow-up-down z-10"
            onClick={() => {
              setGalleryState(galleryState === false ? true : false);
            }}
          >
            <IoIosArrowUp
              size={28}
              fill="var(--accent-4)"
              className={
                galleryState === false
                  ? "transition-all arrow-down dark:fill-accent-2 mr-2 max-sm:h-6 mt-1 max-sm:mt-0 rotate-180"
                  : "transition-all arrow-up dark:fill-accent-2 mr-2 max-sm:h-6 mt-1 max-sm:mt-0"
              }
            />
          </button>
          <span className="z-10">{name === undefined ? "Galeria" : name}</span>
          {actualSrcThumb.length > 0 && (
            <div className="grid place-content-center ml-2 opacity-30 text-xl max-md:text-sm">{`(${actualSrcThumb.length})`}</div>
          )}
          {/* //////////// gallery-type button //////////// */}
          <div className="flex section-list max-sm:gap-2 max-sm:px-2">
            {gallerySections.length > 1 &&
              gallerySections.map((section) => {
                return (
                  <div key={section} className="z-10">
                    <span className="opacity-50 z-10 max-sm:hidden">
                      &nbsp;/&nbsp;
                    </span>
                    <button
                      onClick={(e) => {
                        getPhotosSrc(section);
                        setActualSection(section);
                        document
                          .querySelectorAll(".section")
                          .forEach((item) => {
                            item.classList.remove("active-section");
                          });
                        e.target.classList.add("active-section");
                      }}
                    >
                      <span className="section text-accent-4 dark:text-text-light opacity-40 transition-all z-10 max-sm:bg-text-light max-sm:px-[6px] max-sm:rounded-md dark:max-sm:bg-accent-2 dark:max-sm:bg-opacity-75 max-sm:pb-[2px]">
                        {section}
                      </span>
                    </button>
                  </div>
                );
              })}
          </div>
        </h3>
        <hr className=" dark:bg-accent-2 bg-accent-4 w-full" />
      </header>
      {/* ////////////  thumbnails  //////////// */}
      <div className="gallery relative flex flex-col flex-wrap justify-center  mx-8 max-sm:mx-4 max-[300px]:mx-1">
        {galleryState === true && (
          <PhotoProvider
            onIndexChange={(index) => {
              makeShareLinks(index);
            }}
            toolbarRender={() => {
              return (
                <>
                  <FaRegCopy
                    size={16}
                    fill="var(--text-light)"
                    className="mx-4 hover:fill-white"
                    title="skopiuj wszystkie miniaturki"
                    onClick={() => {
                      navigator.clipboard.writeText(allThumbLinks);
                      setCopy(true);
                      setTimeout(() => {
                        setCopy(false);
                      }, 1000);
                    }}
                  />
                  <div
                    className={
                      "absolute top-12 right-[4.4rem] text-accent-3 font-bold bg-black bg-opacity-30 px-2 rounded-md transition-opacity duration-500 opacity-0 pointer-events-none " +
                      (copy && " opacity-100")
                    }
                  >
                    Skopiowano
                  </div>
                  <FaShareNodes
                    size={16}
                    fill="var(--text-light)"
                    className="mx-4 hover:fill-white"
                    title="pokaż linki"
                    onClick={() => setShareScreen(!shareScreen)}
                  />
                </>
              );
            }}
            maskOpacity={0.5}
            maskClassName="backdrop-blur-sm"
            loadingElement={<div className="loader"></div>}
            key={actualSrcFull}
          >
            <h5 className="mx-auto border-none -my-1 mt-0 max-sm:text-base">
              {" "}
              {model["lata budowy modeli"]
                ? `Lata budowy modeli: ${model["lata budowy modeli"]}`
                : model["rok ukończenia"] < 3000
                  ? `Rok budowy modelu: ${model["rok ukończenia"]}`
                  : "Model w budowie"}
            </h5>
            <div className="p-4 gallery relative flex gap-5 flex-wrap justify-center">
              {model[name][actualSection].format !== "youtube" &&
                actualSrcThumb.map((item, index) => {
                  return (
                    <PhotoView key={index} src={actualSrcFull[index]}>
                      <div className="cursor-pointer transition-opacity duration-500 ease-in-out opacity-0 ">
                        <LazyLoadImage
                          threshold={300}
                          width={160}
                          height={160}
                          className="h-[10rem] w-auto border-2 border-accent rounded-xl hover:border-accent-2  hover:brightness-110 hover:scale-105 transition-all max-sm:max-w-[250px] max-sm:h-auto dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] drop-shadow-[5px_5px_8px_rgba(0,0,0,0.5)]  max-[300px]:w-full text-sm text-center place-content-center"
                          onLoad={(e) =>
                            e.target.parentElement.classList.remove("opacity-0")
                          }
                          onError={(e) =>
                            e.target.parentElement.classList.remove("opacity-0")
                          }
                          src={item}
                          alt={model.name + " photo " + index}
                          onClick={() => {
                            makeShareLinks(index);
                          }}
                        />
                      </div>
                    </PhotoView>
                  );
                })}
            </div>
          </PhotoProvider>
        )}
      </div>
      <ShareScreen
        shareScreen={shareScreen}
        setShareScreen={setShareScreen}
        directFull={directFull}
        shareForum={shareForum}
        shareWebsite={shareWebsite}
      />
      {model[name][actualSection].format === "youtube" &&
        actualSection === "filmy" && (
          <div className="flex justify-center pb-8 -mt-4">
            <div className="w-full max-w-4xl px-4">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${model.Galeria.filmy.videoId}`}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default Gallery;
