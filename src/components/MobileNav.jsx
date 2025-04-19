import React, { useState } from 'react'

const MobileNav = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='mobile_nav'>
                <h2 className='head'>ZECCO</h2>
            
            {showNav ? <nav className='nav'>
                <ul className='nav_list'>
                    <li className='items'><a href="#about" className='nav_links'>About</a></li>
                    <li className='items'><a href="#experience" className='nav_links'>Experience</a></li>
                    <li className='items'><a href="#projects" className='nav_links'>Projects</a></li>
                    <li className='items'><a href="#contacts" className='nav_links'>Contact</a></li>
                </ul>
            </nav> : null }

            <div className="menubar" onClick={() => setShowNav(!showNav)}>
                <span className='menu_items'></span>
                <span className='menu_items'></span>
                <span className='menu_items'></span>
            </div>
        </div>
    )
}

export default MobileNav
