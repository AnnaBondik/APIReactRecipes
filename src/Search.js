import { useEffect, useState } from 'react';
import Buttons from './Buttons';
import MyRecipeComp from './MyRecipeComp';

function Search(){
    const id='5f052c7a';
    const key= '86984d482be96e07e2004a5a55d92e86';
    
    const [mySearch, setMySearch]= useState('');
    const [myRecipe, setMyRecipe]= useState([]);
    const [mySubmit, setSubmit]= useState('');
    const [myFilter, setFilter]= useState([]);

    useEffect(async()=>{
        const response= await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${mySubmit}&app_id=${id}&app_key=${key}`)
        const data =await response.json();
        setMyRecipe(data.hits);
        setFilter(data.hits);
    },[mySubmit])
     
    const finalSearch =(e)=>{
        e.preventDefault();
        setSubmit(mySearch);
    }

    const filterRecipe = (dishType)=>{
        const newMeal= myRecipe.filter(x=>x.recipe.dishType[0]===dishType);
        setFilter(newMeal);
    }

    return(
    <div className='app'>
        <img className='image' src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"/>
        <div className='header'>
        <h1>Find your perfect recipe</h1>
        </div>
        <form onSubmit={finalSearch} className="formSearch">
            <input placeholder='enter ingredient' value={mySearch} onChange={(e)=> setMySearch(e.target.value)} ></input>
        </form>
        <Buttons click={filterRecipe}/>
<div className='container'>
        {myFilter.map((item, index)=>(
            <MyRecipeComp key={index} ingredients={item.recipe.ingredientLines} label={item.recipe.label} image={item.recipe.image} calories={item.recipe.calories.toFixed()} />
        ))}
</div>
    </div>
    )
}
export default Search;