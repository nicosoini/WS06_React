// A reusable card component driven entirely by props.
// The same component is rendered many times with different data.

function ProfileCard({ name, role, level }) {
  return (
    <article className="card profile-card">
      <span className="role">{role}</span>
      <h3>{name}</h3>
      <p>Skill level: {level}</p>
    </article>
  )
}

export default ProfileCard
