import React, {useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const PieChart = (props) => {


    const [apiValue, setApiValue] = useState([]);
    const [apiValue2, setApiValue2] = useState([]);


    useEffect(() =>{
 

    async function loadData(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+props.search1);
        const data = await response.json();
        const item = data;
       setApiValue(item);
       console.log(item);

    }

    loadData();

    async function loadData2(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+props.search2);
        const data = await response.json();
        const item2 = data;
       setApiValue2(item2); 

    }

    loadData2();
    }, [props]);

    var heightpoke1 = [];
    var heightpoke2 = [];
    heightpoke1.push(apiValue.height);
    heightpoke2.push(apiValue2.height);
    console.log(heightpoke1);
    console.log(heightpoke2);


    const chartData = {
        labels: [""+props.search1 +"",""+props.search2 +""],
        datasets: [{
            label: "Health of Pokemon", 
            data: [heightpoke1,heightpoke2],
            backgroundColor: ['rgba(75,192,192,0.6)','rgba(255,192,192,0.6)'],
            borderWidth: 4,
        }]
    };

    return(
        <div style={{marginLeft:'60px'}} className='containerChart'><h1 style={{textAlign:'center', marginTop:'-15px'}}>Height</h1><br></br>
        <h1 style={{textAlign:'center', marginTop:'-35px',fontSize:'16px', fontWeight:'200'}}>-Compare Pokemon Height-</h1>
    <div style={{height:'250px', width:'250px', float:'left', marginLeft:'125px'}}  className='Prices'>
       <Pie data={chartData}  options={{
           responsive:true,
       }}/>
    </div>
    </div>
);

}

export default PieChart;