import React from "react";

export default function FieldMap(props) {
  return (
    <section className={props.mode === "MAPMODE" ? "show" : ""} id="MAPMODE">
      FieldMap
    </section>
  );
}
