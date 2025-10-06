import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function CocktailDetailsPage () {
  
  const [cocktail, setCocktail] = useState({});
  const {Id} = useParams();
  
  useEffect(()=>{
    async function getOneCocktail (){
      try {
const response = await fetch (`/cocktails/${cocktailId}.json`)
        const data = await response.json();
        /* confirm from Josh which is best to use when using API in a JSON, fetch or axios?*/
        console.log(data)
        setCocktail(data);
      } catch (error) {
        console.log(error);
      }
    }
  },[cocktailId])

  return (
    <div className="cocktailDetailsPage">
      <Link to="/cocktails">Back to Cocktails</Link>
      <h1>{cocktail.name}</h1>
      <img src={cocktail.image} alt={cocktail.name} style={{ maxWidth: 420, width: "100%", borderRadius: 8 }} />
      <p><b>Category:</b> {cocktail.category}</p>
      <p><b>Alcoholic:</b> {cocktail.alcoholic}</p>
      <p><b>Glass:</b> {cocktail.glass}</p>
      <p><b>Instructions:</b> {cocktail.instructions}</p>
      <h3>Ingredients</h3>
      <ul>
        {cocktail.ingredients.map((ing, i) => (
          <li key={i}>{ing.ingredient}{ing.measure ? ` — ${ing.measure}` : ""}</li>
        ))}
      </ul>
    </div>
  );
}

export default CocktailDetailsPage
