import React from 'react';

function RecipeDetails({ recipe }) {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Additional details can go here */}
    </div>
  );
}

export default RecipeDetails;
