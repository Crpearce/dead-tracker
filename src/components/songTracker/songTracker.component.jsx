import './songTracker.styles.css'

import { concerts } from '../../data'

const SongTracker = () => {

  // iterate over each concert, spread both set1 and set 2 together?  Each song needs to be paired with the concert date,
  // the song will be the key here, as each time it is played, we will add the new date played into the acc
  // [{title: 'truckin', dates: ['6/22/21', ]}]
  const songCount = concerts.reduce((acc, curr) => {
      curr.set1.forEach(song => {
        if(!acc[song]) {
          acc[song] = []
        } 
        acc[song].push(curr.date)
      })
      curr.set2.forEach(song => {
        if(!acc[song]) {
          acc[song] =[]
        }
        acc[song].push(curr.date)
      })
      console.log(acc)
      return acc
      
  }, [])

  return (
    <div>
      <h1>songs</h1>
      {/* <p>{songCount}</p> */}
    </div>
  )
}

export default SongTracker
