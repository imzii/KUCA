import React from 'react';
import styles from './Timestamp.module.css';

interface TimestampProps {
  time: string,
  desc: string,
  float: string,
}

export default function Timestamp({ time, desc, float }: TimestampProps) {
  return (
  <div>
    <div className={`${styles.container} ${float === 'left' ? styles.left : styles.right}`}>
      <div className={styles.content}>
        <h2>{time}</h2>
        <p>{desc}</p>
      </div>
    </div>
  </div>
  )
};