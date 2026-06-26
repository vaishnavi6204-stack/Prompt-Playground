import { useState } from "react";
import PromptInput from "./components/PromptInput";
import OutputBox from "./components/OutputBox";
import VersionHistory from "./components/VersionHistory";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [versions, setVersions] = useState([]);

  function runPrompt() {
    setOutput(`[Fake output] You ran: "${prompt}"`);
  }

  function saveVersion(note) {
    setVersions([
      ...versions,
      { prompt, output, note: note || "No note added" },
    ]);
  }

  return (
    <div className="app">
      <h1>Prompt Playground</h1>
      <PromptInput prompt={prompt} setPrompt={setPrompt} onRun={runPrompt} />
      <OutputBox output={output} onSave={saveVersion} />
      <VersionHistory versions={versions} />
    </div>
  );
}

export default App;