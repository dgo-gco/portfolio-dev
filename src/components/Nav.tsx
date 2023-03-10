import React, { useState } from "react";
import "./Nav.css";
import "../index.css";

type NavProps = {
  lightBtn: () => void;
  lightMode: string;
};

export const Nav = ({ lightBtn, lightMode }: NavProps) => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclick");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [menuClicked, setMenuClicked] = useState(false);
  const [buttonText, setButtonText] = useState("Light Mode");

  const updateMenu = () => {
    if (!menuClicked) {
      setBurgerClass("burger-bar click");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclick");
      setMenuClass("menu hidden");
    }
    setMenuClicked(!menuClicked);
  };

  const changeButtonText = () => {
    if (buttonText === "Light Mode") {
      setButtonText("Dark Mode");
    } else {
      setButtonText("Light Mode");
    }
  };

  const btnFunc = () => {
    changeButtonText();
    lightBtn();
  };

  return (
    <nav className="navbar">
      <div className={`nav--bar ${lightMode}`}>
        <div className={`logo ${lightMode}`}>
          WEB DEV<span className="point">.</span>
        </div>
        <div className="gauche-nav">
          <ul className="ul--nav">
          <li>
              <a href='./#about-sect' className={`a-link ${lightMode}`}>
                About
              </a>
            </li>
            <li>
              <a href='./#projects' className={`a-link ${lightMode}`}>
                Projects
              </a>
            </li>
            <li>
              <a href='./#contact' className={`a-link ${lightMode}`} >
                Contact
              </a>
            </li>
          </ul>
          <button className={`nav--btn ${lightMode}`} onClick={btnFunc}>
            {buttonText}
          </button>
        </div>

        <div className="burger--menu" onClick={updateMenu}>
          <div className={`${burger_class} ${lightMode}`}></div>
          <div className={`${burger_class} ${lightMode}`}></div>
          <div className={`${burger_class} ${lightMode}`}></div>
        </div>
        <div className={`${menu_class} ${lightMode}`}>
          <ul className={`ul--slide ${lightMode}`}>
            <li>
              <a href="./#about-sect" className={`a-brg ${lightMode}`} onClick={updateMenu}>
                About
              </a>
            </li>
            <li>
              <a href="./#projects" className={`a-brg ${lightMode}`} onClick={updateMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="./#contact" className={`a-brg ${lightMode}`} onClick={updateMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
