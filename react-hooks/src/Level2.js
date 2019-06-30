import React, { useState, useEffect } from "react";


export default function Level2(props) {
  const [sttLevel2, setSttLevel2] = useState("This is Level 2's Text.");

useEffect(()=>{
  setSttLevel2(props.strLevel1Text||sttLevel2);
},[props]);

  return (
    <div style={{marginLeft:'50px'}}>
      <h2>Level 2</h2>
      <b>Level 2's State is :</b> <i>{sttLevel2}</i>
      <br />
      <button type="button" onClick={()=>props.setLevel1State("This is from Level 2.")}>Change Level 1's State</button>
    </div>
  );
}
