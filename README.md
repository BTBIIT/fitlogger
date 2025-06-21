# FitLogger

**FitLogger**는 사용자가 날짜별로 운동 기록을 추가하고, 1RM(1회 최대 중량)을 자동 계산해주는 간단한 웹 기반 피트니스 로그 앱입니다. <br> 반응형 웹으로 제작되어 모바일과 데스크탑 모두에서 사용할 수 있으며, PWA 기능을 통해 앱 설치도 가능.

---

## 📌 프로젝트 개요

- **프로젝트명:** FitLogger
- **개발 기간:** 2025-06-20 ~ 2025-06-21
- **기술 스택:**
  - React (Vite 기반)
  - HTML/CSS (반응형)
  - LocalStorage 저장 방식
  - Progressive Web App (PWA)

---

## 🛠 주요 기능

- 날짜별 운동 기록 추가 및 삭제
- Epley 공식을 사용한 자동 1RM 계산
- 운동 기록별 카드 UI
- 반응형 디자인 (모바일 최적화)
- PWA 설치 및 오프라인 사용 지원

---

## 📁 디렉터리 구조

```
fitlogger/
├── public/
│   ├── icons/                  # PWA 아이콘 이미지
│   ├── screenshots/            # PWA 스크린샷
│   └── manifest.json           # PWA 메타 정보
├── src/
│   ├── components/             # Header, WorkoutForm, WorkoutListByDate 컴포넌트
│   ├── pages/                  # Home.jsx (메인 페이지)
│   ├── App.jsx                 # App 루트 컴포넌트
│   ├── main.jsx                # ReactDOM 진입점
│   └── App.css                 # 전체 스타일
├── index.html                  # HTML 템플릿
├── vite.config.js              # Vite 설정
├── package.json                # 프로젝트 의존성
├── .gitignore                  # Git 추적 제외 파일 목록
└── README.md                   # 프로젝트 소개 문서
```

---

## ⚙️ 로컬 개발 실행

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev
```

---

## 🧱 빌드 및 PWA 준비

```bash
# 1. 빌드
npm run build

# 2. 빌드된 파일은 /dist 경로에 생성됨
```

---

## 🌍 GitHub Pages 배포

### 1. GitHub Pages 설정

`vite.config.js` 내 `base` 경로를 다음과 같이 설정:

```js
export default defineConfig({
  base: '/fitlogger/',
  ...
});
```

### 2. gh-pages 설치 및 배포

```bash
npm install -D gh-pages

# 배포 명령어
npx gh-pages -d dist
```

### 3. 커밋 및 푸시 예시

```bash
git add .
git commit -m "🚀 build: 앱 배포용 빌드 완료"
git push origin master
```

---

## 📱 PWA 설치 가이드

- `manifest.json`에 다음과 같은 항목 포함:
  - `start_url`: `/fitlogger/`
  - `icons`: 192x192, 512x512
  - `screenshots`: 모바일/데스크탑용 1장씩
- HTTPS에서만 설치 가능 (GitHub Pages는 자동 적용)
- 앱 아이콘이 홈 화면에 생성되며 오프라인에서도 작동 가능

---

## 🧹 Firebase 제거 내용

- Firebase 연동 파일 (`firebaseConfig.js`, `firestore.js`) 삭제
- 모든 기능은 LocalStorage 기반으로 재구성
- Firebase 관련 의존성 및 설정은 `package.json`과 `.gitignore` 등에서 제거

---

## 🔗 배포 주소

👉 **[https://btbiit.github.io/fitlogger/](https://btbiit.github.io/fitlogger/)**

---

## 👀 미리보기

> 모바일

`/public/screenshots/screenshot-mobile.png`

> 데스크탑

`/public/screenshots/screenshot-desktop.png`

---

## 📝 작성자

- GitHub: [@BTBIIT](https://github.com/BTBIIT)
- 프로젝트 기획, 개발, 배포 전 과정 직접 수행
