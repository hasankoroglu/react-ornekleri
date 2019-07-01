import React, { useState, useEffect } from "react";
import Gem from "./Gem";

export default function Pit({ index, id, gems, onPitClick }) {
  const style = gems > 0 ? { cursor: "pointer" } : {};

  const createPit = length => {
    let pitComponents = [];
    for (let i = 0; i < length; i++) {
      pitComponents.push(<Gem key={i} />);
    }
    return pitComponents;
  };

  return (
    <div>
      <div className="shadow" style={style} onClick={() => onPitClick(index)}>
        <div className="gemsPit">{createPit(gems)}</div>
      </div>
      {id}
    </div>
  );
}
