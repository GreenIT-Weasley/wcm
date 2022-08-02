import PlayerColor from "./PlayerColor";

export default function PlayerInfo(props) {
  const pass = props.pass;

  const checkbox = document.querySelectorAll('input[name="option"]');

  const close = (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.classList.remove("show");
    checkbox.forEach((e) => {
      e.checked = false;
    });

    const checked_cart = document.querySelectorAll('input[name="option"]');

    checked_cart.forEach((e) => {
      e.parentNode.style.border = "none";
    });

    document.querySelectorAll(".cart_wrap").forEach((e) => {
      e.setAttribute("onclick", "");
      e.querySelector("input").setAttribute("onclick", "");
      e.querySelector("span").setAttribute("onclick", "");
      e.querySelector("label").setAttribute("onclick", "");
    });
  };

  const change_icon = () => {
    const player_color = document.querySelector(".player_color");
    player_color.classList.add("show");
  };

  return (
    <>
      <div className="player_info">
        <div className="player_info_header">
          <ul>
            <li>
              <button>set</button>
            </li>
            <li>
              <button>msg</button>
            </li>
            <li>
              <span className="cart_number">{pass.cart_number}</span>
            </li>
            <li>
              <span className="caddy_name">{pass.caddy}</span>
            </li>
            <li>
              <button className="player_info_close" onClick={close}>
                X
              </button>
            </li>
          </ul>
        </div>
        <div className="player_info_list">
          <ul>
            <li>
              예약정보 : <span>SOUTH 06:51</span>
            </li>
            <li>
              전반시작 : <span>EAST 13:39</span>
            </li>
            <li>
              후반시작 : <span>**_**:**</span>
            </li>
            <li>
              추가시작 : <span>**_**:**</span>
            </li>
            <li>
              경과시간 : <span>00:03</span>
            </li>
            <li>
              현재위치 : <span>EAST 1</span>
            </li>
            <li>
              내장고객 : <span>전세용, 류지은, 김종현, 이태경</span>
            </li>
          </ul>
        </div>
        <div className="player_info_footer">
          <button>스코어</button>
          <button onClick={change_icon}>아이콘변경</button>
        </div>
      </div>
      <PlayerColor />
    </>
  );
}
