import { useState, useContext } from "react";

import { HeaderArea, HeaderButtons, HeaderMenu, NavLink } from "./styled";
import { Container } from "../mainComponents";

import Logo from '../../assets/images/res-logo.png';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

import { Context } from '../../contexts/Context.js';
import { PropaneSharp } from "@mui/icons-material";

const Header = ({show, setShow}) => {
    const { state, dispatch } = useContext(Context);

    const [showMenu, setShowMenu] = useState(false);

    const changeShowMenu = () => {
        setShowMenu(!showMenu);
    }

    const changeShow = () => {
        setShow(!show);
    }

    return (
        <Container>
            <HeaderArea>
                <div className="logo">
                    <img src={Logo} alt="logo"></img>
                </div>
                <div>
                <HeaderMenu showMenu={showMenu}>
                    <div className="closeIcon">
                        <CancelIcon style={{width: 30, height: 30}} onClick={changeShowMenu}/>
                    </div>
                    <ul>
                        <NavLink onClick={changeShowMenu} to='/'>Home</NavLink>
                        <NavLink onClick={changeShowMenu} to='/foods'>Foods</NavLink>
                        <NavLink onClick={changeShowMenu} to='/cart'>Cart</NavLink>
                    </ul>
                </HeaderMenu>
                </div>
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
                    <div className="header-btn menu-icon">
                        <MenuIcon onClick={changeShowMenu}/>
                    </div>
                </HeaderButtons>
            </HeaderArea>
        </Container>
    )
}

export default Header;