import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-list'>
        <ul>
            <Link to="About"><li>About</li></Link>
            <Link to="Contact"><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Nav