import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import Recipe from './Recipe'; 

//used API tutorial from: https://www.youtube.com/watch?v=U9T6YkEDkMo 
function App() {

  const APP_ID = "a16dd694";
  const APP_KEY = "fcc52c64a12d9b76eb4569a4f2616d83";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(''); 
  const [query,setQuery] = useState ('');

  useEffect (  () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits); 
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <span className="title">Welcome To Food Saver! </span>
      <span className="text-under">Have any leftover ingredients and don't know what to do with them? 
        Click the button to input any ingredient and find recipes!
      </span>
      <div>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">Search Ingredient</button>
        </form> 
        {recipes.map(recipe =>(
          <Recipe 
          title={recipe.recipe.label}
          image={recipe.recipe.image} 
          />
        ))} 
      </div>

    </div>
  );
}

export default App;
