import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import modelsData from "../data/models-data.json";
import imgTest from "../../public/models/oporow/oporow-miniature.png";
const map = () => {
  const [mapSize, setMapSize] = useState(false);
  const polandMap = [52, 19];

  const [zoom, setZoom] = useState(6);
  const [center, setcenter] = useState(polandMap);

  return (
    <div
      className={
        mapSize
          ? "w-full mx-auto relative h-[40rem] "
          : "w-full mx-auto my-2 max-w-xl relative h-[34rem] max-sm:h-[24rem]"
      }
    >
      <div className="z-10 absolute right-3 top-3 flex flex-col  dark:brightness-75 dark:contrast-150">
        {/* map size button */}
        <button
          title={mapSize ? "małe okno" : "duże okno"}
          onClick={() => {
            setMapSize(!mapSize);
          }}
          className="map-btn border-2 border-b rounded-t-[3px] bg-white border-gray-400 p-[5px] hover:bg-gray-100"
        >
          {mapSize ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="black"
              height="1.1em"
            >
              <path d="M456 224H312c-13.3 0-24-10.7-24-24V56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L442.3 5.7C446 2 450.9 0 456 0s10 2 13.7 5.7l36.7 36.7C510 46 512 50.9 512 56s-2 10-5.7 13.7L433 143l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8zm0 64c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-40 40 73.4 73.4c3.6 3.6 5.7 8.5 5.7 13.7s-2 10-5.7 13.7l-36.7 36.7C466 510 461.1 512 456 512s-10-2-13.7-5.7L369 433l-40 40c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V312c0-13.3 10.7-24 24-24H456zm-256 0c13.3 0 24 10.7 24 24V456c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L69.7 506.3C66 510 61.1 512 56 512s-10-2-13.7-5.7L5.7 469.7C2 466 0 461.1 0 456s2-10 5.7-13.7L79 369 39 329c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8H200zM56 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l40-40L5.7 69.7C2 66 0 61.1 0 56s2-10 5.7-13.7L42.3 5.7C46 2 50.9 0 56 0s10 2 13.7 5.7L143 79l40-40c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2V200c0 13.3-10.7 24-24 24H56z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="black"
              height="1.1em"
            >
              <path d="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z" />
            </svg>
          )}
        </button>
      </div>
      {/* <img src={modelsData[0].icon} alt="" /> */}
      <MapContainer
        key={
          (mapSize === true && zoom === 6) || (mapSize === false && zoom != 6)
            ? "open-state"
            : "closed-state"
        }
        center={[...center]}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={true}
        className="map dark:brightness-90 dark:contrast-125 h-full border-2 border-accent drop-shadow-[5px_5px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0px_0px_20px_rgba(0,122,204,0.2)]"
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
                    iconAnchor: [25, 40],
                    popupAnchor: [0, -25],
                  })}
                >
                  <div className="opacity-0">
                    <Popup>{item.name}</Popup>
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
