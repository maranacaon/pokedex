import styled from 'styled-components';

export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 230px;
    padding: 20px;
    border-radius: 5px;
    height: 250px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);

    :hover {
        animation: shake 1s;
        cursor: pointer;
    }

    @keyframes shake{
    0%{transform: rotate(0deg);}
    25%{transform: rotate(-2deg);}
    50%{transform: rotate(2deg);}
    75%{transform: rotate(-2deg);}
    100%{transform: rotate(0deg);}
}

    img {
        width: 120px;
        height: 120px;
    }
`

export const Name = styled.h1 `
    text-transform: capitalize;
    margin-top: 10px;
    font-size: 1.4rem;
`

export const Type = styled.p `
    text-transform: capitalize;
`