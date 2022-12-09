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

    .subtotal {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: #f64c03;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 15px 30px;
        color: #FFF;
        font-weight: 700;

        span {
            font-size: 18px;
        }

        button {
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
            font-size: 10px;
            font-weight: 700;
            cursor: pointer;
            color: #000;

            &:hover {
                background-color: #D7D7D7;
            }
        }
    }
`