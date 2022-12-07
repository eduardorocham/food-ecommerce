import { CartPageArea } from './styled';
import { FoodBanner, Container } from "../../components/mainComponents";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useContext, useState } from 'react';
import { Context } from '../../contexts/Context';
import { useEffect } from 'react';

const CartPage = () => {
    const [subtotal, setSubtotal] = useState(0);
    const { state, dispatch } = useContext(Context);

    const getValorTotal = () => {
        let total = state.reduce((total, valor) => total + valor.price, 0);
        setSubtotal(total);
    };

    useEffect(() => {
        getValorTotal();
    }, [state]);

    return (
        <>
            <FoodBanner small={true}/>
            <Container>
                <CartPageArea>
                    {state.length === 0 &&
                        <div className='cartPageArea-warning'>
                            No item added to the cart
                        </div>
                    }
                    {state.length > 0 &&
                        <div className='cartPageArea-content'>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Image</td>
                                        <td>Product</td>
                                        <td>Price</td>
                                        <td>Quantity</td>
                                        <td>Delete</td>  
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.map((i, k) => (
                                        <tr key={k}>
                                            <td>
                                                <img src={state[k].product.image01} alt={state[k].title} />
                                            </td>
                                            <td>{state[k].product.title}</td>
                                            <td>{state[k].product.price}</td>
                                            <td>{state[k].qt}</td>
                                            <td className='icon-delete'>
                                                <DeleteForeverIcon style={{width: 20}} />
                                            </td> 
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='subtotal'>Subtotal: $<span>{subtotal}</span></div>
                            <div className='taxes-warning'>
                                Taxes and shipping will calculate at checkout
                            </div>
                            <div className='buttons'>
                                <button>Continue Shopping</button>
                                <button>Proceed to checkout</button>
                            </div>
                        </div>
                    }
                </CartPageArea>
            </Container>
        </>
    )
};

export default CartPage;