import styled from "styled-components";

export const CartArea = styled.div`
    display: ${(props) => props.show ? 'block' : 'none'};
    background-color: #FFF;
    width: 23%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px 20px 0;

    .close-cart {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #010636;
        color: #FFF;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;
    }
`