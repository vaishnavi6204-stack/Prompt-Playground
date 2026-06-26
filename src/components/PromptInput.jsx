function PromptInput({ prompt, setPrompt, onRun }) {
  return (
    <div className="card">
      <h3>Write your prompt</h3>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. Summarize this in one sentence, in a friendly tone..."
        rows={4}
      />
      <button onClick={onRun}>Run Prompt</button>
    </div>
  );
}

export default PromptInput;