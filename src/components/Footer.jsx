import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className="footer_nav">
                <ul className='footer_nav_list'>
                    <li className='nav_items'><a href="#about" className='footer_nav_links'>About</a></li>
                    <li className='nav_items'><a href="#experience" className='footer_nav_links'>Experience</a></li>
                    <li className='nav_items'><a href="#projects" className='footer_nav_links'>Projects</a></li>
                    <li className='nav_items'><a href="#contact" className='footer_nav_links'>Contact</a></li>
                </ul>
            </nav>
            <p>Copyright &copy; { new Date().getFullYear() } Obang Ezekiel.</p>
        </footer>
    )
}

export default Footer
