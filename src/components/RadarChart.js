import React, {useState,useEffect} from 'react';
import {Radar} from 'react-chartjs-2';


const RadarChart = (props) =>{

    const [apiValue, setApiValue] = useState([]);
    const [apiValue2, setApiValue2] = useState([]);

    useEffect(() =>{
      
        async function loadData(){
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" +props.search1);
            const data = await response.json();
          //  const item = data;
           setApiValue([data.stats[3].base_stat,data.stats[4].base_stat,data.id,data.order,data.weight]);
           console.log(data);
    
        }
    
        loadData();
    
        async function loadData2(){
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + props.search2);
            const data2 = await response.json();
      //      const item2 = data;
           setApiValue2([data2.stats[3].base_stat,data2.stats[4].base_stat,data2.id,data2.order,data2.weight]); 
    
        }
    
        loadData2();
        }, [props]);

 

    const chartData = {
            labels:['Special Attack', 'Special Defence', 'ID', 'Order','Weight'],
            datasets: [{
                label: ""+props.search1 +"",
                 data: apiValue,
                fill: true,
                backgroundColor: 'rgba(179, 0, 0,0.6)',
                borderColor:'rgba(179, 0, 0,0.6)',
                pointBackgroundColor: 'rgba(179, 0, 0)',
              }, {
                label: ""+props.search2 +"",
                data: apiValue2,
                fill: true,
                backgroundColor: 'rgba(150, 100, 235, 0.6)',
                borderColor: 'rgb(150, 100, 235)',
                pointBackgroundColor: 'rgb(150, 100, 235)',
                pointHoverBorderColor: 'rgb(54, 100, 235)'
              }]
    }


        return(
            <div className='containerChart'><h1 style={{textAlign:'center', marginTop:'-15px'}}>ALL Stats</h1><br></br>
            <h1 style={{textAlign:'center', marginTop:'-35px',fontSize:'16px', fontWeight:'200'}}>-Compare Pokemon stats-</h1>
        <div style={{height:'250px', width:'250px', float:'left', marginLeft:'125px'}}  className='Prices'>
           <Radar data={chartData}  options={{
               responsive:true,
           }}/>
        </div>
        </div>
    );
}

export default RadarChart;




