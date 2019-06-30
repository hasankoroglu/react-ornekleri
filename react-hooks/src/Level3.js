import React, {useState, useEffect} from 'react';

export default function Level3() {
  const [sttLevel3, setSttLevel3] = useState("This is from Level 3.");

  return (
    <div style={{marginLeft:'50px'}}>
      <h3>Level 3</h3>
      <b>Level 3's State is :</b> <i>{sttLevel3}</i>
      <br />
      <button type="button">Change Level 2's State</button>
      <button type="button">Change Level 1's State</button>
    </div>
  );
}