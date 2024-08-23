import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Adjust the path as needed
import RecipeList from './components/RecipeList'; // Adjust the path as needed
import RecipeForm from './components/RecipeForm'; // Adjust the path as needed
import RecipeDetails from './components/RecipeDetails'; // Adjust the path as needed

// Assuming the image is in the public folder
const backgroundImage = process.env.PUBLIC_URL + '/recipesharing.jpeg';

function App() {
  // Sample data
  const recipes = [
    { id: 1, title: 'Recipe 1', description: 'Delicious recipe 1' },
    { id: 2, title: 'Recipe 2', description: 'Delicious recipe 2' },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/add-recipe" element={<RecipeForm onSubmit={(recipe) => console.log(recipe)} />} />
          <Route path="/recipe/:id" element={<RecipeDetails recipe={recipes[0]} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
