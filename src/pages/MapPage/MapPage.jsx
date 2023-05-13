import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

import Map from '../../components/Map/Map';
import Autocomplete from '../../components/Autocomplete/Autocomplete';
import styles from './MapPage.module.scss';

const defaultCenter = {
  lat: 48.622,
  lng: 22.282,
};

const libraries = ['places'];

const MapPage = () => {
  const [center, setCenter] = React.useState(defaultCenter);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: MAPS_API_KEY,
    libraries,
  });

  const onPlaceSelect = React.useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);

  return (
    <div className={styles.container}>
      {isLoaded ? (
        <div className={styles.map}>
          <Map center={center} />
        </div>
      ) : (
        <h2>Loading</h2>
      )}
      <div className={styles.autocomplete}>
        <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
      </div>
    </div>
  );
};

export default MapPage;
