import { PokemonListContainer, Title, MainContainer } from './Style';
import { useEffect }  from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setPokemonsList } from '../../redux/actions/pokemonActions';

function PokemonList() {
  // const [loading, setLoading] = useState(true)

  const pokemons = useSelector((state) => state.getPokemonsList.pokemons);
  const dispatch = useDispatch();

    const fetchPokemonData = async (id) => {
      const response = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      return response;
    };

  useEffect(() => {
    const getListOfPokemons = async () => {
      let pokemonArray = [];
      for(let i = 1; i <= 150; i ++){
          pokemonArray.push(await fetchPokemonData(i));
      }
      console.log(pokemonArray);
      dispatch(setPokemonsList(pokemonArray));
  };
  getListOfPokemons();
  }, [dispatch]);
  
  console.log(pokemons)
    return (
      <MainContainer>
        <Title>Pokédex</Title>
        <PokemonListContainer>
          {pokemons.map(pokemon => 
              <PokemonCard
              name={pokemon.data.name}
              key={pokemon.data.name}
              id={pokemon.data.id}
              image={pokemon.data.sprites.other.dream_world.front_default}
              type={pokemon.data.types[0].type.name}
              pokemon={pokemon}
              />
          )}
        </PokemonListContainer>
      </MainContainer>
    );
  }
  
  export default PokemonList;