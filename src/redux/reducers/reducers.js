import * as actionTypes from "../constants/pokemonConstants";
const intialState = {
  pokemons: [],
};

export const getPokemonsListReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_POKEMONS_LIST:
      return { ...state, pokemons: payload };
    default:
      return state;
  }
};

export const getSelectedPokemonReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case actionTypes.SELECTED_POKEMON:
        return { ...state, ...payload };
      default:
        return state;
    }
  };
