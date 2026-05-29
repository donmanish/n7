import React, { useState } from "react";
import vectorArt from "../assets/images/Vector-art.png"; 
import arrowLeftIcon from "../assets/images/arrow-left.png";
import arrowRightIcon from "../assets/images/arrow-right.png";
import "../assets/style/slider.css";

function Slider({kontrastLogo, ShellsFindlogo, zoomerrLogo}) {    
  const slides = [
    {
      id: 1,
      category: "GETTING STARTED",
      title: "How we help brand reach out to more people",
      partner: "Zoomerr",
      partnerIcon: zoomerrLogo,
      link: "/case-study-1"
    },
    {
      id: 2,
      category: "Core Implementations",
      title: "Scaling transaction infrastructure globally",
      partner: "SHELLS",
      partnerIcon: ShellsFindlogo,
      link: "/case-study-2"
    },
    {
      id: 3,
      category: "Digital Transformation",
      title: "Migrating traditional systems to cloud native",
      partner: "kontrast",
      partnerIcon: kontrastLogo,
      link: "/case-study-3"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Calculates exact dynamic layout classes to manage side overlap visibility
  const getSlideClass = (index) => {
    if (index === activeIndex) return "active-card";
    if (index === (activeIndex - 1 + slides.length) % slides.length) return "prev-card";
    if (index === (activeIndex + 1) % slides.length) return "next-card";
    return "hidden-card";
  };

  return (
    <div className="container py-5 slider-perspective-wrapper">
      
      {/* Slider Window Container Track */}
      <div className="slider-view-viewport mx-auto position-relative mb-5">
        
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`card slider-main-card border-0 p-4 p-md-5 text-start position-absolute top-0 start-0 end-0 bottom-0 ${getSlideClass(index)}`}
          >
            <div className="row align-items-center h-100 g-4 g-md-5">

              {/* Left Graphic Matrix Column */}
              <div className="col-12 col-md-5">
                <div className="vector-art-canvas-two d-flex align-items-center rounded-4">
                  <div className="cross-graphic-grid">
                    <div className="cross-img-unit"><img src={vectorArt} alt="vector-art" className="cross-img" /></div>
                    <div className="cross-img-unit"><img src={vectorArt} alt="vector-art" className="cross-img" /></div>
                    <div className="cross-img-unit"><img src={vectorArt} alt="vector-art" className="cross-img" /></div>
                    <div className="cross-img-unit"><img src={vectorArt} alt="vector-art" className="cross-img" /></div>
                  </div>
                </div>
              </div>

              {/* Right Content Meta Column */}
              <div className="col-12 col-md-7 d-flex flex-column justify-content-between h-100">
                <div>
                  <span className="slider-category text-uppercase mb-2 d-block">
                    {slide.category}
                  </span>
                  <h3 className="slider-title text-white mb-4">
                    {slide.title}
                  </h3>
                  <div className="slider-partner d-flex align-items-center text-white gap-2 mb-4">
                    
                    <img src={slide.partnerIcon} alt={slide.partner}/>
                    <span className="partner-name">{slide.partner}</span>
                  </div>
                </div>

                <a href={slide.link} className="btn btn-slider-action w-100 py-2.5 text-uppercase text-decoration-none text-center">
                  READ MORE
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Slider Interface Controls Area */}
      <div className="row align-items-center mt-4 justify-content-center">
        <div className="col-12 max-width-layout d-flex align-items-center justify-content-between position-relative">
          
          {/* Centered Controls block matching image */}
          <div className="slider-button-controllers d-flex align-items-center gap-3 mx-auto">
            <button onClick={handlePrev} className="btn btn-slider-arrow d-flex align-items-center justify-content-center" aria-label="Previous Slide">
              <img src={arrowLeftIcon} alt="left arrow" />
            </button>

            {/* Inline Dot Indicators Group */}
            <div className="d-flex align-items-center gap-2 mx-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`slider-dot-indicator ${index === activeIndex ? "active-bar" : ""}`}
                />
              ))}
            </div>

            <button onClick={handleNext} className="btn btn-slider-arrow d-flex align-items-center justify-content-center" aria-label="Next Slide">
              <img src={arrowRightIcon} alt="right arrow" />
            </button>
          </div>

          {/* View All absolute side position */}
          <div className="slider-link position-absolute end-0">
            <a href="/" className="btn-inline-link text-uppercase text-decoration-none d-flex align-items-center">
              <span className="btn-text">View All</span>
              <img src={arrowRightIcon} alt="Arrow" className="ms-2 arrow-icon-img" />
            </a>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default Slider;
