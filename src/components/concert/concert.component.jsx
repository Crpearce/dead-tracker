import { useState, useEffect } from 'react'

import './concert.styles.css'

const Concert = ({ selectedShows, locations }) => {
    const [selectedCity, setSelectedConcert] = useState([])

    useEffect(() => {
        setSelectedConcert(locations.filter(show => show.venue === selectedShows[0]))
    }, []);
console.log(selectedCity)
  return (
    <div>
      <h2></h2>
    </div>
  )
}

export default Concert
