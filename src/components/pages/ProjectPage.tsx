import './ProjectPage.css'
import { useLocation, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

type PageProps = {
    lightMode: string
}

export const ProjectPage = ({lightMode}: PageProps) => {
    const location = useLocation()
    console.log(location)
    const projectData = location.state
    console.log(projectData.any);
    console.log(lightMode)
    
  return (
    <div className={`project--pages ${lightMode}`}>
        <div className={`back-section ${lightMode}`}>
            <Link to='/'><BsArrowLeft className={`arrow ${lightMode}`}/></Link>
        </div>
        <div className={`project--page ${lightMode}`}>
            <div className={`project--container ${lightMode}`}>
                <div className="project--image">
                    <img src={projectData.proyectos.img} alt="" />
                </div>
                <div className={`project--text ${lightMode}`}>              
                    <h1>{projectData.proyectos.name}</h1>
                    <p>{projectData.proyectos.description}</p>
                    <a href={projectData.proyectos.link}><button id="button-pj">Voir Plus</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}
