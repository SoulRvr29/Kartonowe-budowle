import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const map = ({ position }) => {
  return (
    <MapContainer
      center={[...position]}
      zoom={17}
      scrollWheelZoom={true}
      zoomControl={false}
      className="map max-w-sm h-[20rem] w-full border-2 border-accent drop-shadow-[5px_5px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[0px_0px_20px_rgba(0,122,204,0.2)]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[...position]}>
        {/* <Popup>Latarnia morska Gąski</Popup> */}
      </Marker>
    </MapContainer>
  );
};

export default map;
