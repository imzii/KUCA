import styles from './page.module.css'
import Banner from '../../public/banner.jpg'
import Image from 'next/image'

type UniversityClub = {
  university: string;
  club: string;
};

export default function About() {
  const clubs:UniversityClub[] = require('/public/data/clubs.json');
  return (
    <div>
      <div>
        <div className={styles.container}>
          <Image
            alt=''
            src={Banner}
            className={styles.banner}
          />
          <h3 className={styles.text}>한국대학생클래식기타연합회 소개</h3>
        </div>
      </div>
      <main>
        <h1>한국대학생클래식기타연합회 KUCA</h1>
        <p>
          한국대학생클래식기타연합회 Korea Univ.Classical guitar Association은 1979년 창립 이후 38개 학교, 45개 동아리가 가입되어 있습니다.<br/>
          지역 차로 인한 활동 한계로 인하여 부산경남클래식기타연맹이 따로 생긴 이래로 조직명칭은 그대로 유지하되, 이에 덧붙여<br/>
          한국대학생클래식기타연합회(서울경인지역)이란 명칭을 사용하고 있습니다.<br/><br/>
        </p>
        <h1>한국대학생클래식기타연합회 소속 학교</h1>
        <p>
          아래 목록에 있는 학교 동아리에 가입된 회원의 경우, 누구나 한국대학생클래식기타연합회의 준회원~합주단원으로 활동하실 수 있습니다.
        </p>
        <table>
          <tbody>
            {clubs.map(item => (
              <tr key={item.university}>
                <td>{item.university}</td>
                <td>{item.club}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
