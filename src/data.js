//import pokemon from "./data/pokemon/pokemon.js";

export const filterByType = (pokeDatos, type) => {
  const newDataArray = []; //declara variable con array
  for (let i = 0; i < pokeDatos.length; i += 1) { //loop que va recorriendo la data
    newDataArray.push(pokeDatos[i]);
    
  }
  return newDataArray.filter(pokemon => pokemon.type.includes(type))
};


  
//FILTRAR POKEMON POR TIPO
/*export const filterPokeType = (pokedata, tipo) => {//se declara constante con función de filtrar por tipo
  const newDataArray = [];//  declara variable que contiene array         
  for (let i = 0; i < pokedata.length; i += 1) {//bucle que recorre la data
    newDataArray.push(pokedata[i]);//se sube nuevo array de data tomando el index(posición) de pokedata
  }
  return newDataArray.filter(poke => poke.type.includes(tipo));//retorna el nuevo array de data filtrado ??
};*/

/*función de filtrado
export const filtered = (POKEMON,filterByType) => {
  const result = POKEMON.filter((element) => {
    return element.type.includes(filterByType);
  });
  return result;
};

// función de ordenar A-Z
export const ascendingOrder = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
 };

// Función buscar por nombre de pokémon
export const nameSearch = (POKEMON,finalName) => {
  const searched = POKEMON.filter((element) => {
    return element.name.includes(finalName);
  });
  return searched;
};

computeStats:(data) =>{
  let resultFilter=new Array;
  
  resultFilter.push(["Bug",(data.filter((pokemon)=>{
    return pokemon.type.includes("Bug")})).length]);

  resultFilter.push(["Dark",(data.filter((pokemon)=>{
    return pokemon.type.includes("Dark")})).length]);

  resultFilter.push(["Dragon",(data.filter((pokemon)=>{
    return pokemon.type.includes("Dragon")})).length]);

  resultFilter.push(["Electric",(data.filter((pokemon)=>{
    return pokemon.type.includes("Electric")})).length]);

  resultFilter.push(["Fairy",(data.filter((pokemon)=>{
    return pokemon.type.includes("Fairy")})).length]);

  resultFilter.push(["Fighting",(data.filter((pokemon)=>{
    return pokemon.type.includes("Figting")})).length]);

  resultFilter.push(["Fire",(data.filter((pokemon)=>{
    return pokemon.type.includes("Fire")})).length]);

  resultFilter.push(["Flying",(data.filter((pokemon)=>{
    return pokemon.type.includes("Flying")})).length]);

  resultFilter.push(["Ghost",(data.filter((pokemon)=>{
    return pokemon.type.includes("Ghost")})).length]);

  resultFilter.push(["Grass",(data.filter((pokemon)=>{
    return pokemon.type.includes("Grass")})).length]);

  resultFilter.push(["Ground",(data.filter((pokemon)=>{
    return pokemon.type.includes("Ground")})).length]);

  resultFilter.push(["Ice",(data.filter((pokemon)=>{
    return pokemon.type.includes("Ice")})).length]);

  resultFilter.push(["Normal",(data.filter((pokemon)=>{
    return pokemon.type.includes("Normal")})).length]);

  resultFilter.push(["Poison",(data.filter((pokemon)=>{
    return pokemon.type.includes("Poison")})).length]);

  resultFilter.push(["Psychic",(data.filter((pokemon)=>{
    return pokemon.type.includes("Psychic")})).length]);

  resultFilter.push(["Rock",(data.filter((pokemon)=>{
    return pokemon.type.includes("Rock")})).length]);

  resultFilter.push(["Steel",(data.filter((pokemon)=>{
    return pokemon.type.includes("Steel")})).length]);

  resultFilter.push(["Water",(data.filter((pokemon)=>{
    return pokemon.type.includes("Water")})).length]);
     
  return resultFilter;
}
*/
//export default pokemon;