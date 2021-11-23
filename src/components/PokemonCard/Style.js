import styled from 'styled-components';

export const PokemonContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 230px;
    border-radius: 5px;
    height: 300px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    padding: 3rem;
    background-color: #FAEFAF;

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
        width: 100px;
        height: 100px;
    }

    a {
        width: 150px;
        text-decoration: none;
        text-align: center;
        color: #C766D9;
        border: 1px solid #C766D9;
        padding: 0.5rem;
        border-radius: 8px;
        font-size: 14px;

        :hover {
            background-color: #C766D9;
            color: white;
        }
    }
`

export const Name = styled.h1 `
    text-transform: capitalize;
    font-size: 1.4rem;
`

export const Type = styled.p `
    text-transform: capitalize;
`