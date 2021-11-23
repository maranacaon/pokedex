// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPokemonDetails } from "../../redux/actions/pokemonActions";
// import StatsChart from '../../components/StatsChart/StatsChart';
import { MainContainer, PokemonContainer, LeftContainer, RightContainer,
StatsChartContainer, Infos } from './Style';
import StatsChart from '../../components/StatsChart/StatsChart';
import {Link} from 'react-router-dom';

function PokemonDetails({ match }) {
  // const dispatch = useDispatch();

  //   const pokemonDetails = useSelector((state) => state.getPokemonDetails);
  //   const {loading, error, pokemon} = pokemonDetails;

  //   useEffect(() => {
  //       if(pokemon && match.params.id !== pokemon.id) {
  //           dispatch(getPokemonDetails(match.params.id))
  //       }
  //   }, [dispatch, pokemon, match])

    return (
      <>
      <MainContainer>
        <PokemonContainer>
          <LeftContainer>
            <h3>#025 Pikachu</h3>
            <img src={"https://i.pinimg.com/originals/16/cf/fe/16cffe515e1de2eb8b40c6a3e2cd069f.png"} alt={"pokemon.name"} />
          </LeftContainer>
          <RightContainer>
            <StatsChartContainer>
              <StatsChart/>
            </StatsChartContainer>
            <Infos>
              <div className="type">
                <h4>Type: </h4>
                <p>Eletric</p>
              </div>
              <div className="height">
                <h4>Height:</h4>
                <p>4</p>
              </div>
              <div className="weight">
                <h4>Weight:</h4>
                <p>6</p>
              </div>
              <div className="abilities">
                <h4>Abilities:</h4>
                <ul>
                  <li>Static</li>
                  <li>Lightning-rod</li>
                </ul>
              </div>
            </Infos>
          </RightContainer>
          <Link to={`/`}>Voltar</Link>
        </PokemonContainer>
      </MainContainer>
      </>
    );
  }
  
  export default PokemonDetails;

  // {loading ? (
  //         <h2>Loading...</h2>
  //     ) : error ? (
  //         <h2>{error}</h2>
  //     ) : (
  //       <div>
  //         <img src={pokemon.image} alt={pokemon.name}/>
  //         <p>{pokemon.name}</p>    
  //       </div>
  //     )} 