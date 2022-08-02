import React, { useEffect, useState } from "react";
import PlayerInfo from "./PlayerInfo";

export default function Player(props) {
  const [passing, setPassing] = useState([]);

  const player = props.players;

  const cartcheckHandler = props.cartcheckHandler;

  const createPar = player.map((player, index) => {
    index = index + 1;

    const pass = () => {
      setPassing(player);
      if (document.querySelector(".player_info")) {
        if (document.querySelector(".player_info").classList.contains("show")) {
          setPassing(passing);
        }
      }

      const checkbox_checked = document.querySelectorAll("input[name=option]:checked");
      checkbox_checked.forEach((e) => {
        const viewer_icon = document.querySelector(".viewer_icon");
        const viewer_border = document.querySelector(".viewer_border");

        const checked_color = e.parentNode.querySelector(".cart_color");
        const checked_border = e.parentNode.querySelector(".cart_border");
        viewer_icon.src = checked_border.src;
        viewer_border.src = checked_color.src;
      });
    };

    return (
      <div key={index} className="cart_wrap" id={`cart${index}`} onClick={pass}>
        <input type="checkbox" name="option" id={`option${index}`} onChange={(e) => cartcheckHandler(e)} />
        <label htmlFor={`option${index}`}>
          <span>{player.caddy}</span>
          <img className="cart_border" alt="cart_border" draggable="false" />
          <img className="cart_color" alt="cart_color" draggable="false" />
        </label>
        <div className="late_wrap">
          <img src="../img/Cart_Blo_C_0A.png" alt="late" />
          <p>111</p>
        </div>
        <div className="elapsed_wrap">
          <img src="../img/Cart_Blo_C_99.bmp" alt="elapsed" />
          <p>111</p>
        </div>
      </div>
    );
  });

  useEffect(() => {
    const playerLenght = props.players.length;

    for (let i = 0; i < playerLenght; i++) {
      if (player[i].cours === "A") {
        player[i].cours = "cours01";
      } else if (player[i].cours === "B") {
        player[i].cours = "cours02";
      } else if (player[i].cours === "C") {
        player[i].cours = "cours03";
      }

      const hole = document.querySelector(`.${player[i].cours} .holes .hole${player[i].hole} .par${player[i].par}`);

      const carts = document.querySelector(`#cart${i + 1}`);
      if (hole) {
        hole.appendChild(carts);
      }
    }

    window.oncontextmenu = function () {
      document.querySelectorAll('input[name="option"]').forEach((el) => {
        el.checked = false;
      });
      return false;
    };
  });

  return (
    <>
      {createPar}
      <PlayerInfo pass={passing} />
    </>
  );
}
