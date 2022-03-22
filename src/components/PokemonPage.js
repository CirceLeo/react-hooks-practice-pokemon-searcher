import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])
  const [search, setSearch] = useState('')

  const filteredArray = pokemonArray.filter(pokemon => {
    return (pokemon.name.toLowerCase().includes(search.toLowerCase()))
  })

  function addNewPokemon(pokeObj){
    fetch(`http://localhost:3001/pokemon`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(
          pokeObj
        )
    })
    .then( res => res.json())
    .then( data => setPokemonArray([...pokemonArray, data]))
    .catch( error => console.log(error.message));
  }

  // function updateSearch(){
  //   setSearch()
  // }

  useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then(resp => resp.json())
  .then(pokemon => setPokemonArray(pokemon))
  }, [])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection search={search} pokemonArray={filteredArray}/>
    </Container>
  );
}

export default PokemonPage;
