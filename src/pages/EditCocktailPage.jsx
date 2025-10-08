import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditCocktailPage = () => {
  const navigate = useNavigate();
  const { Id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    alcoholic: false,
    image: "",
    instructions: "",
    ingredients: [{ ingredient: "", measure: "" }],
  });

  const [loading, setLoading] = useState(true);

  // Fetch the existing cocktail data
  useEffect(() => {
    async function getCocktail() {
      try {
        const response = await fetch(`http://localhost:5005/cocktails/${Id}`);
        const data = await response.json();
        setFormData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cocktail:", error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [Id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index][field] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { ingredient: "", measure: "" }],
    });
  };

  const removeIngredient = (index) => {
    const newIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5005/cocktails/${Id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Cocktail updated successfully! 👍");
        navigate(`/cocktails/${Id}`);
      } else {
        console.error("Failed to update cocktail");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-cocktail-page">
      <h2>Edit Cocktail</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="alcoholic">
            <input
              type="checkbox"
              id="alcoholic"
              name="alcoholic"
              checked={formData.alcoholic}
              onChange={handleChange}
            />
            Contains Alcohol
          </label>
        </div>

        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <div>
          <h3>Ingredients</h3>
          {formData.ingredients.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Ingredient"
                value={item.ingredient}
                onChange={(e) =>
                  handleIngredientChange(index, "ingredient", e.target.value)
                }
                required
              />
              <input
                type="text"
                placeholder="Measure"
                value={item.measure}
                onChange={(e) =>
                  handleIngredientChange(index, "measure", e.target.value)
                }
                required
              />
              {formData.ingredients.length > 1 && (
                <button type="button" onClick={() => removeIngredient(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>

        <button type="submit">Update Cocktail 🍸</button>
      </form>
    </div>
  );
};
