"use client";

import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

function Slider({ slides, autoplay = true, displayTime = 3000 }) {
  const [displayCount, setDisplayCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDisplayCount(width <= 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCurrentSlides = () => {
    if (displayCount === 1) {
      return [slides[currentIndex]];
    } else {
      const startIndex = Math.floor(currentIndex / 3) * 3;
      return slides.slice(startIndex, startIndex + 3);
    }
  };

  useEffect(() => {
    const transitionSlides = () => {
      setAnimating(true);
      
      setTimeout(() => {
        if (displayCount === 1) {
          setCurrentIndex((prev) => (prev + 1) % slides.length);
        } else {
          setCurrentIndex((prev) => (Math.floor(prev / 3) * 3 + 3) % slides.length);
        }
        
        setTimeout(() => {
          setAnimating(false);
        }, 50);
      }, 500);
    };

    if (autoplay && slides.length > displayCount) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(transitionSlides, displayTime);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, displayTime, slides.length, displayCount]);

  return (
    <div className="slider-container">
      <div className={`slider-images ${animating ? "animating" : ""}`}>
        {getCurrentSlides().map((slide) => (
          <div key={slide.id} className="slide">
            <div className="image-wrapper">
              <img src={slide.image} alt={`Slide ${slide.id}`} />
            </div>
            <div className="slide-text">{slide.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoplay: PropTypes.bool,
  displayTime: PropTypes.number,
};

export default Slider;
