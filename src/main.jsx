import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebaseApp from "./firebase/firebaseConfig"; // 방금 만든 firebase app import

console.log("Firebase app initialized:", firebaseApp); // 콘솔에 초기화된 앱 객체 출력

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
