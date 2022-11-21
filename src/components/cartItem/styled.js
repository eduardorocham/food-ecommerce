import styled from "styled-components";

export const CartItemArea = styled.div`
    display: flex;
    padding: 5px 0;

    .cartItem-img img {
        width: 25px;
        height: 25px;
    }

    .cartItem-data {
        margin-left: 10px;
    }

    .cartItem-title {
        font-size: 14px;
        font-weight: 700;
    }

    .cartItem-price {
        color: #F00;
        font-size: 12px;
        font-weight: bold;
    }
`