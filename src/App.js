import "./App.css";
import { useReducer } from "react";
import NumBtns from "./NumBtns.js";
import OpBtns from "./OpBtns";

export const ACTIONS = {
  ADD_NUM: "add-numbers",
  CHOOSE_OP: "choose-op",
  PERCENT: "percent",
  CLEAR: "clear",
  DEL: "del",
  ANS: "ans",
};

function reducer(state, { type, payload }) {
  switch (type) {
    //displaying number to lower part of the output area
    case ACTIONS.ADD_NUM:
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

    //return to empty {} to clear the result
    case ACTIONS.CLEAR:
      return {};

    //define the action of each operation buttons
    case ACTIONS.CHOOSE_OP:
      if (state.currentOperand == null && state.prevOperand == null) {
        return state;
      }

      if (state.prevOperand == null) {
        return {
          ...state,
          currentOperand: null,
          prevOperand: state.currentOperand,
          operation: payload.btnValue,
        };
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.btnValue,
        };
      }

      return {
        ...state,
        currentOperand: null,
        prevOperand: ans(state),
        operation: payload.btnValue,
      };

    //convert the currentInt to percentage
    case ACTIONS.PERCENT:
      let currentInt = parseFloat(state.currentOperand);

      if (
        state.currentOperand == null ||
        state.currentOperand === "." ||
        currentInt === 0
      ) {
        return state;
      }

      currentInt = currentInt / 100;

      return {
        ...state,
        currentOperand: currentInt.toString(),
        prevOperand: state.prevOperand,
        operation: state.operation,
      };

    case ACTIONS.ANS:
      if (
        state.operation == null ||
        state.prevOperand == null ||
        state.currentOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        currentOperand: ans(state),
        prevOperand: null,
        operation: null,
      };
  }
}

//main calulation function
function ans({ currentOperand, prevOperand, operation }) {
  const prevInt = parseFloat(prevOperand);
  const currentInt = parseFloat(currentOperand);
  let ans = 0;

  if (isNaN(prevInt) || isNaN(currentInt)) {
    return "";
  }

  switch (operation) {
    case "+":
      ans = prevInt + currentInt;
      break;

    case "-":
      ans = prevInt - currentInt;
      break;

    case "×":
      ans = prevInt * currentInt;
      break;

    case "÷":
      ans = prevInt / currentInt;
      break;
  }

  return ans.toString();
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
      <button
        className="topBtn"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button className="topBtn">DEL</button>
      <button
        className="topBtn"
        onClick={() => {
          dispatch({ type: ACTIONS.PERCENT });
        }}
      >
        %
      </button>
      {/* <button className="topBtn">%</button> */}
      <OpBtns className={"OpBtn"} dispatch={dispatch} btnValue="÷" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="7" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="8" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="9" />
      <OpBtns className={"OpBtn"} dispatch={dispatch} btnValue="×" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="4" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="5" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="6" />
      <OpBtns className={"OpBtn"} dispatch={dispatch} btnValue="+" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="1" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="2" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="3" />
      <OpBtns className={"OpBtn"} dispatch={dispatch} btnValue="-" />
      <NumBtns className={"span-two nums"} dispatch={dispatch} btnValue="0" />
      <NumBtns className={"nums"} dispatch={dispatch} btnValue="." />
      <button className="OpBtn" onClick={() => dispatch({ type: ACTIONS.ANS })}>
        =
      </button>
    </div>
  );
}

export default App;
