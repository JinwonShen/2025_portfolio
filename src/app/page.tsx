import About from '@/components/Main/About';
import styles from './page.module.scss'
import Project from '@/components/Main/Project';

export default function Home() {
  return (
    <div className={styles.container}>
      <About />
      <Project />
    </div>
  );
}

// links: github, velog, notion, email
// skills: html, css, javascript, typescript, react, next.js, zustand,
// tools: vscode, figma, adobe
// zustand, vercel