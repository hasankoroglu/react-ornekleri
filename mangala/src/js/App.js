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

  const changePitsGems = (id,gems) => {
    let newPits = state;
    newPits.map(pit=>(
      pit.id=id?pit.gems=gems:null
    ));
    setState(newPits);
  }

  const [state,setState] = useState(pits);
  const [buttonText,setBtnText] = useState("Başla");
  
  const startReset = () => {
    if (buttonText==='Başla') {
      setBtnText("Baştan Başla");
      state.map(stt=>(stt.gems=4));
    } else {
      setBtnText("Başla");
      state.map(stt=>(stt.gems=0));
    }
  }

useEffect(()=>{
  setState(state);
},[state]);

  return (
    <div>
        <Board state={state} setState={setState}/>
        <button type="button" className="btn" onClick={()=>startReset()}>{buttonText}</button>
    </div>
  );
}

export default App;