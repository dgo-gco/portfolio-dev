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
          <div className="img-shape"></div>
        </div>
        <div className={`info--txt ${lightMode}`}>
            <h2>A propos de moi</h2>
            <p>Grâce à ma dernière expérience professionnelle en tant que Social Media Manager ou j'ai eu l'occasion 
              de travailler dans l'espace blockchain & Web3, j'ai également découvert un tout nouveau monde dans la 
              tech et une véritable passion pour le code. C'est ainsi que j'ai commencé à apprendre par moi-même depuis 
              juin dernier, puis, une fois les fondamentaux acquis, j'ai postulé pour une formation accélérée en coding 
              pour renforcer ces acquis. A l'aise avec les langages HTML5, CSS3, JavaScript ES6, React18, et actuellement 
              en train d'améliorer mes compétences en TypeScript, Nodejs et Expressjs, je suis toujours  à la recherche de 
              challenges et je suis donc motivé pour acquérir des nouvelles compétences dans le domaine technologique et du web développement.
              <br />
              Curieux et dynamique, je suis prêt à relever de nouveaux défis dans un univers aux multiples facettes qui me passionne.
              </p>
        </div>
      </div>
    </div>
  )
}
