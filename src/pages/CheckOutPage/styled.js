import styled from "styled-components";

export const CheckOutArea = styled.div`
    .checkOutArea-content {
        width: 100%;
        display: flex;
        margin-top: 40px;

        @media(max-width: 425px) {
            flex-direction: column;
            padding: 0 15px;
        }

        .checkOutArea-content--form {
            flex: 3;

            h3 {
                font-size: 15px;
                margin-bottom: 10px;
            }

            form {
                display: grid;
                grid-template-rows: repeat(6, 1fr);
                gap: 10px;
            }

            input {
                display: block;
                width: 100%;
                background-color: transparent;
                padding: 10px 20px;
                border: 0;
                border-bottom: 1px solid #999;
                outline: 0;
            }

            button {
                padding: 5px 10px;
                background-color: #f64c03;
                border: 0;
                cursor: pointer;
                border-radius: 5px;
                color: #FFF;
                margin-top: 20px;

                &:hover {
                    background-color: #c94005;
                }
            }
        }

        .checkOutArea-content--data {
            flex: 1;
            height: fit-content;
            background-color: #feccda;
            padding: 20px;
            margin-left: 15px;

            div {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                font-weight: 700;
            }

            .total {
                font-size: 18px;
                margin-top: 20px;
            }

            @media(max-width: 425px) {  
                margin-left: 0;
                margin-top: 20px;
            }
        }
    }
`;