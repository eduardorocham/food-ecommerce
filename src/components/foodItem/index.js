import { useContext } from 'react';
import { LocalPizza } from '@mui/icons-material';
import { Context } from '../../contexts/Context';
import { FoodArea } from "./styled";

const FoodItem = ({item}) => {
    const { state, dispatch } = useContext(Context);

    const addItem = () => {
        dispatch({
            type: 'ADD',
            payload: {
                product: item
            }
        });
    }

    return (
        <FoodArea>
            <a href="">
                <div className="food-item--img"><img src={item.image01} /></div>
            </a>
            <div className="food-item--name">{item.title}</div>
            <div className="food-item--column">
                <div className="food-item--price">R$ {item.price}</div>
                <button onClick={addItem}>Add to cart</button>
            </div>
        </FoodArea>
    )
}

export default FoodItem;