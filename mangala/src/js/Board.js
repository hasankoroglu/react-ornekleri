import React from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board(props) {
    let isStarted = props.start;
    let pits = [];
    let numberOfGems = isStarted?4:0;

    for (let i=0;i < 12;i++){
        pits.push(<Pit key={i} gems={numberOfGems}/>);
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