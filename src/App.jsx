import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import CocktailMenu from "./pages/CocktailMenu";

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
