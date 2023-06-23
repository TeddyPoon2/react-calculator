import React from "react";
import { ACTIONS } from "./App.js";

export default function OpBtns({ dispatch, btnValue, className }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OP, payload: { btnValue } })
      }
      className={className}
    >
      {btnValue}
    </button>
  );
}
