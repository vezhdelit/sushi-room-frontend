import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Filter from '../../components/Filter/Filter';
import Items from '../../components/Items/Items';
import DeliveryInfo from '../../layout/DeliveryInfo/DeliveryInfo';

function Home() {
    return (
        <>
            <ImageSlider />
            <Filter />
            <Items />
            <DeliveryInfo />
        </>
    );
};

export default Home;
