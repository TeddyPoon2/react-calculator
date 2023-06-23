import React from "react";
import { ACTIONS } from "./App.js";

export default function NumBtns({ dispatch, num, className }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_NUM, payload: { num } })}
      className={className}
    >
      {num}
    </button>
  );
}
