"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import styles from "./Menu.module.scss";

export default function Menu() {
	const activeSection = useActiveSection((state) => state.activeSection);
	const setActiveSection = useActiveSection((state) => state.setActiveSection);
	const pathname = usePathname();

	const handleScrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (!element) return;

		// Lenis 인스턴스 동적 import로 가져오기
		import("../../hooks/useLenis").then(({ getLenisInstance }) => {
			const lenis = getLenisInstance();
			if (lenis) {
				// Lenis의 scrollTo 메서드 사용
				lenis.scrollTo(element, {
					duration: 1.2,
					easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
				});
			} else {
				// Lenis가 없는 경우 fallback
				element.scrollIntoView({ behavior: "smooth" });
			}
		});

		setActiveSection(id);
	};

	useEffect(() => {
		console.log("current pathname: ", pathname);
		const sectionIds = ["about", "project", "guestbook"];

		// 초기 로드 시 about 섹션을 기본으로 설정
		if (pathname === "/" && !activeSection) {
			setActiveSection("about");
		}

		// 스크롤 기반 섹션 감지 함수
		const checkActiveSection = () => {
			const sections = sectionIds
				.map((id) => {
					const element = document.getElementById(id);
					if (!element) return null;

					const rect = element.getBoundingClientRect();
					const windowHeight = window.innerHeight;

					// 섹션이 뷰포트에서 차지하는 비율 계산
					const visibleTop = Math.max(0, rect.top);
					const visibleBottom = Math.min(windowHeight, rect.bottom);
					const visibleHeight = Math.max(0, visibleBottom - visibleTop);
					const visibilityRatio = visibleHeight / windowHeight;

					// 섹션이 뷰포트 중앙에 얼마나 가까운지 계산
					const center = rect.top + rect.height / 2;
					const viewportCenter = windowHeight / 2;
					const distanceFromCenter = Math.abs(center - viewportCenter);

					// 최소 30% 이상 보여야 하고, 상단이 화면 중앙 위에 있어야 함
					const isSignificantlyVisible =
						visibilityRatio >= 0.3 || rect.top < viewportCenter;

					return {
						id,
						element,
						rect,
						distanceFromCenter,
						visibilityRatio,
						isVisible: rect.top < windowHeight && rect.bottom > 0,
						isSignificantlyVisible,
					};
				})
				.filter(
					(section): section is NonNullable<typeof section> => section !== null,
				);

			// 충분히 보이는 섹션들 중에서 가장 가까운 섹션 찾기
			const significantlyVisibleSections = sections.filter(
				(section) => section.isSignificantlyVisible,
			);

			const closestSection = significantlyVisibleSections.sort((a, b) => {
				// 1순위: 가시성 비율이 높은 것
				// 2순위: 중앙에 가까운 것
				const visibilityDiff = b.visibilityRatio - a.visibilityRatio;
				if (Math.abs(visibilityDiff) > 0.1) {
					return visibilityDiff;
				}
				return a.distanceFromCenter - b.distanceFromCenter;
			})[0];

			if (closestSection && closestSection.id !== activeSection) {
				console.log("Active section changed to:", closestSection.id, {
					visibilityRatio: closestSection.visibilityRatio,
					distanceFromCenter: closestSection.distanceFromCenter,
				});
				setActiveSection(closestSection.id);
			}
		};

		// Intersection Observer (보조 역할)
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					console.log(`Section ${entry.target.id}:`, {
						isIntersecting: entry.isIntersecting,
						intersectionRatio: entry.intersectionRatio,
					});
				}

				// 스크롤 기반 체크 트리거
				checkActiveSection();
			},
			{
				threshold: [0, 0.1, 0.3, 0.5],
				rootMargin: "-20% 0px -20% 0px",
			},
		);

		// 스크롤 이벤트 리스너 (Lenis와 호환)
		const handleScroll = () => {
			checkActiveSection();
		};

		// 초기 체크
		checkActiveSection();

		// 이벤트 리스너 등록
		window.addEventListener("scroll", handleScroll, { passive: true });

		for (const id of sectionIds) {
			const el = document.getElementById(id);
			if (el) {
				observer.observe(el);
			}
		}

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
		};
	}, [setActiveSection, pathname, activeSection]);

	return (
		<nav className={styles.menuContainer}>
			<ul>
				<li>
					<button
						onClick={() => handleScrollTo("about")}
						type="button"
						className={activeSection === "about" ? styles.active : ""}
					>
						About
					</button>
				</li>
				<li>
					<button
						onClick={() => handleScrollTo("project")}
						type="button"
						className={activeSection === "project" ? styles.active : ""}
					>
						<span>Project</span>
						<span className={styles.more}>
							<Link href="/Project">more</Link>
						</span>
					</button>
				</li>
				<li>
					<button
						onClick={() => handleScrollTo("guestbook")}
						type="button"
						className={activeSection === "guestbook" ? styles.active : ""}
					>
						GuestBook
					</button>
				</li>
			</ul>
		</nav>
	);
}
