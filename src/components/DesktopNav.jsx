import React from 'react'

const DesktopNav = () => {
    return (
        <div className='desktop_nav'>
            <h2 className='head'>ZECCO</h2>

            <nav className='nav'>
                <ul className='nav_list'>
                    <li className='items'><a href="#about" className='nav_links'>About</a></li>
                    <li className='items'><a href="#experience" className='nav_links'>Experience</a></li>
                    <li className='items'><a href="#projects" className='nav_links'>Projects</a></li>
                    <li className='items'><a href="#contact" className='nav_links'>Contact</a></li>
                </ul>
            </nav>

            <figure>
                <img src="./src/assets/zecco.jpg" alt="icon" className='icon' width={150} height={150} loading='lazy' />
                <figcaption>Portforlo Icon</figcaption>
            </figure>

        </div>
    )
}

export default DesktopNav
