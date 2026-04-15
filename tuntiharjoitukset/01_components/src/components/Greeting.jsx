// Props let you pass data into a component from the outside.
// Destructure them directly from the function parameter.

function Greeting({ name }) {
  return (
    <p className="greeting card">
      Hello, <strong>{name}</strong>! Welcome to React.
    </p>
  )
}

export default Greeting
