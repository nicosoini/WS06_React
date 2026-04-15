# 01 – React Components

A simple Vite + React demo that introduces the four core building blocks you need before anything else in React.

## Brief description

This example is a beginner-friendly React app that demonstrates how components are split into small reusable pieces and then combined in a single UI. It focuses on component basics, passing data with props, rendering lists with `map()`, and updating UI with local state.

## How to run the server

Start the Vite development server from this folder:

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## What this demo covers

### 1. Functional components

A React component is a plain JavaScript function that returns JSX. That's it.

```jsx
function Header() {
  return <h1>Hello</h1>
}
```

- Component names must start with a capital letter.
- Every component must return a single root element (or a Fragment `<>`).

File: [`src/components/Header.jsx`](src/components/Header.jsx)

---

### 2. Props

Props are how you pass data *into* a component from the outside. The parent decides the values; the component just uses them.

```jsx
// Parent passes the value
<Greeting name="Aino" />

// Component receives it as a parameter
function Greeting({ name }) {
  return <p>Hello, <strong>{name}</strong>!</p>
}
```

- Props are **read-only** — a component must never modify its own props.
- You can destructure props directly in the function signature.

File: [`src/components/Greeting.jsx`](src/components/Greeting.jsx)

---

### 3. List rendering

Use the `.map()` array method to turn a JavaScript array into a list of JSX elements.

```jsx
const team = [
  { id: 1, name: 'Aino', role: 'Frontend' },
  // ...
]

team.map((person) => (
  <ProfileCard key={person.id} name={person.name} role={person.role} />
))
```

- Every item **must have a unique `key` prop** so React can track additions, removals, and reorders efficiently.
- Use a stable, unique value for `key` (like a database id) — not the array index.

File: [`src/components/ProfileCard.jsx`](src/components/ProfileCard.jsx)

---

### 4. State (`useState`)

State is data that lives *inside* a component and can change over time. When state changes, React re-renders the component automatically.

```jsx
import { useState } from 'react'

function CounterCard() {
  const [count, setCount] = useState(0)   // initial value = 0

  return (
    <button onClick={() => setCount((n) => n + 1)}>
      Count: {count}
    </button>
  )
}
```

- `useState` returns a pair: the current value and a setter function.
- Always use the setter to update state — never modify the value directly.
- Pass a callback `(prev) => prev + 1` to the setter when the new value depends on the previous one.

File: [`src/components/CounterCard.jsx`](src/components/CounterCard.jsx)

---

## Project structure

```
01_components/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # entry point – mounts <App /> into the DOM
    ├── App.jsx               # root component – assembles all sections
    ├── index.css             # global reset & CSS variables
    ├── App.css               # layout & component styles
    └── components/
        ├── Header.jsx        # static component (no props, no state)
        ├── Greeting.jsx      # props demo
        ├── ProfileCard.jsx   # reusable card rendered via .map()
        └── CounterCard.jsx   # useState demo
```

---

The content of this file was generated with the help of [GitHub Copilot](https://github.com/features/copilot).
