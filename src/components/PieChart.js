import React, {useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {

    const [apiValue, setApiValue] = useState([]);
    const [apiValue2, setApiValue2] = useState([]);

    useEffect(() =>{
    async function loadData(){
        const response = await fetch("https://api.pokemontcg.io/v2/cards?q=name:ditto");
        const data = await response.json();
        const item = data.data;
       setApiValue(item);  
    }

    loadData();

    async function loadData2(){
        const response = await fetch("https://api.pokemontcg.io/v2/cards?q=name:pikachu");
        const data = await response.json();
        const item = data.data;
       setApiValue2(item);  
    }

    loadData2();
    }, []);

    console.log(apiValue);
    console.log(apiValue2);
        var HPpoke1 = [];
        var HPpoke2 = [];

    for(var i = 0; i < apiValue.length; i++){
        HPpoke1.push(apiValue[i].hp);

    };

    for(var i = 0; i < apiValue2.length; i++){
        HPpoke2.push(apiValue2[i].hp);
    
    };
    console.log(HPpoke1);
    console.log(HPpoke2);

    const chartData = {
        labels: ["HP Pokemon 1","HP Pokemon 2"],
        datasets: [{
            label: "Health of Pokemon", 
            data: [HPpoke1[0],HPpoke2[0]],
            backgroundColor: ['rgba(75,192,192,0.6)','rgba(255,192,192,0.6)'],
            borderWidth: 4,
        }]
    };

    return(
        <div style={{marginLeft:'60px'}} className='containerChart'><h1 style={{textAlign:'center', marginTop:'-15px'}}>HP</h1><br></br>
        <h1 style={{textAlign:'center', marginTop:'-35px',fontSize:'16px', fontWeight:'200'}}>-Compare Pokemon HP-</h1>
    <div style={{height:'250px', width:'250px', float:'left', marginLeft:'125px'}}  className='Prices'>
       <Pie data={chartData}  options={{
           responsive:true,
       }}/>
    </div>
    </div>
);

}

export default PieChart;