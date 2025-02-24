import Project from './../components/project/Project'
import { projects } from './../helpers/projectsList'
import { Link } from 'react-router-dom' // Добавляем импорт

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                
                <ul className="projects">
                    {projects.map((project, index) => { // Добавляем index в map
                        return (
                            <Link to={`/project/${index}`} key={project.title}>
                                <Project 
                                    title={project.title} 
                                    img={project.img} 
                                />
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Projects;