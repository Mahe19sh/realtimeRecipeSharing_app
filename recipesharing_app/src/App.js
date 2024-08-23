import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeDetails from './components/RecipeDetails';


function App() {
  // Sample data
  const recipes = [
    { id: 1, title: 'Recipe 1', description: 'Delicious recipe 1' },
    { id: 2, title: 'Recipe 2', description: 'Delicious recipe 2' },
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />} />
        <Route path="/add-recipe" element={<RecipeForm onSubmit={(recipe) => console.log(recipe)} />} />
        <Route path="/recipe/:id" element={<RecipeDetails recipe={recipes[0]} />} />
      </Routes>
    </Router>
  );
}

export default App;
