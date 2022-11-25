import styled from "styled-components";

export const CartItemArea = styled.div`
    display: flex;
    padding: 5px 0;

    .cartItem-img img {
        width: 30px;
        height: 30px;
    }

    .cartItem {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .cartItem-data {
            margin-left: 10px;
    
            .cartItem-title {
                font-size: 14px;
                font-weight: 700;
            }

            .cartItem-data--price {
                display: flex;
                justify-content: space-between;

                .cartItem-qt {
                    font-size: 12px;
                    font-weight: bold;
                }

                .cartItem-price {
                    color: #F00;
                    font-size: 12px;
                    font-weight: bold;
                }
            }

            .cartItem-quantity {
                display: flex; 
                justify-content: space-between;
                background-color:  #feccda;
                font-size: 14px;
                margin-top: 10px;
    
                button {
                    border: 0;
                    width: 20px;
                    background-color: #feccda;
                    cursor: pointer;
                }
            }
        }

        .cartItem-delete {
            cursor: pointer;
        }
    }
`