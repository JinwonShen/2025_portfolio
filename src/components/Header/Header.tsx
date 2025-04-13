import styles from './Header.module.scss'
import Menu from "./Menu";
import Title from "./Title";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Title />
      <Menu />
    </header>
  )
}