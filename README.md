# 🏋️ FitLogger 프로젝트 정리
<hr/>
## 운동 기록과 1RM 계산을 위한 React 기반 웹앱으로, PWA 및 Firebase를 연동하여 점차 확장해나가는 사이드 프로젝트
---

## 📆 오늘 진행한 일정

- React 기반 Vite 프로젝트 생성 및 설정
- 기본 컴포넌트 (Header, WorkoutForm, WorkoutListByDate) 작성
- CSS 반응형 스타일링 및 1RM 강조 효과 적용
- 로고 교체 및 헤더 색상 조정
- PWA 기능 연동 및 manifest 설정
- Firebase 프로젝트 생성 및 SDK 연동 확인
- GitHub 저장소 연동 및 첫 커밋
- SSH 키 등록 및 원격 저장소 push 설정 완료

## 🔜 앞으로 진행할 일정

- Firebase Realtime Database 연동
- 사용자 인증 (Google 또는 이메일 기반)
- Firebase에 운동 기록 저장 및 불러오기
- 기록 통계 시각화 (그래프 등)
- 최종 배포: Netlify 또는 Firebase Hosting

## 🔄 현재 진행 중인 작업

- Firebase 연동 구조 준비
- `.env`를 통한 보안 키 분리
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
fitlogger/
├─ public/
│  ├─ icons/
│  │  ├─ 192icons.svg
│  │  └─ 512icons.svg
│  └─ manifest.json
├─ src/
│  ├─ components/
│  ├─ firebase/
│  ├─ pages/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ main.jsx
├─ .gitignore
├─ index.html
└─ package.json
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
