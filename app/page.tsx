'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Slider from './components/Slider';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h3>
          KUCA의<br/>
          43번째 정기 연주회에<br/>
          여러분을 초대합니다!
          </h3>
        <h4><pre>지휘자 유건   |   악장 이제우   |   합주 한국대학생클래식기타연합회</pre></h4>
      </div>
    </div>
  )
}
