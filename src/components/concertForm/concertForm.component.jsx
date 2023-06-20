import './concertForm.styles.css'
import { locations } from '../../data'
import { useState } from 'react'

const ConcertForm = () => {
    const [allShows, setAllShows] = useState([])
    const [showDate, setShowDate] = useState('')
    const [showCity, setShowCity] = useState('')

    const createShow = () => {
        allShows.push({showDate, showCity})
        console.log(allShows)
    }

  return (
    <div>
      <label>
        Concert Date:
        <input type='date' onChange={(e) => setShowDate(e.target.value)}/>
      </label>
      <select name='City' onChange={(e) => setShowCity(e.target.value)}>
      <option value="⬇️ Select a city ⬇️"> -- Select a City -- </option>
        {locations.map((location) => <option key={location.id} value={location.venue}>{location.venue}</option>)}</select>
        <button onClick={createShow}>Add show</button>
    </div>
  )
}

export default ConcertForm
