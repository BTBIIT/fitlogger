import React from "react";
import logo from "../assets/logo.svg"; // 로고 이미지 파일 경로 맞게 수정

export default function Header() {
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="FitLogger Logo" />
        <h1>FitLogger</h1>
      </div>
      <nav>{/* 나중에 메뉴 추가 가능 */}</nav>
    </header>
  );
}
