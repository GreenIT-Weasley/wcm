import { useEffect } from "react";

export default function useRefectory(props) {
  useEffect(() => {
    const innerRefectoryPrehole01 = document.querySelector(`.holes01 .hole${props.refectory[0]}`);
    const innerRefectoryPrehole02 = document.querySelector(`.holes02 .hole${props.refectory[1]}`);
    const innerRefectoryPrehole03 = document.querySelector(`.holes03 .hole${props.refectory[2]}`);

    if (document.querySelector(".refectory") === null) {
      if (innerRefectoryPrehole01 && innerRefectoryPrehole02 && innerRefectoryPrehole03) {
        const refectoryPrehole01 = document.createElement("img");
        refectoryPrehole01.classList.add("refectory");
        refectoryPrehole01.src = "../img/BL_REFECTORY.png";
        refectoryPrehole01.alt = "REFECTORY";
        const refectoryPrehole02 = document.createElement("img");
        refectoryPrehole02.classList.add("refectory");
        refectoryPrehole02.src = "../img/BL_REFECTORY.png";
        refectoryPrehole02.alt = "REFECTORY";
        const refectoryPrehole03 = document.createElement("img");
        refectoryPrehole03.classList.add("refectory");
        refectoryPrehole03.src = "../img/BL_REFECTORY.png";
        refectoryPrehole03.alt = "REFECTORY";
        refectoryPrehole03.classList.add("asd");

        innerRefectoryPrehole01.after(refectoryPrehole01);
        innerRefectoryPrehole02.after(refectoryPrehole02);
        innerRefectoryPrehole03.after(refectoryPrehole03);
      }
    }
  });

  return <></>;
}
