import { Button as ButtonComponent } from './styled';

import { useContext } from 'react';
import { Context } from '../../contexts/Context';

const Button = ({item, index}) => {
    const { state, dispatch } = useContext(Context);

    const addItem = () => {
        dispatch({
            type: 'ADD',
            payload: {
                product: item,
                index: index
            }
        });
    }

    return (
        <ButtonComponent onClick={addItem}>
            Add to cart
        </ButtonComponent>
    )
}

export default Button;