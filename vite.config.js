import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// 👉 깃허브 페이지 주소 기준으로 base 설정
export default defineConfig({
  base: "/fitlogger/",  // <-- GitHub Pages 리포지토리 이름과 같아야 함
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "FitLogger",
        short_name: "FitLogger",
        description: "운동 기록과 1RM 추적을 위한 간단한 피트니스 앱",
        start_url: "/fitlogger/",  // 이 부분도 base와 동일하게 수정
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1e293b",
        icons: [
          {
            src: "/fitlogger/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/fitlogger/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
