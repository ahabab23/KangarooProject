import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet (webpack issue)
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  // Coordinates for Rose Avenue Apartments, Nairobi
  const position = [-1.2921, 36.8219]; // [lat, lng]

  return (
    <div style={{ width: "100%", height: "400px", borderRadius: "8px" }}>
      <MapContainer
        center={position}
        zoom={15}
        style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="grayscale-map"
        />
        <Marker position={position}>
          <Popup>
            <div>
              <h3 style={{ margin: 0 }}>Rose Avenue Apartments</h3>
              <p style={{ margin: "5px 0" }}>PQ6V+8HX, Rose Ave, Nairobi</p>
              <p style={{ margin: 0 }}>Rating: 4.5 (2 reviews)</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      <style jsx>{`
        .leaflet-container {
          filter: grayscale(80%) contrast(110%) brightness(95%);
        }
     
      `}</style>
    </div>
  );
};

export default Map;
