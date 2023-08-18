import React from 'react';
import styles from './Timeline.module.css';

export default function Timeline({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.timeline}>{children}</div>
  )
};