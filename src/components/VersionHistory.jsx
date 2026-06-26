function VersionHistory({ versions }) {
  if (versions.length === 0) {
    return (
      <div className="card">
        <h3>Version History</h3>
        <p>No versions saved yet.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3>Version History</h3>
      {versions.map((v, index) => (
        <div className="version-item" key={index}>
          <strong>Version {index + 1}</strong>
          <p><em>Prompt:</em> {v.prompt}</p>
          <p><em>Output:</em> {v.output}</p>
          <p><em>Note:</em> {v.note}</p>
        </div>
      ))}
    </div>
  );
}

export default VersionHistory;