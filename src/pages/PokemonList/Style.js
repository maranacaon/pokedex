import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #819AF0;
    padding: 2rem;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
`

export const PokemonListContainer = styled.div`
    display: grid;
    align-content: center;
    grid-template-columns: repeat(5, 1fr);
    max-width: 1300px;
    margin: 2rem auto;
    row-gap: 20px;
    justify-items: center;
`