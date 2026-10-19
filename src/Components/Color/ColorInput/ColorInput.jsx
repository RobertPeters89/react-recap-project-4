import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputvalue, setInputValue] = useState(defaultValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="color-input">
      <input
        type="text"
        id={id}
        name={id}
        value={inputvalue}
        onChange={handleInputValue}
      />
      <input type="color" value={inputvalue} onChange={handleInputValue} />
    </div>
  );
}
