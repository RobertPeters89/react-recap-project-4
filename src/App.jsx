import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color/Color";
import "./App.css";
import { uid } from "uid";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  function handleDeleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  function handleEditColor(updatedcolor) {
    setColors(
      colors.map((color) =>
        color.id === updatedcolor.id ? updatedcolor : color,
      ),
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.length === 0 && <p>No colors... start by adding one!</p>}
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          onDeleteColor={handleDeleteColor}
          onEditColor={handleEditColor}
        />
      ))}
    </>
  );
}

export default App;
