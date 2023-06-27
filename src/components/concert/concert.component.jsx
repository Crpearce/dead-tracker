import React from 'react'
import './concert.styles.css'
import { concerts } from '../../data'

const Concert = ({ selectedShows }) => {
  const findSets = concerts.filter((show) => show.venue === selectedShows[0])
  console.log(findSets)

  return (
    <div className='concert-container'>
      {findSets.map((set, index) => {
        const borderColor = index % 2 === 0 ? '#0C2999' : '#FF1C14'
        const outlineColor = index % 2 === 0 ? '#FF1C14' : '#0C2999'
        return (
          <div
            key={index}
            className='concert-card'
            style={{
              border: `3px solid ${borderColor}`,
            }}
          >
            <h2>
              {selectedShows} - {set.date}
            </h2>
            <img src={set.poster} className='concert-poster' alt='concert-poster'/>
            <div className='sets-container'>
              <div
                className='set1-wrapper'
                style={{
                  border: `3px solid ${outlineColor}`,
                }}
              >
                <h3 className='set-header'>Set 1</h3>
                <ul className='set1-container'>
                  {set.set1.map((song, songIndex) => (
                    <li key={songIndex}>{song}</li>
                  ))}
                </ul>
              </div>
              <div
                className='set2-wrapper'
                style={{
                  border: `3px solid ${borderColor}`,
                }}
              >
                <h3 className='set-header'>Set 2</h3>
                <ul className='set2-container'>
                  {set.set2.map((song, songIndex) => (
                    <li key={songIndex}>{song}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Concert
