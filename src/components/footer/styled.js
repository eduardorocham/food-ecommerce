import styled from "styled-components";

export const FooterArea = styled.div`
    background-color: #feccda;
    margin-top: 50px;
`

export const FooterAreaContent = styled.div`
    width: 100%;

    .footer-datas {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        padding: 30px 0;

        .footer-data img {
            width: 60px;
            height: 60px;
        }

        .footer-data p {
            font-size: 13px;
            margin-top: 15px;
        }

        .footer-data--title {
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 10px;
        }

        span {
            display: block;
            font-size: 13px;

            &.bold {
                font-weight: 700;
            }

            &.margin {
                margin-bottom: 10px;
            }
        }

        label {
            display: flex;

            input {
                width: 100%;
                height: 30px;
                background-color: transparent;
                outline: 0;
                border: 1px solid #000;
                border-radius: 5px 0 0 5px;
                padding: 0 5px;
    
                ::placeholder {
                    font-size: 12px;
                }
            }

            button {
                background-color: #f64c03;
                border: 1px solid #000;
                border-radius: 0 5px 5px 0;
                padding: 0 5px;
                font-size: 12px;
                color: #FFF;
                cursor: pointer;
            }
        }
    }
`