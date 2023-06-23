// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="cal-container">
      <div className="output">
        <div className="prev-operand">
          1231231231111111111111111111111111111111111
        </div>
        <div className="current-operand">
          1231111111111111111111111111111111111
        </div>
      </div>
      <button className="topBtn">AC</button>
      <button className="topBtn">DEL</button>
      <button className="topBtn">%</button>
      <button className="funcBtn">÷</button>
      <button className="nums">7</button>
      <button className="nums">8</button>
      <button className="nums">9</button>
      <button className="funcBtn">×</button>
      <button className="nums">4</button>
      <button className="nums">5</button>
      <button className="nums">6</button>
      <button className="funcBtn">+</button>
      <button className="nums">1</button>
      <button className="nums">2</button>
      <button className="nums">3</button>
      <button className="funcBtn">-</button>
      <button className="span-two nums">0</button>
      <button className="nums">.</button>
      <button className="funcBtn">=</button>
    </div>
  );
}

export default App;
