import styles from './page.module.css'
import Banner from '../../public/banner.jpg'
import Image from 'next/image'
export default function About() {
  return (
    <div>
      <div className={styles.container}>
        <Image
          alt=''
          src={Banner}
          className={styles.banner}
        />
        <h3 className={styles.text}>한국대학생클래식기타연합회 소개</h3>
        한국대학생클래식기타연합회 소개
      </div>
    </div>
  )
}
