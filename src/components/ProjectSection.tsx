import React from 'react'
import './ProjectSection.css'
import { ProjectsData } from '../project-prop'


type ProjectSectionProps = {
    proyectos: ProjectsData,
    lightMode: string
}

export const ProjectSection = ({proyectos, lightMode}: ProjectSectionProps) => {
  return (
        <div className="card">
        <div className={`card--c ${lightMode}`} >
            <div className="project-img-around">
                <a href={proyectos.link} className="link-project">
                    <img src={proyectos.img} alt="" className="project--imgs"/>
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

