function TopicCard({
  title,
  level,
  description,
  votes,
  isSelected,
  onVote,
  onSelect,
}) {
  function handleVoteClick(event) {
    event.stopPropagation()
    onVote()
  }

  return (
    <article
      className={isSelected ? 'card topic-card selected' : 'card topic-card'}
      onClick={onSelect}
    >
      <div className="topic-meta">
        <span className="topic-level">{level}</span>
        <span className="vote-count">Votes: {votes}</span>
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="topic-actions">
        <button className="vote-button" onClick={handleVoteClick}>Vote</button>
        <span className="selection-hint">{isSelected ? 'Selected topic' : 'Click card to show summary'}</span>
      </div>
    </article>
  )
}

export default TopicCard