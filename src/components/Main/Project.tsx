import styles from './Project.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
  return (
    <section className={styles.projectContainer} id="project">
      <h1>
        Project
      </h1>
      <div className={styles.projectCont}>
        <div className={styles.project}>
          <div className={styles.imgCont}>
            <div className={styles.imgBox}>
              <Image 
              src="/images/project/project-algonote.png" 
              alt="Portfolio" 
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <div className={styles.hoverLayer}>
                <Link href={'https://algorithm-9r06nuwrx-jinwonshens-projects.vercel.app'}>Visit</Link>
                <Link href={'https://github.com/JinwonShen/algorithm-app'}>github</Link>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.mobileLink}>
              <Link href={'https://algorithm-9r06nuwrx-jinwonshens-projects.vercel.app'}>Visit</Link>
              <Link href={'https://github.com/JinwonShen/algorithm-app'}>github</Link>
            </div>

            <h2>알고리즘 앱 (AlgoNote)</h2>
            <p>알고리즘 문제를 풀고, 직접 코드를 실행하고, 내 푼 문제를 저장해 확인할 수 있는 개인 맞춤형 문제풀이 앱입니다. 사용자의 입력에 따라 문제 목록을 실시간으로 필터링하고, 검색하고 저장할 수 있습니다. </p>

            <div className={styles.skills}>
              <span>React</span>
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>Vercel</span>
              <span>Codemirror 6</span>
              <span>React Hooks</span>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.imgCont}>
            <div className={styles.imgBox}>
              <Image 
              src="/images/project/project-portfolio.png" 
              alt="Portfolio" 
              width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <div className={styles.hoverLayer}>
                <Link href={'https://2025-portfolio-coral.vercel.app/'}>Visit</Link>
                <Link href={'https://github.com/JinwonShen/2025_portfoliio'}>github</Link>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.mobileLink}>
              <Link href={'https://2025-portfolio-coral.vercel.app/'}>Visit</Link>
              <Link href={'https://github.com/JinwonShen/2025_portfoliio'}>github</Link>
            </div>
            <h2>포트폴리오</h2>
            <p>포트폴리오 사이트입니다. 레이아웃을 절반으로 나누어 좌측의 헤더영역 우측의 컨텐츠 영역으로 구분해 사이트를 이용할 수 있습니다. About, Project, Guestbook 세 가지 메뉴로 구성되어 있습니다.</p>

            <div className={styles.skills}>
              <span>React</span>
              <span>TypeScript</span>
              <span>Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}