import React from "react";
import "../styles/menustyles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { cocktailCards } from "../data/Cards";

const CocktailMenu = () => {
    return (
        <div>
            <Navbar />
            <div className="Welcome">
                <h1 className="menu-title-text">Laguna Cafe</h1>
                  
            </div> 
              
            <div className="menu" id="menu">          
                <h2>Cocktail Menu</h2>
                <div className="signature-cocktails">
                    <h3>Signature Cocktails</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <h6>{cocktailCards[0].title}</h6>
                            <p>{cocktailCards[0].description}</p>
                            <h6>{cocktailCards[1].title}</h6>
                            <p>{cocktailCards[1].description}</p>
                            <h6>Blackberry Crush</h6>
                            <p>Bacardi, muddled blackberries, lime, and simple syrup.</p>
                            <h6>Hemingway Daiquiri</h6>
                            <p>Bacardi, grapefruit, lime, simple syrup, and Luxardo.</p>
                            <h6>Clover Club</h6>
                            <p>Gin, fresh squeezed lemon, handmade raspberry syrup, egg white foam.</p>
                            <h6>Strawberry Fields</h6>
                            <p>Makers Mark, muddled strawberries & mint, homemade strawberry syrup, lemon.</p>
                            <h6>Old Fashioned</h6>
                            <p>Woodford Reserve, pinch of raw sugar, orange bitters, cherry.</p>
                        </div>                  
                        <div className="col-lg-6">
                            <h6>Negroni</h6>
                            <p>Gin, Campari, Sweet Vermouth.</p>
                            <h6>Peach Cooler</h6>
                            <p>Bacardi, peach nectar, orange, and simple syrup.</p>
                            <h6>Lava Flow</h6>
                            <p>Bacardi, Malibu, strawberries, banana, coconut cream, pineapple juice.</p>
                            <h6>Mai Tai</h6>
                            <p>Light and dark rum, Grand Marnier, orange, pineapple juice, orgeat.</p>
                            <h6>Classic Margarita</h6>
                            <p>Don Julio, lime, agave, Cointreau, salt rim.</p>
                            <h6>Guava Margarita</h6>
                            <p>Casamigos Tequila, Cointreau, guava, lychee.</p>                         
                            <h6>New Fashioned</h6>
                            <p>Hudson Baby Bourbon, Luxardo, Demerara syrup, orange bitters.</p>
                        </div>   
                    </div>               
                </div>
                <div className="craft-beers">
                    <h3>Craft Beers on Tap</h3>
                    <div class="row">
                        <div className="col-lg-6">
                            <h6>IPAs</h6>
                            <p>Sixpoint Brewery -- Resin -- ABV: 9.1% Brooklyn, NY</p>
                            <p>Icarus Brewing -- Yacht Juice -- IPA ABV: 8% Lakewood, NJ</p>
                            <p>Dogfish Head -- 60 Minute IPA -- ABV: 6% Milton, DE</p>
                            <p>Source Brewing -- Ultra Cashmere -- ABV: 8% Colts Neck, NJ</p>
                            <p>Heavy Reel Brewing -- Drowning Clown -- ABV: 8.5% Seaside Heights, NJ</p>
                            <p>Maine Beer Company -- Lunch -- ABV: 7% Freeport, ME</p>
                            <p> ______ </p>
                            <h6>Stouts / Porters</h6>
                            <p>Founder's Brewing -- Breakfast Stout -- ABV: 8.3% Grand Rapids, MI</p>
                            <p>Icarus Brewing -- Oatmeal Raisin Riviera -- ABV: 6.9% Lakewood, NJ</p>
                            <p>Kane Brewing -- Morning Bell -- ABV: 9.2% Ocean, NJ</p>
                            <p>Spellbound Brewing -- It's Not Yours, It's Mayan! -- ABV: 11.5% Mount Holly, NJ</p>
                        </div>
                        <div className="col-lg-6">
                            <h6>Lagers / Pilsners</h6>
                            <p>Jughandle Brewing -- Goldfinch -- ABV: 4.7% Tinton Falls, NJ</p>
                            <p>Cape May Brewing -- Tan Limes -- ABV: 5% Cape May, NJ</p>
                            <p>Firestone Walker -- Pivo Pils -- ABV: 5.3% Paso Robles, CA</p>
                            <p>Sixpoint Brewery -- The Crisp -- ABV: 5.4% Brooklyn, NY</p>
                            <p> ______ </p>
                            <h6>Sours / Goses</h6>
                            <p>Collective Arts Brewing -- Guava Gose -- ABV: 4.9% Hamilton, ON Canada</p>
                            <p>Hourglass Brewing -- Margs on Deck -- IPA ABV: 6.5% Longwood, FL</p>
                            <p>Hudson Valley Brewery -- Star Chamber -- ABV: 6% Beacon, NY</p>
                            <p>Tripping Animals Brewing -- High-Sea Punch -- ABV: 6% Doral, FL</p>
                            <p>Magnify Brewing -- Froot Stripez -- ABV: 8% Fairfield, NJ</p>
                        </div>
                    </div>   
                </div>
                <div className="wines">
                    <h3>Wines</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <h6>Red Wine</h6>
                            <p>The Prisoner -- Red Blend -- California</p>
                            <p>The Show -- Malbec -- Argentina</p>
                            <p>Montazi Family -- Pinot Noir -- Oregon</p>
                            <p>Goldstrike -- Cabernet Sauvignon -- California</p>
                            <p>The Black Stump Durif -- Shiraz -- Australia</p>
                            <p>Saints & Zinners -- Zinfandel -- California</p>
                        </div>
                        <div className="col-lg-6">
                            <h6>White Wine</h6>
                            <p>Wildsong Organic -- Sauvignon Blanc -- New Zealand</p>
                            <p>The Pass -- Sauvignon Blanc -- New Zealand</p>
                            <p>Harken -- Chardonnay -- California</p>
                            <p>Yalumba -- Chardonnay -- Austrailia</p>
                            <p>Villa Puccini -- Pinot Grigio -- Italy</p>
                            <p>Coteaux Bourguignons Blanc -- White Burgundy -- France</p>
                        </div>
                    </div>
                </div>
                <div className="dessert-cocktails">
                    <h3>Dessert Cocktails</h3>
                    <h6>Espresso Martini</h6>
                    <p>Grey Goose, Kahlua, creme de cacao, espresso, coffee beans</p>
                    <h6>Brandy Alexander</h6>
                    <p>Cognac, white creme de cacao, heavy cream</p>
                    <h6>Liquid Bourbon Ball</h6>
                    <p>Woodford Reserve, Frangelico, creme de cacao, chocolate shavings</p>       
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CocktailMenu;