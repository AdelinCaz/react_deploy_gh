import "./App.css";
import Navbar from "./components/Navbar";
import Recipe from "./Recipe";
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("")

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${query}`);
    const data = await response.json();
    setRecipes(data.meals);
  }
  

  const getRandomRecipes = async () => {

    const response = await fetch(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php`);
    const data = await response.json();
    setRecipes(data.meals);
  }

  useEffect(() => {
    getRandomRecipes();
  }, []);
  
  

   const updateSearch = e => {
     setSearch(e.target.value)
   }

   const getSearch = e => {
     e.preventDefault();
     setQuery(search);
   }

  return (

    <div className="App">

      <div className="container">

      <Router>
        <Navbar />
      </Router>

        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe key={recipe.idMeal} title={recipe.strMeal} image={recipe.strMealThumb} />
          ))}
        </div>
      
    </div>
    </div>
  )
}

export default App
