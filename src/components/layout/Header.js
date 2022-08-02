import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  function mouseenter(e) {
    e.preventDefault();
    document.querySelector(".faq").classList.add("active");
  }
  function click(e) {
    e.preventDefault();
    document.querySelector(".faq").classList.add("active");
  }

  return (
    <header>
      <ul>
        <li>
          <h1 className="logo">
            <Link to="/">iGM</Link>
          </h1>
        </li>
        <li>
          <Link to="/field">공지사항</Link>
        </li>
        <li className="faq" onMouseEnter={mouseenter} onClick={click}>
          FAQ
          <div>
            <span>FAQ</span> | <span>문의지원</span>
          </div>
        </li>
      </ul>
    </header>
  );
}
