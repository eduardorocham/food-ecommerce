import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FoodBanner, Container } from '../../components/mainComponents';

import Products from '../../fake-data/products';

const FoodsItemPage = () => {
    const [food, setFood] = useState({});

    const params = useParams();

    const getFood = (id) => {
        const product = Products.filter((i) => i.id === id);
        console.log(product);
        setFood(product[0]);
        
    };

    useEffect(()=> {
        if(params.id) {
            getFood(params.id);
            console.log(food);
        }
    }, []);

    return (
        <div>
            <FoodBanner />
            <Container>
                {food.length > 0 &&
                    <div className='food-product'>
                    <div className='food-product--images'>
                        {/* <img src={food[0].image01} alt={food.title}/>
                        <img src={food[0].image02} alt={food.title}/>
                        <img src={food[0].image03} alt={food.title}/> */}
                    </div>
                </div>
                }
                
            </Container>
        </div>
    )
}

export default FoodsItemPage;