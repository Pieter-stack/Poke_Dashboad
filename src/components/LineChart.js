import React, {useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';




const LineChart = (props) =>{

    const [apiValue, setApiValue] = useState([]);
    const [apiValue2, setApiValue2] = useState([]);

    useEffect(() =>{
      
    async function loadData(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" +props.search1);
        const data = await response.json();
      //  const item = data;
       setApiValue([data.stats[0].base_stat,data.stats[1].base_stat,data.stats[2].base_stat,data.stats[5].base_stat]);
       console.log(data);

    }

    loadData();

    async function loadData2(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + props.search2);
        const data2 = await response.json();
  //      const item2 = data;
       setApiValue2([data2.stats[0].base_stat,data2.stats[1].base_stat,data2.stats[2].base_stat,data2.stats[5].base_stat]); 

    }

    loadData2();
    }, [props]);

    //  var hppoke1 = [];
    // hppoke1.push(apiValue.base_experience);
    // console.log(hppoke1);


   // apiValue.stats[0].base_stat,apiValue.stats[1].base_stat,apiValue.stats[2].base_stat,apiValue.stats[5].base_stat
    
        const chartData = {
            labels:['HP', 'Attack', 'Defence', 'Speed'],
            datasets:[{
                label:""+props.search1 +"",
                data:apiValue,
                fill: true,
                backgroundColor:['rgba(179, 0, 0,0.2)'],
                borderColor:['rgb(179, 0, 0)'],
                borderWidth: 2, 
                tension: 0.1
            },{
                
                label:""+props.search2+"",
               data:apiValue2,
                fill: true,
                backgroundColor:['rgba(199, 50, 150,0.2)'],
                borderColor:['rgb(199, 50, 150)'],
                borderWidth: 2, 
                tension: 0.1
            }]
    };
    
    return(
            <div className='containerChart'><h1 style={{textAlign:'center', marginTop:'-15px'}}>Stats</h1><br></br>
            <h1 style={{textAlign:'center', marginTop:'-35px',fontSize:'16px', fontWeight:'200'}}>-Compare Pokemon Stats-</h1>
        <div style={{height:'500px', width:'500px', float:'left'}}  className='Prices'>
           <Line data={chartData}  options={{
               responsive:true,
           }}/>
        </div>
        </div>
    );
}

export default LineChart;


