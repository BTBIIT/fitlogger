# 🏋️ FitLogger 프로젝트 정리
<<<<<<< f4619cb7f8bacaff9486bc54f7d3ede534b58ab1
<hr/>

### 운동 기록과 1RM 계산을 위한 React 기반 웹앱으로, <br>PWA 및 Firebase를 연동하여 점차 확장해나가는 사이드 프로젝트

<hr/>

## 📆 오늘 진행한 일정

- React 기반 Vite 프로젝트 생성 및 설정
- 기본 컴포넌트 (Header, WorkoutForm, WorkoutListByDate) 작성
- CSS 반응형 스타일링 및 1RM 강조 효과 적용
- 로고 교체 및 헤더 색상 조정
- PWA 기능 연동 및 manifest 설정
- Firebase 프로젝트 생성 및 SDK 연동 확인
- `.env`를 통한 보안 키 분리
- GitHub 저장소 연동 및 첫 커밋
- SSH 키 등록 및 원격 저장소 push 설정 완료

=======

<hr/>

### 운동 기록과 1RM 계산을 위한 React 기반 웹앱으로, <br>PWA 및 Firebase를 연동하여 점차 확장해나가는 사이드 프로젝트

<hr/>

## 📆 오늘 진행한 일정

- React 기반 Vite 프로젝트 생성 및 설정
- 기본 컴포넌트 (Header, WorkoutForm, WorkoutListByDate) 작성
- CSS 반응형 스타일링 및 1RM 강조 효과 적용
- 로고 교체 및 헤더 색상 조정
- PWA 기능 연동 및 manifest 설정
- Firebase 프로젝트 생성 및 SDK 연동 확인
- `.env`를 통한 보안 키 분리
- GitHub 저장소 연동 및 첫 커밋
- SSH 키 등록 및 원격 저장소 push 설정 완료

>>>>>>> PWA 준비 및 배포 전 코드 정리
## 🔜 앞으로 진행할 일정

- Firebase Realtime Database 연동
- 사용자 인증 (Google 또는 이메일 기반)
- Firebase에 운동 기록 저장 및 불러오기
- 기록 통계 시각화 (그래프 등)
- 최종 배포: Netlify 또는 Firebase Hosting

## 🔄 현재 진행 중인 작업

- Firebase 연동 구조 준비
- 운동 기록 저장 구조 설계

---

## 📦 기술 스택

- React (Vite 기반)
- Firebase
- PWA (Progressive Web App)
- GitHub

## 🛠️ 프로젝트 초기화 및 설치

```bash
# Vite 기반 React 프로젝트 생성
npm create vite@latest fitlogger -- --template react

cd fitlogger
npm install

# Firebase SDK 설치
npm install firebase

# 개발 서버 실행
npm run dev
```

## 🗂 디렉터리 구조 요약

```
FITLOGGER/
├── node_modules/ # npm 패키지 설치 디렉터리
├── public/ # 정적 파일 경로 (PWA 관련 포함)
│ ├── icons/
│ │ ├── icon-192x192.png # PWA 아이콘 (192x192)
│ │ ├── icon-512x512.png # PWA 아이콘 (512x512)
│ ├── manifest.json # PWA 매니페스트 파일
│ └── vite.svg # 기본 Vite 아이콘 (사용 X 가능성)
├── src/ # 메인 소스 코드 디렉터리
│ ├── assets/
│ │ └── logo.svg # 앱 로고 SVG
│ ├── components/ # 재사용 가능한 컴포넌트 모음
│ │ ├── Header.jsx # 상단 헤더 (로고 + 제목)
│ │ ├── WorkoutForm.jsx # 운동 입력 폼 컴포넌트
│ │ └── WorkoutListByDate.jsx # 날짜별 운동 리스트 카드 UI
│ ├── firebase/
│ │ └── firebaseConfig.js # Firebase 설정 및 초기화
│ ├── pages/
│ │ └── Home.jsx # 홈 화면 페이지 컴포넌트
│ ├── utils/
│ │ └── calculate1RM.js # 1RM 계산 함수 (Epley 공식)
│ ├── App.css # 전체 앱 스타일 (레이아웃, 반응형 등)
│ ├── App.jsx # 전체 앱 레이아웃 (Header + Home)
│ ├── index.css # 기본 글로벌 스타일
│ └── main.jsx # React 앱 진입점 (root 렌더링)
├── .env # 환경변수 파일 (API 키 등 보관)
├── .gitignore # Git에서 제외할 파일 정의
├── eslint.config.js # ESLint 설정
├── index.html # 앱의 HTML 템플릿 (Vite 전용)
├── package.json # 프로젝트 메타 정보 및 의존성
├── package-lock.json # 의존성 잠금 파일
├── README.md # 프로젝트 설명 문서
└── vite.config.js # Vite 설정 파일
```

## 🌐 PWA 설정

`public/manifest.json` 예시:

```json
{
  "name": "FitLogger",
  "short_name": "FitLogger",
  "description": "운동 기록과 1RM 추적을 위한 피트니스 앱",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1e293b",
  "icons": [
    {
      "src": "/icons/192icons.svg",
      "sizes": "192x192",
      "type": "image/svg"
    },
    {
      "src": "/icons/512icons.svg",
      "sizes": "512x512",
      "type": "image/svg"
    }
  ]
}
```

`index.html` 추가 사항:

```html
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#1e293b" />
```

## 🔐 Firebase 연동

```js
// Firebase SDK import
import { initializeApp } from "firebase/app";

// .env 파일에 저장된 환경변수로 구성
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
export default app;
```

> 보안을 위해 이 파일은 `.env`로 분리하고 `.gitignore`에 추가함.

## 🔧 Git 연동 및 커밋 명령어

```bash
# Git 초기화
git init

# 원격 저장소 연결
git remote add origin git@github.com:BTBIIT/fitlogger.git

# 변경 파일 스테이징
git add .

# 커밋 메시지 작성
git commit -m "PWA, Firebase 연동 완료 및 UI 정리"

# 원격 저장소로 푸시
git push -u origin master
```

`.gitignore` 예시:

```
node_modules
dist
.env
firebaseConfig.js
```

---

## 📎 GitHub 저장소

👉 [https://github.com/BTBIIT/fitlogger](https://github.com/BTBIIT/fitlogger)
