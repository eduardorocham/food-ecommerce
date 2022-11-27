import styled from "styled-components";

import foodBannerImage from '../../assets/images/foods-banner.jpg';

export const FoodsArea = styled.div`
    .food-banner {
        background: url(${foodBannerImage}) no-repeat;
        background-position: center;
        background-size: cover;
        height: 200px;
        opacity: 0.5;
    }

    .input-area {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 40px 0;

        .input-looking {
            width: 50%;
            display: flex;
            align-items: center;

            input {
                width: 100%;
                outline: 0;
                padding: 5px;
            }
        }

        select {
            width: 25%;
        }
    }
`

