import React, { useState, useEffect } from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board(props) {
  const [pitsGems, setPitsGems] = useState(props.pitsGems);
  let firstPlayersGems = pitsGems[pitsGems.length-2];
  let secondPlayersGems = pitsGems[pitsGems.length-1];
  console.log(firstPlayersGems + " - " + secondPlayersGems);

  useEffect(() => {
    setPitsGems(props.pitsGems);
  }, [props.pitsGems]);

  let tmpPitGems = pitsGems.filter((gems,index) => index < 12);

  return (
    <div className="woodenBG">
      <Store gems={secondPlayersGems} />
      <div className="pits">
        {tmpPitGems.map((gems, index) => {
          return (
            <Pit
              key={index}
              index={index}
              gems={gems}
              onPitClick={props.onPitClick}
            />
          );
        })}
      </div>
      <Store gems={firstPlayersGems} />
    </div>
  );
}

export default Board;
