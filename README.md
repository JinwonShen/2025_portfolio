# JINWON SHEN - 2025 Portfolio

디자인 감각과 사용자 경험을 바탕으로 프론트엔드 개발까지 연결하는 하이브리드형 프론트엔드 개발자 포트폴리오 사이트입니다.

## Tech Stack

- React
- Next.js 15
- TypeScript
- SCSS (CSS Module)
- Vercel (Deploy)
- 기타 라이브러리
  - Codemirror 6
  - Lenis (Smooth Scroll)
  - localStorage (GuestBook)

---

## 주요 기능

### 1. 레이아웃 구조

| Left (Fixed)               | Right (Scroll)                               |
| -------------------------- | -------------------------------------------- |
| Header (Title, Menu, Icon) | Main Contents (About, Project, GuestBook 등) |

- PC: 좌측 Header 고정 + 우측 컨텐츠 스크롤
- Tablet: 3 Column Layout
- Mobile: Single Column Layout (Hamburger Menu)

---

### 2. About

- 자기소개
- Work Experience
- Skills & Tools (아이콘화)

---

### 3. Project

- 프로젝트 소개 카드
- 이미지 Hover 시
  - Visit 링크
  - GitHub 링크
  - 블러 & 딤 처리
- Skills Tag 제공

---

### 4. GuestBook

- localStorage 기반 간단 방명록
- 이름 + 메시지 등록
- 자동 날짜 표시
- 삭제 기능 (X)
- 반응형 대응 완료
- 카드형 UI

---

## Trouble Shooting & Learnings

| 이슈                                    | 해결 방법                                 |
| --------------------------------------- | ----------------------------------------- |
| Header Fixed인데 Scroll 될 때 같이 이동 | Header position 및 Layout 구조 개선       |
| 이미지 Hover 처리                       | overlay + blur + text                     |
| useLenis() Error                        | Client Component 내에서만 사용하도록 처리 |
| Responsive Grid                         | media query 사용, grid layout 변형        |

---

## 프로젝트 URL

> 배포 : https://2025-portfolio.vercel.app/
