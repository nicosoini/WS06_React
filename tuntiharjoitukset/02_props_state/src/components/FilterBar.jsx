const filters = ['All', 'Beginner', 'Intermediate']

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === activeFilter ? 'filter-button active' : 'filter-button'}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export default FilterBar