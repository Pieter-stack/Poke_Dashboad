import React, {useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';


const BarChart = () =>{

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

    var lvlpoke1 = [];
    var lvlpoke2 = [];

    for(var i = 0; i < apiValue.length; i++){
        lvlpoke1.push(apiValue[i].level);

    };

    for(var i = 0; i < apiValue2.length; i++){
        lvlpoke2.push(apiValue2[i].level);
    
        };
    

    const chartData = {
        labels: ["lvl Pokemon 1","lvl Pokemon 2"],
        datasets:[{
            axis: 'y',
            label:'Level',
            data:[lvlpoke1[0],lvlpoke2[0]],
           
            backgroundColor:[
                'rgba(179, 0, 0,0.6)',
                'rgba(199, 50, 150,0.6)',
            ],
            options: {
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true
                    }
                }
            },
            borderWidth: 2
        }]
    };

        return(
            <div className='containerChart'><h1 style={{textAlign:'center', marginTop:'-15px'}}>Levels Comparison</h1><br></br>
            <h1 style={{textAlign:'center', marginTop:'-35px',fontSize:'16px', fontWeight:'200'}}>-Compare Pokemon Level-</h1>
        <div style={{height:'500px', width:'500px', float:'left'}}  className='Prices'>
           <Bar data={chartData}  options={{
               responsive:true,
               indexAxis: 'y',
               legend:{display:false}
           }}/>
        </div>
        </div>
    );
}

export default BarChart;
