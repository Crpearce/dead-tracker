import SongTracker from '../songTracker/songTracker.component'
import './navigation.styles.css'

import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>2023 Dead Tour Recap</h1>
      </Link>
      <div>
        <Link to='/song-tracker'>
          <SongTracker />
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
