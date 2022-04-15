function Buttons({click}){
    return(
        <div className="buttons">
            <button onClick={()=>click('sandwiches')}>Sandwiches</button>
            <button onClick={()=>click('salad')}>Salads</button>
            <button onClick={()=>click('starter')}>Starters</button>
            <button onClick={()=>click('bread')}>Bread</button>
            <button onClick={()=>click('main course')}>Main couse</button>
            <button onClick={()=>click('sauces')}>Sauces</button>
        </div>
    )
}
export default Buttons;