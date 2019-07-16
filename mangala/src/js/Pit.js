import React, { useState, useEffect } from "react";
import Gem from "./Gem";

export default function Pit(props) {
  const [gems, setGems] = useState(props.gems);
  const style = gems > 0 ? { cursor: "pointer" } : {};
  const funcOnClick = () =>
    gems > 0 ? props.onPitClick(props.index) : null;

  let i = 0,
    arrGems = [];

  for (i; i < gems; i++) {
    arrGems.push(<Gem key={i} />);
  }

  useEffect(() => {
    setGems(props.gems);
  }, [props.gems]);

  return (
    <div>
      <div className="shadow" style={style} onClick={funcOnClick}>
        <div className="gemsPit">{arrGems}</div>
      </div>
    </div>
  );
}
