import React from 'react'
import { ProjectsData } from '../project-prop';
import { ProjectSection } from './ProjectSection';
import './ProjectSection.css'

type ProjectProps = {
    proyectos: ProjectsData[];
}

export const Project = ({proyectos}: ProjectProps) => {
    const projectData = proyectos.map(proyecto => (
        <ProjectSection proyectos={proyecto} />
    ))
  return (
    <div className='project--cards'>
      <div className="cards">
        {projectData}
      </div>
    </div>
  )
}
