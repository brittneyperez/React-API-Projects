## Prac Asgmt: **Axios Pokémon API**

**Synopsis**: Based on previous API project, `axios` and the `useEffect` hook will be used to display the names of all 807 Pokemon using the Axios and Pokemon API (link: https://pokeapi.co/).

## Code Notes
In the `PokemonAxios.jsx`, rendering the number and sprite for each pokemon was attempted.

### Retrieving the Number
To retrieve each Pokemon's number, the following property on `line 24` is used:

```js
pokemon.url.split('/')[6]
```

Since **`url`** property that is mapped through is a a `dataType: string`, the number's source will be formatted as such within an element's tag:

```js
{`#${pokemon.url.split('/')[6]}`}
```

### Retrieving the Sprite
To retrieve each Pokemon's sprite, their number is needed. As an image element is normally called, an `<img>` tag is called and will use the Pokémon's Sprites from the PokéAPI's GitHub (link: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon).

And using the same method to render a Pokémon's number, we can retrieve their associated name and number, as well as set the `alt` attribute set to the Pokemon's name (see `line 27`):

```js
<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
```