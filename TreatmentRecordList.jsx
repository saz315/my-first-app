import TreatmentRecordCard from './TreatmentRecordCard'

export default function TreatmentRecordList({ treatments, activeFilter }) {
  return (
    <section className="records-section" aria-labelledby="records-heading">
      <div className="section-heading records-heading-row">
        <div>
          <p className="eyebrow">Current view</p>
          <h2 id="records-heading">Treatment records</h2>
        </div>
        <p className="result-count">
          Showing {treatments.length} {treatments.length === 1 ? 'record' : 'records'}
          {activeFilter !== 'All' ? ` for ${activeFilter}` : ''}
        </p>
      </div>

      <div className="records-grid">
        {treatments.map((treatment) => (
          <TreatmentRecordCard key={treatment.id} treatment={treatment} />
        ))}
      </div>
    </section>
  )
}
