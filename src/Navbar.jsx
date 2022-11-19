import React from "react";

function Navbar() {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <a class="navbar-brand" href=""></a>
            <ul class="navbar-nav ms-auto">
            <li class="nav-link">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-link">
                <a class="nav-link" href="./Menu">Menu</a>
            </li>
            <li class="nav-link">
                <a class="nav-link" href="./CocktailMenu">Cocktail Menu</a>
            </li>
            <li class="nav-link">
                <a class="nav-link" href="./Contact">Contact Us</a>
            </li>
      </ul>
    </div>
  </nav>
        
    </div>
    );
}

export default Navbar;