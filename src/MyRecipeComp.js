import check from "./check.png"
function MyRecipeComp({label, image, calories, ingredients}){
    return(
       
        <div className="recipes">
        <h2>{label}</h2>
        <img src={image} alt='recipe' width="350"/>
        <p>{calories} calories</p>
       <ul className="list">
          {ingredients.map((ing, index)=>(
              <li key={index} className="listItem"><img src={check} width="20"/> {ing}</li>
          ))}
       </ul>
  
        </div>
    )
}
export default MyRecipeComp;