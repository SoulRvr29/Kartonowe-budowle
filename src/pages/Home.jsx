import ImagesGrid from "../components/ImagesGrid";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { NavLink } from "react-router-dom";
import modelsData from "../data/models-data.json";
import MapAll from "../components/MapAll";
import { useEffect } from "react";

const Article = () => {
  useEffect(() => {
    document.title = "Kartonowe budowle";
  }, []);
  ///////////////////////// PHOTOS DATA /////////////////////////
  const photosSrc = [
    "./models/bedzin/day/full-res/bedzin-d01.jpg",
    "./models/bedzin/day/full-res/bedzin-d19.jpg",
    "./models/bedzin/day/full-res/bedzin-d27.jpg",
  ];
  const photosTitle = [
    "Zamek w Będzinie",
    "Wejście do zamku w Będzinie",
    "Dziedziniec zamku w Będzinie",
  ];
  /////////////////////////////////////////////////////////////////
  const photoCounter = () => {
    let count = 0;
    modelsData.forEach((item) => {
      if (item.Galeria) {
        Object.entries(item.Galeria).forEach((item) => {
          count += item[1].quantity;
        });
      }
    });
    return count;
  };
  const photosQuantity = photoCounter();

  return (
    <>
      <PhotoProvider
        overlayRender={({ index }) => {
          return (
            <div
              className={
                "photo-description absolute bottom-0 text-center w-full z-30 p-3 bg-black bg-opacity-40 text-text-light " +
                (!photosTitle[index] && " hidden")
              }
            >
              {photosTitle[index]}
            </div>
          );
        }}
        maskOpacity={0.5}
        maskClassName="backdrop-blur-sm"
        loadingElement={<div class="loader"></div>}
      >
        <hr className="grad-hr" />
        <header className="article-header bg-opacity-20 bg-white dark:bg-text-dark dark:bg-opacity-30  bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.2)] dark:via-[rgba(0,122,204,0.15)] to-transparent z-10 px-8 max-sm:px-4 py-4 pb-4 max-sm:py-0 max-sm:pb-2 relative">
          <div>
            {/* <h2 className="max-w-3xl font-bold text-xl mx-auto text-center max-sm:text-sm m drop-shadow-sm dark:text-text-light text-text-dark">
            Witaj na stronie głównej.
          </h2> */}
            <h5>Aktualnie w budowie:</h5>
            <p>
              <b>
                <NavLink
                  to="/Wang"
                  onClick={() =>
                    document.querySelector(".article-header").scrollIntoView()
                  }
                >
                  <span className="text-accent-4 dark:text-accent-2 hover:underline">
                    Świątynia Wang{" "}
                  </span>
                </NavLink>
                1:72{" "}
              </b>
              - budowla jest na ukończeniu, do zrobienia trawniki, drzewka,
              oświetlenie wokół budowli. <br />
              <b> Świątynia Wang 1:150</b> - budowla gotowa, do zrobienia
              drzewka.
              <br />
              <b>Rakieta Saturn V</b> - do zrobienia górny stopień rakiety,
              silniki i detale.
            </p>
            <h5>Galerie do dodania:</h5>
            <ul className="list-disc list-inside">
              <li>Rakieta Atlas V</li>
              <li>Wieżowce</li>
              {/* <br /> */}
              <b>Starsze modele (do 2010r):</b>
              <li>Olsztyn</li>
              <li>Malbork</li>
              <li>Wilczy Szaniec</li>
              <li>Nowy Wiśnicz</li>
              <li>Wawel</li>
              <li>Samolot Mig 29UB</li>
            </ul>
            <br />
            <div>
              Na stronie znajduje się aktualnie <b>{modelsData.length}</b>{" "}
              galerii oraz <b>{photosQuantity}</b> zdjęć.
            </div>
          </div>
          <MapAll />
        </header>
        <hr className="grad-hr" />
      </PhotoProvider>
      <div className="losowe-container m-8 mt-0 max-sm:m-4 mb-4 max-sm:mb-2 relative">
        <ImagesGrid />
      </div>
    </>
  );
};

export default Article;
