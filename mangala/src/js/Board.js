import React, {useState, useEffect} from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board(props) {
  const [boardState,setBoardState] = useState(props.appState);
  console.log("board - " + boardState[8].gems);
  useEffect(()=>{
    setBoardState(props.appState);
  },[props]);


let pits = [];
boardState.forEach(x => {
    pits.push(<Pit key={x.id} id={x.id} gems={x.gems} boardState={boardState} setAppState={props.setAppState}/>);
  });


  return (
    <div className="woodenBG">
      <Store />
      <div className="pits">{pits}</div>
      <Store />
    </div>
  );
}

export default Board;