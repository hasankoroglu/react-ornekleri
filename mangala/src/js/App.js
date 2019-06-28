import React, {useState,useEffect} from "react";
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
  
  const [appState,setAppState] = useState(pits);
  const [buttonText,setBtnText] = useState("Başla");
  
  useEffect(()=>{
    setAppState(appState);
  },[appState]);
  
  console.log("-------------------------");
  console.log("app - " + appState[8].gems);



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
      tmpState = changeObj(appState,4);
    } else {
      setBtnText("Başla");
      tmpState = changeObj(appState,0);
    }
    setAppState(tmpState);
  }

  return (
    <div>
        <Board appState={appState} setAppState={setAppState}/>
        <button type="button" className="btn" onClick={()=>startReset()}>{buttonText}</button>
    </div>
  );
}

export default App;