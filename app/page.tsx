'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  
  let slides: {url: string}[] = [{url: '/42.jpg'}, {url: '/41.jpg'},];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  } 

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className={styles.container}>
      <Image
        fill
        alt=''
        src={slides[currentIndex].url}
        className={styles.background}
      />
      <h3 className={styles.text}>
        <p>welcome to</p>
        <p>KUCA!</p>
      </h3>
      <div onClick={ prevSlide } className={styles.prevButton}>&lt;</div>
      <div onClick={ nextSlide } className={styles.nextButton}>&gt;</div>
      <div className={styles.dots}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={ () => goToSlide(slideIndex)} className={styles.dot}>
            ●
          </div>
        ))}
      </div>
    </div>
  )
}
