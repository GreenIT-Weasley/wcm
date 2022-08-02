export default function Cours01(props) {
  const item = props.item;
  if (item) {
    const holes = [
      props.item.parCnt01,
      props.item.parCnt02,
      props.item.parCnt03,
      props.item.parCnt04,
      props.item.parCnt05,
      props.item.parCnt06,
      props.item.parCnt07,
      props.item.parCnt08,
      props.item.parCnt09,
    ];

    const createPar = holes.map((holes, index) => {
      index = index + 1;
      if (holes === 3) {
        return (
          <div key={index} className={"hole" + index}>
            <div className={`pars pars${holes}`}>
              <div className="par1"></div>
              <div className="par2"></div>
            </div>
            <img src={`../img/BL_PAR_${holes}.png`} alt={"hole" + index} />
            <p>{index}</p>
          </div>
        );
      } else if (holes === 4) {
        return (
          <div key={index} className={"hole" + index}>
            <div className={`pars pars${holes}`}>
              <div className="par1"></div>
              <div className="par2"></div>
              <div className="par3"></div>
            </div>
            <img src={`../img/BL_PAR_${holes}.png`} alt={"hole" + index} />
            <p>{index}</p>
          </div>
        );
      } else if (holes === 5) {
        return (
          <div key={index} className={"hole" + index}>
            <div className={`pars pars${holes}`}>
              <div className="par1"></div>
              <div className="par2"></div>
              <div className="par3"></div>
              <div className="par4"></div>
            </div>
            <img src={`../img/BL_PAR_${holes}.png`} alt={"hole" + index} />
            <p>{index}</p>
          </div>
        );
      }
      return false;
    });

    const cour_pain = setInterval(() => {
      const cour_name = document.querySelector(".cours02 .cour_name span");

      if (cour_name) {
        if (cour_name.innerHTML === item.courName) {
          const cour_name_wrap = document.querySelector(".cours02 .cour_name");
          cour_name_wrap.style.backgroundColor = item.colorId;
        }
      }
      clearInterval(cour_pain);
    }, 100);

    return (
      <div className="cours02">
        <div className="cour_info">
          <div className="cour_name">
            <span>{item.courName}</span>
          </div>
          <div className="cour_wating"></div>
        </div>
        <div className="holes holes02">{createPar}</div>
      </div>
    );
  }
}
