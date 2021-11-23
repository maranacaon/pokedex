import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        text-align: center;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    h3 {
        color: #322FFA;
    }

    a {
        width: 100px;
        text-decoration: none;
        text-align: center;
        color: #C766D9;
        border: 1px solid #C766D9;
        padding: 10px;
        border-radius: 8px;
        font-size: 18px;

        :hover {
            background-color: #C766D9;
            color: white;
        }
    }
`;

export const PokemonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    width: 75%;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    padding: 2rem;
    margin-top: 3rem;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 3rem;

    img {
        height: 300px;
        width: 300px;
        margin: 0;
        animation: shake 1s infinite;
        
        @keyframes shake{
        0%{transform: rotate(0deg);}
        25%{transform: rotate(-2deg);}
        50%{transform: rotate(2deg);}
        75%{transform: rotate(-2deg);}
        100%{transform: rotate(0deg);}
        }
    }

    p {
        margin-bottom: 1rem;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
`;

export const Infos = styled.div`
    display: flex;
    gap: 0.5rem;

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border-radius: 8px;
        text-align: center;
        width: fit-content;
        padding: 0.5rem;
        width: fit-content;
        height: fit-content;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    }

    .type {
        background-color: #A3ED72;
        margin-left: 5rem;
        gap: 0.5rem;
    }   


    .height {
        background-color: #F8C04D;
        gap: 0.5rem;
    }

    .weight {
        background-color: #C766D9;
        gap: 0.3rem;
    }

    .abilities {
        flex-direction: column;
        background-color: #85EFF0;
        color: black;
        gap: 0.2rem;
        text-align: center;

        h4 {
            padding-left: 0.5rem;
        }

        ul {
            padding-left: 0.5rem;
            margin-left: 0.5rem;
        }
    }
`;

export const StatsChartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;