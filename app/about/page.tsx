import styles from './page.module.css'
import Banner from '../../public/banner1.jpg'
import Image from 'next/image'
export default function About() {
  return (
    <div className={styles.main}>
      <Image
        alt=''
        src={Banner}
        layout="responsive"
      />
      <h3>About</h3>
    </div>
  )
}
