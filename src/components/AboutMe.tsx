import React from 'react'
import './AboutMe.css'


type AboutMeProps = {
  lightMode: string
}

export const AboutMe = ({ lightMode }: AboutMeProps) => {
  return (
    <div className={`blue-bg ${lightMode}`} id="about-sect">
      <div className="info--sec">
        <div className="shape-img">
            <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className={`info--txt ${lightMode}`}>
            <h2>About me</h2>
            <p>Après avoir obtenu une licence en relations internationales et débuté ma carière 
              profesionnele dans l'import/export et le marketing digital, je souhaite désormais 
              m'orienter vers la programmation. Toujours à la recherche de challenges, et fort 
              de mon expérience précédente, je suis donc motivé pour acquérir des nouvelles 
              compétences dans le domaine technologique. Curieux et dynamique, je suis prêt à 
              relever de nouveaux défis.</p>
        </div>
      </div>
    </div>
  )
}
