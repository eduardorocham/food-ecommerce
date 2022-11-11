import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
`

export const NavLink = styled(Link)`
    color: #000;
    font-weight: 700;

    &:hover {
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