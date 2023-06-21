import './concert.styles.css'

const Concert = ({ selectedShows, locations }) => {
  const findSets = locations.filter((show) => show.venue === selectedShows[0])

  console.log(findSets)

  console.log(selectedShows)

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
