// src/components/RecipeList.js
import React, { useState, useEffect } from 'react';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch data from the Django API when the component mounts
  useEffect(() => {
    fetch('/api/recipes/')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);  // Set your state with the fetched data
      });
  }, []);

  // Function to handle adding a new recipe
  const handleAddRecipe = (newRecipe) => {
    fetch('/api/recipes/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipes([...recipes, data]);  // Update your state with the new recipe data
      });
  };

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.title}: {recipe.description}</li>
        ))}
      </ul>
      {/* Assume there's a form component here to add a new recipe */}
      {/* Example: <RecipeForm onSubmit={handleAddRecipe} /> */}
    </div>
  );
};

export default RecipeList;
