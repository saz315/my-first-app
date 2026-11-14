export default function SubmittedTreatment({ treatment }) {
  if (!treatment) {
    return null
  }

  return (
    <aside className="submitted-card" aria-live="polite" aria-labelledby="submitted-heading">
      <p className="eyebrow">Entered information</p>
      <h2 id="submitted-heading">Treatment preview</h2>
      <dl className="submitted-list">
        <div>
          <dt>Treatment ID</dt>
          <dd>{treatment.id}</dd>
        </div>
        <div>
          <dt>Treatment Type</dt>
          <dd>{treatment.type}</dd>
        </div>
        <div>
          <dt>Treatment Name</dt>
          <dd>{treatment.name}</dd>
        </div>
        <div>
          <dt>Start Date</dt>
          <dd>{treatment.startDate}</dd>
        </div>
      </dl>
      <p className="submitted-note">This information is displayed only; it has not been saved to the record list.</p>
    </aside>
  )
}
