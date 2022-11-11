import styled from "styled-components";

export const HomeArea = styled.div`
    border-top: 3px solid #C8C8C8;

    h1 {
        font-family: 'RocknRoll One', sans-serif;
        margin: 20px 0;
    }
`

export const MenuFoods = styled.div`
    width: 100%;
    background-color: #f64c03;
    padding: 15px 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    .buttons-area {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
    }

    button {
        background-color: transparent;
        border: 0;
        color: #FFF;
        font-size: 14px;
        padding: 10px;
        border-radius: 10px;
        display: flex; justify-content: center;
        align-items: center;
        cursor: pointer;

        span {
            margin-left: 5px;
        }

        &.active, &:hover {
            background-color: #FFF;
            color: #f64c03;
        }
    }
`

export const FoodItemArea = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`