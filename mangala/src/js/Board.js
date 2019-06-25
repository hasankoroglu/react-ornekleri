import React from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board() {
    let pits = [];
    for (let i=0;i < 12;i++){
        pits.push(<Pit/>);
    }
  return (
        <div className="woodenBG">
            <Store />
            <div className="pits">{pits}</div>
            <Store />
        </div>
  );
}

export default Board;