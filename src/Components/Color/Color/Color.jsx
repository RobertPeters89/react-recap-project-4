import "./Color.css";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import ContrastChecker from "../../ContrastChecker/ContrastChecker";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [editColor, setEditColor] = useState(false);
  const [safeHex, setSafeHex] = useState(color.hex);

  function handleDeleteClick() {
    if (showConfirm) onDeleteColor(color.id);
    else setShowConfirm(true);
  }

  function handleEditSubmit(updateColor) {
    setSafeHex(color.hex);
    onEditColor({ ...updateColor, id: color.id });
    setEditColor(false);
  }

  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <h2 className="color-card-highlight">{color.hex}</h2>
      <CopyToClipboard hex={color.hex} />
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
          <ContrastChecker
            hex={color.hex}
            contrastText={color.contrastText}
            safeHex={safeHex}
          />
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
