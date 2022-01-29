import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { StyledMap } from "./Map.styled";

const Map = ({ location }) => {
  const [map, setMap] = useState(null);

  if (map) {
    map.flyTo(location);
  }

  return (
    <StyledMap>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={location}
        zoom={13}
        scrollWheelZoom={false}
        whenCreated={setMap}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={location}>
          <Popup>HI</Popup>
        </Marker>
      </MapContainer>
    </StyledMap>
  );
};

export default Map;
