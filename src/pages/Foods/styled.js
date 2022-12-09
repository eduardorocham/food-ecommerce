import styled from "styled-components";

export const FoodsArea = styled.div`
    .foodsArea-content {
        width: 100%;
        
        @media(max-width: 425px) {
            padding: 0 15px; 
        }
    }
    
    .input-area {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 40px 0;

        @media(max-width: 425px) {
            display: block;
        }

        .input-looking {
            width: 50%;
            display: flex;
            align-items: center;

            @media(max-width: 425px) {
                width: 100%;
                margin-bottom: 15px;
            }

            input {
                width: 100%;
                outline: 0;
                padding: 5px;

                @media(max-width: 425px) {
                    padding: 10px 5px;

                    &::placeholder {
                        font-size: 16px;
                    }
                }
            }
        }

        select {
            width: 25%;

            @media(max-width: 425px) {
                width: 100%;
                padding: 10px 5px;
                font-size: 16px;
            }
        }
    }

    .warning-area {
        height: 30vh;
        text-align: center;
        font-weight: 700;
    }

    .foodsArea-list--pagination {
        margin-top: 20px;
        display: flex;
        justify-content: center;

        .button-pagination, .button-active {
            margin-left: 10px;
            padding: 5px 8px;
            border: 0;
            border-radius: 4px;
            color: #FFF;
            font-size: 12px;
            cursor: pointer;

            &:hover {
                background-color: #f64c03;
            }
        }

        .button-pagination {
            background-color: #0e073a;
        }

        .button-active {
            background-color: #f64c03;
        }
    }
`

