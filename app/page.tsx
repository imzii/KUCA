import Image from 'next/image'
import styles from './page.module.css'
import Background from '../public/background.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
      src={Background}
      alt=''
      className={styles.background}
      />
      <h3 className={styles.text}>
        <p>welcome to</p>
        <p>KUCA!</p>
      </h3>
    </div>
  )
}
