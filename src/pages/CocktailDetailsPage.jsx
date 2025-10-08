import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../config/config";

function CocktailDetailsPage() {
  const [cocktail, setCocktail] = useState({});
  const { Id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getOneCocktail() {
      try {
        const response = await fetch(`${API_URL}/cocktails/${Id}`);
        const data = await response.json();
        /* confirm from Josh which is best to use when using API in a JSON, fetch or axios?*/
        console.log(data);
        setCocktail(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneCocktail();
  }, [Id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `⚠️ Are you sure you want to delete "${cocktail.name}"?`
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/cocktails/${Id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Cocktail deleted!");
        navigate("/cocktails");
        console.error("Failed to delete cocktail");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="cocktailDetailsPage">
      <Link to="/cocktails">Back to Cocktails</Link>
      <h1>{cocktail.name}</h1>
      <img
        src={cocktail.image}
        alt={cocktail.name}
        style={{ maxWidth: 420, width: "100%", borderRadius: 8 }}
      />
      <p>
        <b>Type:</b> {cocktail.alcoholic ? "Alcoholic" : "Non-Alcoholic"}
      </p>
      <p>
        <b>Ingredients:</b>{" "}
      </p>
      <ul>
        {cocktail.ingredients &&
          cocktail.ingredients.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
      </ul>

      <p>
        <b>Instructions:</b> {cocktail.instructions}
      </p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleDelete} style={{ marginRight: "10px" }}>
          🗑️ Delete Cocktail
        </button>
        <Link to={`/cocktails/edit/${Id}`}>
          <button>✏️ Edit Cocktail</button>
        </Link>
      </div>
    </div>
  );
}

export default CocktailDetailsPage;
