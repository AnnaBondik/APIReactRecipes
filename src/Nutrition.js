import { useEffect, useState } from 'react';
import NutritionComp from './NutritionComp';
function Nutrition(){

    const key='4679cc4a2eee49760312e2575754bb66';
    const id='a0603b4f';

    const [myNutrition, setMyNutrition]= useState('');
    const [myIngr, setMyIngr]= useState([]);
    const [mySubmit, setMySubmit]= useState('10 oz tuna')
    const [myIngr2, setMyIngr2]= useState([]);
    const [myIngr3, setMyIngr3]= useState([]);
    const [myIngr4, setMyIngr4]= useState([]);
    const [myIngr5, setMyIngr5]= useState([]);
    const [myIngr7, setMyIngr7]= useState([]);
    const [myIngr8, setMyIngr8]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const response= await fetch (`https://api.edamam.com/api/nutrition-data?app_id=${id}&app_key=${key}&nutrition-type=cooking&ingr=${mySubmit}`);
            const data = await response.json();
            console.log(data);
            setMyIngr(data.totalNutrients.CA);
            setMyIngr2(data.totalNutrients.ENERC_KCAL);
            setMyIngr3(data.totalNutrients.PROCNT);
            setMyIngr4(data.totalNutrients.CHOLE);
            setMyIngr5(data.totalNutrients.K);
            setMyIngr7(data.totalNutrients.MG);
            setMyIngr8(data.totalNutrients.FE);
        }
        fetchData()
       
    },[mySubmit])

    const findNutrition = (e)=>{
     setMyNutrition(e.target.value);
    }
    const finalSubmit =(e)=>{
        e.preventDefault();
        setMySubmit(myNutrition);
    }

    return(
    <div>
        <img className='image' src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"/>
    <form onSubmit={finalSubmit} className="formNutrition">
        <input className='example' placeholder="ex: 1 oz tuna" value={myNutrition} onChange={findNutrition}></input>
    </form>
    <div>

   
   <NutritionComp 
   label={myIngr.label} 
   quantity={Number(myIngr.quantity).toFixed()}
   unit={myIngr.unit}
   quantity2={Number(myIngr2.quantity).toFixed()}
   unit2={myIngr2.unit}
   label3={myIngr3.label}
   quantity3={Number(myIngr3.quantity).toFixed()}
   unit3={myIngr3.unit}
   label4={myIngr4.label}
   quantity4={Number(myIngr4.quantity).toFixed()}
   label5={myIngr5.label}
   quantity5={Number(myIngr5.quantity).toFixed()}
   label7={myIngr7.label}
   quantity7={Number(myIngr7.quantity).toFixed()}
   label8={myIngr8.label}
   quantity8={Number(myIngr8.quantity).toFixed()}
   unit8={myIngr8.unit}/>
  
    
  

    </div>
    </div>
    )
}
export default Nutrition;