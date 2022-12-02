import { Link } from 'react-router-dom';
import { LocalPizza } from '@mui/icons-material';
import { FoodArea } from "./styled";
import  Button  from '../addToCart';

const FoodItem = ({item, index}) => {
    return (
        <FoodArea>
            <Link to={`/foods/${item.id}`} className="food-item--img">
                <img src={item.image01} />
            </Link>
            <div className="food-item--name">{item.title}</div>
            <div className="food-item--column">
                <div className="food-item--price">R$ {item.price}</div>
                <Button item={item} index={index}/>
            </div>
        </FoodArea>
    )
}

export default FoodItem;