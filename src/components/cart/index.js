import { useContext, useState, useEffect } from 'react';
import { Context } from '../../contexts/Context';
import CartItem from '../cartItem';
import { CartArea } from "./styled";

import CancelIcon from '@mui/icons-material/Cancel';

const Cart = ({show, setShow}) => {
    const [subtotal, setSubtotal] = useState(0);
    const { state, dispatch } = useContext(Context);

    const changeShow = () => {
        setShow(!show);
    }

    const getValorTotal = () => {
        let total = state.reduce((total, valor) => total + valor.price, 0);
        setSubtotal(total);
    };

    useEffect(() => {
        getValorTotal();
    }, [state]);

    return (
        <CartArea show={show}>
            <div className='close-cart' onClick={changeShow}>
                <CancelIcon style={{width:30, height:30}}/>
            </div>
            {state.length === 0 &&
                <div className='cart-empty'>
                    No item added to the cart
                </div>
            }
            {state.length > 0 &&
                <>
                    <div className='cart-items'>
                        {state.map((item, index) => (
                            <CartItem key={index} index={index} item={item} />
                        ))}
                    </div>
                    <div className='subtotal'>
                        <div className='subtotal-value'>
                            Subtotal: <span>${subtotal}</span>
                        </div>
                        <button>Check out</button>
                    </div>
                </>
            }
        </CartArea>
    )
}

export default Cart;