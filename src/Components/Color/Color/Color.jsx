import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <h2 className="color-card-highlight">{color.hex}</h2>
      <p>{color.role}</p>
      <p>Contrast Text: {color.contrastText}</p>
      {showConfirm && <p className="color-card-highlight">Really delete?</p>}
      {showConfirm && (
        <button onClick={() => setShowConfirm(false)}>CANCEL</button>
      )}
      <button
        onClick={() =>
          showConfirm ? onDeleteColor(color.id) : setShowConfirm(true)
        }
      >
        DELETE
      </button>
    </div>
  );
}
