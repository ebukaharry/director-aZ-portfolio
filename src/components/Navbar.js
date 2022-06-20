import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    
    // For mobile navigationn
    const navigationClick = () => {
        let nav = document.getElementById("navigation")
        if (nav.className === "topnav") {
            nav.className += " responsive"
        }
        else {
            nav.className = "topnav"
        }
    }

    //  To get the nav item underlined when that particular page is active
    const activeNav = () => {
        let home = document.getElementById("home")
        home.classList.remove('active')
        navigationClick()
    }  
    const videosActive = () => {
        let home = document.getElementById("home")
        home.classList.add('active')
        navigationClick()
    }  

    return (
        <div>
            <nav className="nav-bar">
                <div className="logo">
                    <a href="/" className=""><h2>directorAz</h2></a>
                </div>
                <div id="navigation" className="topnav">
                    <div className="nav-items">
                        <NavLink to="/" className="active" onClick={videosActive} id="home">Music Videos</NavLink>
                        <NavLink to="/gallery" className="" onClick={activeNav}>Gallery</NavLink>
                        <NavLink to="/about" className="" onClick={activeNav}>Who is aZ?</NavLink>
                        <NavLink to="/contact" className="" onClick={activeNav}>Contact</NavLink>
                        <div className="social-icons">
                            <a href="https://instagram.com/directoraz_?r=nametag"><i className="fa-brands fa-instagram"></i></a>
                            <a href="fb.com"><i className="fa-brands fa-facebook"></i></a>
                            <a href="fb.com"><i className="fa-brands fa-youtube"></i></a>
                            <a href="fb.com"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="nav-icons" onClick={navigationClick}>
                    <div className="icon">
                        <i className="fa-solid fa-bars-staggered"></i>
                    </div>
                </div>
            </nav>
        </div>
    )
}