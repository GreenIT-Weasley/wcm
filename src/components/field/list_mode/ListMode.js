import React from "react";

export default function FieldList(props) {
  return (
    <section className={props.mode === "LISTMODE" ? "show" : ""} id="LISTMODE">
      FieldList
    </section>
  );
}
