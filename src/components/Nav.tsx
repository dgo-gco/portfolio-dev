import React, { useState } from "react";
import './Nav.css';
import '../index.css';

export const Nav = () => {
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
    <nav className="nav--bar">
            <div className="logo">WEB DEV<span className="point">.</span></div>
            <ul className="ul--nav">
                {/* <Link to='#about-sect'>
                About
                </Link> */}
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="search-inp-btn">
                <input type="text" name="" id="" />
                <button className="nav--btn">Contact Me</button>
            </div>

            <div className="burger--menu" onClick={updateMenu}>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
                <div className={burger_class}></div>
            </div>
            <div className={menu_class}>
                    <ul className="ul--slide">
                        <li><a href="#about--section">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
            </div>
        </nav>
  )
}