import { useState } from 'react'
import { treatmentCategories } from '../data/treatments'

const initialFormData = {
  treatmentId: '',
  treatmentType: treatmentCategories[0],
  treatmentName: '',
  startDate: '',
}

export default function TreatmentEntryForm({ onDisplayTreatment }) {
  const [formData, setFormData] = useState(initialFormData)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !formData.treatmentId.trim() ||
      !formData.treatmentName.trim() ||
      !formData.startDate
    ) {
      setError('Please complete all treatment fields before displaying the record.')
      return
    }

    setError('')
    onDisplayTreatment({
      id: formData.treatmentId.trim(),
      type: formData.treatmentType,
      name: formData.treatmentName.trim(),
      startDate: formData.startDate,
    })
  }

  return (
    <section className="form-section" aria-labelledby="form-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Treatment entry</p>
          <h2 id="form-heading">Enter a treatment</h2>
        </div>
        <p className="helper-text">The preview is temporary and is not added to the predefined records.</p>
      </div>

      <form className="treatment-form" onSubmit={handleSubmit}>
        <label>
          Treatment ID
          <input
            type="text"
            name="treatmentId"
            value={formData.treatmentId}
            onChange={handleChange}
            placeholder="For example, TRT-2001"
          />
        </label>

        <label>
          Treatment Type
          <select
            name="treatmentType"
            value={formData.treatmentType}
            onChange={handleChange}
          >
            {treatmentCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="full-width">
          Treatment Name
          <input
            type="text"
            name="treatmentName"
            value={formData.treatmentName}
            onChange={handleChange}
            placeholder="Enter the treatment name or description"
          />
        </label>

        <label className="full-width">
          Start Date
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>

        {error ? <p className="form-error" role="alert">{error}</p> : null}

        <button type="submit" className="primary-button">
          Display entered treatment
        </button>
      </form>
    </section>
  )
}
