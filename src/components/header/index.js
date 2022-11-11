import { useState } from "react";

import { HeaderArea, HeaderButtons, HeaderMenu, NavLink } from "./styled";
import { Container } from "../mainComponents";

import Logo from '../../assets/images/res-logo.png';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
    const [cartItems, setCartItems] = useState(0);

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
                    <div className="header-btn">
                        <ShoppingCartIcon />
                        {cartItems > 0 &&
                            <div className="cart-items">{cartItems}</div>
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