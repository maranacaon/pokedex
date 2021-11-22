import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getPokemonsListReducer, getPokemonDetailsReducer } from '../reducers/reducers';

const rootReducer = combineReducers({
    getPokemonsList: getPokemonsListReducer,
    getPokemonDetails: getPokemonDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
