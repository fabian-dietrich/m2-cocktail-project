import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CocktailListPage } from "./pages/CocktailListPage";
import { AddCocktailPage } from "./pages/AddCocktailPage";
import { CocktailDetailsPage } from "./pages/CocktailDetailsPage";
import { NavBar } from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar/>
      <h1 className="drink">🍸</h1>
      <h1>Kelechi + Fabian</h1>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cocktails" element={<CocktailListPage/>}/>
        <Route path="/cocktails/:id" element={<CocktailDetailsPage/>}/>
        <Route path="/add-cocktail" element={<AddCocktailPage/>}/>
      </Routes>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You have had {count} drinks. Click here for another.
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        please drink responsibly
      </p>
    </>
  );
}

export default App;
