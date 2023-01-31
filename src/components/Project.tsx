import React from 'react'
import { ProjectsData } from '../project-prop';
import { ProjectSection } from './ProjectSection';
import './ProjectSection.css'

type ProjectProps = {
    proyectos: ProjectsData[];
    lightMode: string
}

export const Project = ({proyectos, lightMode}: ProjectProps) => {
    const projectData = proyectos.map(proyecto => (
        <ProjectSection 
        lightMode={lightMode}
        proyectos={proyecto} />
    ))
  return (
    <div className={`project--cards ${lightMode}`}>
      <div className="cards">
        {projectData}
      </div>
    </div>
  )
}
