import styled from "styled-components";

export const CartArea = styled.div`
    display: ${(props) => props.show ? 'block' : 'none'};
    background-color: #FFF;
    width: 23%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 20px 20px 0;

    @media(max-width: 425px) {
        width: 75%;
    }

    .close-cart {
       cursor: pointer;
    }

    .cart-empty {
        text-align: center;
        font-weight: 700;
        margin-top: 20px;
    }
`