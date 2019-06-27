import React, {useState, useEffect} from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board(props) {
  const [state,setState] = useState(props.state);
  console.log("board " + state[0].gems);
  console.log(props.setState);
  
  useEffect(()=>{
    setState(props.state);
  },[props]);

let pits = [];
  state.forEach(x => {
    pits.push(<Pit key={x.id} id={x.id} gems={x.gems} state={state} setState={props.setState}/>);
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