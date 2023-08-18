import Image from 'next/image'
import styles from './page.module.css'
import Banner from '../components/Banner'
import Timeline from '../components/Timeline'
import Timestamp from '../components/Timestamp'

export default function Contact() {
  return (
    <div>
      <Banner imageNum={2} text='한국대학생클래식기타연합회 활동' />
      <main>
        <h1>한국대학생클래식기타연합회 2023년 활동 계획</h1>
        <Timeline>
          <Timestamp time='11월 11일' desc='겨울 살롱' float='left'></Timestamp>
          <Timestamp time='11월 11일' desc='겨울 살롱' float='right'></Timestamp>
        </Timeline>
      </main>
    </div>
  )
}
