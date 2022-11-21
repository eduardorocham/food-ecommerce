import { CartItemArea } from './styled';

const CartItem = ({item}) => {
    return (
        <CartItemArea>
            <div className='cartItem-img'>
                <img src={item.image01} alt="" />
            </div>
            <div className='cartItem-data'>
                <div className='cartItem-title'>{item.title}</div>
                <div className='cartItem-data--price'>
                    <div className='cartItem-price'>{`R$ ${item.price}`}</div>
                </div>
            </div>
        </CartItemArea>
    )
}

export default CartItem;