import React, {useState, useEffect} from "react";
import Board from "./Board";

function App() {
  let pits = [
    {id:1,gems:0},
    {id:2,gems:0},
    {id:3,gems:0},
    {id:4,gems:0},
    {id:5,gems:0},
    {id:6,gems:0},
    {id:7,gems:0},
    {id:8,gems:0},
    {id:9,gems:0},
    {id:10,gems:0},
    {id:11,gems:0},
    {id:12,gems:0}
  ];
  
  const [state,setState] = useState(pits);
  const [buttonText,setBtnText] = useState("Başla");

  console.log("-------------------");
  console.log("app " + state[0].gems);

  let tmpState = [];

  const changeObj = (array,value) => {
    let newArray = array.map(x=>{
      let newObj = {};
      newObj.id=x.id;
      newObj.gems=value;
      return newObj;
    });
    return newArray;
  };

  const startReset = () => {
    if (buttonText==='Başla') {
      setBtnText("Baştan Başla");
      tmpState = changeObj(state,4);
    } else {
      setBtnText("Başla");
      tmpState = changeObj(state,0);
    }
    setState(tmpState);
  }


useEffect(()=>{
  setState(state);
  console.log("app efct " + state[0].gems);
},[state]);

  return (
    <div>
        <Board state={state} setState={setState}/>
        <button type="button" className="btn" onClick={()=>startReset()}>{buttonText}</button>
    </div>
  );
}

export default App;