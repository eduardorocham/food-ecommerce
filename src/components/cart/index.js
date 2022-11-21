import { useContext, useState } from 'react';
import { Context } from '../../contexts/Context';
import CartItem from '../cartItem';
import { CartArea } from "./styled";

const Cart = ({show, setShow}) => {
    const { state, dispatch } = useContext(Context);

    const changeShow = () => {
        setShow(!show);
        console.log(show);
    }

    return (
        <CartArea show={show}>
            <div className='close-cart' onClick={changeShow}>x</div>
            <div className='cart-items'>
                {state.map((item, index) => (
                <CartItem item={item} />
                ))}
            </div>
        </CartArea>
    )
}

export default Cart;