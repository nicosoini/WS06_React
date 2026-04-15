import './App.css'
import Header from './components/Header.jsx'
import Greeting from './components/Greeting.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import CounterCard from './components/CounterCard.jsx'

// Data lives outside the component — it doesn't change,
// so it doesn't need to be inside state.
const team = [
  { id: 1, name: 'Aino',    role: 'Frontend',  level: 'Senior' },
  { id: 2, name: 'Mikko',   role: 'Backend',   level: 'Mid'    },
  { id: 3, name: 'Juhani',  role: 'Full Stack', level: 'Junior' },
  { id: 4, name: 'Siiri',   role: 'Designer',  level: 'Senior' },
]

function App() {
  return (
    <div className="app">

      {/* 1. Static component — no props, no state */}
      <Header />

      {/* 2. Props — passing data into a component */}
      <section className="section">
        <h2 className="section-title">Props</h2>
        <Greeting name="Student" />
      </section>

      {/* 3. List rendering — .map() turns an array into JSX.
              Every item needs a unique "key" prop so React can
              track which items change, are added, or removed. */}
      <section className="section">
        <h2 className="section-title">List rendering</h2>
        <div className="cards-grid">
          {team.map((person) => (
            <ProfileCard
              key={person.id}
              name={person.name}
              role={person.role}
              level={person.level}
            />
          ))}
        </div>
      </section>

      {/* 4. useState — local state that triggers re-renders */}
      <section className="section">
        <h2 className="section-title">State (useState)</h2>
        <CounterCard />
      </section>

    </div>
  )
}

export default App
