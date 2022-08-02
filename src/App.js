import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Field from "./components/field/Field";
import Home from "./pages/Home";
// import FieldList from "./components/field/fieldList/FieldList";
// import FieldMap from "./components/field/fieldMap/FieldMap";
// import FieldBlock from "./components/field/block_mode/BlockMode";

function App() {
  let isLogin = false;

  const [onlogin, setOnLogin] = useState(false);

  const [cookie, setCookie] = useState([]);

  const [green, setGreen] = useState();

  window.onload = () => {
    const check_cookie = () => {
      if (document.cookie) {
        const cookie_split = document.cookie.split(";");

        if (cookie_split[0].charAt(0) === "c") {
          const cookie_token = cookie_split[2].replace("iGM=", "").replace(" ", "");
          const cookie_cgDiv = cookie_split[0].replace("cgDiv=", "").replace(" ", "");
          const cookie_coDiv = cookie_split[1].replace("coDiv=", "").replace(" ", "");
          setCookie([cookie_token, cookie_cgDiv, cookie_coDiv]);
        } else {
          const cookie_token = cookie_split[0].replace("iGM=", "").replace(" ", "");
          const cookie_cgDiv = cookie_split[1].replace("cgDiv=", "").replace(" ", "");
          const cookie_coDiv = cookie_split[2].replace("coDiv=", "").replace(" ", "");
          setCookie([cookie_token, cookie_cgDiv, cookie_coDiv]);
        }

        isLogin = true;
        setOnLogin(true);

        if (!green) {
          const greenHeaders = new Headers();
          greenHeaders.append("Authorization", cookie[0]);
          const greenInfo = {
            method: "POST",
            headers: greenHeaders,
            redirect: "follow",
          };

          fetch("http://10.3.60.124:8080/igm/cm/req_opt_app?cgDiv=" + cookie[1] + "&coDiv=" + cookie[2], greenInfo)
            .then((response) => response.json())
            .then((data) => setGreen(data.crsData))
            // .then((data) => console.log(data))
            .catch((error) => console.log("error", error));
        }
      }
      if (isLogin === true) {
        clearInterval(checkLogin);
      }
    };
    const checkLogin = setInterval(check_cookie, 100);
  };

  return (
    <>
      <Router>
        <Routes>
          {/* <Route element={<Home />} path="/" exact /> */}
          <Route element={onlogin === true ? <Field green={green} /> : <Home />} path="/" exact />
          <Route element={<Field green={green} />} path="/field" exact />
          {/* <Route element={<FieldMap />} path="/FieldMap" exact /> */}
          {/* <Route element={<FieldBlock green={green} />} path="/FieldBlock" exact /> */}
          {/* <Route element={<FieldList />} path="/FieldList" exact /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
