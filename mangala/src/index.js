
import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App";
import "./css/index.css";


/*
import React, { useState } from 'react';
import ReactDOM from "react-dom";

function Example(props) {
    console.log(props.test);
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.test);
  console.log(count);
console.log(count);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
*/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);