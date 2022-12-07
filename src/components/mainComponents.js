import styled from "styled-components";

import foodBannerImage from '../assets/images/foods-banner.jpg';

export const Container = styled.div`
    max-width: 990px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 414px) {
        width: auto;
    }
`

export const FoodItemsArea = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media(max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const FoodBanner = styled.div`
    background: url(${foodBannerImage}) no-repeat;
    background-position: center;
    background-size: cover;
    height: ${(props) => props.small ? '90px' : '180px'};
    opacity: 0.5;
`