import { useEffect, useState } from "react"
export const CocktailListPage = () => {
    const [cocktailsState, setCocktailsState] = useState([])
    useEffect(()=> { 
        async function getAllCocktails() {
try {
    const response = await fetch("/cocktails.json")
    /* ask Josh the diff. between const data and const parsedData and when to use which*/
    const parsedData = await response.json()
    console.log(parsedData);
    setCocktailsState(parsedData)
} catch (error) {
    console.log(error);
        }
        }
        getAllCocktails()
    },[] )

  return (
    <div><h2>All our Cocktails:</h2>
    <div className="cocktail-list"></div>
    {cocktailsState.map((oneCocktail)=>{
        return (
            <div className="cocktail-card" key={oneCocktail.id}>
                <img
  src={oneCocktail.image}
  alt={oneCocktail.name}
/>

 <p>{oneCocktail.name}</p>
            </div>  
        )
    })}
    </div>
  )
}


