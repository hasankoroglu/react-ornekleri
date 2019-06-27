import React, {useState, useEffect}  from "react";
import Gem from "./Gem"

export default function Pit(props){
    let arrGems = [];
    //const [gems,setGems] = useState(props.gems);

    //const moveGems = () => setGems(preValue => preValue-1);

useEffect(()=>{
    for (let i = 0;i<props.gems;i++){
        arrGems.push(<Gem key={i}/>);
    }
    }
)
    return(
        <div>
            <div className="shadow">
                <div className="gemsPit">
                {arrGems}
                </div>
            </div>
        </div>
    );
}