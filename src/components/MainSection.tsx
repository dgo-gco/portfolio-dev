import React from 'react'
import './MainSection.css'

type MainProps = {
  lightMode: string
}

export const MainSection = ({ lightMode }: MainProps) => {
  return (
    <div className={`main ${lightMode}`}>
      <div className="main-txt">
        <h1 className={`title ${lightMode}`}>Hi I am Diego </h1>
        <div className="cardb ball-bouncing">
          <div className="ball"></div>
        </div>
      </div>
        <p>Learning to code.</p>
    </div>
  )
}
