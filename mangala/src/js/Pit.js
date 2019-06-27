import React, { useState, useEffect } from "react";
import Gem from "./Gem";

export default function Pit(props) {
  let arrGems = [];
  const [gems, setGems] = useState(props.gems);

  useEffect(() => {
    setGems(props.gems);
  }, [props]);

  for (let i = 0; i < gems; i++) {
    arrGems.push(<Gem key={i} />);
  }

  const style = gems > 0 ? { cursor: "pointer" } : {};

  const click = () => {
    let tmpGems = gems;
    let remGems=0, outGems;
    if (gems!==0) {
      if (tmpGems === 1) {
        remGems = 0;
        outGems = 1;
      } else {
        remGems = 1;
        outGems = tmpGems - 1;
      }
    }
    setGems(remGems);
  };

  return (
    <div>
      <div className="shadow" style={style} onClick={click}>
        <div className="gemsPit">{arrGems}</div>
      </div>
      {gems}
    </div>
  );
}
