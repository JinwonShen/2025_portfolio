import Footer from "../components/Footer/Footer";
import About from "../components/Main/About";
import GuestBook from "../components/Main/GuestBook";
import Project from "../components/Main/Project";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.container}>
			<About />
			<Project />
			<GuestBook />
			<Footer />
		</main>
	);
}
