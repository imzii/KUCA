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
          <Timestamp time='2023년 11월 11일' desc='겨울 살롱' float='left'></Timestamp>
          <Timestamp time='2023년 12월 21일' desc='정기연주회 오디션' float='right'></Timestamp>
          <Timestamp time='2024년 1월 13일' desc='정기연주회 MT' float='left'></Timestamp>
          <Timestamp time='2024년 1월 20일' desc='1차 총회' float='right'></Timestamp>
          <Timestamp time='2024년 2월 1일' desc='정기연주회 MC' float='left'></Timestamp>
          <Timestamp time='2024년 2월 17일' desc='KUCA 정기연주회' float='right'></Timestamp>
        </Timeline>
      </main>
    </div>
  )
}
