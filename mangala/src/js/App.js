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

  let tmpPitsGems = [];

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

  const onPitClick = index => {
    let hede = [
      { gems: 4 },
      { gems: 4 },
      { gems: 4 },
      { gems: 4 },
      { gems: 4 },
      { gems: 4 },
      { gems: 4 },
      { gems: 4 },
      { gems: 3 },
      { gems: 4 },
      { gems: 4 },
      { gems: 4 }
    ];
    tmpPitsGems = pitsGems;
    let currentGems = tmpPitsGems[index].gems;
    tmpPitsGems[index].gems--;
    let nextPits = currentGems-1;
    let i = index+1;
    for(i;i<nextPits;i++){
      tmpPitsGems[i].gems++;
    }
    //console.log("hede : ", hede);
    console.log("tmpPitsGems : ",tmpPitsGems);
    setPitsGems(tmpPitsGems);
};

  return (
    <div>
      <Board pitsGems={pitsGems} onPitClick={index => onPitClick(index)} />
      <button type="button" className="btn" onClick={() => startResetClick()}>
        {startReset.text}
      </button>
    </div>
  );
}

export default App;