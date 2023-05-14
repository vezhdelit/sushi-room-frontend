import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

import Map from '../../components/Map/Map';
import Autocomplete from '../../components/Autocomplete/Autocomplete';

import { ReactComponent as LocationArrowSvg } from '../../assets/svg/location-arrow.svg';
import styles from './MapPage.module.scss';

const defaultCenter = {
  lat: 48.622955,
  lng: 22.2849412,
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
      <h2 className={styles.pageTitle}>Вкажіть вашу адресу</h2>
      <div className={styles.content}>
        {isLoaded ? (
          <div className={styles.map}>
            <Map center={center} />
          </div>
        ) : (
          <h2>Loading</h2>
        )}
        <div className={styles.rightBlock}>
          <h4>Наша адреса</h4>
          <div className={styles.us}>
            Студентська набережна, 2, Ужгород, Закарпатська область, Україна
          </div>

          <LocationArrowSvg className={styles.arrow} />

          <h4>Адреса доставки</h4>
          <div className={styles.autocomplete}>
            <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
