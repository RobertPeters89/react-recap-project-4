import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color/Color";
import "./App.css";
import { uid } from "uid";
import { useState } from "react";
import ColorForm from "./Components/Color/ColorForm/ColorForm";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
