import React from 'react';

function Header() {
  return (
    <header>
      <h1>Recipe Share</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/add-recipe">Add Recipe</a>
      </nav>
    </header>
  );
}

export default Header;
