'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Slider from './components/Slider';

export default function Home() {
  
  const slides: string[] = ['/42.jpg', '/41.jpg',];

  return (
    <div className={styles.container}>
      <Slider images={slides} />
      <h3 className={styles.text}>
        <p>welcome to</p>
        <p>KUCA!</p>
      </h3>
    </div>
  )
}
