import React, { useState } from "react";

function Button() {
  const [inputLines, setInputLines] = useState([{ value: "", checked: false }]);
  const addInputLine = () => {
    setInputLines([...inputLines, { value: "", checked: false }]);
  };

  return (
    <>
      <br />
      {inputLines.map((inputLine, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={inputLine.checked}
            onChange={() => {
              const newInputLines = [...inputLines];
              newInputLines[index].checked = !newInputLines[index].checked;
              setInputLines(newInputLines);
            }}
          />
          <input
            type="text"
            value={inputLine.value}
            onChange={(e) => {
              const newInputLines = [...inputLines];
              newInputLines[index].value = e.target.value;
              setInputLines(newInputLines);
            }}
          />
        </div>
      ))}
      <br />
      {<button onClick={addInputLine}>new task</button>}
    </>
  );
}

export default Button;
