import { useEffect}  from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {PokemonContainer, Name, Type} from './Style.js';
import { getPokemonDetails } from '../../redux/actions/pokemonActions';

function PokemonCard({name, id}) {
  const dispatch = useDispatch();
  const getDetails = useSelector((state) => state.getPokemonDetails);
  const { image, type } = getDetails;
  const style = type;

  useEffect(() => {
    dispatch(getPokemonDetails(id));
  }, [dispatch, id]);

    return (
      <PokemonContainer style={style}>
        <p>#0{id}</p>
        <Name>{name}</Name>
        <img src={image} alt={name}/>
        <Type>Type: {type}</Type>
        <Link to={`/pokemon/${id}`} pokemon={id}>Ver detalhes</Link>
      </PokemonContainer>
    );
  }
  
  export default PokemonCard;
  
