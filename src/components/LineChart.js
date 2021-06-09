import React, {useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';


const LineChart = () =>{

    const [apiValue, setApiValue] = useState([]);

    useEffect(() =>{
        async function loadData(){
            const response = await fetch("https://api.pokemontcg.io/v2/cards?q=name:ditto");
            const data = await response.json();
            const item = data.data;
           setApiValue(item);  
        }
        loadData();
        }, []);

        console.log(apiValue);
            var Cardpoke1 = [];
            var undefined = [];

    
        for(var i = 0; i < apiValue.length; i++){
            if(typeof(apiValue[i].tcgplayer.prices.holofoil) === 'undefined'){
            undefined.push(apiValue[i].tcgplayer.prices.holofoil);
            }else if(typeof(apiValue[i].tcgplayer.prices.holofoil) != 'undefined'){
            Cardpoke1.push(apiValue[i].tcgplayer.prices.holofoil);
            }
        };

        console.log(Cardpoke1);


        const chartData = {
            labels:['Low', 'Mid', 'High', 'Market'],
            datasets:[{
                label:'Holofoil Price',
                data:[50],
                fill: true,
                backgroundColor:['rgba(179, 0, 0,0.2)'],
                borderColor:['rgb(179, 0, 0)'],
                borderWidth: 2, 
                tension: 0.1
            },{
                
                label:'new card',
                data:[Cardpoke1],
                fill: true,
                backgroundColor:['rgba(199, 50, 150,0.2)'],
                borderColor:['rgb(199, 50, 150)'],
                borderWidth: 2, 
                tension: 0.1
            }]
    };
    
    return(
            <div className='containerChart'><h1 style={{textAlign:'center', marginTop:'-15px'}}>Card Prices</h1><br></br>
            <h1 style={{textAlign:'center', marginTop:'-35px',fontSize:'16px', fontWeight:'200'}}>-Compare Pokemon Level-</h1>
        <div style={{height:'500px', width:'500px', float:'left'}}  className='Prices'>
           <Line data={chartData}  options={{
               responsive:true,
           }}/>
        </div>
        </div>
    );
}

export default LineChart;


