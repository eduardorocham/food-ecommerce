import { FoodArea } from "./styled";

const FoodItem = ({ item }) => {
    return (
        <FoodArea>
            <a href="">
                <div className="food-item--img"><img src={item.image01} /></div>
            </a>
            <div className="food-item--name">{item.title}</div>
            <div className="food-item--column">
                <div className="food-item--price">R$ {item.price}</div>
                <button>Add to cart</button>
            </div>
        </FoodArea>
    )
}

export default FoodItem;