'use client'

import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Slider from './components/Slider';
import Button from './components/Button';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h3>
          KUCA의<br/>
          정기 연주회와<br/>
          함께할 합주단원을<br />
          모집합니다!
        </h3>
        <h4><pre>지휘자 유건   |   악장 이제우</pre></h4>
        <Button>연주회 일정 알아보기</Button>
      </div>
    </div>
  )
}
