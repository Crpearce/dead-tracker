import { Link } from 'react-router-dom'

import banner from '../../assets/banner.jpg'

import './navigation.styles.css'

const Navigation = () => {
  return (
    <nav className='nav-container'>
      <img src={banner} style={{ width: '55%' }} alt='banner'/>
      <div className='nav-links-container'>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: '#171515' }}
          className='link'
        >
          Home
        </Link>
        <Link
          to='/song-tracker'
          style={{ textDecoration: 'none', color: '#171515' }}
          className='link'
        >
          Song Count
        </Link>
        <Link
          to='/due-up'
          style={{ textDecoration: 'none', color: '#171515' }}
          className='link'
        >
          Due Next
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
