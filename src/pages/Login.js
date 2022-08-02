import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  function settingCookie(token, days, cgDiv, coDiv) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + days);

    const cookie_token = escape(token) + (days == null ? "" : "; expires=" + exdate.toUTCString());
    const cookie_cgDiv = escape(cgDiv) + (days == null ? "" : "; expires=" + exdate.toUTCString());
    const cookie_coDiv = escape(coDiv) + (days == null ? "" : "; expires=" + exdate.toUTCString());

    if (isChecked) {
      document.cookie = "iGM=" + cookie_token + ";samesite=strict";
      document.cookie = "cgDiv=" + cookie_cgDiv + ";samesite=strict";
      document.cookie = "coDiv=" + cookie_coDiv + ";samesite=strict";
    } else {
      document.cookie = "iGM=" + token + ";samesite=strict";
      document.cookie = "cgDiv=" + cgDiv + ";samesite=strict";
      document.cookie = "coDiv=" + coDiv + ";samesite=strict";
    }
  }

  const [IP, setIp] = useState("");

  async function getIpClient() {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      const userIP = response.data.ip;
      setIp(userIP);
    } catch (error) {
      console.error(error);
    }
  }

  const [timer, setTimer] = useState("");

  function currentTimer() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
  }

  useEffect(() => {
    getIpClient();
    currentTimer();
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.parentNode, target.value, target.checked);
  };

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      box.querySelector("div").classList.add("checked");
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      box.querySelector("div").classList.remove("checked");
    }
  };

  const RefID = useRef();
  const RefPass = useRef();

  // const [green, setGreen] = useState([]);
  // console.log(green);

  const handleLogin = () => {
    const userID = RefID.current.value;
    const userPass = RefPass.current.value;

    console.log(timer);

    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      "http://10.3.60.124:8080/igm/as/req_login?devType=W&devId=" +
        IP +
        "&tel=" +
        userID +
        "&pwd=" +
        userPass +
        "&updTime=" +
        timer,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => settingCookie(result.emplData.emplToken, 1, result.emplData.cgDiv, result.emplData.coDiv))
      // .then((result) => console.log(result))
      .catch((error) => alert("sss"));
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login_wrap">
      <div className="box">
        <form>
          <div className="login_input">
            <input
              type="text"
              title="핸드폰 번호를 입력하세요."
              ref={RefID}
              id="loginId"
              name="loginId"
              placeholder="휴대전화번호( ' - ' 제외 ) 입력"
              required="required"
              onKeyPress={onKeyPress}
            />
            <input
              type="password"
              title="비밀번호를 입력하세요."
              ref={RefPass}
              id="loginPassword"
              name="loginPassword"
              placeholder="비밀번호 입력"
              required="required"
              autoComplete="off"
              onKeyPress={onKeyPress}
            />
            <span className="login_save_box">
              <input type="checkbox" id="idSaveCheck" onChange={(e) => checkHandler(e)} />
              <label htmlFor="idSaveCheck">
                저장<div></div>
              </label>
            </span>
            <ul className="help">
              <li>
                <Link to="/">비밀번호 찾기</Link>
              </li>
            </ul>
          </div>
          <div className="btn_area">
            <button type="button" className="btnB btn_middle" onClick={handleLogin}>
              로그인
            </button>
          </div>
        </form>

        <div className="welcome">
          <p>iGM 관리페이지를 이용하시려면 iGM 앱 설치 후 관리자 인증를</p>
          <p>받으셔야 이용하실 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}
