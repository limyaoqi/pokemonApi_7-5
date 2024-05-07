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
    <div
      className="pokemon-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
      }}
    >
      {/* INSTRUCTION: if pokemons data is available, display the pokemons in a 3-columns grid. if not, display a "No pokemons found." message */}
      {pokemons.map((pokemon,index) => (
        <div  key={index} style={{ backgroundColor: "#e4e4e4", padding: "10px" }}>
          <h3>{pokemon.name}</h3>
          <p>type: {pokemon.type}</p>
          <p>level: {pokemon.level}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonGrid;
