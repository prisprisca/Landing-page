import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className='header'>
           <Link to='home-page' className='header_link'> <h1>Company Name</h1></Link>
            <p>Your Comfort, Our Priority!</p>

            <div className="header-blog">
            <Link to='blog' className="header_link">Blog</Link>
            </div>

            <div className="header-services">
                <Link to='services' className='header_link'>Services</Link>
            </div>

            <div>
              <Link to='repo' className='header_link'>MyRepo</Link>
            </div>
            
        </div>
    )
}

export default Header
