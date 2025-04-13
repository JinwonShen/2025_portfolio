# 2025 Portfolio

프론트엔드 개발자 진원 포트폴리오 사이트입니다.
Next.js App Router 기반으로 제작 진행 중입니다.

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- SCSS (module 방식)
- CSS Variables
- Biome (code format & lint)

## 폴더 구조

```
src/
├── app/         # 페이지 & 레이아웃 구성
├── components/  # 컴포넌트 모듈화
├── styles/      # 전역 스타일, 변수, reset
```

## 주요 개발 내용

| 구분     | 설명                                 |
| -------- | ------------------------------------ |
| 레이아웃 | Header / Content / Footer 분리       |
| Header   | Title, Menu, Links 로 컴포넌트 설계  |
| 반응형   | 모바일/테블릿 대응 진행중            |
| 폰트     | exo, exo2, IBM 사용                  |
| 스타일링 | rem 기반 폰트 크기 관리, SCSS 변수화 |

## 앞으로 진행할 작업

- Mobile Menu 디자인 개선
- Header 메뉴 hover, active 처리
- 페이지별 상세 UI 작업
- Animation 및 Interaction 추가
- 프로젝트 상세 페이지 작업
- GuestBook UI 설계

## Git 커밋 컨벤션

| Prefix   | 설명           |
| -------- | -------------- |
| feat     | 기능 추가      |
| fix      | 버그 수정      |
| style    | 스타일 변경    |
| refactor | 리팩토링       |
| chore    | 기타 설정 작업 |

## 프로젝트 설치 & 실행

```bash
npm install
npm run dev
```
