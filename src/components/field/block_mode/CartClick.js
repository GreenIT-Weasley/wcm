export default function useCartClick() {
  let isAlt = false;
  let isCtrl = false;

  const selectedbox_none = (element) => {
    element.forEach((el) => {
      el.setAttribute("onClick", "return false;");
      el.parentNode.setAttribute("onClick", "return false;");
      el.parentNode.querySelector("span").setAttribute("onClick", "return false;");
      el.parentNode.querySelector("label").setAttribute("onClick", "return false;");
    });
  };

  const selectedbox_auto = (element) => {
    element.forEach((el) => {
      el.setAttribute("onClick", "");
      el.parentNode.setAttribute("onClick", "");
      el.parentNode.querySelector("span").setAttribute("onClick", "");
      el.parentNode.querySelector("label").setAttribute("onClick", "");
    });
  };

  document.addEventListener("keydown", (keydownEvent) => {
    switch (keydownEvent.code) {
      case "AltLeft":
        isAlt = true;
        selectedbox_none(document.querySelectorAll('input[name="option"]:not(:checked)'));
        break;
      case "ControlLeft":
        isCtrl = true;
        selectedbox_none(document.querySelectorAll('input[name="option"]:checked'));
        break;
      default:
    }
    keydownEvent.preventDefault();
  });

  document.addEventListener("keyup", (keyupEvent) => {
    switch (keyupEvent.code) {
      case "AltLeft":
        isAlt = false;
        selectedbox_auto(document.querySelectorAll('input[name="option"]:not(:checked)'));
        break;
      case "ControlLeft":
        isCtrl = false;
        selectedbox_auto(document.querySelectorAll('input[name="option"]:checked'));
        break;
      default:
    }
    keyupEvent.preventDefault();
  });

  document.addEventListener("mousemove", () => {
    if (document.querySelector(".player_info")) {
      if (document.querySelector(".player_info").classList.contains("show")) {
        document.querySelectorAll(".cart_wrap").forEach((e) => {
          e.setAttribute("onClick", "return false;");
          e.querySelector("input").setAttribute("onClick", "return false;");
          e.querySelector("span").setAttribute("onClick", "return false;");
          e.querySelector("label").setAttribute("onClick", "return false;");
        });
      } else if (!document.querySelector(".player_info").classList.contains("show")) {
        if (document.querySelectorAll('input[name="option"]:checked').length >= 1) {
          document.querySelectorAll('input[name="option"]:not(:checked)').forEach((el) => {
            if (isAlt === false && isCtrl === false) {
              el.setAttribute("onClick", "return false;");
              el.parentNode.setAttribute("onClick", "return false;");
              el.parentNode.querySelector("span").setAttribute("onClick", "return false;");
              el.parentNode.querySelector("label").setAttribute("onClick", "return false;");
            } else if (isAlt === true) {
              el.setAttribute("onClick", "");
              el.parentNode.setAttribute("onClick", "");
              el.parentNode.querySelector("span").setAttribute("onClick", "");
              el.parentNode.querySelector("label").setAttribute("onClick", "");
            } else if (isCtrl === true) {
              el.setAttribute("onClick", "");
              el.parentNode.setAttribute("onClick", "");
              el.parentNode.querySelector("span").setAttribute("onClick", "");
              el.parentNode.querySelector("label").setAttribute("onClick", "");
            }
          });
        }
      }
    }
  });

  return <></>;
}
