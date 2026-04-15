# 02 – React Props and State

A Vite + React demo focused on the relationship between props and state.

## Brief description

This example shows how a parent component can keep application state and pass both data and event handlers down to child components as props. The user can filter topics, vote for them, and click a topic card to inspect it in the summary panel.

## How to run the server

Start the Vite development server from this folder:

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## What this demo covers

### 1. Props from parent to child

The `App` component passes topic data into reusable `TopicCard` components through props.

```jsx
<TopicCard
  title={topic.title}
  level={topic.level}
  votes={topic.votes}
/>
```

- Props make components reusable.
- Child components receive values but do not own the source data.

File: [src/components/TopicCard.jsx](src/components/TopicCard.jsx)

---

### 2. State with `useState`

The `App` component stores the changing data with state.

```jsx
const [topics, setTopics] = useState(initialTopics)
const [levelFilter, setLevelFilter] = useState('All')
const [selectedId, setSelectedId] = useState(initialTopics[0].id)
```

- State is used for values that can change while the app is running.
- Updating state triggers a re-render.

File: [src/App.jsx](src/App.jsx)

---

### 3. Event handlers passed as props

The parent keeps the logic, but child components can trigger it through functions received as props.

```jsx
<TopicCard
  onVote={() => handleVote(topic.id)}
  onSelect={() => handleSelect(topic.id)}
/>
```

- This is a common React pattern.
- Clicking a topic card runs a handler passed from the parent.
- The parent still owns the state update.

File: [src/App.jsx](src/App.jsx)

---

### 4. Derived UI from state

The summary card shows values that are calculated from state, such as total votes and the currently selected topic.

- Filtered lists can be derived with `.filter()`.
- Totals can be derived with `.reduce()`.
- Selected items can be derived with `.find()`.

File: [src/components/SummaryCard.jsx](src/components/SummaryCard.jsx)

---

## Project structure

```text
02_props_state/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                 # entry point
    ├── App.jsx                  # owns the state and passes props down
    ├── index.css                # global styles
    ├── App.css                  # layout and component styles
    └── components/
        ├── Header.jsx           # page heading
        ├── FilterBar.jsx        # state-driven filter buttons
        ├── TopicCard.jsx        # reusable card controlled by props
        └── SummaryCard.jsx      # derived information from state
```

      ---

      The content of this file was generated with the help of [GitHub Copilot](https://github.com/features/copilot).