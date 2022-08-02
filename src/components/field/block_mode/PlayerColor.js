import React, { useState } from "react";

export default function PlayerColor() {
  const [isChecked, setIsChecked] = useState(false);

  const [checkedBoader, setCheckedBoader] = useState(new Set());
  const [checkedColor, setCheckedColor] = useState(new Set());

  const bodercheckHandler = ({ target }) => {
    setIsChecked(!isChecked);
    boderCheckedItemHandler(document.querySelector(".viewer"), target.id, target.checked);
  };

  const boderCheckedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      checkedBoader.add(id);
      setCheckedBoader(checkedBoader);
      box.querySelector(".viewer_border").src = `../img/${id}.png`;
    }
  };

  const colorcheckHandler = ({ target }) => {
    setIsChecked(!isChecked);
    colorCheckedItemHandler(document.querySelector(".viewer"), target.id, target.checked);
  };

  const colorCheckedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      checkedColor.add(id);
      setCheckedColor(checkedColor);
      box.querySelector(".viewer_icon").src = `../img/${id}.png`;
    }
  };

  const checked_cart = document.querySelectorAll("input[name=option]:checked");
  const viewer_icon = document.querySelector(".viewer_icon");
  const viewer_border = document.querySelector(".viewer_border");

  const player_info = document.querySelector(".player_info");
  const player_color = document.querySelector(".player_color");

  const save_color = (e) => {
    const input_border = document.querySelector("input[name=border]");
    const input_color = document.querySelector("input[name=color]");
    const input_played = document.querySelector("input[name=played]");
    player_color.querySelectorAll("input").forEach((el) => {
      if (el.checked === true) {
        checked_cart.forEach((e) => {
          e.parentNode.querySelector(".cart_color").src = viewer_border.src;
        });
        checked_cart.forEach((e) => {
          e.parentNode.querySelector(".cart_border").src = viewer_icon.src;
        });

        player_info.classList.remove("show");
        player_color.classList.remove("show");

        const checkbox = document.querySelectorAll("input[name=option]");
        checkbox.forEach((e) => {
          e.checked = false;
        });

        input_border.checked = false;
        input_color.checked = false;
        input_played.checked = false;
        // console.log(input_border, input_color, input_played);

        const checked_input = document.querySelectorAll("input[name=option]");

        checked_input.forEach((e) => {
          e.parentNode.style.background = "rgba(0,0,0,0)";
        });

        document.querySelectorAll(".cart_wrap").forEach((e) => {
          e.setAttribute("onclick", "");
          e.querySelector("input").setAttribute("onclick", "");
          e.querySelector("span").setAttribute("onclick", "");
        });
      } else if (el.checked === false) {
        e.stopPropagation();
      }
    });
  };

  const clear_color = () => {
    const player_color = document.querySelector(".player_color");
    player_color.classList.remove("show");
    const checked_input = document.querySelectorAll("input[name=option]");

    checked_input.forEach((e) => {
      e.parentNode.style.background = "rgba(0,0,0,0)";
    });
  };

  return (
    <div className="player_color">
      <div className="player_color_header">컬러변경</div>
      <div className="player_color_cont">
        <span>아이콘 테두리</span>
        <div className="icon_border">
          <label htmlFor="Cart_Blo_B_2">
            <img src="../img/Cart_Blo_B_2.png" alt="Cart_Blo_B_2" />
          </label>
          <input type="radio" name="border" id="Cart_Blo_B_2" onChange={(e) => bodercheckHandler(e)} />
        </div>
      </div>
      <div className="player_color_cont">
        <span>아이콘 컬러</span>
        <div className="icon_color">
          <label htmlFor="Cart_Blo_C_1">
            <img src="../img/Cart_Blo_C_1.png" alt="Cart_Blo_C_1" />
          </label>
          <input type="radio" name="color" id="Cart_Blo_C_1" onChange={(e) => colorcheckHandler(e)} />
        </div>
      </div>
      <div className="player_color_cont">
        <span>주행속성 컬러</span>
        <div className="driving_color">
          <label htmlFor="Cart_Blo_C_15">
            <img src="../img/Cart_Blo_C_15.png" alt="Cart_Blo_C_15" />
          </label>
          <input type="radio" name="played" id="Cart_Blo_C_15" />
        </div>
      </div>
      <div className="player_color_footer">
        <button className="save_color" onClick={save_color}>
          컬러 저장
        </button>
        <button className="clear_color" onClick={clear_color}>
          컬러 해제
        </button>
      </div>
      <div className="viewer">
        <img className="viewer_border" src="" alt="viewer_border" />
        <img className="viewer_icon" src="" alt="viewer_icon" />
      </div>
    </div>
  );
}
