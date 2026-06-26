import { useState } from "react";

function OutputBox({ output, onSave }) {
  const [note, setNote] = useState("");

  function handleSave() {
    onSave(note);
    setNote("");
  }

  return (
    <div className="card">
      <h3>Output</h3>
      <p className="output-text">
        {output || "Run a prompt to see the output here."}
      </p>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="What did you change and why? (optional)"
      />
      <button onClick={handleSave}>Save this version</button>
    </div>
  );
}

export default OutputBox;