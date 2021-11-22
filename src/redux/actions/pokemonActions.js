import * as actionTypes from '../constants/pokemonConstants';
import axios from 'axios';

export const getPokemonsList = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_POKEMONS_REQUEST
        })

        // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        // let pokemons = [];

        // for(let i = 1; i <= 150; i ++){
        //     pokemons.push(res);
        // }
        // console.log(res);

        // dispatch({
        //     type: actionTypes.GET_POKEMONS_SUCCESS,
        //     payload: {
        //         pokemons: res.data.results,
        //     },
        // })
        
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon");

        dispatch({
            type: actionTypes.GET_POKEMONS_SUCCESS,
            payload: res.data.results,
        })
        console.log(res.data.results)
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POKEMONS_FAIL,
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message 
                    : error.message,
        })
    }
};

export const getPokemonDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_POKEMON_DETAILS_REQUEST
        })

        const res = await axios.get(`"https://pokeapi.co/api/v2/pokemon"/${id}`);

        dispatch({
            type: actionTypes.GET_POKEMON_DETAILS_SUCCESS,
            payload: {
                name: res.data.name,
                image: res.data.sprites.front_default,
                id: res.data.id,
                type: res.data.types[0].type.name,
            },
        })
        console.log(res.data.name)
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POKEMON_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message
        })
    }
}
