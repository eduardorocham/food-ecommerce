import { useState, useContext } from "react";

import { HeaderArea, HeaderButtons, HeaderMenu, NavLink } from "./styled";
import { Container } from "../mainComponents";

import Logo from '../../assets/images/res-logo.png';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import { Context } from '../../contexts/Context.js';
import { PropaneSharp } from "@mui/icons-material";

const Header = ({show, setShow}) => {
    const { state, dispatch } = useContext(Context);

    const changeShow = () => {
        setShow(!show);
        console.log(show);
    }

    return (
        <Container>
            <HeaderArea>
                <div className="logo">
                    <img src={Logo} alt="logo"></img>
                </div>
                <HeaderMenu>
                    <ul>
                        <NavLink>Home</NavLink>
                        <NavLink>Foods</NavLink>
                        <NavLink>Cart</NavLink>
                    </ul>
                </HeaderMenu>
                <HeaderButtons>
                    <div className="header-btn" onClick={changeShow}>
                        <ShoppingCartIcon/>
                        {state.length > 0 &&
                            <div className="cart-items">{state.length}</div>
                        }
                    </div>
                    <div className="header-btn">
                        <PersonIcon />
                    </div>
                </HeaderButtons>
            </HeaderArea>
        </Container>
    )
}

export default Header;