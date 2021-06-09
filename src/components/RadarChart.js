import React, {useState,useEffect} from 'react';
import {Radar} from 'react-chartjs-2';


const RadarChart = () =>{

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
        var lvlpoke1 = [];
        var lvlpoke2 = [];
        var pokedexPoke1 = [];
        var pokedexPoke2 = [];
        var weaknessespoke1 = [];
        var weaknessespoke2 = [];
        var printedpoke1 = [];
        var printedpoke2 = [];

        for(var i = 0; i < apiValue.length; i++){
            HPpoke1.push(apiValue[i].hp);
    
        };
    
        for(var i = 0; i < apiValue2.length; i++){
            HPpoke2.push(apiValue2[i].hp);
        
        };
                for(var i = 0; i < apiValue.length; i++){
            lvlpoke1.push(apiValue[i].level);
    
        };
    
        for(var i = 0; i < apiValue2.length; i++){
            lvlpoke2.push(apiValue2[i].level);
        
        };

        for(var i = 0; i < apiValue.length; i++){
            pokedexPoke1.push(apiValue[i].nationalPokedexNumbers[0]);
    
        };
    
        for(var i = 0; i < apiValue2.length; i++){
            pokedexPoke2.push(apiValue2[i].nationalPokedexNumbers[0]);
        
        };

        for(var i = 0; i < apiValue.length; i++){
            printedpoke1.push(apiValue[i].set.printedTotal);
    
        };
    
        for(var i = 0; i < apiValue2.length; i++){
            printedpoke2.push(apiValue2[i].set.printedTotal);
        
        };


    const chartData = {
            labels:['HP', 'Level', 'national Pokedex Numbers', 'Weaknesses','Printed'],
            datasets: [{
                label: 'Pokemon 1',
                data: [HPpoke1[0], lvlpoke1[0], pokedexPoke1[0], 15, printedpoke1[0]],
                fill: true,
                backgroundColor: 'rgba(179, 0, 0,0.6)',
                borderColor:'rgba(179, 0, 0,0.6)',
                pointBackgroundColor: 'rgba(179, 0, 0)',
              }, {
                label: 'Pokemon 2',
                data: [HPpoke2[0], lvlpoke2[0], pokedexPoke2[0], 15, printedpoke2[0]],
                fill: true,
                backgroundColor: 'rgba(150, 100, 235, 0.6)',
                borderColor: 'rgb(150, 100, 235)',
                pointBackgroundColor: 'rgb(150, 100, 235)',
                pointHoverBorderColor: 'rgb(54, 100, 235)'
              }]
    }


        return(
            <div className='containerChart'><h1 style={{textAlign:'center', marginTop:'-15px'}}>ALL Stats</h1><br></br>
            <h1 style={{textAlign:'center', marginTop:'-35px',fontSize:'16px', fontWeight:'200'}}>-Compare Pokemon Level-</h1>
        <div style={{height:'250px', width:'250px', float:'left', marginLeft:'125px'}}  className='Prices'>
           <Radar data={chartData}  options={{
               responsive:true,
           }}/>
        </div>
        </div>
    );
}

export default RadarChart;




