"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

// Lenis 인스턴스를 전역에서 접근 가능하도록 설정
let lenisInstance: Lenis | null = null;

export const getLenisInstance = () => lenisInstance;

export default function LenisProvider() {
	const rafRef = useRef<number | undefined>();

	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.1,
			smoothWheel: true,
			duration: 1.2, // 스크롤 애니메이션 지속 시간
		});

		lenisInstance = lenis;

		function raf(time: number) {
			lenis.raf(time);
			rafRef.current = requestAnimationFrame(raf);
		}

		rafRef.current = requestAnimationFrame(raf);

		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
			}
			lenis.destroy();
			lenisInstance = null;
		};
	}, []);

	return null;
}
