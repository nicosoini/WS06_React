import { useState } from 'react'

// useState stores local state inside the component.
// Calling the setter triggers a re-render with the new value.

function CounterCard() {
  const [count, setCount] = useState(0)

  return (
    <section className="card counter-card">
      <div>
        <h3>Counter</h3>
        <p className="count">{count}</p>
      </div>
      <div className="counter-actions">
        <button onClick={() => setCount((n) => n + 1)}>+1</button>
        <button onClick={() => setCount((n) => n - 1)}>−1</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  )
}

export default CounterCard
