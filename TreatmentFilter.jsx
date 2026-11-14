import { filterOptions } from '../data/treatments'

export default function TreatmentFilter({ activeFilter, onFilterChange }) {
  return (
    <section className="filter-panel" aria-labelledby="filter-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Treatment records</p>
          <h2 id="filter-heading">Filter by treatment type</h2>
        </div>
        <p className="helper-text">Select a category to update the records shown below.</p>
      </div>
      <div className="filter-options" role="group" aria-label="Treatment type filters">
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            className={`filter-button${option === activeFilter ? ' filter-button-active' : ''}`}
            aria-pressed={option === activeFilter}
            onClick={() => onFilterChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  )
}
