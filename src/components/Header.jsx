import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import '../MediaQuerries.css'

const Header = () => {

    return (
        <header className='header'>
            <DesktopNav />
            <MobileNav />
        </header>

    )
}

export default Header