function SummaryCard({ selectedTopic, totalVotes, visibleCount }) {
  return (
    <aside className="card summary-card">
      <div>
        <h3>Total votes</h3>
        <p className="summary-number">{totalVotes}</p>
      </div>

      <div>
        <h3>Visible topics</h3>
        <p>{visibleCount} topic(s) shown by the current filter.</p>
      </div>

      <div>
        <h3>Current selection</h3>
        {selectedTopic ? (
          <ul>
            <li>{selectedTopic.title}</li>
            <li>Level: {selectedTopic.level}</li>
            <li>Votes: {selectedTopic.votes}</li>
          </ul>
        ) : (
          <p>No topic selected.</p>
        )}
      </div>
    </aside>
  )
}

export default SummaryCard