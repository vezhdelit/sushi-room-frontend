import React from "react";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import TextField from "@mui/material/TextField";

const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

import Map from "../../components/Map/Map";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import Button from "../../components/Buttons/Button/Button";

import { ReactComponent as LocationArrowSvg } from "../../assets/svg/location-arrow.svg";
import styles from "./MapPage.module.scss";

const defaultCenter = {
  lat: 48.622955,
  lng: 22.2849412,
};

const libraries = ["places"];

const MapPage = (props) => {
  const [center, setCenter] = React.useState(defaultCenter);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPS_API_KEY,
    libraries,
  });

  const onPlaceSelect = React.useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Вкажіть адресу доставки</h2>
      <div className={styles.content}>
        {isLoaded ? (
          <div className={styles.map}>
            <Map center={center} />
          </div>
        ) : (
          <ContentLoader
            speed={2}
            width={600}
            height={400}
            viewBox="0 0 600 400"
            backgroundColor="#DDDDDD"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="0" y="0" rx="2" ry="2" width="600" height="400" />
          </ContentLoader>
        )}
        <div className={styles.rightBlock}>
          <TextField
            disabled
            className={styles.autocomplete}
            label="Наша адреса"
            defaultValue={
              "Студентська набережна, 2, Ужгород, Закарпатська область, Україна"
            }
          />

          <LocationArrowSvg className={styles.arrow} />

          <div className={styles.autocomplete}>
            <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
          </div>
          <div className={styles.submitButton}>
            <Link to="/success">
              <Button size="large">Замовити</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
