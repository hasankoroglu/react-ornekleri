import React, {useState, useEffect} from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board({pits}) {

  console.log("BOARD RENDER PITS :", pits);

  //const [boardState,setBoardState] = useState(props.appState);
  //console.log(boardState);
//const setAppState = props.setAppState;
/*
  useEffect(()=>{
    setBoardState(boardState);
  },[boardState]);
*/


  // useEffect(()=>{
  //   setBoardState(props.appState);    
  // },[props.appState]);

  //console.log("board - " + boardState[8].gems);

// let pits = [];
// boardState.forEach(x => {
//     pits.push(<Pit key={x.id} id={x.id} gems={x.gems} boardState={boardState} setBoardState={setBoardState}/>);
//   });

  return (
    <div className="woodenBG">
      <Store />
      <div className="pits">
      {pits.map(pit => {
        return <Pit key={pit.id} id={pit.id} gems={pit.gems}/>
      })}
      </div>
      <Store />
    </div>
  );
}

export default Board;