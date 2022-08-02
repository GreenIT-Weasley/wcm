import React, { useCallback, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");
socket.emit("init", {});

export default function Login({ onlogin }) {
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "" });
  useEffect(() => {
    return () => {
      socket.close();
    };
  }, []);
  useEffect(() => {
    socket.on("receive message", (message) => {
      setChatArr((chatArr) => chatArr.concat(message));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);
  const buttonHandler = useCallback(() => {
    socket.emit("send message", { name: chat.name, message: chat.message });
    //버튼을 클릭했을 때 send message이벤트 발생
  }, [chat]);
  const changeMessage = useCallback(
    (e) => {
      setChat({ name: chat.name, message: e.target.value });
    },
    [chat]
  );
  const changeName = useCallback(
    (e) => {
      setChat({ name: e.target.value, message: chat.message });
    },
    [chat]
  );

  const RefID = useRef();
  const RefPass = useRef();
  const hanDleLogin = () => {
    const userID = RefID.current.value;
    const userPass = RefPass.current.value;
    console.log(userID, userPass);
    onlogin(userID, userPass);
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      hanDleLogin();
      // console.log("enter")
    }
  };
  const onClick = () => {
    hanDleLogin();
    buttonHandler();
  };

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

  //체크박스 확인
  // console.log('checkedItems', checkedItems)

  return (
    <>
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
          onChange={changeName}
        />
        <input
          type="password"
          title="비밀번호를 입력하세요."
          ref={RefPass}
          id="loginPassword"
          name="loginPassword"
          placeholder="비밀번호 입력"
          required="required"
          onKeyPress={onKeyPress}
          onChange={changeMessage}
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
        <button type="button" className="btnB btn_middle" onClick={onClick}>
          로그인
        </button>
      </div>
    </>
  );
}
