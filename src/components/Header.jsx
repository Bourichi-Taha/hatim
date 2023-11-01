import React, { useState } from 'react'
import "../assets/css/header.css"


const Header = () => {
    const clickHandler = (e) => {
        const tabs = document.querySelectorAll("li.navbar-container-item");
        let lastActive;
        tabs.forEach((tab) => {
            if (tab.classList.contains("active")) {
                tab.classList.remove("active");
                return lastActive = tab.tabIndex;
            }
        });
        e.target.classList.add("active");
        console.log("laastactive",lastActive)
        console.log("e.target.tabIndex",e.target.tabIndex)
        if (e.target.tabIndex > lastActive) {
            if (e.target.innerText === "Home") {
                document.body.style.setProperty("--right-navbar", "76%");
                setTimeout(() => {
                    document.body.style.setProperty("--left-navbar", "0");
                }, 300);
            } else if (e.target.innerText === "About") {
                document.body.style.setProperty("--right-navbar", "52%");
                setTimeout(() => {
                    document.body.style.setProperty("--left-navbar", "24%");
                }, 300);
            } else if (e.target.innerText === "Projects") {
                document.body.style.setProperty("--right-navbar", "25%");
                setTimeout(() => {
                    document.body.style.setProperty("--left-navbar", "50%");
                }, 300);
            } else if (e.target.innerText === "Tools") {
                document.body.style.setProperty("--right-navbar", "0");
                setTimeout(() => {
                    document.body.style.setProperty("--left-navbar", "76%");
                }, 300);
            }
        } else {
            if (e.target.innerText === "Home") {
                document.body.style.setProperty("--left-navbar", "0");
                setTimeout(() => {
                document.body.style.setProperty("--right-navbar", "76%");
                }, 300);
            } else if (e.target.innerText === "About") {
                document.body.style.setProperty("--left-navbar", "24%");
                setTimeout(() => {
                    document.body.style.setProperty("--right-navbar", "52%");
                }, 300);
            } else if (e.target.innerText === "Projects") {
                document.body.style.setProperty("--left-navbar", "50%");
                setTimeout(() => {
                    document.body.style.setProperty("--right-navbar", "25%");
                }, 300);
            } else if (e.target.innerText === "Tools") {
                document.body.style.setProperty("--left-navbar", "76%");
                setTimeout(() => {
                    document.body.style.setProperty("--right-navbar", "0");
                }, 300);
            }
        }
    }
    return (
        <div className="header-container">
            <div className="header-container-left">Maak</div>
            <div className="header-container-right">Contact</div>
            <div className="navbar-container">
                <ul className="navbar-container-ul">
                    <li tabIndex={1} className="navbar-container-item active" onClick={clickHandler}>Home</li>
                    <li tabIndex={2} className="navbar-container-item" onClick={clickHandler}>About</li>
                    <li tabIndex={3} className="navbar-container-item" onClick={clickHandler}>Projects</li>
                    <li tabIndex={4} className="navbar-container-item" onClick={clickHandler}>Tools</li>
                </ul>
            </div>
        </div>
    )
}

export default Header