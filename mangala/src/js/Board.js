import React, {useState, useEffect} from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board(props) {
  const [pitsGems, setPitsGems] = useState(props.pitsGems);
  
//  console.log(props.pitsGems);

  useEffect(() => {
    setPitsGems(props.pitsGems);
  }, [props.pitsGems]);

  return (
    <div className="woodenBG">
      <Store />
      <div className="pits">
        {pitsGems.map((pit, index) => {
          return (
            <Pit
              key={index}
              index={index}
              gems={pit.gems}
              onPitClick={props.onPitClick}
            />
          );
        })}
      </div>
      <Store />
    </div>
  );
}

export default Board;
