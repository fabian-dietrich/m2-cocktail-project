import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const AddCocktailPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    alcoholic: false,
    image: "",
    instructions: "",
    ingredients: [{ ingredient: "", measure: "" }],
  });

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

    const newCocktail = {
      id: uuidv4(),
      ...formData,
    };

    try {
      const response = await fetch("http://localhost:5005/cocktails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCocktail),
      });

      if (response.ok) {
        console.log("Cocktail added 👍");
        navigate(`/cocktails/${newCocktail.id}`);
      } else {
        console.error("failed to add drink");
      }
    } catch (error) {
      console.error("Error;", error);
    }
  };

  return (
    <div className="add-cocktail-page">
      <h2>Add A Cocktail</h2>

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

        <button type="submit">Add Cocktail 🍸 </button>
      </form>
    </div>
  );
};
