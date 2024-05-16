import modelsData from "../data/models-data.json";
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { IoIosArrowUp } from "react-icons/io";
import { FaShareNodes } from "react-icons/fa6";
import ShareScreen from "./ShareScreen";

const Gallery = ({ id, name }) => {
  if (name === undefined) name = "Galeria";
  const model = modelsData.filter((item) => item.id == id)[0];
  const gallerySections = Object.keys(model[name]);

  const [photoId, setPhotoId] = useState(1);
  const [galleryState, setGalleryState] = useState(true);
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
      srcThumb.push(model[name][section].thumb + nr + ".jpg");
      srcFull.push(model[name][section].full + nr + ".jpg");
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
  let [directThumb, setDirectThumb] = useState("");
  let [shareForum, setShareForum] = useState("");
  let [shareWebsite, setShareWebsite] = useState("");

  const [shareScreen, setShareScreen] = useState(false);

  const makeShareLinks = (i) => {
    const siteAddress = "https://www.kartonowebudowle.pl";
    setDirectFull(siteAddress + actualSrcFull[i].slice(1));
    setDirectThumb(siteAddress + actualSrcThumb[i].slice(1));

    setShareForum(`[url=${directFull}][img]${directThumb}[/img][/url]`);
    setShareWebsite(
      `<a href="${directFull}" target='_blank'><img src="${directThumb}" border='0' alt='photo thumbnail'/></a>`
    );
  };

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
          {/* //////////// gallery-type button //////////// */}
          <div className="flex section-list">
            {gallerySections.length > 1 &&
              gallerySections.map((section) => {
                return (
                  <div key={section} className="z-10">
                    <span className="opacity-50 z-10">&nbsp;/&nbsp;</span>
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
                      <span className="section text-accent-4 dark:text-accent-2 opacity-40 transition-all  z-10">
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
                <FaShareNodes
                  size={16}
                  fill="var(--text-light)"
                  className="mx-4 hover:fill-white"
                  title="share"
                  onClick={() => setShareScreen(!shareScreen)}
                />
              );
            }}
            maskOpacity={0.5}
            maskClassName="backdrop-blur-sm"
            loadingElement={<div className="loader"></div>}
            key={actualSrcFull}
          >
            <h5 className="mx-auto border-none -my-1 mt-0 max-sm:text-base">
              {" "}
              {model["rok ukończenia"] < 3000
                ? `Rok budowy modelu: ${model["rok ukończenia"]}`
                : "Model w budowie"}
            </h5>
            <div className="p-4 gallery relative flex gap-5 flex-wrap justify-center">
              {actualSrcThumb.map((item, index) => {
                return (
                  <PhotoView key={index} src={actualSrcFull[index]}>
                    <div className="cursor-pointer">
                      <LazyLoadImage
                        width={160}
                        height={160}
                        className="gallery-thumb h-[10rem] w-auto border-2 border-accent rounded-xl hover:border-accent-2  hover:brightness-110 hover:scale-105 transition-all max-sm:max-w-[250px] max-sm:h-auto dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] drop-shadow-[5px_5px_8px_rgba(0,0,0,0.5)]  max-[300px]:w-full"
                        src={item}
                        alt={model.name + " photo"}
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
    </section>
  );
};

export default Gallery;
