import { useState, useEffect } from "react";

import { FoodsArea, FoodOptions } from "./styled";
import { Container, FoodItemsArea, FoodBanner } from '../../components/mainComponents';
import FoodItem from "../../components/foodItem";

import SearchIcon from '@mui/icons-material/Search';

import Products from '../../fake-data/products';

const Foods = () => {
    const [list, setList] = useState(Products);
    const [name, setName] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
        getFromName();
    }


    const getFromName = () => {
        const newList = Products.filter(i => 
            i.title.toLowerCase().indexOf(name.toLocaleLowerCase()) > -1
        );
        if(name.length > 1) {
            setList(newList);
        } else {
            setList(Products);
        }
    }
    

    return (
        <FoodsArea>
            <FoodBanner />
            <Container>
                <div className="input-area">
                    <div className="input-looking">
                        <input placeholder="I´m looking for..." value={name} onChange={handleName}/>
                        <SearchIcon style={{marginLeft: -30}}/>
                    </div>
                    <select>
                        <option>Default</option>
                        <option>Alphabetically, A-Z</option>
                        <option>Alphabetically, Z-A</option>
                        <option>High price</option>
                        <option>Low price</option>
                    </select>
                </div>
                {list.length === 0 &&
                    <div className="warning-area">No products found</div>
                }
                {list.length > 0 &&
                    <FoodItemsArea>
                        {list.map((item, index) => (
                            <FoodItem item={item} key={index} index={index}/>
                        ))}
                    </FoodItemsArea>
                } 
            </Container>
        </FoodsArea>
    )
}

export default Foods;