import { Link } from 'react-router-dom'

import banner from '../../assets/banner.jpg'

import './navigation.styles.css'

const Navigation = () => {
  return (
    <nav className='nav-container'>
        <img src={banner} style={{width: '40%'}}/>
      <div className='nav-links-container'>
      <Link to='/' style={{textDecoration: 'none', color: '#171515'}}>Home
      </Link>
        <Link to='/song-tracker' style={{textDecoration: 'none', color: '#171515'}}>
          Song Count
        </Link>
        <Link to='/due-up' style={{textDecoration: 'none', color: '#171515'}}>
          In the Mix
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
