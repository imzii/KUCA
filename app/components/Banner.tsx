import React from 'react';
import styles from './Banner.module.css';

interface BannerProps {
  imageNum: number,
  text: string,
}

export default function Banner({ imageNum, text }: BannerProps) {
  
  return (
    <div>
      <div className={styles.container}>
        <div style={{backgroundImage: `url(/banner${imageNum}.jpg)`}} className={styles.banner}></div>
        <h3 className={styles.text}>{ text }</h3>
      </div>
    </div>
  )
};