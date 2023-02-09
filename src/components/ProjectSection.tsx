import React from 'react'
import './ProjectSection.css'
import { ProjectsData } from '../project-prop'
import { Link } from 'react-router-dom'


type ProjectSectionProps = {
    proyectos: ProjectsData,
    lightMode: string
}

export const ProjectSection = ({proyectos, lightMode}: ProjectSectionProps) => {
  return (
        <div className="card" id='projects'>
        <div className={`card--c ${lightMode}`} >
            <div className="project-img-around">
                <Link to={{pathname:`/page/${proyectos.id}`}} state={{proyectos: proyectos}} className="link-project">
                    <img src={proyectos.img} alt="" className="project--imgs"/>
                </Link>
            </div>
            <div className={`card--txt ${lightMode}`}>
                <Link  to={{pathname:`/page/${proyectos.id}`}}
                 state={{proyectos: proyectos}} 
                 >
                <h4 className={`tit-txt ${lightMode}`}>{proyectos.name}</h4>
                <p className={`tit-txt ${lightMode}`}>{proyectos.description}</p>
                </Link>
            </div>
        </div>
        </div>
  )
}

