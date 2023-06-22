import { useState } from 'react'

import Concert from '../concert/concert.component'

import './concertForm.styles.css'

import { concerts, cities } from '../../data'

const ConcertForm = () => {
  const [allShows] = useState(cities)
  const [showCity, setShowCity] = useState('')

  const displayShow = () => {
    const updateShows = []
    concerts.forEach((show) => {
      if (show.venue === showCity && !updateShows.includes(showCity)) {
        updateShows.push(show.venue)
      }
      setShowCity(updateShows)
    })
  }

  return (
    <>
      <div className='concert-form-container'>
        <select name='City' onChange={(e) => setShowCity(e.target.value)}>
          <option value='⬇️ Select a city ⬇️'> -- Select a City -- </option>
          {allShows.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <button onClick={displayShow}>View Show</button>
      </div>
      <Concert selectedShows={showCity} />
    </>
  )
}

export default ConcertForm
