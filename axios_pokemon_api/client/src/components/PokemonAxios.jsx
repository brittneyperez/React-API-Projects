import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PokemonAxios = () => {
    
    const [ allPokemon, setAllPokemon ] = useState([]);
    
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                console.log(res.data);
                setAllPokemon(res.data.results);
            })
            .catch(err => console.log(err))
    }, []);
    
    return (
        <div>
            <h3>Practice: Pokémon API</h3>
            <hr style={{width:'450px'}} />
            {allPokemon.map(pokemon => (
                <div key={pokemon.name}>
                    <h4>
                        {`#${pokemon.url.split('/')[6]} ${pokemon.name}`}
                    </h4>
                    <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                        alt={pokemon.name}
                    />
                </div>
            ))}
        </div>
    )
}

export default PokemonAxios