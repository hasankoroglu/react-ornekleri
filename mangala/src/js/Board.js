import React, {useState, useEffect} from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board(props) {
  const [pitsGems, setPitsGems] = useState(props.pitsGems);

  useEffect(() => {
    setPitsGems(props.pitsGems);
  }, [props.pitsGems]);

  return (
    <div className="woodenBG">
      <Store gems={pitsGems[0]} />
      <div className="pits">
        {pitsGems.map((pit, index) => {
          return (
            <Pit
              key={index}
              index={index}
              gems={pit}
              onPitClick={props.onPitClick}
            />
          );
        })}
      </div>
      <Store gems={pitsGems[pitsGems.length]}/>
    </div>
  );
}

export default Board;
