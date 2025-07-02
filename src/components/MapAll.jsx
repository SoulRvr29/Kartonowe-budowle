import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { NavLink } from "react-router-dom";
import modelsData from "../data/models-data.json";
import { PiArrowsOutBold, PiArrowsInBold } from "react-icons/pi";
import { useState } from "react";

const map = ({ mapSize, setMapSize }) => {
  const polandMap = [52.4, 19];
  const zoom = 6;
  const [mapActive, setMapActive] = useState(false);

  return (
    <div
      className={
        mapSize
          ? "w-full border-2 rounded-xl border-accent overflow-hidden mx-auto my-4 relative h-[50rem] max-sm:h-[40rem] "
          : "w-full border-2 rounded-xl border-accent overflow-hidden mx-auto my-4 max-w-lg relative h-[30rem] max-sm:h-[24rem]"
      }
    >
      {!mapActive && (
        <div className="bg-black grid place-content-center text-xl bg-opacity-30 absolute z-10 top-0 left-0 w-full h-full ">
          <button
            onClick={() => {
              setMapActive(true);
            }}
            className="text-white drop-shadow-[0_0_4px_black] bg-black bg-opacity-20 px-3 py-1 pb-[6px] upp rounded-xl hover:text- hover:border-2"
          >
            Kliknij by aktywować
          </button>
        </div>
      )}
      <div className="z-10 absolute right-3 top-3 flex flex-col  ">
        {/* map size button */}
        <button
          title={mapSize ? "małe okno" : "duże okno"}
          onClick={() => {
            mapActive && setMapSize(!mapSize);
          }}
          className={
            "map-btn border-2 border-b rounded-t-[3px] bg-white border-gray-400 p-[5px] hover:bg-gray-100" +
            (!mapActive && " brightness-75")
          }
        >
          {mapSize ? (
            <PiArrowsInBold size={18} color="black" className="scale-125" />
          ) : (
            <PiArrowsOutBold size={18} color="black" className="scale-125" />
          )}
        </button>
      </div>
      <MapContainer
        key={mapSize === true && zoom === 6 ? "open-state" : "closed-state"}
        center={[...polandMap]}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={true}
        className="map h-full  drop-shadow-[5px_5px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0px_0px_20px_rgba(0,122,204,0.2)]"
      >
        <TileLayer
          attribution='&copy;
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {modelsData.map(
          (item) =>
            item.position && (
              <div key={item.id} className="">
                <Marker
                  className="scale-50 marker"
                  position={item.position}
                  icon={L.icon({
                    iconUrl: item.icon,
                    iconSize: [50, 50],
                    iconAnchor: [25, 45],
                    popupAnchor: [0, -25],
                  })}
                >
                  <div className="opacity-0">
                    <Popup>
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
                        to={item.link}
                      >
                        {item.name}
                      </NavLink>
                    </Popup>
                  </div>
                </Marker>
              </div>
            )
        )}
      </MapContainer>
    </div>
  );
};

export default map;
