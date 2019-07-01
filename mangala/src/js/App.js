import React, {useState,useEffect} from "react";
import Board from "./Board";

function App() {
  let initialData = [
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
  
  const [pits, setPits] = useState(initialData);
  const [buttonText, setBtnText] = useState("Başla");

  const startReset = () => {
    const newArray = initialData.map(function addOne(pit) {
      pit.gems = 4;
      return pit;
    });
 
    setPits(newArray);
  }

  return (
    <div>
        <Board pits={pits} />
        <button type="button" className="btn" onClick={()=>startReset()}>{buttonText}</button>
    </div>
  );
}

export default App;