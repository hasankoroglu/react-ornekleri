import React, { useState } from "react";
import Level2 from "./Level2";

export default function Level1() {
  const [strLevel1Text, setStrLevel1Text] = useState();
  const [level1State, setLevel1State] = useState("This is Level 1's Text.");

  return (
    <div>
      <h1>Level 1</h1>
      <b>Level 1's State is :</b> <i>{level1State}</i>
      <br />
      <button type="button" onClick={()=>setStrLevel1Text("This is from Level 1.")}>Change Level 2's State</button>
      <hr/>
      <Level2 strLevel1Text={strLevel1Text} setLevel1State={setLevel1State}/>
    </div>
  );
}