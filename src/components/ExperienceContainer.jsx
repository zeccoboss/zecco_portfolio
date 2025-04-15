import React from 'react'

const ExperienceContainer = ({ language }) => {

    return (
        <>
            <section className='experience_content'>
                    <i className="fa-solid fa-circle-check"></i>
                    <div>
                        <h3>{ language }</h3>
                        <p>Experienced</p>
                    </div>
                    
            </section>
        </>
    )
}

export default ExperienceContainer
