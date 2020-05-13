import pokemon from "./data/pokemon/pokemon.js";
console.log(pokemon);
import {filterByType} from "./data.js";
import {filterNumber} from "./data.js";
import {filterName} from "./data.js";
import {filterWeaknesses} from "./data.js";

const root = document.getElementById("root");
const homepageFragment = new DocumentFragment (); // aca va todo los elementos xd


const atrapalosYaBtn = document.createElement("button");
root.appendChild(atrapalosYaBtn);
atrapalosYaBtn.classList = "atrapalos-ya-button";
atrapalosYaBtn.textContent = "¡Atrápalos Ya!";
atrapalosYaBtn.addEventListener("click", () => {
    clearContent();//limpia la panalla de inicio
    console.log(pokemon);
});


homepageFragment.appendChild(welcomeBox);
homepageFragment.appendChild(titulo);
homepageFragment.appendChild(atrapalosYaBtn);
let clearInnerContent;

function createBasicStructure(){
    document.body.innerHTML=`

    <div id = "root"></=>
    <section id = "userGuide" class="dynamic-content">

    <h1 class="section-title></h1>
    <section class="inner-content">
    
    </section>
    
    </section>
    
    
    `;

//funcion que permite borrar el contenido dinamico que se coloca en el .-innercontent

clearInnerContent = function (){
    const innerContent = document.querySelector(".inner-content");
    while (innerContent.firstChild) {
        innerContent.removeChild(innerContent.firstChild);
    }
};

}


//3. Función para crear el menú con sus respectivas opciones

function userGuide() {
    document.getElementById("root").insertAdjacentHTML(
      "afterbegin",
      `
      <section id= "user-Guide">
        <form>
        <div id= "user-box" name= "Guia usuario">
          <p>Primeros pasos </p>
          <p>Para jugar a Pokémon GO, necesitas una cuenta de Google</p>
          <p>Nada más entrar en la aplicación por primera vez, tendremos que añadir una cuenta a la que se nos vinculará la partida, la cual podrá ser o bien la cuenta de Google o bien la del Club de Entrenadores Pokémon.
          
          Puedes elegir cualquiera, aunque te recomendamos usar la que ya tienes de Google en tu propio teléfono móvil para tener acceso directo a cualquier información que te pueda llegar. 
          
          Tras esto, conocerás al Profesor Willow, quien te explicará los fundamentos básicos de la aplicación, tras lo cual deberas diseñar a tu propio entrenador.
          
          Personaliza a tu entrenador Pokémon
          Podrás elegir, como ya es habitual en la saga, entre chico y chica, tras lo cual podrás diseñarlo a tu gusto, dándole color de pelo, ojos, ropa, mochila, entre otros parámetros a elegir entre varias opciones.
          
          De por sí no hay nada que podamos decir aquí, simplemente diséñalo a tu gusto.
          
          Una vez hecho esto y tras otra conversación, tocará a elegir a nuestro Pokémon inicial.
          
          Como ya ocurrió con los títulos originales, podrás elegir entre Bulbasaur, de tipo Planta/Veneno, Charmander de tipo Fuego y Squirtle, del tipo Agua, formando un triángulo de eficacia en el que cada uno es débil o fuerte frente a los otros dos. </p>
        
      </div>
      </form>
      </section>
  `
    );

    }
// funcion llamar los botones del  header


//botones bajo del banner
const btnHomePage= document.getElementById("homepage-btn");
const btnBasicGuide= document.getElementById("basicGuide-btn");
const btnPokedex= document.getElementById("pokedex-btn");

//Event listener
btnHomePage.addEventListener("click", homeFn);
btnBasicGuide.addEventListener("click", basicGuideFn);
btnPokedex.addEventListener("click", pokedexFn);

//*funciones
function homeFn() {
    location.reload(true);
    window.scrollTo(0, 0); //ir arriba de la pagina (banner)
}

function basicGuideFn (){


}



function pokedexFn () {


}



//funcion que llama a los tipos de pokemon 

const tipos= document.getElementById("types-btn");
tipos.addEventListener ("click", () =>{
    tipos ();
});

const Bug = document.getElementById("Bug");
Bug.addEventListener("click", () => {
    let BugType = filterByType(typeData, "Bug");
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
    let GhostType = filterByType(ghostData, "Ghost");
    return showPokemonType(GhostType);
});

const Ground = document.getElementById("Ground");
Ground.addEventListener ("click", () => {
    let GroundType = filterByType(GroundData, "Ground");
    return showPokemonType(GroundType);
});

const Ice = document.getElementById("Ice");
Ice.addEventListener ("click", () => {
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
});





/*
const inputSearch= document.getElementById("searchInput");
const btnSearchGo= document.getElementById("searchGo-btn");
const btnSearch= document.getElementById("search-btn");
const home= document.getElementById("home");
const userGuide= document.getElementById("userGuide");
const pokedex= document. getElementById("pokedex");

Event listener
btnHomePage.addEventListener("click", homeFn);
btnBasicGuide.addEventListener("click", basicGuideFn);
btnPokedex.addEventListener("click", pokedexFn);
btnTypes.addEventListener("click", distanceFn);
inputSearch.addEventListener("click", inputSearchFn);
btnSearchGo.addEventListener("click", searchGoFn);
btnSearch.addEventListener("click", searchFn);
home.addEventListener("click", homeFn);
userGuide.addEventListener("click", basicGuideFn);
pokedex.addEventListener("click", pokedexFn);*/
