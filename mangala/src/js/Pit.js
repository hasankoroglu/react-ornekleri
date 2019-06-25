import React from "react";
import Gem from "./Gem"

function Pit(props){
    let arrGems = [];
    let i=0;
    if (props.gems>0) {
        for (i;i<props.gems;i++){
            arrGems.push(<Gem key={i}/>);
        }
    }
    return(
        <div>
            <span>
                <div className="gemsPit">
                    {arrGems}
                </div>
            </span>
        </div>
    );
}

export default Pit;