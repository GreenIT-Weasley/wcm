import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer_inner">
        <div className="itsone">
          <div className="itsone_top">
            <ul>
              <li>IT's ONE</li>
              <li>-</li>
            </ul>
          </div>
          <div className="itsone_bottom">
            <ul>
              <li>
                서울시 구로구 디지털로 242 한화비즈메트로1차 1505호, 1506호
              </li>
              <li>T.1661-6228 F.02-795-4087</li>
              <li>사업자등록번호 : 106-86-38206 대표 : 박준태</li>
            </ul>
            <span>Copyright © IT's ONE CO., LTD. All rights reserved.</span>
          </div>
        </div>

        <div className="f_logo">
          <Link to="/">iGM</Link>
        </div>
      </div>
    </footer>
  );
}
