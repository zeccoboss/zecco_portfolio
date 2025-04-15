import React from 'react'
import ExperienceContainer from './ExperienceContainer.jsx'

const Experience = () => {

    return (
        <article id='experience' className='experience'>
            <p>Explore My</p>
            <h2 className='experience_head'>Experience</h2>

            <section className='experience__container'>
                <h2 className='experience_container_head'>Frontend Development</h2>

                <div className="experience_inner_container">
                    <ExperienceContainer language={'HTML'} />
                    <ExperienceContainer language={'CSS'} />
                    <ExperienceContainer language={'JavaScript'} />
                    <ExperienceContainer language={'React JS'} />
                </div>
              
            </section>

            {/* <div className='experience__container'>
                <h2>Backend Development</h2>
                <ExperienceContainer language={'HTML'} />
                <ExperienceContainer language={'CSS'} />
                <ExperienceContainer language={'JavaScript'} />
                <ExperienceContainer language={'ReactJS'} />
            </div> */}

        </article>
    )
}

export default Experience
