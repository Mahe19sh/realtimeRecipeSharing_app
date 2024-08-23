// src/components/RecipeList.js
import React from 'react';

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <a href={`/recipe/${recipe.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
