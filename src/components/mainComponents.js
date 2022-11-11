import styled from "styled-components";

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