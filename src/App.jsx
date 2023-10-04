import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [len, setLen] = useState(12);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);

  const solve = useCallback(() => {
    let str = "";
    let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNum) {
      str1 += "0123456789";
    }

    if (isChar) {
      str1 += "!@#$%^&*(){}[]|><?";
    }
    for (let i = 0; i < len; i++) {
      let index = Math.floor(Math.random() * str1.length);
      str += str1.charAt(index);
    }
    setPassword(str);
  }, [len, isNum, isChar, setPassword]);

  useEffect(() => {
    solve();
  }, [len, isNum, isChar, solve]);

  return (
    <div id="main">
      <div id="div1">
        <div id="div2">
          <div id="div3">
            <div id="div4">
              <h1>{password}</h1>
              <button
                onClick={() => {
                  window.navigator.clipboard.writeText(password);
                  alert(`Password : ${password} : Copied!!!`);
                }}
              >
                COPY
              </button>
            </div>
          </div>
          <div id="div3">
            <div id="div5">
              <input
                type="range"
                min="8"
                max="32"
                value={len}
                className="slider"
                onChange={(e) => {
                  setLen(e.target.value);
                }}
              />
              <h2>LENGTH : {password.length}</h2>
              <div id="div6">
                <input
                  type="checkbox"
                  defaultChecked={isNum}
                  onChange={(e) => {
                    setIsNum(e.target.checked);
                  }}
                />
                <h2> NUM</h2>
              </div>
              <div id="div6">
                <input
                  type="checkbox"
                  defaultChecked={isChar}
                  onChange={(e) => {
                    setIsChar(e.target.checked);
                  }}
                />
                <h2> CHAR</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
