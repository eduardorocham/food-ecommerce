import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import { CartItemArea } from './styled';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItem = ({item, index}) => {
    const { state, dispatch } = useContext(Context);

    const deleteItem = () => {
        dispatch({
            type: 'DEL',
            payload: {
                product: item.product
            }
        });
    };

    const addSameItem = () => {
        dispatch({
            type: 'ADD_SAME',
            payload: {
                index: index,
                price: item.product.price
            }
        });
    };

    const deleteSameItem = () => {
        dispatch({
            type: 'DEL_SAME',
            payload: {
                index: index,
                price: item.product.price
            }
        });
    };

    return (
        <CartItemArea>
            <div className='cartItem-img'>
                <img src={item.product.image01} alt={item.product.title} />
            </div>
            <div className='cartItem'>
                <div className='cartItem-data'>
                    <div className='cartItem-title'>{item.product.title}</div>
                    <div className='cartItem-data--price'>
                        <div className='cartItem-qt'>{`x${item.qt}`}</div>
                        <div className='cartItem-price'>{`R$ ${item.price}`}</div>
                    </div>
                    <div className='cartItem-quantity'>
                        <button onClick={deleteSameItem}>-</button>
                        <span>{item.qt}</span>
                        <button onClick={addSameItem}>+</button>
                    </div>
                </div>
                <div className='cartItem-delete' onClick={deleteItem}>
                    <DeleteForeverIcon style={{width: 20}}/>
                </div>
            </div>
        </CartItemArea>
    )
}

export default CartItem;