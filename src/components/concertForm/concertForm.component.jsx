import { useState } from 'react'

import Concert from '../concert/concert.component'

import './concertForm.styles.css'

import { concerts, cities } from '../../data'

const ConcertForm = () => {
  const [allConcerts] = useState(cities)
  const [concertCity, setConcertCity] = useState('')

  const displayShow = () => {
    const concertsList = []
    concerts.forEach((concert) => {
      if (concert.venue === concertCity) {
        concertsList.push(concert.venue)
      }
      setConcertCity(concertsList)
    })
  }

  return (
    <>
      <div className='concert-form-container'>
        <select name='City' onChange={(e) => setConcertCity(e.target.value)}>
          <option value='⬇️ Select a city ⬇️'> -- Select a City -- </option>
          {allConcerts.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <button onClick={displayShow}>View Show</button>
      </div>
      <Concert selectedShows={concertCity} />
    </>
  )
}

export default ConcertForm
