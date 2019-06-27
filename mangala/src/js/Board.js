import React from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board(props) {
  let pits = props.state;

  return (
    <div className="woodenBG">
      <Store />
      <div className="pits">{
          pits.map(pit=>(<Pit key={pit.id} id={pit.id} gems={pit.gems} setState={props.setState}/>))
      }</div>
      <Store />
    </div>
  );
}

export default Board;
