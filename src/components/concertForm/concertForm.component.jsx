import { useState } from 'react'

import Concert from '../concert/concert.component'

import { locations } from '../../data'

import './concertForm.styles.css'

const ConcertForm = () => {
  const [allShows] = useState([
    'Inglewood, CA',
    'Phoenix, AZ',
    'Dallas, TX',
    'Atlanta, GA',
    'Charlotte, NC',
    'Raleigh, NC',
    'Bristow, VA',
    'Burgettstown, PA',
    'Maryland Heights, MO',
    'Chicago, IL',
    'Cincinnati, OH',
    'Philadelphia, PA',
    'Saratoga, NY',
  ])
  const [showCity, setShowCity] = useState('')

  const displayShow = () => {
    const updateShows = []
    locations.forEach((show) => {
      if (show.venue === showCity && !updateShows.includes(showCity)) {
        updateShows.push(show.venue)
      }
      setShowCity(updateShows)
    })
  }

  return (
    <>
      <div>
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
      <Concert selectedShows={showCity} locations={locations} />
    </>
  )
}

export default ConcertForm
