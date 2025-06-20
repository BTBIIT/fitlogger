
# 🏋️‍♀️ FitLogger

운동 기록과 1RM 계산을 손쉽게 관리할 수 있는 웹 앱  
[PWA 설치 가능] + [Firebase 연동] + [반응형 UI]로 제작됨  
👉 **리포지토리**: [https://github.com/BTBIIT/fitlogger](https://github.com/BTBIIT/fitlogger)

---

## 🔧 프로젝트 목적

- 사용자 친화적인 운동 기록 앱 개발
- 1RM 계산 자동화 (Epley 공식 기반)
- 모바일/데스크탑 환경 모두 대응
- 추후 Firebase Auth 및 Storage 연동 예정

---

## 🚀 주요 기능

- 운동명, 무게, 반복 횟수 입력
- 1RM(최대 중량) 자동 계산 및 강조 표시
- 날짜별 기록 정리
- 반응형 레이아웃 지원
- 앱처럼 설치 가능한 PWA 지원
- Firebase로 백업 및 확장 예정

---

## ⚙️ 기술 스택

| 항목           | 사용 도구            |
|----------------|----------------------|
| 프레임워크     | React + Vite         |
| 스타일링       | CSS Modules          |
| 반응형         | 미디어 쿼리 기반 직접 구현 |
| 1RM 계산       | Epley 공식 기반 JS 함수 |
| 상태관리       | React useState       |
| 배포 및 호스팅 | Firebase 예정        |
| 버전관리       | Git + GitHub         |
| PWA            | manifest.json + serviceWorker |

---

## 📁 디렉터리 구조

```
fitlogger/
├── public/
│   ├── icons/                 # PWA 아이콘들
│   └── manifest.json          # PWA 설정
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── WorkoutForm.jsx
│   │   └── WorkoutListByDate.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── utils/
│   │   └── calculate1RM.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── firebaseConfig.js (→ `.env`로 분리 권장)
├── .gitignore
├── package.json
└── README.md ← 이 파일
```

---

## 🧩 주요 설정

### 1. PWA 설정

- `manifest.json` 파일 작성 (앱 이름, 아이콘, 색상 등)
- `index.html`에 링크 포함

```html
<link rel="manifest" href="/manifest.json" />
```

### 2. Firebase 연동 (예정)

- Firebase 프로젝트 ID: `fitlogger-ac483`
- Firebase SDK 초기화 코드: `firebaseConfig.js`

👉 `.env` 파일로 민감 정보 분리 권장

---

## ✅ 설치 및 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 🧪 테스트 체크리스트

- [x] 운동 기록 입력 / 삭제 정상 작동
- [x] 1RM 계산 강조 정상 표시
- [x] 반응형 (모바일/데스크탑) UI 작동
- [x] PWA 설치 가능 여부 확인
- [x] Firebase SDK 연동 완료

---

## 🔗 관련 링크

- 🔗 [GitHub Repository](https://github.com/BTBIIT/fitlogger)
- 🔗 [Epley 1RM Formula Reference](https://en.wikipedia.org/wiki/One-repetition_maximum)

---

## 📝 앞으로 할 일

- [ ] Firebase Auth 로그인 기능 추가
- [ ] 사용자별 운동 기록 저장
- [ ] 월간 요약 기능
- [ ] 서비스 워커 적용 및 오프라인 지원

---

© 2025 FitLogger – Created by BTBIIT
