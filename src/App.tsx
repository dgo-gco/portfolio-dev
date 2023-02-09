import React from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { MainSection } from "./components/MainSection";
import { Nav } from "./components/Nav";
import { Project } from "./components/Project";
import { projects } from "./projects-data";

type AppProps = {
  lightBtn: () => void; 
  lightMode: string;
  modeState: boolean
}

function App({lightBtn, lightMode }: AppProps) {
  const proyectos = projects;

  return (
    <div className={lightMode}>
      <div className="structure">
        <Nav lightBtn={lightBtn} lightMode={lightMode} />
        <MainSection lightMode={lightMode} />
        <AboutMe lightMode={lightMode} />
        <Project proyectos={proyectos} lightMode={lightMode} />
        <Footer lightMode={lightMode} />
      </div>
    </div>
  );
}

export default App;
