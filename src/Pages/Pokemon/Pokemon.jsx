import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Pokemon() {
  const { pokemonId } = useParams()
  const [pokemon, setPokemon] = useState({
    stats: {},
    apiTypes: []
  })
  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId)
      .then(res => res.json())
      .then(data => setPokemon(data))

  }, [])

  return (
    <div className="App">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>Stats</h2>
      <ul>
        <li>Points de vie : {pokemon.stats.HP}</li>
        <li>Attaque : {pokemon.stats.attack}</li>
        <li>Défense : {pokemon.stats.defense}</li>
        <li>Vitesse : {pokemon.stats.speed}</li>
      </ul>
      {pokemon.apiTypes.map((type) => (
        <img key={type.name} src={type.image} alt={type.name} />
      ))}
      <h3>Géneration numéro : {pokemon.apiGeneration}</h3>
    </div>
  );
}

export default Pokemon;
