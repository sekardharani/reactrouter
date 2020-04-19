import React from 'react'
import {NavLink, Link, withRouter } from "react-router-dom"

 function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <NavLink  className="navbar-brand" to="/">
                <img src="logo.png" alt="Logo" className="logo" logoname={"personal logo"}></img>
            </NavLink >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/" activeClassName="active-link">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/about" activeClassName="active-link">About Us</NavLink >
                    </li>
                    <li className="nav-item">
                        <Link exact className="nav-link" to="/contact" >Contact Us</Link >
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default withRouter(Header);