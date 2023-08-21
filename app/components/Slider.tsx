// src/components/ImageSlider.tsx
import React, { useState, useEffect } from 'react';
import styles from './Slider.module.css';

interface ImageSliderProps {
  images: string[],
}

export default function Slider({ images }: ImageSliderProps ) {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className={styles.imageSlider}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};