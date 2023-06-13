import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Filter from "../../layout/Filter/Filter";
import AllItems from "../../layout/AllItems/AllItems";
import DeliveryInfo from "../../layout/DeliveryInfo/DeliveryInfo";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ImageSlider />
      <Filter />
      <AllItems />
      <DeliveryInfo />
    </>
  );
};

export default Home;
