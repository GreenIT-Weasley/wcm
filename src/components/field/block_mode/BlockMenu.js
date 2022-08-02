import React, { useState } from "react";

export default function BlockMenu() {
  const [isChecked, setIsChecked] = useState(false);

  const [checkedLate, setCheckedLate] = useState(new Set());
  const [checkedElapsed, setCheckedElapsed] = useState(new Set());

  const lateTimecheckHandler = ({ target }) => {
    setIsChecked(!isChecked);
    lateTimeCheckedItemHandler(document.querySelector(".field_board"), target.value, target.checked);
  };

  const lateTimeCheckedItemHandler = (box, id, isChecked) => {
    const player = document.querySelectorAll(".cart_wrap");

    if (isChecked) {
      checkedLate.add(id);
      setCheckedLate(checkedLate);
      box.classList.add("isLate");

      player.forEach((el) => {
        el.classList.add("mb12");
        el.querySelectorAll(".late_wrap img").forEach((e) => {
          e.classList.add("show");
        });
        el.querySelectorAll(".late_wrap p").forEach((e) => {
          e.classList.add("show");
        });
      });
    } else if (!isChecked && checkedLate.has(id)) {
      checkedLate.delete(id);
      setCheckedLate(checkedLate);
      box.classList.remove("isLate");

      player.forEach((el) => {
        el.classList.remove("mb12");
        el.querySelectorAll(".late_wrap img").forEach((e) => {
          e.classList.remove("show");
        });
        el.querySelectorAll(".late_wrap p").forEach((e) => {
          e.classList.remove("show");
        });
      });
    }
  };

  const elapsedTimecheckHandler = ({ target }) => {
    setIsChecked(!isChecked);
    elapsedTimeCheckedItemHandler(document.querySelector(".field_board"), target.value, target.checked);
  };

  const elapsedTimeCheckedItemHandler = (box, id, isChecked) => {
    const player = document.querySelectorAll(".cart_wrap");

    if (isChecked) {
      checkedElapsed.add(id);
      setCheckedElapsed(checkedElapsed);
      box.classList.add("isElapsed");

      player.forEach((el) => {
        el.classList.add("mt10");
        el.querySelectorAll(".elapsed_wrap img").forEach((e) => {
          e.classList.add("show");
        });
        el.querySelectorAll(".elapsed_wrap p").forEach((e) => {
          e.classList.add("show");
        });
      });
    } else if (!isChecked && checkedElapsed.has(id)) {
      checkedElapsed.delete(id);
      setCheckedElapsed(checkedElapsed);
      box.classList.remove("isElapsed");

      player.forEach((el) => {
        el.classList.remove("mt10");
        el.querySelectorAll(".elapsed_wrap img").forEach((e) => {
          e.classList.remove("show");
        });
        el.querySelectorAll(".elapsed_wrap p").forEach((e) => {
          e.classList.remove("show");
        });
      });
    }
  };

  //체크박스 확인
  // console.log('checkedItems', checkedItems)

  const logout = () => {
    document.cookie = null;
  };

  return (
    <ul>
      <li>
        <label htmlFor="late_time">지연시간</label>
        <input type="checkbox" id="late_time" onChange={(e) => lateTimecheckHandler(e)} />
      </li>
      <li>
        <label htmlFor="elapsed">경과시간</label>
        <input type="checkbox" id="elapsed" onChange={(e) => elapsedTimecheckHandler(e)} />
      </li>
      <li>
        <button onClick={logout}>로그아웃</button>
      </li>
    </ul>
  );
}
