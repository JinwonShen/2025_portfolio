import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <section id="about" className={styles.about}>
        <h2>About</h2>
        <p>자기소개 내용이 들어갈 영역</p>
      </section>
      <section id="project" className={styles.project}>
        <h2>Project</h2>
        <p>프로젝트 영역</p>
      </section>
      <section id="guestbook" className={styles.guestbook}>
        <h2>GuestBook</h2>
        <p>방명록 !</p>
      </section>
    </div>
  );
}
