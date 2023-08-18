import React, { useState, useEffect } from 'react';

interface SliderProps {
  images: string[],
}

export default function Slider({ images }: SliderProps )  {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const getSlideStyle = (index: number) => {
    let position;
    if (index === current) {
      position = '0%';
    } else if ((index - 1) % images.length === current) {
      position = '-100%';
    } else {
      position = '100%';
    }
    return {
      backgroundImage: `url(${images[index]})`,
      left: position
    };
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className="slide"
          style={getSlideStyle(index)}
        ></div>
      ))}
      <style jsx>{`
        .slider {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          filter: brightness(0.3);
        }
        .slide {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: left 2s;
        }
      `}</style>
    </div>
  );
};