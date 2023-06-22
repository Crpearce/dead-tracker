import './concert.styles.css'

import { concerts } from '../../data'

const Concert = ({ selectedShows }) => {
  const findSets = concerts.filter((show) => show.venue === selectedShows[0])

  return (
    <div className='concert-container'>
      {findSets.map((set) => {
        return (
          <div>
            <h2>
              {selectedShows} - {set.date}
            </h2>
            <h3>Set 1</h3>
            <ul>
              {set.set1.map((song) => {
                return <li>{song}</li>
              })}
            </ul>
            <h3>Set 2</h3>
            <ul>
              {set.set2.map((song) => {
                return <li>{song}</li>
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Concert
