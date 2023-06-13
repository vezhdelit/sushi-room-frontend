import React from 'react';
import ContentLoader from "react-content-loader"

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

const MapPage = (props) => {
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
      <h2 className={styles.pageTitle}>Перевірка зони доставки</h2>
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
