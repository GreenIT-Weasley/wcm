import { useEffect } from "react";
import user from "../../../assets/json/user.json";
import Cours01 from "./Cours01";
import Cours02 from "./Cours02";
import Cours03 from "./Cours03";
import Player from "./Player";
import CartClick from "./CartClick";
import Refectory from "./Refectory";

export default function FieldBlock(props) {
  let item01 = "";
  let item02 = "";
  let item03 = "";

  let refectory01 = "";
  let refectory02 = "";
  let refectory03 = "";

  if (props.green) {
    const item1 = props.green[2];
    const item2 = props.green[3];
    const item3 = props.green[4];
    item01 = item1;
    item02 = item2;
    item03 = item3;

    const crsData2refectoryPrehole = props.green[2].refectoryPrehole;
    const crsData3refectoryPrehole = props.green[3].refectoryPrehole;
    const crsData4refectoryPrehole = props.green[4].refectoryPrehole;
    refectory01 = crsData2refectoryPrehole;
    refectory02 = crsData3refectoryPrehole;
    refectory03 = crsData4refectoryPrehole;
  }
  let isAlt = false;
  let isCtrl = false;

  document.addEventListener("keydown", (keydownEvent) => {
    switch (keydownEvent.code) {
      case "AltLeft":
        isAlt = true;
        break;
      case "ControlLeft":
        isCtrl = true;
        break;
      default:
    }
    keydownEvent.preventDefault();
  });

  document.addEventListener("keyup", (keyupEvent) => {
    switch (keyupEvent.code) {
      case "AltLeft":
        isAlt = false;
        break;
      case "ControlLeft":
        isCtrl = false;
        break;
      default:
    }
    keyupEvent.preventDefault();
  });

  const cartcheckHandler = ({ target }) => {
    cartCheckedItemHandler(document.querySelector(".player_info"), target);
  };

  const cartCheckedItemHandler = (player_info, target) => {
    document.querySelectorAll('input[name="option"]:not(:checked)').forEach((el) => {
      el.setAttribute("onclick", "return false;");
      el.parentNode.setAttribute("onclick", "return false;");
      el.parentNode.querySelector("span").setAttribute("onclick", "return false;");
      el.parentNode.querySelector("label").setAttribute("onclick", "return false;");
    });
    if (isCtrl === false && isAlt === false) {
      player_info.classList.add("show");
      target.checked = true;
    }
  };

  useEffect(() => {
    const dragbox = document.createElement("div");
    dragbox.classList.add("dragbox");
    const ctrlbox = document.createElement("div");
    ctrlbox.classList.add("ctrlbox");
    const altbox = document.createElement("div");
    altbox.classList.add("altbox");
    const checkbox = document.querySelectorAll('input[name="option"]');

    let isDrag = false;
    let downEventX = 0;
    let downEventY = 0;

    let isAlt = false;
    let isCtrl = false;

    document.addEventListener("mousedown", function (downEvent) {
      downEventX = downEvent.clientX;
      downEventY = downEvent.clientY;

      isDrag = true;

      if (isCtrl === false && isAlt === false) {
        dragbox.style.width = 0;
        dragbox.style.height = 0;
        document.body.appendChild(dragbox);
      }
      if (isCtrl === true && isAlt === false) {
        ctrlbox.style.width = 0;
        ctrlbox.style.height = 0;
        document.body.appendChild(ctrlbox);
      }
      if (isAlt === true && isCtrl === false) {
        altbox.style.width = 0;
        altbox.style.height = 0;
        document.body.appendChild(altbox);
      }
    });

    document.addEventListener("mousemove", (moveEvent) => {
      if (document.querySelector(".player_info").classList.contains("show") === false) {
        if (isDrag === true) {
          if (moveEvent.movementX !== 0 || !moveEvent.movementY !== 0) {
            document.querySelectorAll('input[name="option"]').forEach((el) => {
              el.setAttribute("onclick", "");
              el.parentNode.setAttribute("onclick", "");
              el.parentNode.querySelector("span").setAttribute("onclick", "");
              el.parentNode.querySelector("label").setAttribute("onclick", "");
            });
            let css = {
              left: Math.min(downEventX, moveEvent.clientX),
              top: Math.min(downEventY, moveEvent.clientY),
              width: Math.abs(downEventX - moveEvent.clientX),
              height: Math.abs(downEventY - moveEvent.clientY),
            };

            if (isCtrl === false && isAlt === false) {
              checkbox.forEach((el) => {
                el.checked =
                  el.getBoundingClientRect().left <= css.left + css.width &&
                  el.getBoundingClientRect().left >= css.left - 55 &&
                  el.getBoundingClientRect().top <= css.top + css.height &&
                  el.getBoundingClientRect().top >= css.top - 45;
              });
              dragbox.style.left = css.left + "px";
              dragbox.style.top = css.top + "px";
              dragbox.style.width = css.width + "px";
              dragbox.style.height = css.height + "px";
            }

            if (isCtrl === true && isAlt === false) {
              document.querySelectorAll('input[name="option"]:not(:checked)').forEach((el) => {
                el.checked =
                  el.getBoundingClientRect().left <= css.left + css.width &&
                  el.getBoundingClientRect().left >= css.left - 55 &&
                  el.getBoundingClientRect().top <= css.top + css.height &&
                  el.getBoundingClientRect().top >= css.top - 45;
              });

              ctrlbox.style.left = css.left + "px";
              ctrlbox.style.top = css.top + "px";
              ctrlbox.style.width = css.width + "px";
              ctrlbox.style.height = css.height + "px";
            }
            if (isCtrl === false && isAlt === true) {
              document.querySelectorAll('input[name="option"]').forEach((el) => {
                if (
                  el.getBoundingClientRect().left <= css.left + css.width &&
                  el.getBoundingClientRect().left >= css.left - 55 &&
                  el.getBoundingClientRect().top <= css.top + css.height &&
                  el.getBoundingClientRect().top >= css.top - 45
                ) {
                  el.checked = false;
                }
              });
              altbox.style.left = css.left + "px";
              altbox.style.top = css.top + "px";
              altbox.style.width = css.width + "px";
              altbox.style.height = css.height + "px";
            }
          } else {
            document.querySelectorAll('input[name="option"]').forEach((el) => {
              el.checked = false;
            });
          }
        }
      }
    });

    document.addEventListener("mouseup", (upEvent) => {
      document.querySelectorAll('input[name="option"]:checked').forEach((el) => {
        el.checked = true;
      });
      dragbox.style.width = 0;
      dragbox.style.height = 0;
      dragbox.remove();
      ctrlbox.style.width = 0;
      ctrlbox.style.height = 0;
      ctrlbox.remove();
      altbox.style.width = 0;
      altbox.style.height = 0;
      altbox.remove();
      isDrag = false;
    });

    document.addEventListener("keydown", (keydownEvent) => {
      switch (keydownEvent.code) {
        case "AltLeft":
          isAlt = true;
          break;
        case "ControlLeft":
          isCtrl = true;
          break;
        default:
      }
      keydownEvent.preventDefault();
    });

    document.addEventListener("keyup", (keyupEvent) => {
      switch (keyupEvent.code) {
        case "AltLeft":
          isAlt = false;
          break;
        case "ControlLeft":
          isCtrl = false;
          break;
        default:
      }
      keyupEvent.preventDefault();
    });
  }, []);

  return (
    <section className={props.mode === "BLOCKMODE" ? "show" : ""} id="BLOCKMODE">
      <div className="field_info">
        <div className="waiting">
          <div className="team">
            <div>
              <img src="img/cutting.png" alt="cutting" />
              <p>대기팀</p>
            </div>
          </div>
          <div className="member"></div>
        </div>

        <div className="cart"></div>
      </div>

      <div className="field_board">
        <Cours01 item={item01} />
        <Cours02 item={item02} />
        <Cours03 item={item03} />
        <CartClick />
        <Refectory refectory={[refectory01, refectory02, refectory03]} />
        <Player players={user} cartcheckHandler={cartcheckHandler} />
      </div>
    </section>
  );
}
