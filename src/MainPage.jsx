import React from "react";
import Story from "./Story";

function MainPage() {
    return (
    <div className="MainPage">   
        <div className="Welcome">
            <img src={`${process.env.PUBLIC_URL}/images/food/sisig.jpeg`} alt="sizzling sisig"></img>
            <h1 className="title-text">Laguna Cafe</h1>
            <h3 className="location">Toms River, NJ</h3>   
        </div>
        <div className="Story">
            <Story />
        </div>
    </div> 
    );
}

export default MainPage;
