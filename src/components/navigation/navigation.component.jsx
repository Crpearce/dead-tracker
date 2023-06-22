import { Link } from 'react-router-dom'

import './navigation.styles.css'

const Navigation = () => {
  return (
    <nav className='nav-container'>
        <h1>2023 Dead Tour Tracker</h1>
      <div className='nav-links-container'>
      <Link to='/'>Home
      </Link>
        <Link to='/song-tracker'>
          Song Tracker
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
