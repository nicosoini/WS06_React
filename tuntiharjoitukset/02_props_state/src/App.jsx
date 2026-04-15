import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import FilterBar from './components/FilterBar.jsx'
import TopicCard from './components/TopicCard.jsx'
import SummaryCard from './components/SummaryCard.jsx'

const initialTopics = [
  {
    id: 1,
    title: 'React basics',
    level: 'Beginner',
    description: 'JSX, components, and the one-way flow of data.',
    votes: 0,
  },
  {
    id: 2,
    title: 'Working with props',
    level: 'Beginner',
    description: 'Passing data and event handlers from parent to child.',
    votes: 0,
  },
  {
    id: 3,
    title: 'Managing local state',
    level: 'Intermediate',
    description: 'Updating UI with useState when the user interacts.',
    votes: 0,
  },
]

function App() {
  const [topics, setTopics] = useState(initialTopics)
  const [levelFilter, setLevelFilter] = useState('All')
  const [selectedId, setSelectedId] = useState(initialTopics[0].id)

  const filteredTopics = levelFilter === 'All'
    ? topics
    : topics.filter((topic) => topic.level === levelFilter)

  const selectedTopic = topics.find((topic) => topic.id === selectedId) ?? null
  const totalVotes = topics.reduce((sum, topic) => sum + topic.votes, 0)

  function handleVote(topicId) {
    setTopics((currentTopics) => currentTopics.map((topic) => (
      topic.id === topicId
        ? { ...topic, votes: topic.votes + 1 }
        : topic
    )))
  }

  function handleFilterChange(nextFilter) {
    setLevelFilter(nextFilter)
  }

  function handleSelect(topicId) {
    setSelectedId(topicId)
  }

  return (
    <div className="app">
      <Header />

      <section className="section">
        <h2 className="section-title">Filter with state</h2>
        <FilterBar
          activeFilter={levelFilter}
          onFilterChange={handleFilterChange}
        />
      </section>

      <section className="section layout-grid">
        <div>
          <h2 className="section-title">Props in action</h2>
          <div className="cards-grid">
            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                level={topic.level}
                description={topic.description}
                votes={topic.votes}
                isSelected={topic.id === selectedId}
                onVote={() => handleVote(topic.id)}
                onSelect={() => handleSelect(topic.id)}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="section-title">Derived UI</h2>
          <SummaryCard
            selectedTopic={selectedTopic}
            totalVotes={totalVotes}
            visibleCount={filteredTopics.length}
          />
        </div>
      </section>
    </div>
  )
}

export default App