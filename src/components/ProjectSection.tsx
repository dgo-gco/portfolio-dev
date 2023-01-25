import React from 'react'
import './ProjectSection.css'
import { ProjectsData } from '../project-prop'


type ProjectSectionProps = {
    proyectos: ProjectsData
}

export const ProjectSection = ({proyectos}: ProjectSectionProps) => {
  return (
    
        <div className="card">
        <div className="card--c" >
            <div className="project-img-around">
                <a href={proyectos.link} className="link-project">
                    <img src='https://source.unsplash.com/random' alt="" className="project--imgs"/>
                </a>
            </div>
            <div className="card--txt">
                <h4>{proyectos.name}</h4>
                <p>{proyectos.description}</p>
            </div>
        </div>
        </div>
    
  )
}

