import { PokemonListContainer, Title } from './Style';
import { useEffect}  from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsList as listPokemons } from '../../redux/actions/pokemonActions';

function PokemonList() {
  const dispatch = useDispatch();

  const getPokemons = useSelector((state) => state.getPokemonsList); 
  const { pokemons } = getPokemons;

  useEffect(() => {
      dispatch(listPokemons());
  }, [dispatch]);

    return (
      <>
        <Title>Pokedex</Title>
        <PokemonListContainer>
          {pokemons.map(pokemon => 
              <PokemonCard
              name={pokemon.name}
              key={pokemon.name}
              id={pokemon['url'].split('/')[6]}
              // image={pokemon.sprites.front_default}
              // id={pokemon.id}
              // type={pokemon.types[0].type.name}
              />
          )}
        </PokemonListContainer>
      </>
    );
  }
  
  export default PokemonList;