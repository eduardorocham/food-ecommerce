import { useContext, useState, useEffect } from 'react';
import { Context } from '../../contexts/Context';

import { CheckOutArea } from "./styled";
import { FoodBanner, Container } from '../../components/mainComponents';

const CheckOutPage = () => {
    const [subtotal, setSubtotal] = useState(0);
    const { state, dispatch } = useContext(Context);

    const getValorTotal = () => {
        let total = state.reduce((total, valor) => total + valor.price, 0);
        setSubtotal(total);
    };

    const total = subtotal - subtotal * 0.10;

    useEffect(() => {
        getValorTotal();
    }, [state]);

    return (
        <CheckOutArea>
            <FoodBanner />
            <Container>
                <div className="checkOutArea-content">
                    <div className="checkOutArea-content--form">
                        <h3>Shipping Adress</h3>
                        <form>
                            <input 
                                type="text"
                                placeholder="Enter your name"
                            />
                            <input 
                                type="text"
                                placeholder="Enter your email"
                            />
                            <input 
                                type="text"
                                placeholder="Phone number"
                            />
                            <input 
                                type="text"
                                placeholder="Country"
                            />
                            <input 
                                type="text"
                                placeholder="City"
                            />
                            <input 
                                type="text"
                                placeholder="Postal code"
                            />
                        </form>
                        <button>Payment</button>
                    </div>
                    <div className="checkOutArea-content--data">
                        <div>
                            <span>Subtotal:</span>
                            <span>${subtotal}</span>
                        </div>
                        <div>
                            <span>Shipping:</span>
                            <span>10%</span>
                        </div>
                        <div className="total">
                            <span>Total:</span>
                            <span>${parseInt(total)}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </CheckOutArea>
    )
}

export default CheckOutPage;