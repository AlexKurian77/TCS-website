import React, { useState } from "react";
import "./gallery.css";

const images = [
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
  "https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg",
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("next");

  const handleNext = () => {
    setSlideDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSlideDirection("prev");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-wrapper">
      <div className="gallery-text">
        <div className="gtext-wrapper">
          <span>GA</span>
          <span style={{ color: "#f46700" }}>LL</span>
          <span>ERY</span>
        </div>
      </div>

      <div className="slider-container">
        <button className="arrow prev" onClick={handlePrev}>
          {"<"}
        </button>

        <div className="slider-content">
          <img
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous"
            className={`slider-image prev-image ${
              slideDirection === "next" ? "slide-out-left" : "slide-in-left"
            }`}
          />

          <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className={`slider-image current-image
            }`}
          />

          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Next"
            className={`slider-image next-image ${
              slideDirection === "prev" ? "slide-out-right" : "slide-in-right"
            }`}
          />
        </div>

        <button className="arrow next" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
