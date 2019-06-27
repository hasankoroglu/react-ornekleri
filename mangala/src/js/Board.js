import React, {useState, useEffect} from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board(props) {
  const [state,setState] = useState(props.state);

  useEffect(()=>{
    setState(props.state);
  },[props]);
  
  console.log("board");
  console.log(state[8].gems);
  return (
    <div className="woodenBG">
      <Store />
      <div className="pits">{
          state.map(stt=>(<Pit key={stt.id} id={stt.id} gems={stt.gems} state={state} setState={props.setState}/>))
      }</div>
      <Store />
    </div>
  );
}

export default Board;
