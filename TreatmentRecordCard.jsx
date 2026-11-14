export default function TreatmentRecordCard({ treatment }) {
  return (
    <article className="record-card">
      <div className="record-card-header">
        <span className="record-id">{treatment.id}</span>
        <span className="record-type">{treatment.type}</span>
      </div>
      <h3>{treatment.name}</h3>
      <dl className="record-meta">
        <div>
          <dt>Start date</dt>
          <dd>{treatment.startDate}</dd>
        </div>
      </dl>
    </article>
  )
}
