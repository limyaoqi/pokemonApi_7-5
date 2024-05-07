import React from "react";

function PokemonGrid(props) {
  const { pokemons, isLoading, isError } = props;
  /* INSTRUCTION: add a loading message when isLoading is true */
  if (isLoading) {
    return <h2>isLoading...</h2>;
  }

  /* INSTRUCTION: add an error message when isError is true */
  if (isError) {
    return <h2>No pokemons found.</h2>;
  }
  return (
    <div className="pokemon-grid">
      {/* INSTRUCTION: if pokemons data is available, display the pokemons in a 3-columns grid. if not, display a "No pokemons found." message */}
      {pokemons&&pokemons.length>0?pokemons.map((pokemon, index) => (
        <div
          key={index}
          className="pokemon-card"
        >
          <h3>{pokemon.name}</h3>
          <p>type: {pokemon.type}</p>
          <p>level: {pokemon.level}</p>
        </div>
      )):<h3>No pokemons found</h3>}
      
    </div>
  );
}

export default PokemonGrid;
