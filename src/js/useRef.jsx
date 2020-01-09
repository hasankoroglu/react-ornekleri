import React, { useRef, useState, useEffect } from "react";

export default function TextInputWithFocusButton() {
  // useRef Example 1
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  // useRef Example 2
  const [renderIndex, setRenderIndex] = React.useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = React.createRef();

  if (!refFromUseRef.current) {
    refFromUseRef.current = renderIndex;
  }

  if (!refFromCreateRef.current) {
    refFromCreateRef.current = renderIndex;
  }

  return (
    <>
      <h1>useRef Example 1</h1>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <hr />
      <h1>useRef Example 2</h1>
      <p>Current render index: {renderIndex}</p>
      <p>
        <b>refFromUseRef</b> value: {refFromUseRef.current}
      </p>
      <p>
        <b>refFromCreateRef</b> value:{refFromCreateRef.current}
      </p>
      <button onClick={() => setRenderIndex(prev => prev + 1)}>
        Cause re-render
      </button>
    </>
  );
}
