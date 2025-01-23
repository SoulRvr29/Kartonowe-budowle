import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import modelsData from "../data/models-data.json";
import { PiArrowsOutBold, PiArrowsInBold } from "react-icons/pi";
import { GiPoland } from "react-icons/gi";
import { FaCity } from "react-icons/fa";

const map = ({ id, position }) => {
  const address = modelsData.filter((item) => item.id == id)[0].address || null;
  const [mapSize, setMapSize] = useState(false);
  const [zoom, setZoom] = useState(17);
  const [center, setcenter] = useState([...position]);
  const polandMap = [52, 19];
  const [mapActive, setMapActive] = useState(false);

  return (
    <div
      className={
        mapSize
          ? "w-full relative h-[40rem] "
          : "w-full max-w-sm relative h-[20rem] "
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
      <div className="z-10 absolute right-3 top-3 flex flex-col  dark:brightness-75 dark:contrast-150">
        {/* map size button */}
        <button
          title={mapSize ? "małe okno" : "duże okno"}
          onClick={() => {
            mapActive && setMapSize(!mapSize);
          }}
          className={
            "map-btn border-2 border-b rounded-t-[3px] bg-white border-gray-400 p-[5px] hover:bg-gray-100" +
            (!mapActive && " brightness-75 hover:bg-white hover:cursor-default")
          }
        >
          {mapSize ? (
            <PiArrowsInBold size={18} color="black" className="scale-125" />
          ) : (
            <PiArrowsOutBold size={18} color="black" className="scale-125" />
          )}
        </button>
        {/* map zoom button */}
        <button
          title={zoom === 17 ? "mapa Polski" : "mapa szczegółowa"}
          className={
            "border-2 border-t-0 rounded-b-[3px] bg-white border-gray-400 p-[5px] hover:bg-gray-100 w-8 flex justify-center h-8" +
            (!mapActive && " brightness-75")
          }
          onClick={() => {
            if (mapActive)
              if (zoom === 17) {
                if (!mapSize) setZoom(5);
                else setZoom(6);
                setcenter(polandMap);
              } else {
                setZoom(17);
                setcenter([...position]);
              }
          }}
        >
          {zoom === 17 ? (
            <GiPoland size={22} color="black" />
          ) : (
            <FaCity size={22} color="black" />
          )}
        </button>
      </div>
      <MapContainer
        key={
          (mapSize === true && zoom === 17) || (mapSize === false && zoom != 17)
            ? "open-state"
            : "closed-state"
        }
        center={[...center]}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={true}
        className="map dark:brightness-75 dark:contrast-150 h-full border-2 border-accent drop-shadow-[5px_5px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0px_0px_20px_rgba(0,122,204,0.2)]"
      >
        <TileLayer
          attribution='&copy;
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[...position]}>
          {address && <Popup>{address}</Popup>}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default map;
