import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Concert from '../concert/concert.component'

import './concertForm.styles.css'

import { cities } from '../../data'

const ConcertForm = () => {
  const [allConcerts] = useState(cities)
  const [concertCity, setConcertCity] = useState('')
  const [selectedShow, setSelectedShow] = useState(null)

  const displayShow = () => {
    setSelectedShow(concertCity)
  }

  const resetShow = () => {
    setConcertCity(`-- Select a City --`)
    setSelectedShow('')
  }

  return (
    <>
      <div className='concert-form-container'>
        <select
          name='City'
          value={concertCity}
          onChange={(e) => setConcertCity(e.target.value)}
        >
          <option value=''> -- Select a City -- </option>
          {allConcerts.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        
        <button onClick={displayShow}>View Show</button>
        <button onClick={resetShow}>Reset</button>

        
      </div>
      {selectedShow && <Concert selectedShows={[selectedShow]} />}
    </>
  )
}

export default ConcertForm
