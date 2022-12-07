import styled from "styled-components";

export const FoodItemArea = styled.div`
    .food-product {
        width: 100%;
        margin-top: 40px;
        display: flex;

        @media(max-width: 425px) {
            display: block;
            padding: 0 15px;
        }

        .food-product--images {
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            gap: 10px;

            @media(max-width: 425px) {
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(1, 1fr);
                margin-bottom: 10px;
            }
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

            @media(max-width: 425px) {
                margin-left: 0;
            }

            img {
                width: 350px;
                height: 350px;
            }
        }

        .food-product--info {
            margin-left: 40px;

            @media(max-width: 425px) {
                margin-left: 0;
            }

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
    
    .food-infos {
        width: 100%;
        margin-top: 10px;

        @media(max-width: 425px) {
            padding: 0 15px;
            margin-top: 30px;
        }

        button {
            background: transparent;
            border: 0;
            font-size: 14px;
            font-family: 'RocknRoll One',sans-serif;
            margin-right: 20px;
            cursor: pointer;

            &.active {
                color: #f64c03;
            }
        }

        .food-desc {
            color: #666;
            font-size: 14px;
            border-top: 1px solid #CCC;
            padding-top: 15px;
            margin-top: 10px;
        }
    }

    .food-moreOptions {
        width: 100%;

        @media(max-width: 425px) {
            padding: 0 15px;
        }

        h3 {
            font-size: 20px;
            margin: 50px 0 40px;
        }
    }
`