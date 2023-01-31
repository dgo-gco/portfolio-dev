import React from 'react'
// import { Nav } from '../Nav'
import './ProjectPage.css'

export const ProjectPage = () => {
  return (
    <div className="project--pages">
        {/* <Nav 
        /> */}
        <div className="project--page">
            <div className="project--container">
                <div className="project--image">
                    <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="project--text">
                    <h1>Project #1</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, deleniti repudiandae corporis illo quae veritatis a necessitatibus magni laborum soluta.</p>
                    <button id="button-pj">Voir plus</button>
                </div>
            </div>
        </div>
    </div>
  )
}
