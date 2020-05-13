import pokemon from "./data.js";
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
    <img src="${arrData[i].img}" alt="" class="imgPoke">
    <h4>${arrData[i].name}</h4>
    <h4>Tipo: ${arrData[i].type}</h4>
    <p>Debilidad: ${arrData[i].weaknesses}</p>
  </div>`;
}


//funcion que llama a los tipos de pokemon 
/*usar evento para select 
const tipos= document.getElementById("Types-btn");
tipos.addEventListener ("click", () =>{
    tipos ();
});

const Bug = document.getElementById("Bug");
Bug.addEventListener("click", () => {
    let BugType = tipos(typeData, "Bug");
    return showPokemonType(BugType);
});

const Dark = document.getElementById("Dark");
Dark.addEventListener("click", () => {
    let DarkType = filterByType(typeData, "Dark");
    return showPokemonType(DarkType);
});

const Dragon = document.getElementById("Dragon");
Dragon.addEventListener("click", () => {
    let DragonType = filterByType(typeData, "Dragon");
    return showPokemonType(DragonType);
});

const Electric = document.getElementById("Electric");
Electric.addEventListener("click", () => {
    let ElectricType = filterByType(typeData, "Electric");
    return showPokemonType(ElectricType);
});

const Fairy = document.getElementById("Fairy");
Fairy.addEventListener("click", () => {
    let FairyType = filterByType(typeData, "Fairy");
    return showPokemonType(FairyType);
});

const Fighting = document.getElementById("Fighting");
Fighting.addEventListener ("click", () => {
    let FightingType = filterByType(typeData, "Fighting");
    return showPokemonType(FightingType);
});

const Fire = document.getElementById("Fire");
Fire.addEventListener ("click", () => {
    let FireType = filterByType(typeData, "Fire");
    return showPokemonType(FireType);
});

const Flying = document.getElementById("Flying");
Flying.addEventListener ("click", () => {
    let Flyingtype = filterBytype(FlyingData, "Flying");
    return showPokemonType(FlyingType);
});

const Ghost = document.getElementById("Ghost");
Ghost.addEventListener ("click", () => {
    let GostType = filterByType(ghostData, "Ghost");
    return showPokemonType(GhostType);
});

const Ground = document.getElementById("Ground");
Ground.addEventListener = ("click", () => {
    let GroundType = filterByType(GroundData, "Ground");
    return showPokemonType(GroundType);
});

const Ice = document.getElementById("Ice");
Ice.addEventListener = ("click", () => {
    let IceType = filterByType(IceData, "Ice");
    return showPokemonType(IceType);
});

const Normal = document.getElementById("Normal");
Normal.addEventListener = ("click", () => {
    let NormalType = filterByType(NormalData, "Normal");
    return showPokemonType(NormalType);
});

const Poison = document.getElementById("Poison");
Poison.addEventListener = ("click", () => {
    let PoisonType = filterByType(PoisonData, "Poison");
    return showPokemonType(PoisonType);
});

const Psychic = document.getElementById("Psychic");
Psychic.addEventListener = ("click", () => {
    let psychicType = filterByType(PsychicData, "Psychic");
    return showPokemonType(PsychicType);
});

const Rock = document.getElementById("Rock");
Rock.addEventListener = ("click", () => {
    let RockType = filterByType(RockData, "Rock");
    return showPokemonType(RockType);
});

const Steel = document.getElementById("Steel");
Steel.addEventListener = ("click", () => {
    let SteelType = filterByType(SteelData, "Steel");
    return showPokemonType(SteelType);
});

const Water = document.getElementById("Water");
Water.addEventListener = ("click", () => {
    let WaterType = filterByType(WaterData, "Water");
    return showPokemontype(WaterType);
});*/

//funcion que traduce datos

/*function traslation (word){
    if(word == "Normal"){
        return "Normal";
    }else if(word == "Water"){
        return "Agua";
    }else if(word == "Ground"){
        return "Tierra";
    }else if(word == "Fire"){
        return "Fuego";
    }else if(word =="Flying"){
        return "Volador";
    }else if(word == "Bug"){
        return "Bicho";
    }else if(word == "Ghost"){
        return "Fantasma";
    }else if(word == "Dark"){
        return "Siniestro";
    }else if(word == "Steel"){
        return "Acero";
    }else if(word == "Dragon"){
        return "Dragón";
    }else if(word == "Grass"){
        return "Planta";
    }else if(word == "Rock"){
        return "Roca";
    }else if(word == "Psychic"){
        return "Psíquico";
    }else if(word == "Fairy"){
        return "Hada";
    }else if(word == "Electric"){
        return "Eléctrico";
    }else if(word == "Fighting"){
        return "Lucha";
    }else if(word == "Poison"){
        return "Veneno";
    }else if(word == "Ice"){
        return "Hielo";
    }else{
        return "no registra";
    }

}*/
