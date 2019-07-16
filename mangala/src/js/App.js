import React, { useState } from "react";
import Board from "./Board";

function App() {
  let initialPitsGems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const startResetFalse = { val: 0, text: "Başla" };
  const startResetTrue = { val: 1, text: "Sıfırla" };

  const [pitsGems, setPitsGems] = useState(initialPitsGems);
  const [startReset, setStartReset] = useState(startResetFalse);

  const changePitGems = gems => {
    setPitsGems(pitsGems =>
      pitsGems.map(pit => {
        pit = gems;
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
    setPitsGems(pitsGems => {
      let tmpPitsGems = [...pitsGems];
      let nextPits = tmpPitsGems[param] - 1;
      tmpPitsGems[param]--;
      let i = 1;
      for (i; i <= nextPits; i++) {
        tmpPitsGems[param + i]++;
      }
      return tmpPitsGems;
    });
  };

  return (
    <div>
      {<Board pitsGems={pitsGems} onPitClick={index => onPitClick(index)} />}
      <button type="button" className="btn" onClick={() => startResetClick()}>
        {startReset.text}
      </button>
    </div>
  );
}

export default App;
