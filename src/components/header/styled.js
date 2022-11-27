import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderArea = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    img {
        width: 50px;
        height: 50px;
    }
`

export const HeaderMenu = styled.nav`
    .closeIcon {
        display: none;
        margin-bottom: 15px;
        padding: 20px 20px 0;

        @media(max-width: 425px) {
            display: block;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    @media(max-width: 425px) {
            position: fixed;
            top: 0;
            right: 0;
            width: 75%;
            height: 100vh;
            background-color: #FFF;
            z-index: 999;
            display: ${props => props.showMenu ? 'block' : 'none'};
            flex-direction: column;
            justify-content: center;
            align-items: center;
        

        ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 25px;
        }
    }
`

export const NavLink = styled(Link)`
    color: #000;
    font-weight: 700;

    &:hover {
        color: #f64c03;
    }

    &.active {
        color: #f64c03;
    }
`

export const HeaderButtons = styled.div`
    display: flex;

    .header-btn {
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center; 
        cursor: pointer;
        position: relative;

        &.menu-icon {
            display: none;

            @media(max-width: 425px) {
                display: flex;
            }
        }
    }

    .cart-items {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: #f64c03;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        color: #FFF;
        position: absolute;
        top: 0;
        right: 0;
    }
`