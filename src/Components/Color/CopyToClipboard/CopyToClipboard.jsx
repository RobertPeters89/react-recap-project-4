import { useEffect, useState } from "react";

export default function CopyToClipboard({ hex }) {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    if (copy) {
      setTimeout(() => setCopy(false), 3000);
    }
  }, [copy]);

  async function handleCopy() {
    await navigator.clipboard.writeText(hex);
    setCopy(true);
  }

  return (
    <button onClick={handleCopy}>
      {copy ? "SUCCESFULLY COPIED!" : "COPY"}
    </button>
  );
}
