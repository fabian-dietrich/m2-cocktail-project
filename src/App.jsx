import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AddCocktailPage } from "./pages/AddCocktailPage";
import { NavBar } from "./components/NavBar";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CocktailListPage } from "./pages/CocktailListPage";
import CocktailDetailsPage from "./pages/CocktailDetailsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailListPage />} />
        <Route path="/cocktails/:Id" element={<CocktailDetailsPage />} />
        <Route path="/add-cocktail" element={<AddCocktailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
