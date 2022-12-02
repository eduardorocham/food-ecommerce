import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/addToCart';
import { FoodBanner, Container } from '../../components/mainComponents';
import { FoodItemArea } from './styled';

import Products from '../../fake-data/products';

const FoodsItemPage = () => {
    const [food, setFood] = useState({});
    const [mainImg, setMainImg] = useState('');

    const params = useParams();

    const getFood = (id) => {
        const product = Products.filter((i) => i.id === id);
        console.log(product);
        setFood(product[0]);
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

    useEffect(()=> {
        if(params.id) {
            getFood(params.id);
            console.log(food);
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
                        <Button item={food}/>
                    </div>
                </div>
            </Container>
        </FoodItemArea>
    )
}

export default FoodsItemPage;