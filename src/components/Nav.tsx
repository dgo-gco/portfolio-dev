import React, { useState } from "react";
import './Nav.css';
import '../index.css';

type NavProps = {
    lightBtn: () => void;
    lightMode: string
};

export const Nav = ({lightBtn, lightMode}: NavProps) => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclick")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [menuClicked, setMenuClicked] = useState(false)

    const updateMenu = () => {
        console.log('here')
        if(!menuClicked){
            setBurgerClass("burger-bar click")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclick")
            setMenuClass("menu hidden")
        } 
        setMenuClicked(!menuClicked)
    }
  return (
    <nav className='navbar'>
     <div className={`nav--bar ${lightMode}`}>
        <div className={`logo ${lightMode}`}>WEB DEV<span className="point">.</span></div>
            <div className="gauche-nav">
                <ul className="ul--nav">
                    <li><a href="#" className={`a-link ${lightMode}`}>Projects</a></li>
                    <li><a href="#" className={`a-link ${lightMode}`}>Contact</a></li>
                </ul>
                <button className={`nav--btn ${lightMode}`} onClick={lightBtn}>Dark Mode</button>
            </div>

            <div className="burger--menu" onClick={updateMenu}>
                <div className={`${burger_class} ${lightMode}`}></div>
                <div className={`${burger_class} ${lightMode}`}></div>
                <div className={`${burger_class} ${lightMode}`}></div>
            </div>
            <div className={`${menu_class} ${lightMode}`}>
                    <ul className={`ul--slide ${lightMode}`}>
                        <li><a href="#about--section" className={`a-brg ${lightMode}`}>About</a></li>
                        <li><a href="#" className={`a-brg ${lightMode}`}>Projects</a></li>
                        <li><a href="#" className={`a-brg ${lightMode}`}>Contact</a></li>
                    </ul>
            </div>
     </div>
    </nav>
  )
}