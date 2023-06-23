import "./App.css";
import { useReducer } from "react";
import NumBtns from "./NumBtns.js";
import OpBtns from "./OpBtns";

export const ACTIONS = {
  ADD_NUM: "add-numbers",
  CHOOSE_OP: "choose-op",
  CLEAR: "clear",
  DEL: "del",
  ANS: "ans",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_NUM:
      console.log(state.currentOperand);

      if (state.currentOperand === "0" && payload.btnValue != ".") {
        return {
          currentOperand: `${payload.btnValue}`,
        };
      }

      if (
        state.currentOperand != null &&
        state.currentOperand.includes(".") &&
        payload.btnValue === "."
      ) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.btnValue}`,
      };
  }
}

function App() {
  const [{ currentOperand, prevOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="cal-container">
      <div className="output">
        <div className="prev-operand">
          {prevOperand}
          {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="topBtn">AC</button>
      <button className="topBtn">DEL</button>
      <button className="topBtn">%</button>
      <OpBtns className={"OpBtn"} dispatch={dispatch} btnValue="÷" />
      {/* <button className="OpBtn">÷</button> */}
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="7" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="8" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="9" />
      <OpBtns className={"OpBtn"} dispatch={dispatch} btnValue="×" />
      {/* <button className="OpBtn">×</button> */}
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="4" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="5" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="6" />
      <OpBtns className={"OpBtn"} dispatch={dispatch} btnValue="+" />
      {/* <button className="OpBtn">+</button> */}
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="1" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="2" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="3" />
      <OpBtns className={"OpBtn"} dispatch={dispatch} btnValue="-" />
      {/* <button className="OpBtn">-</button> */}
      <NumBtns className={"span-two nums"} dispatch={dispatch} btnValue="0" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="." />
      <button className="OpBtn">=</button>
    </div>
  );
}

export default App;
