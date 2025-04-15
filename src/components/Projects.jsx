import React from 'react'
import { useState } from 'react'

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            projectName: 'Quiz App',
            description: 'Project One',
            liveLink: 'https://zeccoboss.github.io/quiz-app/',
            imgScr: 'https://zeccoboss.github.io/quiz-app/img/icon.jpg',
            gitHubLink: 'https://github.com/zeccoboss/quiz-app.git'

        },
        {
            id: 2,
            projectName: 'Fave Quote',
            description: 'Project Two',
            liveLink: 'https://zeccoboss.github.io/quote-app/',
            imgScr: 'https://zeccoboss.github.io/quiz-app/img/icon.jpg',
            gitHubLink: 'https://github.com/zeccoboss/quote-app.git'

        },
        {
            id: 3,
            projectName: 'Note App',
            description: 'Project Three',
            liveLink: 'https://zeccoboss.github.io/note-app/',
            imgScr: 'https://zeccoboss.github.io/quiz-app/img/icon.jpg',
            gitHubLink: 'https://github.com/zeccoboss/note-app.git'

        },
        {
            id: 4,
            projectName: 'Movie Names',
            description: 'Project Four',
            liveLink: 'https://zeccoboss.github.io/movie_name/',
            imgScr: 'https://zeccoboss.github.io/quiz-app/img/icon.jpg',
            gitHubLink: 'https://github.com/zeccoboss/movie_name.git'
        }
    ])

    function Check() {
        setProjects([])
    }

    return (
        <article id='projects' className='projects'>
            <p>Explore My Recent</p>
            <h2 className='project_head'>Projects</h2>
            <section className='project_container'>
                {projects.length > 0 ? projects.map((project) => {
                    return <div key={project.id} className='project_card'>
                        <figure className='project_img_container'>
                            <img src={project.imgScr} alt={project.description} loading='lazy' width={150} height={150} className='project_img img'/>
                        </figure>

                        <div className="project_content">
                            <h2>{project.description}</h2>
                            <div className="projects_links">
                                <a href={project.gitHubLink} className='project_github_link'>GitHub</a>
                                <a href={project.liveLink} target='_blank' className='project_live_demo'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                    }) : <h2>No projects yet</h2>
                }
            </section>
        </article>
    )
}

export default Projects
