"use client";

import { useEffect, useRef, useState } from "react";

const Carousel = ({ images, autoplay = true, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (autoplay && images && images.length > 1) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      timerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoplay, interval, images, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = () => {
    if (autoplay && timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && images && images.length > 1) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
    }
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div 
      id="imageCarousel" 
      className="carousel slide my-3" 
      data-bs-ride={autoplay ? "carousel" : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={`indicator-${index}`}
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div 
            key={`slide-${index}`}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img 
              src={image.src || image} 
              className="d-block carousel-image" 
              alt={image.alt || `Slide ${index + 1}`} 
            />
            {(image.caption || image.title) && (
              <div className="carousel-caption d-none d-md-block">
                {image.title && <h5>{image.title}</h5>}
                {image.caption && <p>{image.caption}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Previous and Next controls */}
      <button 
        className="carousel-control-prev" 
        type="button" 
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
