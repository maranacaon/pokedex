import * as actionTypes from '../constants/pokemonConstants';

export const setPokemonsList = (pokemons) => {
    return {
        type: actionTypes.SET_POKEMONS_LIST,
        payload: pokemons,
      };
    };

export const selectedPokemon = (product) => {
    return {
        type: actionTypes.SELECTED_POKEMON,
        payload: product,
    };
};


