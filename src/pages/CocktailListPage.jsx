import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CocktailListPage = () => {
  const [cocktailsState, setCocktailsState] = useState([]);
  useEffect(() => {
    async function getAllCocktails() {
      try {
        // const response = await fetch("/cocktails.json");
        const response = await fetch("http://localhost:5005/cocktails");
        /* ask Josh the diff. between const data and const parsedData and when to use which*/
        const parsedData = await response.json();
        console.log(parsedData);
        setCocktailsState(parsedData);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCocktails();
  }, []);

  return (
    <div>
      <h2>All our Cocktails:</h2>
      <div className="cocktail-list">
        {cocktailsState.map((oneCocktail) => {
          return (
            <Link
              key={oneCocktail.id}
              to={`http://localhost:5005/cocktails/cocktails/${oneCocktail.id}`}
            >
              <div className="cocktail-card">
                <img src={oneCocktail.image} alt={oneCocktail.name} />
                <p>{oneCocktail.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
