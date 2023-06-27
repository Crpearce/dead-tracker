import React, { useState } from 'react'

import Concert from '../concert/concert.component'

import { cities } from '../../data'

import logo from '../../assets/dead.png'

import './concertForm.styles.css'

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
      <div className='placeholder-container'>

        {!selectedShow && <img src={logo} className='placeholder' alt='steal your face'/> }
      </div>
    </>
  )
}

export default ConcertForm
