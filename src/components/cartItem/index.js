import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import { CartItemArea } from './styled';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItem = ({item, index}) => {
    const { state, dispatch } = useContext(Context);

    return (
        <CartItemArea>
            <div className='cartItem-img'>
                <img src={item.item.image01} alt={item.item.title} />
            </div>
            <div className='cartItem'>
                <div className='cartItem-data'>
                    <div className='cartItem-title'>{item.item.title}</div>
                    <div className='cartItem-data--price'>
                        <div className='cartItem-qt'>{`x${item.qt}`}</div>
                        <div className='cartItem-price'>{`R$ ${item.price}`}</div>
                    </div>
                    <div className='cartItem-quantity'>
                        <button onClick={() => dispatch({
                            type: 'DEL_SAME',
                            payload: {
                                index: index
                            }
                        })}>-</button>
                        <span>{item.qt}</span>
                        <button onClick={() => dispatch({
                            type: 'ADD_SAME',
                            payload: {
                                index: index,
                                item: item.item.price
                            }
                        })}>+</button>
                    </div>
                </div>
                <div className='cartItem-delete' onClick={() => dispatch({
                    type: 'DEL',
                    payload: item.item
                })}>
                    <DeleteForeverIcon style={{width: 20}}/>
                </div>
            </div>
        </CartItemArea>
    )
}

export default CartItem;