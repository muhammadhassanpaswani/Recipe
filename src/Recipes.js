import React from 'react';
import style from './recipe.module.css';

const Recipe=(props)=>{
    return(
        <div className={style.recipe}>
        <h1>{props.title}</h1>
        <ol>
        <h3>Ingredient</h3>
        {props.ingredients.map(ingredient=>(
            <div>
            <li>{ingredient.text}</li>
            </div>
        ))}
        </ol>
         <h3>Calories</h3>
        <p>{props.calories}</p>
        <img className={style.image} src={props.image} alt=""/>
       
        </div>
    );
}
export default Recipe;