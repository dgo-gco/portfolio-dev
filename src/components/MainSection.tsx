import React from 'react'
import './MainSection.css'

type MainProps = {
  lightMode: string
}

export const MainSection = ({ lightMode }: MainProps) => {
  return (
    <div className={`main ${lightMode}`}>
        <h1 className={`title ${lightMode}`}>Hi I am Diego<span className="point">.</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur elit.</p>
    </div>
  )
}
