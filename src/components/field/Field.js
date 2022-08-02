import React, { useState } from "react";
import FieldMap from "./map_mode/MapMode";
import FieldBlock from "./block_mode/BlockMode";
import FieldList from "./list_mode/ListMode";
import BlockMenu from "./block_mode/BlockMenu";

export default function Field(props) {
  const [mode, setMode] = useState("BLOCKMODE");
  const green = props.green;

  return (
    <>
      <div className="field_header">
        <ul>
          <li>
            <button
              className={mode === "MAPMODE" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setMode("MAPMODE");
              }}
            >
              MAP MODE
            </button>
          </li>
          <li>
            <button
              className={mode === "BLOCKMODE" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setMode("BLOCKMODE");
              }}
            >
              BLOCK MODE
            </button>
          </li>
          <li>
            <button
              className={mode === "LISTMODE" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setMode("LISTMODE");
              }}
            >
              List MODE
            </button>
          </li>
        </ul>
        <BlockMenu />
      </div>
      <main className="field_contents">
        <FieldMap mode={mode} />

        <FieldBlock mode={mode} green={green} />

        <FieldList mode={mode} />
      </main>
    </>
  );
}
