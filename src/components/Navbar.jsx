import React from "react";
import { Route, Switch, Link } from "react-router-dom";

function Navbar() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
            <li className="nav-link">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-link">
                <Link className="nav-link" to="/Menu">Menu</Link>
            </li>
            <li className="nav-link">
                <Link className="nav-link" to="/CocktailMenu">Cocktail Menu</Link>
            </li>
            <li className="nav-link">
                <Link className="nav-link" to="/Contact">Contact Us</Link>
            </li>
      </ul>
    </div>
  </nav>
        
    </div>
    );
}

export default Navbar;