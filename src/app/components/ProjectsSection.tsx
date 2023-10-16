"use client";
import { useEffect, useRef } from "react";
import { projectsData } from "../helpers/projectsData"
import { ProjectCard } from "./ProjectCard"

export const ProjectsSection = () => {
    const containerRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        containerRef.current?.addEventListener('pointermove', updateCursor);

        return () => {
          containerRef.current?.removeEventListener('pointermove', updateCursor);
        };
    }, []);

    const updateCursor = (e:PointerEvent) => {
            const {x, y} = e;
            document.documentElement.style.setProperty('--x', x.toString());
            document.documentElement.style.setProperty('--y', y.toString());
    };

    return (
        <>    
            <h2 className="text-4xl font-bold text-white mb-4">
                Checkout some of my projects
            </h2>
            <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {
                    projectsData.map(project => (
                        <ProjectCard gitUrl={project.gitUrl} previewUrl={project.previewUrl} description={project.description} title={project.title} imgUrl={project.image} key={project.id}/>
                    ))
                }
            </div>
        </>
    )
}
