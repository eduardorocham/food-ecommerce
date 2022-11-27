import styled from "styled-components";

export const Container = styled.div`
    max-width: 990px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 414px) {
        width: auto;
    }
`

export const FoodItemArea = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media(max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
    }
`