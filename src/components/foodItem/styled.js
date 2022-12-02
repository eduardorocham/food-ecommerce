import styled from "styled-components";

export const FoodArea = styled.div`
    text-align: center;
    border: 1px solid #C8C8C8;
    height: 230px;
    padding: 20px;

    .food-item--img {
        display: flex;
        justify-content: center;
    }

    .food-item--img img {
        width: 100px;
        height: 100px;
        transition: all ease 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }

    .food-item--name {
        font-size: 16px;
        font-weight: bold;
        color:#000;
        margin-top:5px;
        white-space: nowrap;
    }

    .food-item--column {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;

        .food-item--price {
            color: #f64c03;
            font-weight: 700;
        }
    }
`