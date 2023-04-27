import React, { useEffect, useState } from 'react'

const PokemonFetch = () => {
    
    const [ allPokemon, setAllPokemon ] = useState([]);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => res.json())
            .then(data => setAllPokemon(data.results))
        .catch(err => console.log(err));
    }, []);
    
    return (
        <div>
            <h3>Practice: Pokémon API</h3>
            {allPokemon.map((poke, i) => {
                return (
                    <div key={i}>
                        <h4>{ poke.name }</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default PokemonFetch