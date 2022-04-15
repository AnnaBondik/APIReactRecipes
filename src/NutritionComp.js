function NutritionComp({label, quantity,unit, quantity2, unit2, label3, quantity3, unit3, label4, quantity4, label5, quantity5, label7, quantity7,label8, quantity8, unit8 }){

 return(
     <div className="table">
    
<table >
    <h2>Nutrition Facts</h2>
<p className="calories">Calories {quantity2} {unit2}</p>
    <tr className="tableRow">
        <th>{label} </th>
        <td>{quantity} {unit}</td>
    </tr>
    <tr className="tableRow">
        <th>{label3} </th>
        <td>{quantity3} {unit3}</td>
    </tr>
    <tr className="tableRow">
        <th>{label4} </th>
        <td>{quantity4} {unit}</td>
    </tr>
    <tr className="tableRow">
        <th>{label5} </th>
        <td>{quantity5} {unit}</td>
    </tr>
    <tr className="tableRow">
        <th>{label8} </th>
        <td>{quantity8} {unit8}</td>
    </tr>
    <tr className="tableRow">
        <th>{label7} </th>
        <td>{quantity7} {unit}</td>
    </tr>
    
</table>
  
 </div>
 )
}
export default NutritionComp;
