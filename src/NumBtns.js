import React from "react";
import { ACTIONS } from "./App.js";

export default function NumBtns({ dispatch, btnValue, className }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_NUM, payload: { btnValue } })}
      className={className}
    >
      {btnValue}
    </button>
  );
}
