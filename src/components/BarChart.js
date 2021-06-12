import React, {useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';





const BarChart = (props) =>{

    const [apiValue, setApiValue] = useState([]);
    const [apiValue2, setApiValue2] = useState([]);


    useEffect(() =>{
 

    async function loadData(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"  +props.search1);
        const data = await response.json();
        const item = data;
       setApiValue(item);
       console.log(item);

    }

    loadData();

    async function loadData2(){
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/"  +props.search2);
        const data = await response.json();
        const item2 = data;
       setApiValue2(item2); 

    }

    loadData2();
    }, [props]);

    var experiencepoke1 = [];
    var experiencepoke2 = [];
    experiencepoke1.push(apiValue.base_experience);
    experiencepoke2.push(apiValue2.base_experience);
    console.log(experiencepoke1);
    console.log(experiencepoke2);

    

    const chartData = {
        labels: [""+props.search1 +"",""+props.search2 +""],
        datasets:[{
            axis: 'y',
            label:'Experience',
            data:[experiencepoke1,experiencepoke2],
           
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
            <div className='containerChart'><h1 style={{textAlign:'center', marginTop:'-15px'}}>Experience Comparison</h1><br></br>
            <h1 style={{textAlign:'center', marginTop:'-35px',fontSize:'16px', fontWeight:'200'}}>-Compare Pokemon experience-</h1>
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
