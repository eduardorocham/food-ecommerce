import { useEffect, useState } from "react";

import { FoodItemArea, HomeArea, MenuFoods } from "./styled";
import { Container } from '../../components/mainComponents';
import FoodItem from '../../components/foodItem';

import Products from '../../fake-data/products';

import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';

const Home = () => {
    const [list, setList] = useState(Products);

    return (
        <HomeArea>
            <Container>
                <h1>Popular Foods</h1>
                <MenuFoods>
                    <div className="buttons-area">
                        <button>All</button>
                        <button>
                            <LunchDiningIcon />
                            <span>Burger</span>
                        </button>
                        <button>
                            <LocalPizzaIcon />
                            <span>Pizza</span>
                        </button>
                        <button>
                            <BakeryDiningIcon />
                            <span>Bread</span>
                        </button>
                    </div>
                </MenuFoods>
                <FoodItemArea>
                    {list.map((i, k) => (
                        <FoodItem item={i} key={k} />
                    ))}
                </FoodItemArea>
            </Container>
        </HomeArea>
    )
}

export default Home;