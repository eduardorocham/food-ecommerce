import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/addToCart';
import FoodItem from '../../components/foodItem';
import { FoodBanner, Container, FoodItemsArea } from '../../components/mainComponents';
import { FoodItemArea } from './styled';

import Products from '../../fake-data/products';

const FoodsItemPage = () => {
    const [food, setFood] = useState({});
    const [foodSameCategory, setFoodSameCategory] = useState([]);
    const [mainImg, setMainImg] = useState('');
    const [showDescription, setShowDescription] = useState(true);
    const [showReview, setShowReview] = useState(false);

    const params = useParams();

    const getFood = (id) => {
        const product = Products.filter((i) => i.id === id);
        console.log(product);
        const sameCategory = Products.filter((i) => i.category === product[0].category);
        console.log(sameCategory);
        setFood(product[0]);
        setFoodSameCategory(sameCategory);
        setMainImg(product[0].image01);
    };

    const changeMainImage01 = () => {
        setMainImg(food.image01);
    }

    const changeMainImage02 = () => {
        setMainImg(food.image02);
    }

    const changeMainImage03 = () => {
        setMainImg(food.image03);
    }

    const changeShowButton = () => {
        setShowDescription(!showDescription);
        setShowReview(!showReview);
    }

    useEffect(()=> {
        if(params.id) {
            getFood(params.id);
        }
    }, []);

    return (
        <FoodItemArea>
            <FoodBanner />
            <Container>
                <div className='food-product'>
                    <div className='food-product--images'>
                        <img src={food.image01} alt={food.title} onMouseOver={changeMainImage01}/>
                        <img src={food.image02} alt={food.title} onMouseOver={changeMainImage02}/>
                        <img src={food.image03} alt={food.title} onMouseOver={changeMainImage03}/>
                    </div>
                    <div className='food-product--mainImage'>
                        <img src={mainImg} alt={food.title}/>
                    </div>
                    <div className='food-product--info'>
                        <div className='food-product-title'>{food.title}</div>
                        <div className='food-product-price'>
                            Price: <span>${food.price}</span>
                        </div>
                        <div className='food-product-category'>
                            Category: <span>{food.category}</span>
                        </div>
                        <Button item={food} index={'0'} />
                    </div>
                </div>
                <div className='food-infos'>
                    <button className={showDescription ? 'active' : ''} onClick={changeShowButton}>
                        Description
                    </button>
                    <button className={showReview ? 'active' : ''} onClick={changeShowButton}>
                        Review
                    </button>
                    {showDescription &&
                        <div className='food-desc'>
                            {food.desc}
                        </div>
                    }
                </div>
                <div className='food-moreOptions'>
                    <h3>You might also like</h3>
                    {foodSameCategory.length > 0 &&
                        <FoodItemsArea>
                            {foodSameCategory.map((i, k) => (
                                <FoodItem item={i} index={k} key={k}/>
                            ))}
                        </FoodItemsArea>
                    }
                </div>
            </Container>
        </FoodItemArea>
    )
}

export default FoodsItemPage;