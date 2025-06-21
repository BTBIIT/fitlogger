import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// PWA 설치 유도 처리
function PWAWrapper() {
  useEffect(() => {
    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;

      const installBtn = document.getElementById("installBtn");
      if (installBtn) {
        installBtn.style.display = "inline-block";

        installBtn.addEventListener("click", async () => {
          installBtn.style.display = "none";
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          console.log(`사용자 설치 응답: ${outcome}`);
          deferredPrompt = null;
        });
      }
    });
  }, []);

  return (
    <>
      <App />
      {/* 설치 버튼은 기본적으로 숨김 처리 */}
      <button id="installBtn" style={{ display: "none", position: "fixed", bottom: "1rem", right: "1rem", padding: "0.5rem 1rem", backgroundColor: "#1e293b", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
        설치하기
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PWAWrapper />
  </React.StrictMode>
);
