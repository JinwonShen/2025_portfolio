"use client";

export default function SkipNavigation() {
	const handleSkipToMain = () => {
		const mainContent = document.getElementById("main-content");
		if (mainContent) {
			mainContent.focus();
			mainContent.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<button type="button" className="skip-nav" onClick={handleSkipToMain}>
			메인 콘텐츠로 바로가기
		</button>
	);
}
