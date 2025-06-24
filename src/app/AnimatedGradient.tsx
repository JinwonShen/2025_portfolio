"use client";

import { useEffect, useRef } from "react";
import styles from "./AnimatedGradient.module.scss";

export const AnimatedGradient = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		const handleMouseMove = (e: MouseEvent) => {
			pointer = { x: e.clientX, y: e.clientY };
		};

		window.addEventListener("resize", resize);
		window.addEventListener("mousemove", handleMouseMove);

		resize();

		let animationId: number;
		const render = () => {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const gradient = ctx.createRadialGradient(
				pointer.x,
				pointer.y,
				100,
				pointer.x,
				pointer.y,
				600,
			);
			gradient.addColorStop(0, "#bac8e0");
			gradient.addColorStop(1, "#6a85b6");
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			animationId = requestAnimationFrame(render);
		};

		render();

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.glassyOverlay} />
			<canvas ref={canvasRef} />
		</div>
	);
};
