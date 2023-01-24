import React from 'react';
import './App.css';
import { AboutMe } from './components/AboutMe';
import { MainSection } from './components/MainSection';
import { Nav } from './components/Nav';
import { Project } from './components/Project';
import { ProjectSection } from './components/ProjectSection';
import { projects } from './projects-data';

function App() {
  const proyectos = projects;
  return (
    <>
    <Nav />
    <MainSection />
    <AboutMe />
    <Project proyectos={proyectos}/>
    </>
  );
}

export default App;
