import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [editColor, setEditColor] = useState(false);

  function handleDeleteClick() {
    if (showConfirm) onDeleteColor(color.id);
    else setShowConfirm(true);
  }

  function handleEditSubmit(updateColor) {
    onEditColor({ ...updateColor, id: color.id });
    setEditColor(false);
  }

  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <h2 className="color-card-highlight">{color.hex}</h2>
      {editColor ? (
        <>
          <ColorForm
            onSubmitColor={handleEditSubmit}
            initialData={color}
            buttonLabel="EDIT"
          />
          <button onClick={() => setEditColor(false)}>CANCEL</button>
        </>
      ) : (
        <>
          <p>{color.role}</p>
          <p>Contrast Text: {color.contrastText}</p>
          {showConfirm && (
            <p className="color-card-highlight">Really delete?</p>
          )}
          {showConfirm && (
            <button onClick={() => setShowConfirm(false)}>CANCEL</button>
          )}
          <button onClick={handleDeleteClick}>DELETE</button>
          <button onClick={() => setEditColor(true)}>EDIT</button>
        </>
      )}
    </div>
  );
}
