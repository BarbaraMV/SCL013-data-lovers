import pokemon from "./data/pokemon/pokemon.js";
console.log(pokemon);
import {filterByType} from "./data.js";
//import {filterNumber} from "./data.js";
//import {filterName} from "./data.js";
//import {filterWeaknesses} from "./data.js";


//import pokemon from './data.js';
//import {} from './data.js';

const pokeDatos = pokemon.pokemon;
let arrData = Object.values(pokeDatos) // devuelve un array con los valores correspondientes de un objeto en el orden en el que estan
const pokemonesChart = document.getElementById("pokemonList");
for(let i=0; i<arrData.length; i++){
  pokemonesChart.innerHTML+= `<div class="root">
    <h3>#${arrData[i].num}</h3>
    <br>
    <h4>${arrData[i].name}</h4>
    <br>
    <img src="${arrData[i].img}" alt="" class="imgPoke">
    <br>
    <h4 class=typePokemon>${arrData[i].type}</h4>
    <br>
    <p>Debilidad: ${arrData[i].weaknesses}</p>
    <br>
    <p>Clima: ${arrData[i].weather}</p>
    <br>
    <p>Caramelos para evolucionar: ${arrData[i].candy_count}</p>
  </div>`;
}


const type = pokeDatos;
const selectType = document.querySelector("[name='selectbytypes']");


function pokemonFilter (type) {
    selectType.addEventListener ("change", () => {
    //alert("Butterfree");
       // let pokeType = selectType.value;
 
        //console.log(pokeType);
        if (selectType.value === "ShowAll") {
           // pokemonFilter(type);
            printPokemon ();
            //console.log("hola");
        }else {
  
            console.log("tipo boton",selectType.value);
            let typeResult = filterByType (type, selectType.value);
            let arrData2 = Object.values(typeResult); // devuelve un array con los valores correspondientes de un objeto en el orden en el que estan

           // pokemonFilter(typeResult);
           const pokemonesChart = document.getElementById("pokemonList");
            pokemonesChart.innerHTML= "";
            for(let i=0; i<arrData2.length; i++){
                console.log(pokemonesChart);
                pokemonesChart.innerHTML+= `<div class="root">
                  <h3>#${arrData2[i].num} </h3>
                  <h4>${arrData2[i].name} </h4>
                  <img src="${arrData2[i].img}" alt="" class="imgPoke">
                  <br>
                  <h4>${arrData2[i].type} </h4>
                  <p>Debilidad: ${arrData2[i].weaknesses} </p>
                  <p> Clima: ${arrData2[i].weather} </p>
                  <p>Caramelos para evolucionar: ${arrData2[i].candy_count} </p>
                </div>`;
              }
            console.log("aloha");
            //console.log(arrData2);
        
        }
    });
}
    pokemonFilter(type);

function printPokemon () {
    console.log("imprimiendo");
    for(let i=0; i<arrData.length; i++){
      const pokeDatos = pokemon.pokemon;
      let arrData = Object.values(pokeDatos);
        //let typeResult = filterByType (pokeDatos, type);
           // pokemonFilter(typeResult);
        pokemonesChart.innerHTML+= `<div class="root">
        
          <h3>#${arrData[i].num} </h3>
          <h4>${arrData[i].name} </h4>
          <img src="${arrData[i].img}" alt="" class="imgPoke">
          <br>
          <h4>${arrData[i].type} </h4>
          <p>Debilidad: ${arrData[i].weaknesses} </p>
          <p> Clima: ${arrData[i].weather} </p>
          <p>Caramelos para evolucionar: ${arrData[i].candy_count} </p>
        </div>`;
      }
      

}




////////FUNCION TRADUCCION ///////////


/*const bug = document.getElementById("Bug-btn");
const dark = document.getElementById("Dark-btn");
const dragon = document.getElementById("Dragon-btn");
const electric = document.getElementById("Electric-btn");
const fairy = document.getElementById("Fairy-btn");
const fighting = document.getElementById("Fighting-btn");
const fire = document.getElementById("Fire-btn");
const flying = document.getElementById("Flying-btn");
const ghost = document.getElementById("Grass-btn");
const ground = document.getElementById("Ground-btn");
const Ice = document.getElementById("Ice-btn");
const normal = document.getElementById("Normal-btn");
const poison = document.getElementById("Poison-btn");
const psychic = document.getElementById("Psyichic-btn");
const rock = document.getElementById("Rock-btn");
const steel = document.getElementById("Steel-btn");
const water = document.getElementById("Water-btn");
*/