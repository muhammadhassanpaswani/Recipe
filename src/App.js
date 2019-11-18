import React ,{useState,useEffect}from 'react';
import Recipe from "./Recipes"
import "./App.css";

function App() {

   
   const [recipes,setRecipes]=useState([]);
   const [search,setSearch]=useState('');
   const [query,setQuery]=useState('chicken');
   useEffect(()=>{
     getReciepe();
   },[query]);
   const APP_ID="e409c3d8";
   const APP_KEY="dac019f4207a49e4270307451c794a29";
   const getReciepe=async()=>{
     fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
     .then(res => res.json())
     .then(data =>setRecipes(data.hits))
   }
 const updateSearch= event=>{
   setSearch(event.target.value);
 }
 const submitHandler=event=>{
   event.preventDefault();
   setQuery(search);
 }

  return (

    <div className="App">
     <h1 className="Heading">CHOOSE YOUR RECIPE!!!</h1>
    <form onSubmit={submitHandler} className="search-form" >
     <input className="search-bar" type="text" placeholder="Your Recipe" value={search} onChange={updateSearch}/>
     <button type="submit" className="search-btn">Search</button>
    </form>
    <div className="recipes">
    {recipes.map(recipe=>(
      <Recipe 
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
       />
     
    ))}
    </div>
    </div>
  );
}

export default App;
