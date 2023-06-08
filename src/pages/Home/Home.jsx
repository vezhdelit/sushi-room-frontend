import ImageSlider from '../../components/ImageSlider/ImageSlider';
import FilterSection from '../../layout/FilterSection/FilterSection';
import ItemsSection from '../../layout/ItemsSection/ItemsSection';
import DeliveryInfo from '../../layout/DeliveryInfo/DeliveryInfo';

function Home() {
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
