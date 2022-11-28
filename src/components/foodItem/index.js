import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { Context } from '../../contexts/Context';

import { LocalPizza } from '@mui/icons-material';

import { FoodArea } from "./styled";

const FoodItem = ({item, index}) => {
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
        <FoodArea>
            <Link to={`/foods/${item.id}`} className="food-item--img">
                <img src={item.image01} />
            </Link>
            <div className="food-item--name">{item.title}</div>
            <div className="food-item--column">
                <div className="food-item--price">R$ {item.price}</div>
                <button onClick={addItem}>Add to cart</button>
            </div>
        </FoodArea>
    )
}

export default FoodItem;