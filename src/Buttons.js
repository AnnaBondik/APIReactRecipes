function Buttons({click}){
    return(
        <div className="buttons">
            <button className="sand" onClick={()=>click('sandwiches')}>Sandwiches</button>
            <button className="category"  onClick={()=>click('salad')}>Salads</button>
            <button className="category"  onClick={()=>click('starter')}>Starters</button>
            <button className="category"  onClick={()=>click('bread')}>Bread</button>
            <button className="category" onClick={()=>click('main course')}>Main couse</button>
            <button className="category"  onClick={()=>click('sauces')}>Sauces</button>
        </div>
    )
}
export default Buttons;