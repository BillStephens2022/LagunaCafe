import React from "react";
import "./menustyles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Menu = () => {
    return (
        <div>
            <Navbar />
            <div className="Welcome">
                <h1 className="menu-title-text">Laguna Cafe</h1>
                
                
            </div> 
              
            <div class="menu" id="menu">          
                <h2>Main Menu</h2>
                <div class="starters">
                    <h3>Starters</h3>
                    <h6>Meatballs</h6>
                    <p>veal, pork & beef meatballs, marinara, percorino romano, ricotta & basil.</p>
                    <h6>Mixed Seafood</h6>
                    <p>grilled prawn, pan fried scallop, marinated anchovies.</p>
                    <h6>White Mussels</h6>
                    <p>PEI Mussels, white wine broth, lemongrass, shallots.</p>
                    <h6>Empanadas</h6>
                    <p>pulled chicken or ground beef and olives, topped with cotija cheese & chipotle aoli.</p>
                    <h6>Shrimp & Grits</h6>
                    <p>Tiger prawns, homemade grits, andouille sausage.</p>
                    <h6>Bavarian Pretzel</h6>
                    <p>Giant Bavarian pretzel served with Dogfish Head IPA beer cheese and Dusseldorf mustard.</p>
                    <h6>Wings!</h6>
                    <p>grilled chicken wings w/ choice of sauce (buffalo, thai chili, parmesan garlic, mango habanero).</p>
                </div>
                <div class="salads">
                    <h3>Salads</h3>
                    <h6>Arugula & Frisee</h6>
                    <p>with toasted pine nuts, seasonal grapes, shaved parmigiano reggiano & preserved lemon viniagrette.</p>
                    <h6>Autumn Baby Kale</h6>
                    <p>Baby kale with dried cranberries, toasted almonds, poached pears, crumbled feta, citrus viniagrette.</p>  
                    <h6>Laguna Beet Salad</h6>
                    <p>Roasted red and yellow beets, brussel sprouts, apple, dried blueberries, feta cheese, honey viniagrette.</p>  
                </div>
                <div class="entrees">
                    <h3>Entrees</h3>
                    <h6>All Day Breakfast - Mexican Omelette</h6>
                    <p>3 egg omelette with chorizo, red onions, jalapenos, tomatoes, roasted red pepper sauce and topped with cotija cheese.</p>
                    <h6>All Day Breakfast - French Toast</h6>
                    <p>French toast with caramalized sugar, cinnamon, and toasted almonds.</p>
                    <h6>Sizzling Sisig</h6>
                    <p>minced chicken or pork mixed with lemon, onion, and chili peppers topped with a fried egg and served sizzlin'.</p>
                    <h6>Smokehouse Burger</h6>
                    <p>sirloin & short rib blend, with thick cut smoked bacon, onion rings, and cheddar on a Brioche bun.</p>
                    <h6>Krispy Kreme Burger</h6>
                    <p>sirloin & short rib blend, with lettuce, tomato, onion strings served between 2 krispy kreme glazed donuts.</p>
                    <h6>Uni Pasta</h6>
                    <p>Squid Ink Tagliatelle, uni (sea urchin), cheddar dashi and yuzu tobiko.</p>
                    <h6>Seafood Paella</h6>
                    <p>Gulf shrimp, mussels, calamari, onion, garlic, tomato, peas, red pepper, saffron rice.</p>
                    <h6>Seafood Risotto</h6>
                    <p>Arborio rice with New Zealand clams, prosecco, pancetta, and grated parmesan.</p>   
                </div>
                <div class="desserts">
                    <h3>Desserts</h3>
                    <h6>Bombolini</h6>
                    <p>warm cinnamon sugar doughnuts with nutella, salted caramel & creme anglaise.</p>
                    <h6>Banana Bread Pudding</h6>
                    <p>Banana bread, bailey's custard, bourbon caramel, vanilla ice cream.</p>
                    <h6>Apple Cobbler</h6>
                    <p>bourbon apples, cinnamon crumbles, topped with a scoop of Madagascar vanilla ice cream.</p>
                    <h6>Key Lime Cheesecake</h6>
                    <p>graham cracker crust, key limes, topped with homemade whipped cream, mint.</p>    
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Menu;