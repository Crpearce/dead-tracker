import './concert.styles.css'

const Concert = ({ selectedShows, locations }) => {
  const findSets = locations.filter((show) => show.venue === selectedShows[0])

  console.log(findSets)

  console.log(selectedShows)

  return (
    <div>
      <h2>{selectedShows}</h2>
      {findSets.map((set) => {
        return (
          <div>
            <h3>{set.date}</h3>
            <p>{set.set1}</p>
            <p>{set.set2}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Concert
