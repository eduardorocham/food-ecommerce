import { useState, useEffect } from "react";

import { FoodsArea, FoodOptions } from "./styled";
import { Container, FoodItemsArea, FoodBanner } from '../../components/mainComponents';
import FoodItem from "../../components/foodItem";

import SearchIcon from '@mui/icons-material/Search';

import Products from '../../fake-data/products';

const Foods = () => {
    const [list, setList] = useState(Products);
    const [name, setName] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(list.length / itemsPerPage);
    const startIndex = itemsPerPage * currentPage;
    const endIndex = startIndex + itemsPerPage;
    const currentList = list.slice(startIndex, endIndex);

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

    const changePage = (e) => {
        setCurrentPage(parseInt(e.target.value));
    }

    const  changePagePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changePageNext = () => {
        if (currentPage < pages - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <FoodsArea>
            <FoodBanner />
            <Container>
                <div className="foodsArea-content">
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
                        <div className="foodsArea-list">
                            <FoodItemsArea>
                                {currentList.map((item, index) => (
                                    <FoodItem item={item} key={index} index={index}/>
                                ))}
                            </FoodItemsArea>
                            <div className="foodsArea-list--pagination">
                                <button className="button-pagination" onClick={changePagePrev}>Prev</button>
                                {Array.from(Array(pages), (item, index) => {
                                    return <button className={index === currentPage ? 'button-active' : 'button-pagination'} value={index} onClick={changePage}>{index + 1}</button>
                                })}
                                <button className="button-pagination" onClick={changePageNext}>Next</button>
                            </div>
                        </div>
                    } 
                </div>
            </Container>
        </FoodsArea>
    )
}

export default Foods;