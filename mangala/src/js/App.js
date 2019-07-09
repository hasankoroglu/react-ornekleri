import React, { useState } from "react";
import Board from "./Board";

function App() {
  let initialPits = [
    { id: 1, gems: 0 },
    { id: 2, gems: 0 },
    { id: 3, gems: 0 },
    { id: 4, gems: 0 },
    { id: 5, gems: 0 },
    { id: 6, gems: 0 },
    { id: 7, gems: 0 },
    { id: 8, gems: 0 },
    { id: 9, gems: 0 },
    { id: 10, gems: 0 },
    { id: 11, gems: 0 },
    { id: 12, gems: 0 }
  ];

  const startResetFalse = { val: 0, text: "Başla" };
  const startResetTrue = { val: 1, text: "Sıfırla" };

  const [pits, setPits] = useState(initialPits);
  const [startReset, setStartReset] = useState(startResetFalse);

  const changePitGems = gems => {
    setPits(pits =>
      pits.map(pit => {
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
    const length = pits.length;
    if (length < index) {
      return pits;
    }

    setPits(pits => {
      if (pits[index].gems !== 0) {
        pits[index].gems--;
        pits[index + 1].gems++;
        return pits.map(pit => pit);
      }
      return pits;
    });
  };

  return (
    <div>
      <Board pits={pits} onPitClick={index => onPitClick(index)} />
      <button type="button" className="btn" onClick={() => startResetClick()}>
        {startReset.text}
      </button>
    </div>
  );
}

export default App;