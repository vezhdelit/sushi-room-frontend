import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import FilterSection from '../../layout/FilterSection/FilterSection';
import ItemsSection from '../../layout/ItemsSection/ItemsSection';
import DeliveryInfo from '../../layout/DeliveryInfo/DeliveryInfo';

function Home() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <ImageSlider />
            <FilterSection />
            <ItemsSection />
            <DeliveryInfo />
        </>
    );
};

export default Home;
