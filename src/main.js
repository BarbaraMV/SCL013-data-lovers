import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//botones bajo del banner
const btnHomePage= document.getElementById('homepage-btn');
const btnBasicGuide= document.getElementById('basicGuide-btn');
const btnPokedex= document.getElementById('pokedex-btn');
const btnMoves= document.getElementById('moves-btn');
const btnDistance= document.getElementById('distanceWalk-btn');
const inputSearch= document.getElementById('searchInput');
const btnSearchGo= document.getElementById('searchGo-btn');
const btnSearch= document.getElementById('search-btn');
const home= document.getElementById('home');
const userGuide= document.getElementById('userGuide');
const pokedex= document. getElementById('pokedex');

//Event listener
btnHomePage.addEventListener('click', homeFn);
btnBasicGuide.addEventListener('click', basicGuideFn);
btnPokedex.addEventListener('click', pokedexFn);
btnMoves.addEventListener('click', movesFn);
btnDistance.addEventListener('click', distanceFn);
inputSearch.addEventListener('click', inputSearchFn);
btnSearchGo.addEventListener('click', searchGoFn);
btnSearch.addEventListener('click', searchFn);
home.addEventListener('click', homeFn);
userGuide.addEventListen('click', basicGuideFn);
pokedex.addEventListener('click', pokedexFn);



//funciones
function homeFn() {
    location.reload(true);
    window.scrollTo(0, 0); //ir arriba de la pagina (banner)
}

function basicGuideFn (event) {
home.setAttribute("class", "hidden");
userGuide.removeAttribute('class', 'hicden');
pokedex.removeAttribute('class','hidden');

}


function pokedexFn () {

}

function movesFn () {

}

function distanceFn () {

}



console.log(example, data);
