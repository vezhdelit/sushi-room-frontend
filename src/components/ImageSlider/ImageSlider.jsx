import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchSlides } from "../../redux/slices/adSlice";

import styles from "./ImageSlider.module.scss";

import { ReactComponent as ArrowLeftIcon } from "../../assets/svg/buttons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/buttons/arrow-right.svg";
import CircleIcon from "@mui/icons-material/Circle";

const ImageSlider = () => {
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = useSelector((state) => state.ad.slides);

  const getSlides = async () => {
    dispatch(fetchSlides());
  };

  React.useEffect(() => {
    getSlides();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  const getSlidesContainerStyle = () => ({
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.4s",
    width: 1060 * slides.length,
    transform: `translateX(${-currentIndex * 1060}px)`,
  });

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <ArrowLeftIcon onClick={goToPrevious} className={styles.leftArrow} />
        <ArrowRightIcon onClick={goToNext} className={styles.rightArrow} />
        <div className={styles.slidesContainer}>
          <div style={getSlidesContainerStyle()}>
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={styles.slide}
                style={{
                  backgroundImage: `url(${slides[slideIndex].imageUrl})`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className={styles.dotsContainer}>
          {slides.map((slide, slideIndex) => (
            <CircleIcon
              className={`${styles.dot} ${
                currentIndex === slideIndex ? styles.active : ""
              }`}
              key={slideIndex}
              sx={{ fontSize: 13 }}
              onClick={() => goToSlide(slideIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
