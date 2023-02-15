import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import { ProjectPage } from './pages/ProjectPage'
import {Nav} from './Nav'

//in the page path, info after ':' is considered as parameter
export const Router = () => {
  const [modeState, setModeState] = React.useState(false);
  const [lightMode, setLightMode] = React.useState("dark on");

  const lightBtn = () => {
    if (!modeState) {
      setLightMode("dark off");
    } else {
      setLightMode("dark on");
    }
    setModeState(!modeState);
  };
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App lightBtn={lightBtn} lightMode={lightMode} modeState={modeState}/>} />
            <Route path='/page/:id' element={<ProjectPage lightMode={lightMode}/>} />
        </Routes>
    </BrowserRouter>
  )
}