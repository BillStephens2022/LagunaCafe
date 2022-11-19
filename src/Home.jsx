import React from "react";
import MainPage from "./MainPage";
import FoodGallery, { CocktailGallery } from "./Carousel";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <MainPage />
            <div class="photoGallery" id="photoGallery">
                <div class="menuGallery">
                    <h2 class="menu-text">Menu Gallery</h2>
                    <FoodGallery />
                </div>
                <div class="cocktailGallery">
                    <h2 class="cocktail-text">Cocktail Gallery</h2>
                    <CocktailGallery />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;