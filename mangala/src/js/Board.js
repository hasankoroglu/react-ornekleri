import React from "react";
import Store from "./Store";
import Pit from "./Pit";

function Board({ pits, onPitClick }) {
  return (
    <div className="woodenBG">
      <Store />
      <div className="pits">
        {pits.map((pit, index) => {
          return (
            <Pit
              key={index}
              index={index}
              id={pit.id}
              gems={pit.gems}
              onPitClick={onPitClick}
            />
          );
        })}
      </div>
      <Store />
    </div>
  );
}

export default Board;
