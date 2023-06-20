import './concertForm.styles.css'
import { locations } from '../../data'

const ConcertForm = () => {

  return (
    <div>
      <label>
        Concert Date:
        <input type='date' />{' '}
      </label>
      <select name='City'>
      <option value="⬇️ Select a city ⬇️"> -- Select a City -- </option>
        {locations.map((location) => <option key={location.id} value={location.venue}>{location.venue}</option>)}</select>
    </div>
  )
}

export default ConcertForm
