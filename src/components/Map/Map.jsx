import React from "react";
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";

import styles from "./Map.module.scss";

const containerStyle = {
  width: `100%`,
  height: "100%",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: true,
};

const Map = ({ center }) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const sushiroomCenter = {
    lat: 48.622955,
    lng: 22.2849412,
  };

  return (
    <div className={styles.mapContainer}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <Marker position={center} />

        <>
          <Marker
            position={sushiroomCenter}
            icon={{ url: "/location.svg" }}
            label={{
              className: styles.label,
              text: "SUSHIROOM",
              fontWeight: "900",
              color: "black",
            }}
          />
          <Circle center={sushiroomCenter} radius={1000} options={greenZone} />
          <Circle center={sushiroomCenter} radius={2000} options={yellowZone} />
        </>
      </GoogleMap>{" "}
    </div>
  );
};

const defaultOption = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

const greenZone = {
  ...defaultOption,
  zIndex: 3,
  fillOpacity: 0.2,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const yellowZone = {
  ...defaultOption,
  zIndex: 2,
  fillOpacity: 0.1,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};

export default Map;
