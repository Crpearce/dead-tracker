import { Link } from 'react-router-dom'

import SongTracker from '../songTracker/songTracker.component'

import './navigation.styles.css'

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>2023 Dead Tour Recap</h1>
      </Link>
      <div>
        <Link to='/song-tracker'>
          <h3>Song Tracker</h3>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
