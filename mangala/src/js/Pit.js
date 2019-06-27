import React, { useState, useEffect } from "react";
import Gem from "./Gem";

export default function Pit(props) {
  const [state,setState] = useState(props.state);
  //console.log(state);
  let arrGems = [];
  let pitID = props.id;
  let tmpPits = state;
  let i = 0;
  let outGems;
  let gems = props.gems;

  useEffect(() => {
    setState(props.state);
  }, [props]);

  console.log("pit");
  console.log(state[8].gems);

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

    tmpPits[pitID - 1].gems = tmpPits[pitID].gems - outGems;

    for (i; i < outGems; i++) {
      tmpPits[pitID + i].gems = tmpPits[pitID + i].gems + 1;
    }

    props.setState(tmpPits);
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
