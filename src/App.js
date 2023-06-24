import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navigation from './components/navigation/navigation.component'
import ConcertForm from './components/concertForm/concertForm.component'
import SongTracker from './components/songTracker/songTracker.component'
import SongProjections from './components/songProjections/songProjections.component'

import { concerts } from '../src/data'

const App = () => {
  const songCount = concerts.reduce((acc, curr) => {
    const songs = [...new Set([...curr.set1, ...curr.set2, ...curr.encore])]
    songs.forEach((song) => {
      if (song === 'None') {
        return
      }
      if (!acc[song]) {
        acc[song] = []
      }
      acc[song].push(`${curr.date}: ${curr.venue}`)
    })
    return acc
  }, {})

  const sortKeyValuesBySong = (obj) => {
    const sortedEntries = Object.entries(obj).sort(
      ([keyA, valueA], [keyB, valueB]) => {
        if (valueA.length > valueB.length) {
          return -1
        }
        if (valueA.length < valueB.length) {
          return 1
        }
        const firstLetterA = keyA[0].toLowerCase()
        const firstLetterB = keyB[0].toLowerCase()
        if (firstLetterA < firstLetterB) {
          return -1
        }
        if (firstLetterA > firstLetterB) {
          return 1
        }
        return 0
      }
    )
    return Object.fromEntries(sortedEntries)
  }

  const sortedSongCount = sortKeyValuesBySong(songCount)

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <ConcertForm />
              <SongProjections concerts={concerts}/>
            </div>
          }
        />
        <Route
          path='/song-tracker'
          element={<SongTracker songCount={sortedSongCount} />}
        />
      </Routes>
    </Router>
  )
}

export default App
