import React, { useState } from "react";
import Board from "./Board";

function App() {
  let initialPitsGems = [
    { gems: 0 },
    { gems: 0 },
    { gems: 0 },
    { gems: 0 },
    { gems: 0 },
    { gems: 0 },
    { gems: 0 },
    { gems: 0 },
    { gems: 0 },
    { gems: 0 },
    { gems: 0 },
    { gems: 0 }
  ];

  const startResetFalse = { val: 0, text: "Başla" };
  const startResetTrue = { val: 1, text: "Sıfırla" };

  const [pitsGems, setPitsGems] = useState(initialPitsGems);
  const [startReset, setStartReset] = useState(startResetFalse);

  const changePitGems = gems => {
    setPitsGems(pitsGems =>
      pitsGems.map(pit => {
        pit.gems = gems;
        return pit;
      })
    );
  };

  const startResetClick = () => {
    if (startReset.val) {
      changePitGems(0);
      setStartReset(startResetFalse);
    } else {
      changePitGems(4);
      setStartReset(startResetTrue);
    }
  };

  const onPitClick = param => {
/*     const tmpPitsGems = pitsGems;
    let currentGems = tmpPitsGems[param].gems;
    tmpPitsGems[param].gems--;
    let nextPits = currentGems-1;
    let i = param+1;
    for(i;i<nextPits;i++){
      tmpPitsGems[i].gems++;
    } */
    //console.log("hede : ", hede);
    // console.log("tmpPitsGems : ",tmpPitsGems);

    setPitsGems(pitsGems=>
      pitsGems.map((pit,index)=>{
        if(param===index){pit.gems=pit.gems+1}
        return pit;
      })
    );
};
console.log(pitsGems)
  return (
    <div>
      {/* <Board pitsGems={pitsGems} onPitClick={index => onPitClick(index)} /> */}
      <button type="button" className="btn" onClick={() => startResetClick()}>
        {startReset.text}
      </button>
      <button type="button" onClick={()=>onPitClick(8)}>fede</button>
    </div>
  );
}

export default App;