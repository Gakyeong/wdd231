// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  document.querySelector('#output').innerHTML = pokemonTemplete(results);
  console.log("first: ", results);
}

function pokemonTemplete(pokemon){
    return `
        <section>
            <img src = "${pokemon.sprites.other.home.front_default}" alt= "image of ${pokemon.name}">
            <h2>${pokemon.name}</h2>
         </section>
    `
}

getPokemon(url);
console.log("second: ", results);

const urlList = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuffList (data){
  console.log(data);

  const listElement = document.querySelector("#outputList");
  const html = data.map(PokemonListTemplete).join("");
  
  listElement.innerHTML = html;

}
function PokemonListTemplete(pokemon){
  return`
    <ul id="outputList">
      <li>${pokemon.name}</li>
    </ul>
  `
}
getPokemonList(urlList);