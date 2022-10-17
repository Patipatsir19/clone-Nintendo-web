import { useState, useEffect } from "react";

import "./advert.styles.scss";

const AdvertSlide = ({
  images = [],
  autoPlay = true,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = images.length;
  const autoPlayTime = 5000;

  const nextSlide = (slideIndex = currentSlide + 1) => {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(newSlideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, [autoPlayTime]);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const onClickNext = () => {
    if (currentSlide !== slideLength - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === slideLength) {
      setCurrentSlide(1);
    } else if (currentSlide < slideLength) {
      setCurrentSlide(0);
    }
  };

  const onClickPrev = () => {
    if (currentSlide !== slideLength) {
      setCurrentSlide(currentSlide - 1);
      if (currentSlide <= 0) {
        setCurrentSlide(3);
      }
    } else if (currentSlide === slideLength) {
      setCurrentSlide(1);
    } else if (currentSlide >= -1) {
      setCurrentSlide((prev) => --prev);
    }
  };

  return (
    <div className="adimage-container" {...props}>
      <button className="prev" onClick={onClickPrev}>
        &#10094;
      </button>
      {images.map((imageUrl, id) => (
        <div
          key={id}
          className="slider"
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: id === 0 ? `-${currentSlide * 100}%` : undefined,
          }}
        ></div>
      ))}
      <button className="next" onClick={onClickNext}>
        &#10095;
      </button>
    </div>
  );
};

export default AdvertSlide;
