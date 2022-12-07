import styled from "styled-components";

export const CartPageArea = styled.div`
    width: 100%;
    min-height: 332px;

    @media(max-width: 425px) {
        padding: 0 15px;
    }

    .cartPageArea-warning {
        text-align: center;
        font-weight: 700;
        margin-top: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 40px;

        tr, td {
            border: 1px solid #000;
            font-size: 14px;
            padding: 5px;

            img {
                width: 50px;
                heigth: 50px;
            }
        }

        thead {
            font-weight: 700;
        }

        tbody {
            text-align: center;

            .icon-delete {
                cursor: pointer;
            }
        }
    }

    .subtotal {
        font-weight: 700;
        margin-top: 20px;

        span {
            font-weight: 400;
            font-size: 22px;
            color: #F00;
        }

        @media(max-width: 425px) {
            font-size: 25px;

            span {
                font-size: 30px;
            }
        }
    }

    .taxes-warning {
        @media(max-width: 425px) {
            font-size: 18px;
        }
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(2, 180px);
        gap: 20px;
        margin-top: 20px;

        button {
            height: 30px;
            padding: 5px 10px;
            background-color: #f64c03;
            border: 0;
            cursor: pointer;
            border-radius: 5px;
            color: #FFF;

            &:hover {
                background-color: #c94005;
            }

            @media(max-width: 425px) {
                font-size: 16px;
            }
        }
    }
`
