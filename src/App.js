import "./App.css";
import { useReducer } from "react";
import NumBtns from "./NumBtns.js";

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
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.num}`,
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
      <button className="funcBtn">÷</button>
      <NumBtns className={"nums"} dispatch={dispatch} num="7" />
      <NumBtns className={"nums"} dispatch={dispatch} num="8" />
      <NumBtns className={"nums"} dispatch={dispatch} num="9" />
      <button className="funcBtn">×</button>
      <NumBtns className={"nums"} dispatch={dispatch} num="4" />
      <NumBtns className={"nums"} dispatch={dispatch} num="5" />
      <NumBtns className={"nums"} dispatch={dispatch} num="6" />
      <button className="funcBtn">+</button>
      <NumBtns className={"nums"} dispatch={dispatch} num="1" />
      <NumBtns className={"nums"} dispatch={dispatch} num="2" />
      <NumBtns className={"nums"} dispatch={dispatch} num="3" />
      <button className="funcBtn">-</button>
      <button className="span-two nums">0</button>
      <button className="nums">.</button>
      <button className="funcBtn">=</button>
    </div>
  );
}

export default App;
