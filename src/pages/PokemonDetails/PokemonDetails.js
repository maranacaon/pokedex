// import { useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectedPokemon } from "../../redux/actions/pokemonActions";
// import { useParams } from "react-router-dom";
import { MainContainer, PokemonContainer, LeftContainer, RightContainer,
StatsChartContainer, Infos } from './Style';
import StatsChart from '../../components/StatsChart/StatsChart';
import {Link} from 'react-router-dom';

function PokemonDetails() {
  // const { id } = useParams();
  // let pokemon = useSelector((state) => state.getSelectedPokemon);
  // const {sprites, stats, types, name, weight, height, abilities } = pokemon;
  // const dispatch = useDispatch();
  
  // useEffect(() => {
  //   const fetchPokemonDetail = async (id) => {
  //   const response = await axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(selectedPokemon(response.data));
  // };
  //   if (id && id !== "") fetchPokemonDetail(id);
  // }, [id, dispatch]);

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