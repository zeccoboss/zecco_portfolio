import React from 'react'
import Projects from './Projects.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Contact from './Contact.jsx'
import Profile from './Profile.jsx'

const MainBody = () => {

    return (
        <article className="main">
            <Profile />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </article>
    )
}

export default MainBody
