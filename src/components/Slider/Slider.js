import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import Image from '../../assets/image/img-1.svg';

function Slider() {
  const sliderRef = useRef(null);
  const [sliderLength, setSliderLength] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const length = sliderRef.current.children.length;
      setSliderLength(length);
      console.log(length);
    }
  }, []);

  const handleNextClick = () => {
    if (currentIndex < sliderLength - 4) {
      setTranslateX(prevTranslateX => prevTranslateX - 23);
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      setTranslateX(0);
      setCurrentIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setTranslateX(prevTranslateX => prevTranslateX + 23);
      setCurrentIndex(prevIndex => prevIndex - 1);
    } else {
      setTranslateX(-23 * (sliderLength - 4));
      setCurrentIndex(sliderLength - 4);
    }
  };

  return (
    <div className="general_slider_container">
      <div
        className="slider"
        ref={sliderRef}
        style={{
          transform: `translateX(${translateX}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        <SliderImage />
        <SliderImage />
        <SliderImage />
        <SliderImage />
        <SliderImage />
        <SliderImage />
      </div>
      <div className="slider_control">
        <div className="dots">
          {Array.from({ length: sliderLength - 3 }).map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
            ></div>
          ))}
        </div>
        <div className="both_btn">
          <button className="prevButton btn" onClick={handlePrevClick}>
            <p>&larr;</p>
          </button>
          <button className="nextButton btn" onClick={handleNextClick}>
            <p>&rarr;</p>
          </button>
        </div>
      </div>
    </div>
  );
}

function SliderImage() {
  return (
    <section className="prod_container">
      <div className="slider_img_container">
        <img className="slider_img" src={Image} alt="img" />
      </div>
      <div className="prod_name_price">
        <div>
          <h3 className="header">Product Name</h3>
          <p>Lorem ipsum</p>
        </div>
        <p className="price">$55</p>
      </div>
      <div>
        <a className="add_cart_btn" href="./index.html">
          Add to cart
        </a>
      </div>
    </section>
  );
}

export default Slider;
