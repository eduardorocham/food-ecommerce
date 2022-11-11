import styled from "styled-components";

export const FoodArea = styled.div`
    text-align: center;
    border: 1px solid #C8C8C8;
    height: 230px;
    padding: 20px;

    a {
        display:flex;
        flex-direction: column;
        align-items:center;
        text-decoration: none;
    }

    .food-item--img {
        width: 100px;
        height: 100px;
    }

    .food-item--img img {
        width:100%;
        height:auto;
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

        button {
            padding: 5px 10px;
            background-color: #f64c03;
            border: 0;
            cursor: pointer;
            border-radius: 5px;
            color: #FFF;

            &:hover {
                background-color: #c94005;
            }
        }
    }
`