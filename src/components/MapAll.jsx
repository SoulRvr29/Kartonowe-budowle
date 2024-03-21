import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { NavLink } from "react-router-dom";
import modelsData from "../data/models-data.json";
import { PiArrowsOutBold, PiArrowsInBold } from "react-icons/pi";

const map = () => {
  const [mapSize, setMapSize] = useState(false);
  const polandMap = [52, 19];
  const zoom = 6;

  return (
    <div
      className={
        mapSize
          ? "w-full mx-auto my-4 relative h-[50rem] max-sm:h-[40rem] "
          : "w-full mx-auto my-4 max-w-xl relative h-[34rem] max-sm:h-[24rem]"
      }
    >
      <div className="z-10 absolute right-3 top-3 flex flex-col  ">
        {/* map size button */}
        <button
          title={mapSize ? "małe okno" : "duże okno"}
          onClick={() => {
            setMapSize(!mapSize);
          }}
          className="map-btn border-2 border-b rounded-t-[3px] bg-white border-gray-400 p-[5px] hover:bg-gray-100"
        >
          {mapSize ? (
            <PiArrowsInBold size={18} className="scale-125" />
          ) : (
            <PiArrowsOutBold size={18} className="scale-125" />
          )}
        </button>
      </div>
      <MapContainer
        key={mapSize === true && zoom === 6 ? "open-state" : "closed-state"}
        center={[...polandMap]}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={true}
        className="map h-full border-2 border-accent drop-shadow-[5px_5px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0px_0px_20px_rgba(0,122,204,0.2)]"
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
                        onClick={() =>
                          document
                            .querySelector(".article-header")
                            .scrollIntoView()
                        }
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
