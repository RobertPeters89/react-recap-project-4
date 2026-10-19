import "./Color.css";

export default function Color({ color }) {
  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <h2 className="color-card-headline">{color.hex}</h2>
      <p>{color.role}</p>
      <p>Contrast Text: {color.contrastText}</p>
    </div>
  );
}
