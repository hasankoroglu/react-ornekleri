import React from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board(props) {
  let pits = [];
  let gems = props.start ? 4 : 0;;

  for (let i = 0; i < 12; i++) {
    pits.push(<Pit key={i} gems={gems}/>);
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
