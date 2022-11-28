import { useEffect, useState } from "react";

import { HomeArea, MenuFoods } from "./styled";
import { Container, FoodItemArea } from '../../components/mainComponents';
import FoodItem from '../../components/foodItem';

import Products from '../../fake-data/products';

import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

const Home = () => {
    const [list, setList] = useState([]);
    const [category, setCategory] = useState('All');

    const filterCategory = () => {
        if (category === 'All') {
            setList(Products);
        } else {
            let newList = Products.filter(item => item = item.category === category);
            setList(newList);
        }
    }

    useEffect(()=> {
        filterCategory();
    }, [category])

    return (
        <HomeArea>
            <Container>
                <h1>Popular Foods</h1>
                <MenuFoods>
                    <div className="buttons-area">
                        <button 
                            className={category == 'All' ? 'button-category-active' : 'button-category'} onClick={() => setCategory('All')}>
                                All
                        </button>
                        <button 
                            className={category == 'Burger' ? 'button-category-active' : 'button-category'} 
                            onClick={() => setCategory('Burger')}>
                                <LunchDiningIcon />
                                <span>Burger</span>
                        </button>
                        <button 
                            className={category == 'Pizza' ? 'button-category-active' : 'button-category'} 
                            onClick={() => setCategory('Pizza')}>
                                <LocalPizzaIcon />
                                <span>Pizza</span>
                        </button>
                        <button 
                            className={category == 'Bread' ? 'button-category-active' : 'button-category'} 
                            onClick={() => setCategory('Bread')}>
                                <BakeryDiningIcon />
                                <span>Bread</span>
                        </button>
                    </div>
                </MenuFoods>
                <FoodItemArea>
                    {list.map((i, k) => (
                        <FoodItem item={i} key={k} index={k}/>
                    ))}
                </FoodItemArea>
            </Container>
        </HomeArea>
    )
}

export default Home;