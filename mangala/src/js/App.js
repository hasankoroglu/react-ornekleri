import React, {useState} from "react";
import Board from "./Board";

function App() {
  const [buttonText,setState] = useState("Başla");
  const [sttStart,setStart] = useState(0);
  
  const startReset = () => {
    if (buttonText==='Başla') {
      setState("Baştan Başla");
      setStart(1);
    } else {
      setState("Başla");
      setStart(0);
    }
  }


  return (
    <div>
        <Board start={sttStart}/>
        <button type="button" className="btn" onClick={()=>startReset()}>{buttonText}</button>
    </div>
  );
}

export default App;