import styled from "styled-components";

export const FoodItemArea = styled.div`
    .food-product {
        width: 100%;
        max-height: 350px;
        margin-top: 40px;
        display: flex;

        .food-product--images {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            gap: 10px;
        }

        .food-product--images img {
            display: block;
            width: 100px;
            height: 100px;
            cursor: pointer;
        }

        .food-product--mainImage {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 40px;

            img {
                width: 350px;
                height: 350px;
            }
        }

        .food-product--info {
            margin-left: 40px;

            .food-product-title {
                font-size: 30px;
                font-family: 'RocknRoll One',sans-serif;
            }
    
            .food-product-price {
                display: flex;
                align-items: center;
                color: #F00;
                font-size: 18px;
                margin-top: 10px;
    
                span {
                    font-size: 25px;
                    margin-left: 5px;
                }
            }
    
            .food-product-category {
                font-size: 14px;
                font-weight: 700;
                margin: 10px 0 30px 0;
                
                span {
                    background-color: #feccda;
                    padding: 2px 5px;
                    border-radius: 3px;
                }
            }
        }
    }  
`