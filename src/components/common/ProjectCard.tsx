"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ProjectCard.module.scss";

interface Project {
	id: string;
	title: string;
	image: string;
	alt: string;
	visit: string;
	github: string;
	description: string;
	skills: string[];
	tags: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
	const pathname = usePathname();
	const isProjectPage = pathname === "/Project";

	return (
		<div
			className={`${isProjectPage ? styles.projectPage : styles.projectMain}`}
		>
			<div className={styles.imgCont}>
				<div className={styles.imgBox}>
					<Image
						src={project.image}
						alt={project.alt}
						width={0}
						height={0}
						sizes="100%"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
					<div className={styles.hoverLayer}>
						<Link href={project.visit} target="_blank">
							<svg
								role="img"
								viewBox="0 0 24 24"
								width={24}
								height={24}
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Google Chrome</title>
								<path
									fill="currentColor"
									d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z"
								/>
							</svg>
							<span>Visit</span>
						</Link>
						<Link href={project.github} target="_blank">
							<svg
								role="img"
								viewBox="0 0 24 24"
								width={24}
								height={24}
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>GitHub</title>
								<path
									fill="currentColor"
									d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
								/>
							</svg>
							<span>Github</span>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.info}>
				<div className={styles.mobileLink}>
					<Link href={project.visit} target="_blank">
						Visit
					</Link>
					<Link href={project.github} target="_blank">
						GitHub
					</Link>
				</div>
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<div className={styles.skills}>
					{project.skills.map((skill) => (
						<span key={skill}>{skill}</span>
					))}
				</div>
			</div>
		</div>
	);
}
