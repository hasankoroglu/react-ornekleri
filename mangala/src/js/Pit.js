import React, { useState, useEffect } from "react";
import Gem from "./Gem";

export default function Pit(props) {
  const [pitState,setPitState] = useState(props.boardState);

  console.log("pit - " + pitState[8].gems);

  let tmpPitState = pitState;
  let arrGems = [];
  let pitID = props.id;
  let i = 0;
  let outGems;
  let gems = props.gems;

  useEffect(() => {
    setPitState(props.boardState);
  }, [props.boardState]);


  for (i; i < gems; i++) {
    arrGems.push(<Gem key={i} />);
  }

  const style = gems > 0 ? { cursor: "pointer" } : {};

  const click = () => {
    if (gems !== 0) {
      if (gems > 1) {
        outGems = gems - 1;
      } else {
        outGems = 1;
      }
    }

    let i = 0;

    tmpPitState[pitID - 1].gems = tmpPitState[pitID].gems - outGems;

    for (i; i < outGems; i++) {
      tmpPitState[pitID + i].gems = tmpPitState[pitID + i].gems + 1;
    }

    props.setAppState(tmpPitState);
  };

  return (
    <div>
      <div className="shadow" style={style} onClick={click}>
        <div className="gemsPit">{arrGems}</div>
      </div>
      {pitID}
    </div>
  );
}