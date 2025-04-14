import About from '@/components/Main/About';
import styles from './page.module.scss'
import Project from '@/components/Main/Project';
import GuestBook from '@/components/Main/GuestBook';

export default function Home() {
  return (
    <div className={styles.container}>
      <About />
      <Project />
      <GuestBook />
    </div>
  );
}