import React from "react";
//import gem from "../img/gem.png";

function Store(props) {
  let numberOfGems = props.gems || 0;

  return (
    <div>
      <div className="store">
        <div className="gemsStore" />
        {numberOfGems}
      </div>
    </div>
  );
}

export default Store;
