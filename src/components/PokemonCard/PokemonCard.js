import {Link} from 'react-router-dom'
import {PokemonContainer, Name, Type} from './Style.js';

function PokemonCard({name, id, image, type, pokemon}) {

    return (
      <PokemonContainer>
        <p>#0{id}</p>
        <Name>{name}</Name>
        <img src={image} alt={name}/>
        <Type>Type: {type}</Type>
        <Link to={`/pokemon/${id}`} pokemon={pokemon}>Ver detalhes</Link>
      </PokemonContainer>
    );
  }
  
  export default PokemonCard;
  
