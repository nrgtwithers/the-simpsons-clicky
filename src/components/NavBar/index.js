import React from "react";
// import SimpsonsCard from "./components/SimpsonsCard"
import "./style.css";


function NavBar({score, topScore}) {
    return (
        <div className="App">
            <nav>
                <div className="nav-wrapper">
                    <a href="www.google.com" className="brand-logo">The Simpsons</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>Score: {score} </li>
                        <li>{""}</li>
                        <li>Top Score: {topScore}</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;