import React from "react";
import logo from "../images/mesto.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Место"
        className="header__logo"
      />
    </header>
  );
}