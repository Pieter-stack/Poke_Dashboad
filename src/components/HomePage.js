import React, {useState,useEffect} from 'react';
import $ from 'jquery';
const HomePage = () =>{


    const [apiValue, setApiValue] = useState([]);
    const [apiValue2, setApiValue2] = useState([]);

    useEffect(() =>{
      
        async function loadData(){
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
            const data = await response.json();
            const item = data.results;
           setApiValue(item);
           console.log(item);
    
        }
    
        loadData();
    
        // async function loadData2(){
        //     for(var i=1; i< apiValue.length; i++){
        //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+ i);
        //     const data = await response.json();
        //     const item2 = data;
        //    setApiValue2(item2); 
        //     }
        // }
    
        // loadData2();
        }, []);

        for(var i=0; i< apiValue.length; i++){
          var name =  apiValue[i].name;
        //   var url =  apiValue[i].url;
            console.log(name);
            // console.log(url);
            var img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ (i + 1) +".png"
            console.log(img)
           $(".container").append("<div className='card' style= 'height:300px; width:200px;float:left;background-color:rgb(255, 255, 255);margin-left:50px;margin-top:50px; border-radius: 25px;'><h1 className='Name' style= 'text-align:center; '>"+name+"</h1><img src='"+img+"' style= 'margin-left:25px;' alt='logo' width='150' height='200'></img></div>");
        }

console.log(apiValue2)






    return (
      <div className="HomePage">
<div id='container' className='container'></div>


      </div>
    );
  }

  
  export default HomePage;


