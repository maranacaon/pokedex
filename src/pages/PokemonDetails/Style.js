import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
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
`;

export const PokemonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    width: 75%;
    margin-top: 1.5rem;
    gap: 10rem;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    padding: 2rem;
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
        cursor: pointer;

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

    div {   
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        padding: 0.5rem;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        width: 150px;
        margin-bottom: 0.5rem;
    }

    .type {
        background-color: #A3ED72;
        margin-left: 5rem;
    }   

    .height {
        background-color: #F8C04D;
    }

    .weight {
        background-color: #C766D9;
    }

    .abilities {
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: #85EFF0;
        padding-left: 2rem;
        margin-left: 5rem;
    }
`;

export const StatsChartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;