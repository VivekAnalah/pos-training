
import React, { useState } from 'react';
import { PptxRenderer, Slide } from 'react-pptx';

const PptReader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(0, prevSlide - 1));
  };

  return (
    <div>
      <h1>PowerPoint Reader</h1>
      <div>
        <button onClick={handlePrevSlide} disabled={currentSlide === 0}>
          Previous Slide
        </button>
        <button onClick={handleNextSlide} disabled={currentSlide === slides.length - 1}>
          Next Slide
        </button>
      </div>
      <div>
        <PptxRenderer>
          {slides.map((slide, index) => (
            <Slide key={index} index={index} currentSlide={currentSlide}>
              {slide}
            </Slide>
          ))}
        </PptxRenderer>
      </div>
    </div>
  );
};

// Example slides content (replace with your actual content)
const slides = [
  <div>
    <h2>Slide 1</h2>
    <p>This is the content of Slide 1.</p>
  </div>,
  <div>
    <h2>Slide 2</h2>
    <p>This is the content of Slide 2.</p>
  </div>,
  // Add more slides as needed
];

export default PptReader;
