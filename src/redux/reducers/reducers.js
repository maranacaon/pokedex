import * as actionTypes from '../constants/pokemonConstants';

export const getPokemonsListReducer = (state = { pokemons:[] }, action) => {
    switch (action.type) {
        case actionTypes.GET_POKEMONS_REQUEST:
            return {
                loading: true,
                pokemons: [],
            }
        case actionTypes.GET_POKEMONS_SUCCESS:
            return {
                loading: false,
                pokemons: action.payload,
            }
        case actionTypes.GET_POKEMONS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export const getPokemonDetailsReducer = (state = { pokemon: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_POKEMON_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_POKEMON_DETAILS_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
            }
        case actionTypes.GET_POKEMON_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case actionTypes.GET_POKEMON_DETAILS_RESET:
            return {
                pokemon: {}
            }
        default:
            return state;
    }
}