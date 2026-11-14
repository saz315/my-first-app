import { useState } from 'react'
import './App.css'
import Header from './assets/Header'
import TreatmentFilter from './assets/TreatmentFilter'
import TreatmentRecordList from './assets/TreatmentRecordList'
import TreatmentEntryForm from './assets/TreatmentEntryForm'
import SubmittedTreatment from './assets/SubmittedTreatment'
import { treatmentRecords } from './data/treatments'

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [enteredTreatment, setEnteredTreatment] = useState(null)

  const visibleTreatments =
    activeFilter === 'All'
      ? treatmentRecords
      : treatmentRecords.filter((treatment) => treatment.type === activeFilter)

  return (
    <div className="app-shell">
      <Header />
      <main className="app-container">
        <TreatmentFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <div className="workspace-grid">
          <TreatmentRecordList treatments={visibleTreatments} activeFilter={activeFilter} />
          <div className="form-stack">
            <TreatmentEntryForm onDisplayTreatment={setEnteredTreatment} />
            <SubmittedTreatment treatment={enteredTreatment} />
          </div>
        </div>
      </main>
    </div>
  )
} 