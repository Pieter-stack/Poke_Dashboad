import BarChart from './BarChart';
import CustomChart from './CustomChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import PokeCon from './PokeCon';
import PokeCon2 from './PokeCon2';
import RadarChart from './RadarChart';
import React, {useState,useEffect} from 'react';
import $ from 'jquery';

function Compare() {

  var [search, setSearch] = useState("ditto");
  var [search2, setSearch2] = useState("pikachu");

  const [apiValue, setApiValue] = useState([]);
  const [apiValue2, setApiValue2] = useState([]);
      useEffect(() =>{
          async function loadData(){
              const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + search);
              const data = await response.json();
              const item = data;
             setApiValue(item);  
          }
      
          loadData();

          async function loadData2(){
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + search2);
            const data = await response.json();
            const item = data;
           setApiValue2(item);  
        }
    
        loadData2();
  
          }, [search,search2]);
          var id = apiValue.id;
          $(".Pokeimg").html("<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png' style= 'margin-top:-50px;' alt='logo' width='300' height='500'></img>");

          var id2 = apiValue2.id;
          $(".Pokeimg2").html("<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id2 +".png' style= 'margin-top:-50px;'  alt='logo' width='300' height='500'></img>");
          console.log(id2)

  function Search(){
    var  s = document.getElementById("search").value;
      console.log(s);
      setSearch(s);
  }

  function Search2(){
    var  se = document.getElementById("search2").value;
      console.log(se);
      setSearch2(se);
  }



    return (
      <div className="Compare">
        <input type='text' className='searchbar' id='search'></input>
         <div className='searchbtn' onClick= {Search} >Search</div>
         <div className='Pokeimg'></div>
          <PokeCon/>
          <input type='text' className='searchbar2'  id='search2'></input>
            <div className='searchbtn2' onClick= {Search2}>Search</div>
            <div className='Pokeimg2'></div>
          <PokeCon2/>
          <LineChart search1 = {search} search2={search2}/>
          <BarChart search1 = {search} search2={search2}/>
          <PieChart search1 = {search} search2={search2}/>
          <RadarChart search1 = {search} search2={search2}/>
          <CustomChart/>

      </div>
    );
  }
  
  export default Compare;
  