import { projectsData } from "../helpers/projectsData"
import { ProjectCard } from "./ProjectCard"

export const ProjectsSection = () => {

    return (
        <>    
            <h2 className="text-4xl font-bold text-white mb-4">
                Checkout some of my projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {
                    projectsData.map(project => (
                        <ProjectCard gitUrl={project.gitUrl} previewUrl={project.previewUrl} description={project.description} title={project.title} imgUrl={project.image} key={project.id}/>
                    ))
                }
            </div>
        </>
    )
}
