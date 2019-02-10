import React from "react";
// import SimpsonsCard from "./components/SimpsonsCard"
import "./style.css";


function NavBar() {
    return (
        <div className="App">
            <nav>
                <div className="nav-wrapper">
                    <a href="www.google.com" className="brand-logo">The Simpsons</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>Score: 0 </li>
                        <li>{""}</li>
                        <li>Top Score: 0</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;