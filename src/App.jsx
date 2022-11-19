import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import CocktailMenu from "./CocktailMenu";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/CocktailMenu" element={<CocktailMenu />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
